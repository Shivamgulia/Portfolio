import { useRouter } from 'next/router';
import { motion } from 'framer-motion';

import classes from '../../styles/Projects/ProjectItem.module.css';

export default function ProjectItem(props) {
  const Router = useRouter();
  function goToDetails() {
    Router.push('/projects/' + props.Item.id);
  }

  return (
    <motion.div
      initial={{ opacity: 0.2, x: -100 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.2 }}
      onClick={goToDetails}
    >
      <div className={classes.pitemCont}>
        <div className={classes.information}>
          <h1>{props.Item.name}</h1>
          <p>{props.Item.descreption}</p>
        </div>
        <div className={classes.image}>
          <img src={props.Item.image.src} alt="" />
        </div>
      </div>
    </motion.div>
  );
}
