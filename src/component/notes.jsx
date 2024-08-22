import { createRef, useEffect, useRef } from "react";
import { Note } from "./note";

export const Notes = ({ notes, setNotes }) => {
  useEffect(() => {
    const savedNotes = JSON.parse(localStorage.getItem("notes")) || [];

    if (savedNotes.length === 0 && notes.length > 0) {
      const updatedNotes = notes.map((note) => {
        const position = determineNewPosition();
        return { ...note, position };
      });

      setNotes(updatedNotes);
      localStorage.setItem("notes", JSON.stringify(updatedNotes));
    } else if (savedNotes.length > 0) {
      setNotes(savedNotes);
    }
  }, []); // Empty dependency array, only runs once after mount

  const noteRefs = useRef([]);

  const determineNewPosition = () => {
    const maxX = window.innerWidth - 250;
    const maxY = window.innerHeight - 250;

    return {
      x: Math.floor(Math.random() * maxX),
      y: Math.floor(Math.random() * maxY),
    };
  };

  const handleDragStart = (note, e) => {
    const {id} = note
    const noteRef = noteRefs.current[id].current;

    const rect = noteRef.getBoundingClientRect();
    const offsetX = e.clientX - rect.left;
    const offsetY = e.clientY - rect.top;
    const startPos = note.position;

    const handleMouseMove = (e) => {
      const newX = e.clientX - offsetX;
      const newY = e.clientY - offsetY;

      noteRef.style.left = `${newX}px`;
      noteRef.style.top = `${newY}px`;
    };

    const handleMouseUp = () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);

      const finalRect = noteRef.getBoundingClientRect();
      const newPosition = { x: finalRect.left, y: finalRect.top };

      if (checkForOverlap(id)) {
        // Implement the overlap check here if needed

        noteRef.style.left = `${startPos.x}px`;
        noteRef.style.top = `${startPos.Y}px`

      } else {
        updatedNotesPosition(id, newPosition);
      }
    };

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);
  };

  const checkForOverlap = (id) => {
    const currentNoteRef = noteRefs.current[id].current;
    const currentRect = currentNoteRef.getBoundingClientRect();

    return notes.some((note) => {
      if (note.id == id) return false;

      const otherNoteRef = noteRefs.current[note.id].current;
      const otherRect = otherNoteRef.getBoundingClientRect();

      const overlap =
       ( currentRect.right < otherRect.left ||
        currentRect.left < otherRect.right ||
        currentRect.bottom < otherRect.top ||
        currentRect.top > otherRect.bottom);
        return overlap;
    });
  };

  const updatedNotesPosition = (id, newPosition) => {
    const updatedNotes = notes.map((note) =>
      note.id === id ? { ...note, position: newPosition } : note
    );
    setNotes(updatedNotes);
    localStorage.setItem("notes", JSON.stringify(updatedNotes));
  };

  return (
    <div>
      {notes.map((data) => {
        if (!noteRefs.current[data.id]) {
          noteRefs.current[data.id] = createRef();
        }
        return (
          <Note
            key={data.id}
            ref={noteRefs.current[data.id]}
            initialPos={data.position}
            content={data.text}
            onMouseDown={(e) => handleDragStart(data, e)}
          />
        );
      })}
    </div>
  );
};
