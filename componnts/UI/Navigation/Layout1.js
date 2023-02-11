import { motion } from 'framer-motion';

import classes from '../../../styles/UI/Layout1.module.css';

export default function Layout1(props) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 15,
      }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 15 }}
      transition={{ delay: 0.25 }}
    >
      <div className={classes.layCont}>{props.children}</div>
    </motion.div>
  );
}
