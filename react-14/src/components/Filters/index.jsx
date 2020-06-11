import React from "react";
import Button from "../Button";

import "./styles.scss";

import buttonsList from "../../data/buttonlist.json";
// const buttonsList = [
//   "Nome",
//   "País",
//   "Empresa",
//   "Departamento",
//   "Data de admissão",
// ];

class Filters extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      orderBy: "Nome",
      searchBy: "",
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ searchBy: event.target.value });
  }

  changeOrder(name, value) {
    this.setState({ orderBy: name });
    this.props.onOrder(value);
  }

  render() {
    let listButtons = buttonsList.map((data) => (
      <Button
        key={data.Name}
        name={data.Name}
        value={data.Value}
        click={this.changeOrder.bind(this)}
        selected={this.state.orderBy}
      />
    ));

    return (
      <div className="container" data-testid="filters">
        <section className="filters">
          <div className="filters__search">
            <input
              type="text"
              className="filters__search__input"
              placeholder="Pesquisar"
              value={this.state.searchBy}
              onChange={this.handleChange}
            />

            <button
              className="filters__search__icon"
              onClick={() => {
                this.props.onSearch(this.state.searchBy);
                this.setState({ searchBy: "" });
              }}
            >
              <i className="fa fa-search" />
            </button>
          </div>

          {listButtons}
        </section>
      </div>
    );
  }
}

export default Filters;
