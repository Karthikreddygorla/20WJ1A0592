import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Headrer.jsx';
import AllTrainsPage from './pages/AllTrainsPage';
import SingleTrainPage from './pages/SingleTrainPage';

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Switch>
          <Route path="/" exact component={AllTrainsPage} />
          <Route path="/train/:trainNumber" component={SingleTrainPage} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
