import React from "react";
import Link from "next/link";

export default function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary ">
      <div className="container-fluid text-bg-primary p-3">
        <a className="navbar-brand" href="#">
          Jessica Heggem
        </a>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">
                Home
              </a>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" href="/AboutMe">
                About Me
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
