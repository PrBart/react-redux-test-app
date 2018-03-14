import React, {Component} from 'react'
import pt from 'prop-types'
import {push} from "react-router-redux";
import { Route, Link } from 'react-router-dom'
import {addSubreddit} from "../../actions";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";


class SubredditsList extends Component{

    handleSubmit = event => {
        event.preventDefault();
        return this.props.addSubreddit(event.target.getElementsByTagName('input')[0].value, this.props.addedSubreddits)
    }


    render() {
        return  <div>
            <form action="#" onSubmit={this.handleSubmit}>
                <input
                    type="text"
                    placeholder="enter subreddit name"
                />
            </form>
            {this.props.addedSubreddits && this.props.addedSubreddits.map(subreddit =>
                <div key={subreddit.subredditName}>
                    <Link to={"/subreddits/" + subreddit.subredditName}><p>{subreddit.subredditName}</p></Link>
                </div>
            )
            }
            <hr />
        </div>
    }
}


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