import React from "react";
import github from "../../images/github.svg";
import www from "../../images/www.svg";
import "./Link.scss";
import Href from "../href/Href";

function Link({ link }) {
  return (
    <li className="link_container">
      <ul className="link_container__stack_list">
        {link.stack.map((i, index) => (
          <li key={index} className="link_container__stack_list__item">{i}</li>
        ))}
      </ul>
      <h3 className="link_container__title">{link.title}</h3>
      <nav className="link_container__hrefs">
        <Href href={link.hrefs.demo} src={github} alt="гитхаб" text="demo" />
        <Href href={link.hrefs.repo} src={www} alt="демо" text="repo" />
      </nav>
    </li>
  );
}

export default Link;
