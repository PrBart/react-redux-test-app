import React from 'react'
import pt from 'prop-types'
import SubmissionContent from './SubmissionContent'


const SubmissionItem = (props) => (
    <div>
        {props.data && props.data.map(submission =>
            <div key={submission.id}>
                <h1>
                    {submission.title}
                </h1>
                <SubmissionContent post_hint={submission.post_hint} content={submission.preview} media={submission.media} />
                <div>
                    {submission.selftext}
                </div>
                <hr/>
            </div>
        )}
    </div>
)

SubmissionItem.propTypes = {
    data: pt.array
}

SubmissionItem.defaultProps = {
    data: []
};

export default SubmissionItem
