function ListItem(props) {
  const currentIndex = props.index;
  return (
    <li>
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
