import { useEffect, useState } from 'react';
import style from './style.module.css';

interface Itrello {
  id: number;
  text: string;
  completed: boolean;
}

const Lesson = () => {
  const [trello, setTrello] = useState<Itrello[]>([
    { id: 1, text: 'start', completed: true },
    { id: 2, text: 'processing', completed: false },
    { id: 3, text: 'finish', completed: false }
  ]);

  const [draggingIndex, setDraggingIndex] = useState<number | null>(null);

  const handleDragStart = (e: React.DragEvent<HTMLDivElement>, index: number) => {
    setDraggingIndex(index);
    e.dataTransfer.effectAllowed = 'move';
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>, index: number) => {
    e.preventDefault();
    if (draggingIndex === null) return;

    const updatedTrello = trello.map((item, i) => ({
      ...item,
      completed: i === index ? true : false,
    }));

    setTrello(updatedTrello);
    setDraggingIndex(null);
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  };

  const handleDragEnd = () => {
    setDraggingIndex(null);
  };

  return (
    <div className={style.global}>
      {trello.map((val, index) => (
        <div
          key={val.id}
          draggable
          className={style.tasks}
          onDragStart={(e) => handleDragStart(e, index)}
          onDrop={(e) => handleDrop(e, index)}
          onDragOver={handleDragOver}
          onDragEnd={handleDragEnd}
        >
          {val.completed && (
            <div
              className={draggingIndex === index ? style.card_active : style.card}
            >
              {val.text}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Lesson;
