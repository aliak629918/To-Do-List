import { useState } from "react";
import List from "./List"
function MainSection() {

    const [todos, setTodos] = useState(["item1", "item2", "item3"]);

    const addToList = () => {
        const inputValue = document.getElementById("addToListItemInput").value;
        setTodos([...todos, inputValue]);
    }


    return <section>
        <List todos={todos}/>
        <input id="addToListItemInput" type="text"></input><button onClick={() => {addToList()}}>Add to List</button>
    </section>
}

export default MainSection;