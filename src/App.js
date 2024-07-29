import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom'
import Home from './components/HomeRoute'
import Register from './components/RegisterRoute'
import NotFound from './components/NotFoundRoute'

const App = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/register" component={Register} />
      <Route path="/not-found" component={NotFound} />
      <Redirect path="/not-found" />
    </Switch>
  </Router>
)

export default App
