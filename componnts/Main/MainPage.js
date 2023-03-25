import Page1 from '../UI/Navigation/Page1';
import Image from 'next/image';
import Face from '../../resources/Shivam1.png';

import classes from '../../styles/Main/MainPage.module.css';
import Second from './Comps/Second';
import Third from './Comps/Third';

export default function MainPage() {
  return (
    <div>
      <div className={classes.mainCont}>
        <div className={classes.profCont}>
          {/* <h1>Hi! Welcome</h1> */}
          <h2>I am, Shivam Gulia</h2>
          <h4>
            Currently a third year B.Tech student majoring in Electronics
            Engineering from Harcourt Butler Technical University.I have
            completed many projects as an individual and as a part of team.
            After working on many projects, i have advanced knowledge in
            React.js, Next.js, Java and Spring Boot. Moreover, i have been
            responsible for creating a system for cycle services provided to
            studends to use. Highly enthusastic about creating and programming
            solutions for problems. In addition to my experience .......
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
    </div>
  );
}
