import React from 'react';
import ReactDOM from 'react-dom/client'

const root = ReactDOM.createRoot(document.getElementById('root'))

const Button = ({text}) => {
  return (
    <button>{text}</button>
  )
}

root.render(
  <React.Fragment>
    <Button text="Click me" />
    <Button text="Click me" />
    <Button text="Click me" />
  </React.Fragment>
);
