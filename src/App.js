// import logo from './logo.svg';
import './App.css';
import React, { Fragment } from 'react';
import MyComponents from './MyComponents';

function App() {
  return (
    <Fragment>
      <MyComponents name="test" requiredNumber={1}>
        children test
      </MyComponents>
    </Fragment>
  );
}

export default App;
