import {BrowserRouter, Route, Switch } from "react-router-dom"
import Home from "./components/Home"
import Recipes from "./components/Recipes"
import SingleRecipe from "./components/SingleRecipe"
import Blog from "./components/Blog"

function App() {
    return (
      <BrowserRouter>
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
