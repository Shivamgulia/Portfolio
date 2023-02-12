import Button2 from '../UI/Buttons/Button2';
import Resume from '../../resources/Resume.jpg';

import classes from '../../styles/Resume/MainRes.module.css';

export default function MainRes() {
  return (
    <div className={classes.resCont}>
      <div className={classes.downl}>
        <Button2 text="Download" />
      </div>
      <div className={classes.image}>
        <img src={Resume.src} alt="" />
      </div>
    </div>
  );
}
