import './App.css';
import Header from './Header/Header';
import Store from './Store/Store';

import Navbar from './Navbar/Navbar';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
   <Router>
     <div className="App">
       <Navbar/>
       <Header/>
     </div>
   </Router>
  );
}

export default App;
