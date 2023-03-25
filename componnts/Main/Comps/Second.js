import Button2 from '../../UI/Buttons/Button2';
import ProgBar from '../../UI/Progressbar/ProgBar';

import classes from '../../../styles/Main/Comps/Second.module.css';

export default function Second() {
  return (
    <div className={classes.secCont}>
      <div className={classes.headCont}>
        <h1> Skills</h1>
      </div>
      <div className={classes.lanCont}>
        <div>
          <Button2 text="Java" />
          <ProgBar progress={90} />
        </div>
        <div>
          <Button2 text="JavaScript" />
          <ProgBar progress={75} />
        </div>
        <div>
          <Button2 text="HTML" />
          <ProgBar progress={90} />
        </div>
        <div>
          <Button2 text="CSS" />
          <ProgBar progress={70} />
        </div>
        <div>
          <Button2 text="React JS" />
          <ProgBar progress={80} />
        </div>
        <div>
          <Button2 text="Spring Boot" />
          <ProgBar progress={80} />
        </div>
        <div>
          <Button2 text="Data Structures" />
          <ProgBar progress={90} />
        </div>
        <div>
          <Button2 text="Algorithms" />
          <ProgBar progress={85} />
        </div>
      </div>
    </div>
  );
}
