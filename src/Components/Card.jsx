import Heading from "./Heading";
import List from "./List";

const Card = (props) => {
  console.log("in Card Components", props);
  // props -- always an object;
  const { heading, list } = props;
  return (
    <>
      <Heading heading={heading} />
      <List list={list} />
    </>
  );
};

export default Card;
