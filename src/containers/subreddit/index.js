import React, { Component } from 'react'
import { push } from 'react-router-redux'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import pt from "prop-types"

import {
    fetchSubmissions,
    fetchCommentsFromSubmission
} from '../../actions'

import SubmissionItem from './SubmissionItem'

class SubmissionsList extends Component {

    componentDidMount() {
        this.props.fetchSubmissions(this.props.match.params.subredditName);
    }

    render() {
        return  <div>
            <p>{this.props.match.params.subredditName}</p>
            <SubmissionItem data={this.props.submissions} />
            <p><button onClick={() => this.props.changePage()}>Go to about page</button></p>
        </div>;
    }
}

const mapStateToProps = state => ({
    commentsList: state.store.commentsList,
    submissions: state.store.submissions,
    isPending: state.store.isPending
})

const mapDispatchToProps = dispatch => bindActionCreators({
    fetchSubmissions,
    fetchCommentsFromSubmission,
    changePage: () => push('/about-us')
}, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SubmissionsList)

SubmissionsList.propTypes = {
    isPending: pt.bool,
    submissions: pt.array,
    commentsList: pt.array
}

SubmissionsList.defaultProps = {
    isPending: false,
    submissions: [],
    commentsList: []
};