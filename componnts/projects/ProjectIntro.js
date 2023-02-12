import Banner from '../UI/Buttons/Banner';

import { motion } from 'framer-motion';

import classes from '../../styles/Projects/ProjectIntro.module.css';

export default function ProjectIntro(props) {
  return (
    <div>
      <Banner image={props.image} name={props.text}>
        {/* <h1>See You Again</h1> */}
      </Banner>
    </div>
  );
}
