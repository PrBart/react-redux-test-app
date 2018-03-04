import r from "../API_wrapper";
import { FETCH_SUBMISSIONS_SUCCESS, FETCH_COMMENTS_SUCCESS, REQUEST_SENT } from '../constants/index';

export const fetchSubmissionSuccess = (submissions) => {
    submissions = submissionsParser(submissions);
    return {
        type: FETCH_SUBMISSIONS_SUCCESS,
        submissions
    }
};

export const fetchCommentsFromSubmissionSuccess = (commentsList) => {
    console.log(commentsList)
    commentsList = commentsList.comments.map(a => a);
    return {
        type: FETCH_COMMENTS_SUCCESS,
        commentsList
    }
};

export const fetchSubmissions = () => {
    return (dispatch) => {
        dispatch({
            type: REQUEST_SENT
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
            type: REQUEST_SENT
        });
        return r.getSubmission('80f9vh').fetch()
            .then(response => {
                 dispatch(fetchCommentsFromSubmissionSuccess(response))
            })
            .catch(error => {
                throw(error);
            });
    };
};

const submissionsParser = (submissions) => {
    return submissions.map(rawSubmission => {
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
};