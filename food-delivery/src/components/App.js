import React from "react";
import { BrowserRouter, Route, Switch} from "react-router-dom";
import Home from "./Home";
import About from "./About/About";
import Contact from "./Contact/Contact";
import Dashboard from "./Dashboard/Dashboard";
import Food from "./Items/Food";
import Fooditems from "./Items/Fooditems";
import EditFooditems from "./Items/EditFooditems";
import Order from "./Items/Order";
import Navbar from "./Navbar/Navbar";
import Profile from "./Authentication/Profile";
import Login from "./Authentication/Login";
import Submitted from "./Submitted/Submitted";
import Register from "./Authentication/Register";
import ViewFoodItems from "./Items/ViewFoodItems";


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
              <Route path="/dash" exact component={Dashboard} />
              <Route path="/fooditems" exact component={Food} />
              <Route path="/food" exact component={Fooditems}/>
              <Route path="/editfooditems" exact component={EditFooditems}/>
              <Route path="/order" exact component={Order}/>
              <Route path="/profile" export component={Profile}/>
              <Route path="/login" exact component={Login} />
              <Route path="/register" exact component={Register} />
              <Route path="/submitted" exact component={Submitted} /> 
              <Route path="/viewfooditems" exact component={ViewFoodItems} />  
 
              viewfooditems      
            </Switch>
           </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
