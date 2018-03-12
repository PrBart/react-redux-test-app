import React from 'react'
import pt from 'prop-types'

const SubmissionContent = (props) => (
    <div>
        {(() => {
            console.log(props.post_hint);
            switch (props.post_hint) {
                case 'hosted:video':
                    return <video controls ><source src={props.media.reddit_video.fallback_url}></source></video>
                case 'rich:video':
                    return <img src={props.media.oembed.thumbnail_url} />
                case 'image' :
                case 'self' :
                case 'link' :
                    return <img src={props.content.images[0].source.url} />
                default:
                    return ''
            }
        })()}
    </div>
    );

SubmissionContent.propTypes = {
    content: pt.object,
    domain : pt.string
}

SubmissionContent.defaultProps = {
    content: [],
    domain : ''
};
export default SubmissionContent
