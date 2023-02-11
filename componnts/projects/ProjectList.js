import ProjectItem from './ProjectItem';

import classes from '../../styles/Projects/ProjectList.module.css';

export default function projectList() {
  return (
    <div className={classes.pCont}>
      <h1>Project List</h1>
      <div className={classes.plistCont}>
        <ProjectItem />
        <ProjectItem />
        <ProjectItem />
        <ProjectItem />
        <ProjectItem />
        <ProjectItem />
        <ProjectItem />
        <ProjectItem />
        <ProjectItem />
        <ProjectItem />
        <ProjectItem />
        <ProjectItem />
        <ProjectItem />
      </div>
    </div>
  );
}
