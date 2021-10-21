import React, { useEffect } from 'react';
import { Sidebar, Header, EmailList, SendMail, Login, Mail } from "./components/index";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { selectSendMessageIsOpen } from "./features/mailSlice";
import { selectUser, login } from "./features/userSlice";
import { auth } from "./firebase";
import './App.css';

function App() {
  const sendMessageIsOpen = useSelector(selectSendMessageIsOpen);
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged(user =>{
      if (user) {
        // the user is logged in
        dispatch(login({
          displayName: user.displayName,
          email: user.email,
          photoUrl: user.photoURL,
        }))
      }
    })
  }, [dispatch])

  return (
    <Router>

      {!user ? (
        <Login/>
      ): (
        <div className="app">
      <Header />

      <div className="app_body">
        <Sidebar />

        <Switch>
          <Route path="/mail">
            <Mail />
          </Route>
          <Route path="/">
            <EmailList />
          </Route>
        </Switch>
      </div>
      
      {sendMessageIsOpen && <SendMail />}
    </div>
      )}
    
    </Router>
  );
}

export default App;
