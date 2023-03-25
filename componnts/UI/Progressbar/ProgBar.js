import { easeIn, motion } from 'framer-motion';

import classes from '../../../styles/UI/Progressbar/ProgBar.module.css';

export default function ProgBar(props) {
  return (
    <div className={classes.barparent}>
      <div className={classes.barbottom}>
        <motion.div
          className={classes.bartop}
          initial={{
            opacity: 1,
            width: '0%',
            color: 'white',
            y: 0,
          }}
          whileInView={{ width: props.progress + '%' }}
          transition={{ delay: 0.5, type: 'easeIn' }}
          viewport={{ once: true }}
        >
          {/* <motion.h3
            inital={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            viewport={{ once: true }}
            className={classes.per}
          >
            {props.progress + '%'}
          </motion.h3> */}
        </motion.div>
      </div>
      <h5 className={classes.per}>{props.progress + '%'}</h5>
    </div>
  );
}
