// import logo from './logo.svg';
import './App.css';
import React, { Fragment } from 'react';
import MyComponents from './MyComponents';
import StateComponents from './StateComponents';
import Say from './Say';
import EventPractice from './EventPractice';

function App() {
  return (
    <Fragment>
      <MyComponents name="test" requiredNumber={1}>
        children test
      </MyComponents>
      <StateComponents/>
      <Say/>
      <EventPractice />
    </Fragment>
  );
}

export default App;
