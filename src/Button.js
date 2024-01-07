import React from "react";

const Button = (props) => {
    const ChangeBtn = (e) => {
        props.FFF(e.target.value)
    }
  return (
    <div className="btn-container">
      {
        props.Elem.map((item)=>{
            return <button key={item} value={item} onClick={ChangeBtn} className="filter-btn"> {item} </button>
        })
      }
    </div>
  );
};

export default Button;
