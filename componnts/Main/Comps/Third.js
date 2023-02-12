import ProjectIntro from '../../projects/ProjectIntro';
import Authen from '../../../resources/Authen.jpg';
import Quotes from '../../../resources/Quotes.jpg';
import FoodOrder from '../../../resources/FoodOrder.jpg';
import classes from '../../../styles/Main/Comps/Third.module.css';

export default function Third() {
  return (
    <div className={classes.thirCont}>
      <div>
        <h1>Projects</h1>
      </div>
      <div className={classes.banners}>
        <div>
          <ProjectIntro image={Authen} text="Authentication" />
        </div>
        <div>
          <ProjectIntro image={Quotes} text="Quotes" />
        </div>
        <div>
          <ProjectIntro image={FoodOrder} text="Menu" />
        </div>
      </div>
    </div>
  );
}
