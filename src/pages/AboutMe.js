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
          <h1 className="text-3xl font-bold">About Me</h1>
          <p>My name is Jessica and I&apos;m someone who loves to learn. 
            I&apos;m experienced in front end software development and business analytics. 
            Currently, I&apos;m looking for opportunities in both areas. 
            My emphasis is on Business Analyst roles while I ramp up my software development portfolio 
            since I stepped away from a software development specific role coding for about 2 years. 
            I used SQL in Snowflake and MS SQL Server to run queries daily while I was at SPS Commerce, 
            so the knowledge hasn&apos;t completely left my mind. 
            It&apos;s exciting to dive back into React, specifically Next.js, in this case, 
            because I get to learn how to navigate coding in a 
            world where AI exists, since it didn&apos;t exist when I was a developer. 
            Weirdly enough, ChatGPT launched 19 days after I was laid off from my dev role in 2022. 
            Alas, I have rambled enough now. This is simply placeholder text
            until I make my way back to add my resume and trim this text down 
            to be shorter and sweeter. Thanks for tuning in!</p>
        </div>
      </main>
    </div>
  );
}
