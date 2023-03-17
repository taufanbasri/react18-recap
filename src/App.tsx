import ListGroup from "./components/ListGroup/ListGroup";
import "./App.css";

function App() {
  const items = ["Bandung", "Jogja", "Lampung", "Jakarta"];
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
