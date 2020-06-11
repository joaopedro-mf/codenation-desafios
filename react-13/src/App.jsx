import React from "react";

import Filters from "./components/Filters";
import Topbar from "./components/Topbar";
import Contacts from "./components/Contacts";
import Contact from "./components/Contact";

import "./App.scss";

const contacts_URL =
  "https://5e82ac6c78337f00160ae496.mockapi.io/api/v1/contacts";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      contacts: [],
    };
  }

  componentDidMount() {
    fetch(contacts_URL)
      .then((response) => response.json())
      .then((result) =>
        this.setState({
          contacts: result,
        })
      )
      .catch((err) => {
        console.error("Problem", err);
      });
  }

  render() {
    const contact_list = this.state.contacts.map((data) => (
      <Contact data={data} key={data.id} />
    ));

    return (
      <React.Fragment>
        <Topbar />
        <Filters />
        <Contacts>{contact_list}</Contacts>
      </React.Fragment>
    );
  }
}

export default App;
