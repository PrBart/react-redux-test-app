import r from "../API_wrapper";

//export const FETCH_SUBMISSIONS = 'actions/FETCH_SUBMISSIONS'
export const FETCH_SUBMISSIONS_SUCCESS = 'actions/FETCH_SUBMISSIONS_SUCCESS'
export const FETCH_COMMENTS_SUCCESS = 'actions/FETCH_COMMENTS_SUCCESS'
export const REQUEST_SENT = 'actions/REQUEST_SENT'


const initialState = {
    submissions:{},
    commentsList:{},
    isPending: false
}


export default (state = initialState, action) => {
    switch (action.type) {
        case 'REQUEST_SENT':
            return {
                ...state,
                isPending: true
            }
        case 'FETCH_SUBMISSIONS_SUCCESS':
            return {
                ...state,
                submissions: action.submissions,
                isPending: !state.isPending
            }
        case 'FETCH_COMMENTS_SUCCESS':
            return {
                ...state,
                commentsList: action.commentsList,
                isPending: !state.isPending
            }
        default:
            return state
    }
}

export const fetchSubmissionSuccess = (submissions) => {
    submissions =  submissionsParser(submissions);
    return {
        type: 'FETCH_SUBMISSIONS_SUCCESS',
        submissions
    }
};

export const fetchCommentsFromSubmissionSuccess = (commentsList) => {
    commentsList = commentsList.comments;
    return {
        type: 'FETCH_COMMENTS_SUCCESS',
        commentsList
    }
};

export const fetchSubmissions = () => {
    return (dispatch) => {
        dispatch({
            type: 'REQUEST_SENT'
        });
        return r.getHot('Rainbow6',{limit: 9})
            .then(response => {
                 dispatch(fetchSubmissionSuccess(response))
            })
            .catch(error => {
                throw(error);
            });
    };
};

export const fetchCommentsFromSubmission = () => {
    return (dispatch) => {
        dispatch({
            type: 'REQUEST_SENT'
        });
        return r.getSubmission('80f9vh').expandReplies()
            .then(response => {
                 dispatch(fetchCommentsFromSubmissionSuccess(response))
            })
            .catch(error => {
                throw(error);
            });
    };
};

const submissionsParser = (submissions) => {
    submissions = submissions.map( (rawSubmission) => {
        let submission = {};
        submission.domain = rawSubmission.domain;
        submission.author = rawSubmission.author.name;
        submission.comments = {};
        submission.id = rawSubmission.id;
        submission.permalink = rawSubmission.permalink;
        submission.selftext = rawSubmission.selftext;
        submission.title = rawSubmission.title;
        return submission;
    });
    return submissions;
};