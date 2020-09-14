import React from "react";
import { BrowserRouter, Route, Switch} from "react-router-dom";
import Home from "./Home";
import About from "./About/About";
import Contact from "./Contact/Contact";
import Food from "./Items/Food";
import Navbar from "./Navbar/Navbar";
import Login from "./Authentication/Login";
import Register from "./Authentication/Register";
// import decode from "jwt-decode";

// const checkAuth = () => {
//   const token = localStorage.getItem("token");
//   if (!token) {
//     return false;
//   }
//   try {
//     const { exp } = decode(token);
//     console.log(exp);
//     if (exp < new Date().getTime() / 1000) {
//       return false;
//     }
//   } catch (e) {
//     return false;
//   }

//   return true;
// };

// const AuthRoute = ({ component: Component, ...rest }) => {
//   return (
//     <Route
//       {...rest}
//       render={props =>
//         checkAuth() ? (
//           <Component {...props} />
//         ) : (
//           <Redirect
//             to={{
//               pathname: "/login"
//               // state: { from: props.location }
//             }}
//           />
//         )
//       }
//     />
//   );
// };

class App extends React.Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <div>
            <div>
              <Navbar />
            </div>
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/about" exact component={About}/>
              <Route path="/contact" exact component={Contact} />
              <Route path="/fooditems" exact component={Food} />
              <Route path="/login" exact component={Login} />
              <Route path="/register" exact component={Register} />
            </Switch>
           </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
