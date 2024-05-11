import * as React from "react";
import "./header.css";

const Header = () => {
  return (
    <div className="container">
      <div className="logo">
        <h1>@RajibGupta</h1>
      </div>
      <div className="navbarContent">
        <ul>
          <li>Home</li>
          <li>Projects</li>
          <li>About</li>
          <li>Let's Connect</li>
        </ul>
      </div>
    </div>
  );
};
export default Header;
