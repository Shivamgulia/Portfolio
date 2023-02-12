import { useRouter } from 'next/router';
import Quotes from '../../resources/Quotes.jpg';
import Authen from '../../resources/Authen.jpg';
import FoodOrder from '../../resources/FoodOrder.jpg';
import Green from '../../resources/Green.jpg';
import classes from '../../styles/Projects/ProjectDetails.module.css';

const Projects = [
  {
    id: 1,
    name: 'Green Rides',
    image: Green,
    descreption:
      'This is a initiative to encourage people to use cycles more it a implemention of a system to rent prople cycles for close distance travels and discourage the use of motor vehicals for short distances',
    work: [
      {
        id: 1,
        det: 'Authentication and signup using Google Identity Services, and implemented remember me',
      },
      {
        id: 2,
        det: 'Implemented QR Scanner in react with qr scan library',
      },
    ],
  },
  {
    id: 2,
    name: 'Menu',
    image: FoodOrder,
    descreption:
      'This is ment for restaurants to use then can just paste a qr code on the table for customers to scan and a menu will appear and then they can easily order the food they want to eat. There is a differnet website for the kitchen where the can see ordered items and after an order has been completed they can clear the table.',
    work: [
      {
        id: 1,
        det: 'Create a Restful API using SpringBoot with MongoDb',
      },
      {
        id: 2,
        det: 'Developed to websites one for clients to order food and other for restaurant Using React JS',
      },
      {
        id: 3,
        det: 'Used Routing to create a multi-page application using React Js',
      },
      {
        id: 4,
        det: "Implementation of 3 roles for different users (Student, Guard, Admin) different roles have different accesses (like student can rent cycle, guard can return cycles, admin can add or delete student ,guard accounts and also cycle id's)",
      },
    ],
  },
  {
    id: 3,
    name: 'Authentication',
    image: Authen,
    descreption:
      'This is a basic authentication system that uses React Js for front end development and Firebase for the backend authentication system. It stores the use data in the browser to remember the use until his token expires',
    work: [
      {
        id: 1,
        det: 'Implemented authentication system in React using firebase authentication system',
      },
      {
        id: 2,
        det: 'Implemented remember me using browser storage',
      },
    ],
  },
  {
    id: 4,
    name: 'Quotes',
    image: Quotes,
    descreption:
      'This Web application uses react front end and firebase as backend to store the data. It can be used to store Quotes and add comenets for different people to see and get motivated by. People can upload motivating quotes or short speaches and people who are feeling demotivated can read through them to pull themselves back up.',
    work: [
      {
        id: 1,
        det: 'Created RESTful APIs with spring boot',
      },
      {
        id: 2,
        det: 'Implemented spring security and JSON Web Token(JWT) for an authentication system for cross platform api',
      },
      {
        id: 3,
        det: 'Implemented Google captcha to avoid phishing',
      },
      {
        id: 4,
        det: 'Designed and implemented front end using React Js',
      },
      {
        id: 5,
        det: 'MySql being used as the database',
      },
    ],
  },
];

export default function ProjectDetails() {
  const Router = useRouter();
  const { projectId } = Router.query;
  const index = Number(projectId);
  if (!index || index > 4 || index < 1) {
    return (
      <div className={classes.detCont}>
        <div className={classes.webdiv}></div>
        <div>
          <h1>This Project Does not exist</h1>
        </div>
      </div>
    );
  }
  const item = Projects[index - 1];
  return (
    <div className={classes.detCont}>
      <div className={classes.webdiv}>
        <img src={item.image.src} alt="" />
      </div>
      <div className={classes.info}>
        <h1>{item.name}</h1>
        <p>{item.descreption}</p>
        <ul>
          {item.work.map((list) => {
            return (
              <li key={list.id}>
                <p>{list.det}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
