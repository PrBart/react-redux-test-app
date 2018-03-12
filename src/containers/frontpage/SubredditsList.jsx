import React from 'react'
import pt from 'prop-types'
import {push} from "react-router-redux";
import { Route, Link } from 'react-router-dom'
import {addSubreddit} from "../../actions";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";

const SubredditsList = (props) =>(
    <div>
    <form action="#" onSubmit={event => props.addSubreddit(event, props.addedSubreddits)}>
        <input
            type="text"
            placeholder="enter subreddit name"
        />
    </form>
        {props.addedSubreddits && props.addedSubreddits.map(subreddit =>
            <div key={subreddit.subredditName}>
                <Link to={"/subreddits/" + subreddit.subredditName}><p>{subreddit.subredditName}</p></Link>
            </div>
            )
        }
        <hr />
    </div>
)

const mapStateToProps = state => ({
    addedSubreddits: state.store.addedSubreddits,
})

const mapDispatchToProps = dispatch => bindActionCreators({
    addSubreddit
}, dispatch)

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SubredditsList)