import { useState } from "react";
import List from "./List";
import CompleteTodos from "./Complete-Todos";
function MainSection() {
  const [todos, setTodos] = useState(["item1", "item2", "item3"]);
  const [completedTodos, setCompletedTodos] = useState(["item0"]);
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
  function deleteCompletedItem(index) {
    const newCompletedTodos = completedTodos.filter(
      (completeddTodo, currentIndex) => {
        if (currentIndex !== index) {
          return true;
        }
        return false;
      }
    );
    setCompletedTodos([...newCompletedTodos]);
  }
  function addCompletedTodos(index) {
    const newComepletedTodo = todos[index];
    setCompletedTodos([...completedTodos, newComepletedTodo]);
    deleteItem(index);
  }

  return (
    <section>
      <List
        todos={todos}
        deleteItem={deleteItem}
        addCompletedTodos={addCompletedTodos}
      />
      <CompleteTodos
        completedTodos={completedTodos}
        deleteCompletedItem={deleteCompletedItem}
      />
      <div className="add-list">
        <input id="addToListItemInput" type="text" maxlength={27}></input>
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
