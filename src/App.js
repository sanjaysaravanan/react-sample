import "./App.css";
import React, { useState } from "react";
import Login from "./Login/Login";
import Register from "./Register/Register";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Counter from "./Counter/Counter";

// function App() {
//   const [page, setPage] = useState("login");

//   return (
//     <div className="App">
//       {/** DOM Manipulation using state */}
//       {page === "login" && <Login registerAction={() => setPage("register")} />}
//       {page === "register" && <Register loginAction={() => setPage("login")} />}

//       {/** DOM Manipulation using Routing */}
//       {/* <Router>
//         <Switch>
//           <Route path="/" component={Login} exact />
//           <Route path="/register" component={Register} exact />
//         </Switch>
//       </Router> */}
//     </div>
//   );
// }

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { page: "login" };
  }

  render() {
    return (
      <div className="App">
        {/** DOM Manipulation using state */}
        {/* {this.state.page === "login" && (
          <Login registerAction={() => this.setState({ page: "register" })} />
        )}
        {this.state.page === "register" && (
          <Register loginAction={() => this.setState({ page: "login" })} />
        )} */}

        {/** DOM Manipulation using Routing */}
        <Router>
          <Link to="/">Login</Link>
          <br />
          <Link to="/register">Register</Link>
          <br />
          <Link to="/counter">Counter</Link>
          <Switch>
            <Route path="/" component={Login} exact />
            <Route path="/register" component={Register} exact />
            <Route path="/counter" component={Counter} />
          </Switch>
        </Router>
      </div>
    );
  }
}

// Class Vs Functional Component in babel transpilation
// function App() {
//   return <h1>Sanjay Saravanan</h1>;
// }
// class App extends React.Component {
//   render() {
//     return (<h1>Sanjay Saravanan</h1>)
//   }
// }

export default App;
