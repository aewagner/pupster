import React from "react";
import { Link } from "react-router-dom";

const Nav = () =>
<ul className="nav">
<li className="nav-item">
  <Link className="nav-link active" to="/">About</Link>
</li>
<li className="nav-item">
  <a className="nav-link" href="#">Link</a>
</li>
<li className="nav-item">
  <a className="nav-link" href="#">Link</a>
</li>
<li className="nav-item">
  <a className="nav-link disabled" href="#">Disabled</a>
</li>
</ul>;

export default Nav;
