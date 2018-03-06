import React from 'react'
import pt from 'prop-types'
import {push} from "react-router-redux";
import {addSubreddit} from "../../actions";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";

const SubredditsList = (props) =>(
    <div>
    <form action="#" onSubmit={event => props.addSubreddit(event)}>
        <input
            type="text"
            placeholder="enter subreddit name"
        />
    </form>
        {props.addedSubreddits.map(subreddit =>
            <div key={subreddit}>
                <p>{subreddit}</p>
            </div>
            )
        }
    </div>
)

const mapStateToProps = state => ({
    addedSubreddits: state.store.addedSubreddits
})

const mapDispatchToProps = dispatch => bindActionCreators({
    addSubreddit
}, dispatch)

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SubredditsList)