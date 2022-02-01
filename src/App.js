import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./view/Home";
import Product from "./view/Product";
import Login from "./view/Login";
import Register from "./view/Register";


function App() {
  
  return (
    <Router>
      <div className="App">
        <Route exact path="/" component={Home} />
        <Route exact path="/product" component={Product} />
        <Route exact path="/Login" component={Login} />
        <Route exact path="/register" component={Register} />
        
      
      </div>
    </Router>
  );
}

export default App;
