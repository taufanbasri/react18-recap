import { useState } from "react";

const ListGroup = () => {
  const items = ["Bandung", "Jakarta", "Lampung", "Semarang", "Yogyakarta"];
  const [selectedIndex, setSelectedIndex] = useState(-1);

  return (
    <>
      <h1>List</h1>

      {items.length === 0 && <p>No item found!</p>}

      <ul className="list-group">
        {items.map((item, index) => (
          <li
            key={item}
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            onClick={() => {
              setSelectedIndex(index);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
};

export default ListGroup;
