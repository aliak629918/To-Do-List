import ListItem from "./ListItem"

function List(props) {
const todos = props.todos // ["item1", "item2"]
return <ul>
    {todos.map((todo, index) => { //item1
        return <ListItem key={todo} todo={todo} index={index} todos={todos}/>
    })}
</ul>

}

export default List;