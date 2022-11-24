function ListItem(props) {
  const currentIndex = props.index;
  return (
    <li>
      <button
        className="tick"
        onClick={() => {
          props.addCompletedTodos(currentIndex);
        }}
      >
        ✓
      </button>
      <button
        onClick={() => {
          props.deleteItem(currentIndex);
        }}
      >
        x
      </button>
      {props.todo}
    </li>
  );
}

export default ListItem;
