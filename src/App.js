import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./view/Home";
import Product from "./view/Product";


function App() {
  
  return (
    <Router>
      <div className="App">
        <Route exact path="/" component={Home} />
        <Route exact path="/product" component={Product} />
        
      
      </div>
    </Router>
  );
}

export default App;
