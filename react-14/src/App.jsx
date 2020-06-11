import React from "react";

import Filters from "./components/Filters";
import Topbar from "./components/Topbar";
import Contacts from "./components/Contacts";

import filterBy from "./utils/filterby";
import orderBy from "./utils/orderby";

import "./App.scss";

const contacts_URL =
  "https://5e82ac6c78337f00160ae496.mockapi.io/api/v1/contacts";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      contacts: [],
      contactsResult: [],
    };
  }

  handleClick(name) {
    let results = orderBy(this.state.contactsResult, name);
    this.setState({ contactsResult: results });
  }

  searchIn(text) {
    if (text === "") {
      this.setState({ contactsResult: this.state.contacts });
    } else {
      let results = filterBy(this.state.contactsResult, text);
      this.setState({ contactsResult: results });
    }
  }

  async componentDidMount() {
    await fetch(contacts_URL)
      .then((response) => response.json())
      .then((data) => this.setState({ contacts: data, contactsResult: data }));
  }

  render() {
    var { contactsResult } = this.state;

    return (
      <React.Fragment>
        <div className="app" data-testid="app">
          <Topbar />
          <Filters
            onOrder={this.handleClick.bind(this)}
            onSearch={this.searchIn.bind(this)}
          />
          <Contacts contacts={contactsResult}></Contacts>
        </div>
      </React.Fragment>
    );
  }
}

export default App;
