import { motion } from 'framer-motion';

import classes from '../../styles/Projects/ProjectItem.module.css';

export default function ProjectItem() {
  return (
    <motion.div
      initial={{ opacity: 0.2, x: -100 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.2 }}
    >
      <div className={classes.pitemCont}>
        <div className={classes.information}>
          <h1>Project item</h1>
          <p>
            this is the paragraph. Actually this is a test paragraph this is the
            paragraph. Actually this is a test paragraph this is the paragraph.
            Actually this is a test paragraph this is the paragraph. Actually
            this is a test paragraph this is the paragraph. Actually this is a
            test paragraph this is the paragraph. Actually this is a test
            paragraph this is the paragraph. Actually this is a test paragraph
          </p>
        </div>
        <div className={classes.image}>
          <img
            src="https://colibriwp.com/blog/wp-content/uploads/2018/07/banner-redimensionat.jpg"
            alt=""
          />
        </div>
      </div>
    </motion.div>
  );
}
