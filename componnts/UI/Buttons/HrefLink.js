import classes from '../../../styles/UI/Buttons/HrefLink.module.css';

export default function HrefLink(props) {
  return (
    <div className={classes.butCont}>
      <a
        className={classes.button2}
        role="button"
        target="_blank"
        href={props.link}
      >
        {props.text}
      </a>
    </div>
  );
}
