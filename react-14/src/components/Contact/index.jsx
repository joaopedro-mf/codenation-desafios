import React from "react";

import "./styles.scss";

class Contact extends React.Component {
  render() {
    const { data } = this.props;
    const [
      { value: year },
      ,
      { value: month },
      ,
      { value: day },
    ] = new Intl.DateTimeFormat("pt-BR", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    }).formatToParts(new Date(data.admissionDate));

    return (
      <article className="contact" data-testid="contact">
        <span className="contact__avatar">
          <img src={data.avatar} alt={data.id} />
        </span>
        <span data-testid="contact-name" className="contact__data">
          {data.name}
        </span>
        <span data-testid="contact-phone" className="contact__data">
          {data.phone}
        </span>
        <span data-testid="contact-country" className="contact__data">
          {data.country}
        </span>
        <span data-testid="contact-date" className="contact__data">
          {`${day}/${month}/${year}`}
        </span>
        <span data-testid="contact-company" className="contact__data">
          {data.company}
        </span>
        <span data-testid="contact-department" className="contact__data">
          {data.department}
        </span>
      </article>
    );
  }
}

export default Contact;
