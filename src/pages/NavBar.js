import React from "react";
import Link from "next/link";

export default function NavBar() {
  return (
    <nav>
      <Link href="/">Home</Link>
      <Link href="/AboutMe">About Me</Link>
    </nav>
  );
}
