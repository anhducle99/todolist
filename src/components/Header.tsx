import React from "react";
import moment from "moment";
import "./main.css";

const Header = ({ checkOn, checkOff }: any) => {
  const date = new Date();
  return (
    <div className="date_update">
      <div className="date">
        <h3>
          {moment().format("MMMM")} {date.getDay()}, {date.getFullYear()}
        </h3>
      </div>
      <div className="update">
        <p>
          {checkOn.length} incomplete, {checkOff.length} complete
        </p>
      </div>
    </div>
  );
};

export default Header;
