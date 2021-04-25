import React from "react";
import "../css/admincard.css";
import { withRouter } from "react-router-dom";
const AdminCard = (props) => {
  return (
    <div className="card text-center shadow">
               <div className="overflow">
        <img src={props.imgsrc} alt="Hello" className="card-img-top" />
        <div className="card-body text-dark">
          <h4 className="card-title">{props.title}</h4>
          <p>
            {props.para}
          </p>
          <a href={props.href} className="btn btn-outline-success">
            {props.a}
          </a>
        </div>
      </div>
    </div>
  );
};

export default withRouter(AdminCard);