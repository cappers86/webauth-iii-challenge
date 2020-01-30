import React from 'react';
import {Route, NavLink, withRouter} from 'react-router-dom';
import Login from './components/login';
import './App.css';

function App() {
  return (
    <div className="App">
      <header>
        <nav>
          <NavLink to='/login'>login</NavLink>
        </nav>
      </header>
      
      <main>
        <Route path='/login' component={Login}/>
      </main>
    </div>
  );
}

export default withRouter(App);
