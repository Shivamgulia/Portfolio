import { useRouter } from 'next/router';

import ProjectIntro from '../../projects/ProjectIntro';
import Authen from '../../../resources/Authen.jpg';
import SQLGen from '../../../resources/SQLGen.jpg';
import Quotes from '../../../resources/Quotes.jpg';
import FoodOrder from '../../../resources/FoodOrder.jpg';
import Green from '../../../resources/Green.jpg';
import classes from '../../../styles/Main/Comps/Third.module.css';

export default function Third() {
  const Router = useRouter();
  function goToProjects() {
    Router.push('./projects/');
  }
  return (
    <div className={classes.thirCont}>
      <div>
        <h1>Projects </h1>
      </div>
      <div className={classes.banners}>
        <div
          onClick={() => {
            Router.push('./projects/1');
          }}
        >
          <ProjectIntro image={Green} text='Green Rides' />
        </div>
        <div
          onClick={() => {
            Router.push('./projects/2');
          }}
        >
          <ProjectIntro image={SQLGen} text='QueryGenius' />
        </div>
        <div
          onClick={() => {
            Router.push('./projects/3');
          }}
        >
          <ProjectIntro image={FoodOrder} text='Menu' />
        </div>
        <div
          onClick={() => {
            Router.push('./projects/5');
          }}
        >
          <ProjectIntro image={Quotes} text='Quotes' />
        </div>
      </div>
    </div>
  );
}
