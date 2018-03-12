import React from 'react'
import {Switch, Route, Link } from 'react-router-dom'
import FrontPage from '../../containers/frontpage'
import SubmissionsList from '../../containers/subreddit'
import About from '../about'

const App = () => (
  <div>
    <header>
      <Link to="/">FrontPage</Link>
      <Link to="/about-us">About</Link>
    </header>
      <hr />

    <main>
        <Switch>
            <Route exact path="/" component={FrontPage} />
            <Route exact path='/subreddits/:subredditName' component={SubmissionsList} />
            <Route exact path="/about-us" component={About} />
        </Switch>
    </main>
  </div>
)

export default App
