import React from 'react'
import { Route, Link } from 'react-router-dom'
import submissionsList from '../../containers/submissions/index'
import About from '../about/index'

const App = () => (
  <div>
    <header>
      <Link to="/">submissions List</Link>
      <Link to="/about-us">About</Link>
    </header>

    <main>
      <Route exact path="/" component={submissionsList} />
      <Route exact path="/about-us" component={About} />
    </main>
  </div>
)

export default App
