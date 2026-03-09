import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Hello from './hello.jsx'
import TextBoxRead from './textboxread.jsx'
import Heading from './Heading.jsx'
import FruitStore from './FruitStore.jsx'
import CheckBox from './CheckBox.jsx'
import TextBox from './TextBox.jsx'
import Button from './Button'
import MyForm from './MyForm.jsx'
import './FruitStore.css';
/*const myjsx = <h3> I Love JSX </h3>
const test = <h1> React is {5 + 5} times better with jsx</h1>

const fruits = (
  <ul>
    <li> Kiwi </li>
    <li> Apple </li>
    <li> Cherry </li>
  </ul>
);

//createRoot(document.getElementById('root')).render(myjsx);
//createRoot(document.getElementById('root')).render(test);
//createRoot(document.getElementById('root')).render(fruits);

function Car() {
  return (
      <>
        <h2> My car</h2>
        <p> It is a Frod Mustang </p>
      </>
  );
}

/*function RaceCar(){
  const carobj = {
    carname : "Porsche",
    model : "911",
    owner : "kittu",
    color : "black"
  };
  return (
    <>
      <h1> Race Car Details </h1>
      <h3>{carobj.carname} {carobj.model} {carobj.color} </h3>
    </>
  );
}

/*function Carcolor(props){
  return(
    <h2> I am a {props.color} car1</h2>
  );
}
/*
createRoot(document.getElementById('root')).render(
    <Carcolor color="black" />
);
*/
/*
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RaceCar />
  </StrictMode>,
)
*/

/*function Vote() {
  const age=21;
  return (
    <>
      <h1>
      {(age) >= 18 ? "you can vote" : "sorry you cannot vote"}
    </h1>
    </>
  );
}

/*
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Car />
  </StrictMode>,
)
*/

/*
createRoot(document.getElementById('root')).render(
  <StrictMode>
    //<App />
    <Hello />
  </StrictMode>
)
*/
/*
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Heading/>
   < TextBoxRead />
  </StrictMode>,
)*/
/*createRoot(document.getElementById('root')).render(
  <StrictMode>
    <FruitStore/>
  </StrictMode>
)
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CheckBox name="intenship" lable="hi"/>
  </StrictMode>
)*/
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <FruitStore/>
  </StrictMode>
)