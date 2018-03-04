import React from 'react'
import { push } from 'react-router-redux'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import {
    fetchSubmissions,
    fetchCommentsFromSubmission
} from '../../actions'
import SubmissionItem from './SubmissionItem'


const SubmissionsList = (props) => (
  <div>
    <h1>Home</h1>
    <p>Count:</p>

    <p>
        <button disabled={props.isPending} onClick={props.fetchSubmissions}>Increment</button>
        <button disabled={props.isPending} onClick={props.fetchCommentsFromSubmission}>Increment</button>
    </p>
      <SubmissionItem data={props.commentsList} />
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