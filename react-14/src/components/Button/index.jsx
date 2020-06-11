import React from "react";

import "./styles.scss";

class Button extends React.Component {
  render() {
    return (
      <button
        onClick={() => {
          this.props.click(this.props.value, this.props.name);
        }}
        className={`filters__item + ${
          this.props.selected === this.props.value ? "is-selected" : ""
        }`}
      >
        {this.props.value} <i className="fas fa-sort-down" />
      </button>
    );
  }
}

export default Button;
