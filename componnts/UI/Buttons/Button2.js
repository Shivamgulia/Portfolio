import classes from '../../../styles/UI/Buttons/Button2.module.css';

export default function Button2(props) {
  return (
    <div className={classes.butCont}>
      <button class={classes.button2} role="button" onClick={props.method}>
        {props.text}
      </button>
    </div>
  );
}
