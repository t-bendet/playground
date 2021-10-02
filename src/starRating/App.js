import React, { useState } from "react";
import { Icon } from "semantic-ui-react";

const createArray = (length) => {
  console.log([...Array(length)], "arr");
  return [...Array(length)];
};

const Star = ({ selected = false }) => {
  return <Icon name="star" color={selected ? "red" : "yellow"} />;
};

const StarRating = ({ totalStars = 5 }) => {
  const [selectedStars, setSelectedStars] = useState(0);
  return createArray(totalStars).map((n, i) => {
    return <Star key={i} />;
  });
};

const App = () => {
  return <StarRating totalStars={10} />;
};
export default App;
