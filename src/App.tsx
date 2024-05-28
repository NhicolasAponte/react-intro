import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Message from './Message'
import ListGroup from './components/ListGroup'

// javascript expression: any valid js code that returns some value 
// curly braces are used to wrap the js expression
function App() {

  let items = [
    "Kansas City",
    "Chicago",
    "New York",
    "Los Angeles",
    "San Francisco",
  ];

  let heading = "Cities";

  const handleSelect = (item: string) => {
    console.log(item);
  }

  return (
    <ListGroup items={items} heading={heading} onItemSelect={handleSelect}/>
  )
}

export default App
