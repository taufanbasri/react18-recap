import React from "react";

const ListGroup = () => {
  const items = ["Bandung", "Jakarta", "Lampung", "Semarang", "Yogyakarta"];

  return (
    <>
      <h1>List</h1>

      {items.length === 0 && <p>No item found!</p>}

      <ul className="list-group">
        {items.map((item) => (
          <li key={item} className="list-group-item">
            {item}
          </li>
        ))}
      </ul>
    </>
  );
};

export default ListGroup;
