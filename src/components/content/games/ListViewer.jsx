import React, { useEffect, useState, useCallback } from "react";
import "./ListViewer.scss";
import { ConsoleGamesList } from "./ConsoleGamesList";

export default function ListViewer() {
  const consoleGamesListW = ConsoleGamesList.map((item) => {
    item.ref = React.createRef();
    return item;
  });

  const [selectedItem, setSelectedItem] = useState(0);
  const [delay, setDelay] = useState(500);

  const selectItem = useCallback(
    (index) => {
      setSelectedItem(index);

      const currentListElement = consoleGamesListW[index].ref.current;
      const parentNode = currentListElement.parentNode;
      const scrollInsideOffset = parentNode.offsetTop + parentNode.offsetHeight - currentListElement.offsetHeight;

      parentNode.scrollTop = currentListElement.offsetTop - scrollInsideOffset;
    },
    [consoleGamesListW]
  );

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      selectItem(selectedItem === ConsoleGamesList.length - 1 ? 0 : selectedItem + 1);
      if (delay !== 3000) setDelay(3000);
    }, delay);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [selectedItem, delay, selectItem]);

  return (
    <div className="list-viewer-main-container">
      <div className="list-viewer-list-buttons-container">
        {consoleGamesListW.map((item, index) => {
          return (
            <li
              key={index}
              ref={item.ref}
              className={`list-viewer-display-button${index === selectedItem ? "-selected" : ""}`}
              onClick={() => {
                selectItem(index);
                setDelay(10000);
              }}
            >
              {item.title}
            </li>
          );
        })}
      </div>
      <div className="list-viewer-display-continer">
        <img src={ConsoleGamesList[selectedItem].img} alt="logo" className="list-viewer-display-img" />
      </div>
    </div>
  );
}
