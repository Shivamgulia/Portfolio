import NavBar from './NavBar';
import Layout1 from './Layout1';

import classes from '../../../styles/UI/Page1.module.css';

export default function Page1(props) {
  return (
    <div className={classes.pg1Cont}>
      <div className={classes.navbarCont}>
        <NavBar />
      </div>
      <div className={classes.mainBody}>
        <Layout1>{props.children}</Layout1>
      </div>
    </div>
  );
}
