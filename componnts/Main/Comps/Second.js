import Button2 from '../../UI/Buttons/Button2';

import classes from '../../../styles/Main/Comps/Second.module.css';

export default function Second() {
  return (
    <div className={classes.secCont}>
      <div className={classes.headCont}>
        <h1> Skills</h1>
      </div>
      <div className={classes.lanCont}>
        <Button2 text="Java" />
        <Button2 text="JavaScript" />
        <Button2 text="HTML" />
        <Button2 text="CSS" />
        <Button2 text="React JS" />
        <Button2 text="Spring Boot" />
        <Button2 text="Data Structures" />
        <Button2 text="Algorithms" />
      </div>
    </div>
  );
}
