import React from 'react'
import pt from 'prop-types'
import SubmissionContent from './SubmissionContent'


const SubmissionItem = (props) => (
    <div>
        {props.data && props.data.map(submission =>
            <div key={submission.id}>
                <h3>
                    {submission.title}
                </h3>
                <SubmissionContent post_hint={submission.post_hint} content={submission.preview} media={submission.media} url={submission.url}/>
                <div>
                    <p>{submission.selftext}</p>
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
