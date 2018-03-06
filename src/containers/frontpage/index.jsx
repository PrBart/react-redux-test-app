import React from 'react'
import { push } from 'react-router-redux'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import pt from "prop-types"

import SubmissionsList from '../subreddit'
import SubredditsList from './SubredditsList'

const FrontPage = (props) => (
    <div>
        <SubredditsList />
        <SubmissionsList />
    </div>
)

const mapStateToProps = state => ({

})

const mapDispatchToProps = dispatch => bindActionCreators({

}, dispatch)

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(FrontPage)