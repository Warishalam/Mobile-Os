const ListItem = (props) => {
    // console.log("in list item components", props);
    const { listItem } = props;
  
    return <li>{listItem.title}</li>;
  };
  
  export default ListItem;
  