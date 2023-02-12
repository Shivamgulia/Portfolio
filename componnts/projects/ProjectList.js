import ProjectItem from './ProjectItem';
import Quotes from '../../resources/Quotes.jpg';
import Authen from '../../resources/Authen.jpg';
import FoodOrder from '../../resources/FoodOrder.jpg';
import classes from '../../styles/Projects/ProjectList.module.css';

const Projects = [
  {
    id: 1,
    name: 'Quotes',
    image: Quotes,
    descreption:
      'This Web application uses react front end and firebase as backend to store the data. It can be used to store Quotes and add comenets for different people to see and get motivated by. People can upload motivating quotes or short speaches and people who are feeling demotivated can read through them to pull themselves back up.',
  },
  {
    id: 2,
    name: 'Authentication',
    image: Authen,
    descreption:
      'This is a basic authentication system that uses React Js for front end development and Firebase for the backend authentication system. It stores the use data in the browser to remember the use until his token expires',
  },
  {
    id: 3,
    name: 'Menu',
    image: FoodOrder,
    descreption:
      'This is ment for restaurants to use then can just paste a qr code on the table for customers to scan and a menu will appear and then they can easily order the food they want to eat. There is a differnet website for the kitchen where the can see ordered items and after an order has been completed they can clear the table.',
  },
];

export default function projectList() {
  return (
    <div className={classes.pCont}>
      <h1>Project List</h1>
      <div className={classes.plistCont}>
        {Projects.map((item) => (
          <ProjectItem key={item.id} Item={item} />
        ))}
      </div>
    </div>
  );
}
