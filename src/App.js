import "./App.css";
import { useState } from "react";
import Login from "./Login/Login";
import Register from "./Register/Register";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  const [page, setPage] = useState("login");

  return (
    <div className="App">
      {/** DOM Manipulation using state */}
      {page === "login" && <Login registerAction={() => setPage("register")} />}
      {page === "register" && <Register loginAction={() => setPage("login")} />}

      {/** DOM Manipulation using Routing */}
      {/* <Router>
        <Switch>
          <Route path="/" component={Login} exact />
          <Route path="/register" component={Register} exact />
        </Switch>
      </Router> */}
    </div>
  );
}

export default App;
