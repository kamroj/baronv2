import React, { useEffect, useState, useCallback } from "react";
import "./ListViewer.scss";

export default function ListViewer({ gameList, scrollDelayOffset = 3000, scrollAfterSelectDelayOffset = 10000 }) {
  const games = gameList
    .sort((f, s) => f.title.localeCompare(s.title))
    .map((item) => {
      item.ref = React.createRef();
      return item;
    });

  const [selectedItem, setSelectedItem] = useState(0);
  const [delay, setDelay] = useState(scrollDelayOffset);
  const [currentScrollTop, setCurrentScrollTop] = useState(null);

  const selectItem = useCallback(
    (index) => {
      setSelectedItem(index);

      const currentListElement = games[index].ref.current;

      if (!currentListElement) return;

      const parentNode = currentListElement.parentNode;
      const scrollInsideOffset = parentNode.offsetTop + parentNode.offsetHeight - currentListElement.offsetHeight;

      let scrollTop = currentListElement.offsetTop - scrollInsideOffset;

      if (currentScrollTop !== null && currentScrollTop !== scrollTop) {
        setDelay(scrollAfterSelectDelayOffset);
        return;
      }

      console.log(`before parentNode.scrollTop = ${parentNode.scrollTop}`);
      parentNode.scrollTop = scrollTop;
      setCurrentScrollTop(scrollTop);

      console.log(`parentNode.scrollTop = ${parentNode.scrollTop}`);
      console.log(`scroll top = ${scrollTop}`);
    },
    [games, currentScrollTop, scrollAfterSelectDelayOffset]
  );

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      selectItem(selectedItem === gameList.length - 1 ? 0 : selectedItem + 1);
      if (delay !== scrollDelayOffset) setDelay(scrollDelayOffset);
    }, delay);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [selectedItem, delay, selectItem, gameList.length, scrollDelayOffset]);

  return (
    <div className="list-viewer-main-container">
      <div className="list-viewer-list-buttons-container">
        {games.map((item, index) => {
          return (
            <li
              key={index}
              ref={item.ref}
              className={`list-viewer-display-button${index === selectedItem ? "-selected" : ""}`}
              onClick={() => {
                selectItem(index);
                setDelay(scrollAfterSelectDelayOffset);
              }}
            >
              {item.title}
            </li>
          );
        })}
      </div>
      <div className="list-viewer-display-continer">
        <img src={gameList[selectedItem].img} alt="logo" className="list-viewer-display-img" />
      </div>
    </div>
  );
}
