import React from "react";
import Link from "next/link";

export default function NavBar() {
  return (
    <nav class="navbar navbar-expand-lg bg-body-tertiary ">
      <div class="container-fluid text-bg-primary p-3">
        <a class="navbar-brand" href="#">
          Jessica Heggem
        </a>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#">
                Home
              </a>
            </li>
            <li class="nav-item">
              <Link class="nav-link active" href="/AboutMe">
                About Me
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
