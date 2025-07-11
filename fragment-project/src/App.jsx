

import 'bootstrap/dist/css/bootstrap.min.css';
import FoodItems from './components/foodItems';
import ErrorMessage from './components/errorMessage';
import './App.css'
import Container from './components/container';
import EnterFoodInput from './components/enterFoodInput';
import { useState } from 'react';
// import React from 'react';
function App() {

  // let foodItems = ['Beans', 'Pulses', 'Green Vegetables', 'Salad', 'Fruits', 'Milk', 'Ghee'];

  {/* let textStateArr = useState("Food item entered by user");
  let textToShow = textStateArr[0];
  let setTextState = textStateArr[1]; //setStateMethod
  console.log("textToShow", textToShow) */}

  // let [textToShow, setTextToShow] = useState("Food item entered by user");
  let [foodItems, setFoodItems] = useState(['Beans', 'Pulses', 'Green Vegetables']);

  // console.log("textToShow", textToShow)
  const handleKeyDown = (event) => {

    // setTextToShow(event.target.value)
    if (event.key === 'Enter') {
      let newFoodItem = event.target.value;
      let newItems = [...foodItems, newFoodItem]
      console.log("newFoodItem", newFoodItem)
      setFoodItems(newItems)
      // setTextToShow(event.target.value)
    }

  }

  return (
    <>
      <Container>
        <h1 className="kg-heading">Healthy Food</h1>
        <ErrorMessage items={foodItems}></ErrorMessage>
        <EnterFoodInput handleKeyDown={handleKeyDown}></EnterFoodInput>
        {/* {textToShow}*/}
        <FoodItems items={foodItems}></FoodItems>
      </Container>
      {/* <Container>
        <p>Food that are good for your health and well being...</p>
      </Container> */}
    </>

  );
}

export default App
