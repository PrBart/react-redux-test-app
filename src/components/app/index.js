import React from 'react'
import { Route, Link } from 'react-router-dom'
import FrontPage from '../../containers/frontpage'
import About from '../about'

const App = () => (
  <div>
    <header>
      <Link to="/">subreddit</Link>
      <Link to="/about-us">About</Link>
    </header>

    <main>
      <Route exact path="/" component={FrontPage} />
      <Route exact path="/about-us" component={About} />
    </main>
  </div>
)

export default App
