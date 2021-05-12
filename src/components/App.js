import './App.css';
import Header from './Header/Header';
import GameList from './GameList'
import WishList from './WishList'

import Navbar from './Navbar/Navbar';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
   <Router>
     <div className="App">
       <Navbar/>
       <Header/>
       <div className="grid2">
       <WishList/>
       </div>
       <div className="grid">
       <GameList/>
       </div>
     </div>
   </Router>
  );
}

export default App;
