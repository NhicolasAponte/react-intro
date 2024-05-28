import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Message from './Message'
import ListGroup from './components/ListGroup'
import Alert from './components/Alert'
import AlertWithChildren from './components/AlertWithChildren'
import Button from './components/Button'

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

  let message = "Hello World from Alert Component";

  return (
    <div>
      <Alert message={message}/>
      <AlertWithChildren>
        <span>Hello from AlertWithChildren Component</span>
      </AlertWithChildren>
      <ListGroup items={items} heading={heading} onItemSelect={handleSelect}/>
      <Button onClick={() => console.log('clicked')} variant='primary'>
        Button
      </Button>
    </div>
  )
}

export default App
