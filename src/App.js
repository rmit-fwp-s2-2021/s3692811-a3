import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/home/Home";
import "./bootstrap-4.3.1-dist/css/bootstrap.min.css";
const App = () => {
  return (
    <div style={{ background: "#F4F6F7", height: "200vh" }} className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
