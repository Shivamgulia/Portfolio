import { useRouter } from 'next/router';
import Button2 from '../UI/Buttons/Button2';
import Resume from '../../resources/Resume.jpg';

import classes from '../../styles/Resume/MainRes.module.css';

export default function MainRes() {
  const Router = useRouter();
  function download() {
    Router.push(
      'https://drive.google.com/uc?export=download&id=18ZknA5TgRDufFMcNszzkJJnvB3jEafd2'
    );
  }
  return (
    <div className={classes.resCont}>
      <div className={classes.downl}>
        <Button2 text="Download" method={download} />
      </div>
      <div className={classes.image}>
        <img src={Resume.src} alt="" />
      </div>
    </div>
  );
}
