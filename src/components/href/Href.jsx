import React from 'react';
import "./Href.scss"

function Href({ href, src, alt, text }) {
  return (
    <a href={href} className="href"><img src={src} alt={alt} className="href__icon"/><p className="href__text">{text}</p></a>
  )
}

export default Href