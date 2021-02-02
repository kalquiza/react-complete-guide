import React, { useEffect, useRef, useContext } from 'react';
import classes from  './Cockpit.css';

import AuthContext from '../../context/auth-context';

const cockpit = (props) => {
  const toggleBtnRef = useRef(null);
  const authContext = useContext(AuthContext);

  console.log(authContext.authenticated);

  // useState()
  useEffect(() => {
    console.log('[Cockpit.js] useEffect');
    // Http request...
    // const timer = setTimeout(() => {
    //   alert('Fetched data from somewhere! (not really though) [Cockpit.js] useEffect')
    // }, 1000);
    toggleBtnRef.current.click();
    return () => {
      //clearTimeout(timer);
      console.log('[Cockpit.js] cleanup work in useEffect');
    };
  }, []); // empty array loads on initial render (no dependencies)
  // pass a dependency (i.e. [props.persons]) and useEffect will run
  // on changes to that dependency

  // can use multiple useEffect(()
  useEffect(() => {
    console.log('[Cockpit.js] 2nd useEffect');
    return () => {
      console.log('[Cockpit.js] cleanup work in 2nd useEffect');
    };
  });

  const assignedClasses = [];
  let btnClass = '';
  if (props.showPersons) {
      btnClass = classes.Red;
  }

  if (props.personsLength <= 2) {
    assignedClasses.push(classes.red); // classes = ['red']
  }

  if (props.personsLength <= 1) {
    assignedClasses.push(classes.bold); // classes = ['red' 'bold']
  }

  return(
      <div className={classes.Cockpit}>
          <h1>{props.title}</h1>
          <p className={assignedClasses.join(' ')}>This is really working!</p>
          <button ref={toggleBtnRef} className={btnClass} onClick={props.clicked}>
          Reveal persons
          </button>
          <button onClick={authContext.login}>Log in</button>
      </div>
  );
};

export default React.memo(cockpit);