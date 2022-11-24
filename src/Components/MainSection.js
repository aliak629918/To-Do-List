import { useState } from "react";
import List from "./List";
function MainSection() {
  const [todos, setTodos] = useState(["item1", "item2", "item3"]);

  const addToList = () => {
    const inputValue = document.getElementById("addToListItemInput").value;
    setTodos([...todos, inputValue]);
  };
  function deleteItem(index) {
    const newTodos = todos.filter((todo, currentIndex) => {
      if (currentIndex !== index) {
        return true;
      }
      return false;
    });
    setTodos([...newTodos]);
  }

  return (
    <section>
      <List todos={todos} deleteItem={deleteItem} />
      <div className="add-list">
        <input id="addToListItemInput" type="text"></input>
        <button
          onClick={() => {
            addToList();
          }}
        >
          Add to List
        </button>
      </div>
    </section>
  );
}

export default MainSection;
