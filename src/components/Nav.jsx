import React from "react";
import { NavLink } from "react-router-dom";

const Nav = props => {
  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          padding: 10
        }}
      >
        <div>
          <NavLink exact to="/">
            Home
          </NavLink>
        </div>
        <div style={{ marginLeft: 20 }}>
          <NavLink to="/Blog">Blog</NavLink>
        </div>
        <div style={{ marginLeft: 20 }}>
          <NavLink to="/Contact">Contact</NavLink>
        </div>
        {props.handleChange && (
          <div style={{ marginLeft: 20 }}>
            <select
              value={props.lang}
              onChange={e => props.handleChange(e.target.value)}
              name="lang"
              id="lang"
            >
              <option value="mm">Myanmar</option>
              <option value="en">English</option>
              <option value="chi">Chinese</option>
            </select>
          </div>
        )}
      </div>
    </div>
  );
};

export default Nav;
