export default function List() {
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
      links: [
        {
          id: 1,
          des: 'Site Link',
          link: 'https://tiny.one/shivam',
        },
      ],
    },
    {
      id: 2,
      name: 'Query Genius',
      image: SQLGen,
      descreption:
        'A sophisticated database metadata management and query generation application designed to enhance database efficiency and streamline query generation processes. This innovative tool simplifies the creation and storage of metadata for SQL tables, enabling seamless query generation based on table descriptions.',
      work: [
        {
          id: 1,
          det: 'creating metadata based on create Table SQL query',
        },
        {
          id: 2,
          det: 'Saving thegenerated meta data in vectorstore(chroma)',
        },
        {
          id: 3,
          det: 'Using Generative AI to create correct SQL statements for the given tables in the vectorstore',
        },
      ],
      links: [
        {
          id: 1,
          des: 'GitHub',
          link: 'https://github.com/Shivamgulia/SQL-Generator',
        },
      ],
    },
    {
      id: 3,
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
      links: [
        {
          id: 1,
          des: 'User Side',
          link: 'https://tiny.one/foodMenu',
        },
        {
          id: 2,
          des: 'Restaurant Side',
          link: 'https://tiny.one/foodorder',
        },
        {
          id: 3,
          des: 'Git Hub Api Code',
          link: 'https://tiny.one/springmenu',
        },
        {
          id: 4,
          des: 'Git Client side Code',
          link: 'https://tiny.one/reactmenu',
        },
        {
          id: 5,
          des: 'Git Restaurant side Code',
          link: 'https://tiny.one/reactorder',
        },
      ],
    },
    {
      id: 4,
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
      links: [
        {
          id: 1,
          des: 'Github Repository',
          link: 'https://tinyurl.com/4fhxz537',
        },
        {
          id: 2,
          des: 'Wesite Link',
          link: 'https://tinyurl.com/ycya4tub',
        },
      ],
    },
    {
      id: 5,
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
      links: [
        {
          id: 1,
          des: 'Github Repository',
          link: 'https://tinyurl.com/4fhxz537',
        },
        {
          id: 2,
          des: 'Website Link',
          link: 'https://tinyurl.com/ycya4tub',
        },
      ],
    },
  ];
}
