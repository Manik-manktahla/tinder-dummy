import React from "react";
import Header from "./Header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import TinderCards from "./TinderCards";
import SwipeButtons from "./SwipeButtons";
import ChatScreen from "./ChatScreen";

import Chats from "./Chats";
function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route
            path="/chat/:person"
            render={(props) => (
              <div>
                <Header backButton="/chat" />
                <ChatScreen name={props.match.params.person}/>
              </div>
            )}
          ></Route>
          <Route path="/chat">
            <Header backButton="/" />
            <Chats />
          </Route>
          <Route path="/">
            <Header />
            <TinderCards />
            <SwipeButtons />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
