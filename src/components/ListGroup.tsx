import { useState } from "react";

interface ListGroupProps {
    items: string[];
    heading: string;
    //need a way to let the consumer, or parent component, know when an item is selected
    //this is done by passing a function as a prop
    onItemSelect: (item: string) => void;
}

export default function ListGroup({ items, heading, onItemSelect }: ListGroupProps) {

  //items = [];
  //let selectedIndex = -1;
  // React Hook: useState; returns an array with 2 elements which we destructure into the 
  // following 2 variables
  const [selectedIndex, setSelectedIndex] = useState(-1);

  // method 1 for conditional rendering
  //   if (items.length === 0) {
  //     return <h1>No items</h1>;
  //   }

  // method 3 for conditional rendering
  const emptyListMessage = items.length === 0 ? <h1>No items</h1> : null;

  // method 4 for conditional rendering
  // the benefit of using a function is that
  // you can add parameters and reuse it
  const getEmptyListMessage = () => {
    return items.length === 0 ? <h1>No items</h1> : null;
  };

  // event handler function
  // event is an optional parameter to represent browser event object
  // in the console, you will see a Synthetic Base Event object. 
  // This is a React wrapper around the native browser event object
  // to provide cross-browser compatibility
  const handleClick = (index: number) => {
    setSelectedIndex(index);
  };

  return (
    <>
      <h1>{heading}</h1>
      {/* method 3 for conditional rendering */}
      {emptyListMessage}
      {/* method 4 for conditional rendering */}
      {getEmptyListMessage()}
      {/* method 5 for conditional rendering */}
      {items.length === 0 && <h1>No items</h1>}
      {/* method 2 for conditional rendering */}
      {items.length === 0 ? (
        <h1>No items</h1>
      ) : (
        <ul className="list-group">
          {items.map((item, index) => (
            <li key={index} className={selectedIndex === index ? "list-group-item active" : "list-group-item"} onClick={() => 
            {
                handleClick(index);
                onItemSelect(item);
            }}
            >
              {item}
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
