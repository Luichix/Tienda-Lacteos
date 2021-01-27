import React, { useEffect } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './component/home'
import Header from './component/header'
import Login from './component/login'
import { auth } from './database/firebase';
import { useStateValue } from './redux/StateProvider';

function App () {
  const [{}, dispatch] = useStateValue()

  useEffect(() => {
    // will only run once when the app component loads...

    auth.onAuthStateChanged(authUser => {
      console.log('THE USER IS >>> ', authUser)
      if (authUser) {
        // the user just logged in / the user was logged in
        
        dispatch({
          type: 'SET_USER',
          user: authUser
        })

      } else {
        // the user is logged out
        dispatch({
          type: 'SET_USER',
          user: null
        })
      }
    })
  }, []);
    return (
    <Router>
        <Switch>
          <Route path='/login'>
            <Login/>
          </Route>
          <Route path='/' exact>
            <Header/>
            <Home/>
          </Route>
        </Switch>
    </Router>

    )

}

export default App