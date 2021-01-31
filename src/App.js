import {BrowserRouter, Route, Switch } from "react-router-dom"
import Home from "./components/Home/Home"
import Recipes from "./components/Recipes/Recipes"
import SingleRecipe from "./components/SingleRecipe/SingleRecipe"
import Blog from "./components/Blog/Blog"
import NavBar from "./components/NavBar/NavBar.js"
import "./app.css";

function App() {
    return (
      <BrowserRouter>
        <NavBar/>
          <Switch>
            <Route component={Home} path='/' exact />
            <Route component={Recipes} path='/recipes' />
            <Route component={SingleRecipe} path='/recipe/:slug' />
            <Route component={Blog} path='/blog' />
          </Switch>
      </BrowserRouter>
    );
}

export default App;
