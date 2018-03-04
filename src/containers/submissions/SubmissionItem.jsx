import React from 'react'
import pt from 'prop-types'

const SubmissionItem = (props) => (
    <div>
        {/*{это вот то, почему я беру рамду}*/}
        {props.data && props.data.map(comment => <p key={comment.id}>{comment.body}</p>)}
        <div>heh</div>
    </div>
)

SubmissionItem.propTypes = {
    data: pt.array
}

SubmissionItem.defaultProps = {
    data: []
};

export default SubmissionItem
