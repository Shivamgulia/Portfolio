import Head from 'next/head';
import Page1 from '../UI/Navigation/Page1';
import Image from 'next/image';
import Face from '../../resources/Shivam1.png';

import classes from '../../styles/Main/MainPage.module.css';
import Second from './Comps/Second';
import Third from './Comps/Third';

export default function MainPage() {
  return (
    <div>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Bitter:ital,wght@1,500&display=swap"
          rel="stylesheet"
        />

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Lobster&display=swap"
          rel="stylesheet"
        />
      </Head>
      <div className={classes.mainCont}>
        <div className={classes.profCont}>
          {/* <h1>Hi! Welcome</h1> */}
          <h2>I am, Shivam Gulia</h2>
          {/* <h4>
            Currently a third year B.Tech student majoring in Electronics
            Engineering from Harcourt Butler Technical University.I have
            completed many projects as an individual and as a part of team.
            After working on many projects, i have advanced knowledge in
            React.js, Next.js, Java and Spring Boot. Moreover, i have been
            responsible for creating a system for cycle services provided to
            studends to use. Highly enthusastic about creating and programming
            solutions for problems.
          </h4> */}
          <h4>
            <p>
              I am a third-year B.Tech student at Harcourt Butler Technical
              University, Kanpur having an excellent grasp over Data Structures
              and Algorithms with an extensive problem-solving experience and
              curiosity to learn new Technologies.
            </p>
            <p>
              After working on different projects as a Full Stack Web Developer,
              I have a very good grasp of ReactJS, NextJS for Front End
              Development and Spring Boot for Back End Development. I have
              created RestAPI’s using Spring Boot framework with MySQL as well
              as MongoDb for database.
            </p>
            <p>
              I am highly disciplined and persistent with an aim of becoming a
              Software Developer. I am seeking for an opportunity that will
              provide me with the environment to practically explore and
              experience my potential by delivering the best and which will add
              depth to my skills.
            </p>
          </h4>
        </div>

        <div className={classes.profImg}>
          <Image src={Face} alt="Vercel Logo" width={300} height={300} />
        </div>
      </div>
      <div className={classes.thirdC}>
        <Third />
      </div>
      <div className={classes.secondC}>
        <Second />
      </div>
      <div className={classes.contactme}>
        <h3>
          Thank you for visiting.
          <br />
          You can reach me at:{' '}
        </h3>
        <div className={classes.contacts}>
          <h4>Mob : (+91) 8279373573</h4>
          <h4>Email : Shivam.meert@gmail.com</h4>
        </div>
      </div>
    </div>
  );
}
