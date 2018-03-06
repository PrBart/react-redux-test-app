import React from 'react'
import { push } from 'react-router-redux'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import pt from "prop-types"

import {
    fetchSubmissions,
    fetchCommentsFromSubmission
} from '../../actions'

import SubmissionItem from './SubmissionItem'


const SubmissionsList = (props) => (
  <div>
    <h1></h1>

    <p>
        <button disabled={props.isPending} onClick={props.fetchSubmissions}>PULL HOTPOSTS</button>
        <button disabled={props.isPending} onClick={props.fetchCommentsFromSubmission}>PULL USELESS COMMENTS</button>
    </p>
      <SubmissionItem data={props.submissions} />
    <p><button onClick={() => props.changePage()}>Go to about page via redux</button></p>
  </div>
)

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