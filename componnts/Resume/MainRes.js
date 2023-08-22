import { useRouter } from 'next/router';
import Button2 from '../UI/Buttons/Button2';
import HrefLink from '../UI/Buttons/HrefLink';
import Resume from '../../resources/Resume.jpg';

import classes from '../../styles/Resume/MainRes.module.css';

export default function MainRes() {
  const Router = useRouter();
  return (
    <div className={classes.resCont}>
      <div className={classes.downl}>
        <HrefLink
          text='Download'
          link='https://drive.google.com/uc?export=download&id=1Uu6_DwrCvt8ykVtt_A3yf-XPdnRt5Rw9'
        />
      </div>
      <div className={classes.image}>
        <img src={Resume.src} alt='' />
      </div>
    </div>
  );
}
