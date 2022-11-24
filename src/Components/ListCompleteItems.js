function ListCompleteItems(props) {
  const currentIndex = props.index;
  return (
    <li>
      <button
        onClick={() => {
          props.deleteCompletedItem(currentIndex);
        }}
      >
        x
      </button>
      {props.todo}
    </li>
  );
}
export default ListCompleteItems;
