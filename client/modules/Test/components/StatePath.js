import React, { PropTypes } from "react";
import { Link } from "react-router";

// Import Style

function StatePath(props) {
  return (
    <path
      id={props.id}
      onClick={props.handleClick}
      data-info={props.data}
      fill={props.selected ? "red" : "#D3D3D3"}
      d={props.d}
    />
  );
}

StatePath.propTypes = {
  id: PropTypes.string.isRequired,
  data: PropTypes.string.isRequired,
  selected: PropTypes.bool.isRequired,
  handleClick: PropTypes.func.isRequired
};

export default StatePath;
