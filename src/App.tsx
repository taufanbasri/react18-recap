import ListGroup from "./components/ListGroup";

function App() {
  const items = ["Bandung", "Jakarta", "Lampung", "Semarang", "Yogyakarta"];

  const handleSelectItem = (item: string) => {
    console.log(item);
  };

  return (
    <div>
      <ListGroup
        items={items}
        heading="Cities"
        onSelectItem={handleSelectItem}
      />
    </div>
  );
}

export default App;
