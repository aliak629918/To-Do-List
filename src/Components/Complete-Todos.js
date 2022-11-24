import ListCompleteItems from "./ListCompleteItems";

function CompleteTodos(props) {
  return (
    <section>
      <h2>CompletedTodos</h2>
      <ul>
        {props.completedTodos.map((todo, index) => {
          return (
            <ListCompleteItems
              deleteCompletedItem={props.deleteCompletedItem}
              key={todo}
              todo={todo}
              index={index}
            />
          );
        })}
      </ul>
    </section>
  );
}

export default CompleteTodos;
