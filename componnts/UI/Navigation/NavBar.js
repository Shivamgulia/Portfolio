import { useRouter } from 'next/router';

import Button from '../Button';

import classes from '../../../styles/UI/NavBar.module.css';
import { Router } from 'next/router';

export default function NavBar() {
  const router = useRouter();

  return (
    <div className={classes.navCont}>
      <div className={classes.item1}>
        <h3>Shivam Gulia</h3>
      </div>
      <div className={classes.item2}>
        <ul className={classes.linkList}>
          <li className={classes.link1}>
            <Button
              text="Home"
              function={() => {
                router.push('/');
              }}
            />
          </li>
          <li className={classes.link2}>
            <Button
              text="Projects"
              function={() => {
                router.push('/projects');
              }}
            />
          </li>
          <li className={classes.link3}>
            <Button
              text="Resume"
              function={() => {
                router.push('/resume');
              }}
            />
          </li>
        </ul>
      </div>
    </div>
  );
}
