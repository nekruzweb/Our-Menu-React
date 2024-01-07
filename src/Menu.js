import React from "react";

const Menu = (props) => {
  return (
    <>
      {props.Mal.map((item) => {
        const { id, title, category, price, img, desc } = item;
        return (
          <article key={id} className="menu-item">
            <img className="photo" src={img} />
            <div className="item-info">
              <header>
                <h4>{title}</h4>
                <h4 className="price">{price}</h4>
              </header>
              <p className="item-text">{desc}</p>
            </div>
          </article>
        );
      })}
    </>
  );
};

export default Menu;
