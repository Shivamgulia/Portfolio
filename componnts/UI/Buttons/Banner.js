import Image from 'next/image';
import image from '../../../resources/banner-redimensionat.jpg';

import classes from '../../../styles/UI/Banner.module.css';

export default function Banner(props) {
  return (
    <div>
      <button className={classes.banner} role="button">
        <span className={classes.txt}>
          <h1 className={classes.headBan}>{props.name}</h1>
        </span>
        <div className={classes.imag}>
          {/* <Image src={props.image} width={350} height={200} alt={props.name} /> */}
          <img src={props.image.src} alt="" />
        </div>
      </button>
    </div>
  );
}
