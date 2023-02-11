import classes from '../../styles/UI/Button.module.css';

export default function Button(props) {
  return (
    <button className={classes.button1} role="but">
      <span className={classes.text} onClick={props.function}>
        {props.text}
      </span>
    </button>
  );
}
