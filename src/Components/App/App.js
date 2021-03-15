import './App.css';
import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Homepage from '../Homepage/Homepage';
import Footer from '../Footer/Footer';
import Nav from '../Navbar/Navbar';
import WorkInProgress from '../WorkInProgress/WorkInProgress'



class App extends React.Component {

render() {
  return (
    <Router>
      <div className="App">
        <Nav />
          <Switch >
              <Route path="/" exact component={Homepage}/>
              <Route path="/WorkInProgress" component={WorkInProgress}/>
          </Switch>
          <Footer />
      </div>
    </Router>
  );
}

}

export default App;
