import ListGroup from "./components/ListGroup";

function App() {
  const items = ["Bandung", "Jakarta", "Lampung", "Semarang", "Yogyakarta"];

  return (
    <div>
      <ListGroup items={items} heading="Cities" />
    </div>
  );
}

export default App;
