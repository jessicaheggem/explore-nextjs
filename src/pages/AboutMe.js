import React from "react";
import Head from "next/head";
import styles from "@/styles/AboutMe.module.css";

export default function AboutMe() {
  return (
    <div className={styles.page}>
      <Head>
        <title>About Me</title>
        <meta name="description" content="Learn more about me" />
      </Head>
      <main>
        <div>
          <h1>About Me</h1>
          <p>This is the page where I tell a million things about my wonderful self. My accomplishments. My skills. What I can do for your company. I am basically amazing. Highly recommend hiring me.</p>
        </div>
      </main>
    </div>
  );
}
