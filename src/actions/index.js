import r from "../API_wrapper";
import {FETCH_SUBMISSIONS_SUCCESS, FETCH_COMMENTS_SUCCESS, REQUEST_SENT, ADD_SUBREDDIT_SUCCESS, INPUT_SUBREDDIT_NAME, WRONG_SUBREDDIT_DUPLICATE_FOUND, SUBREDDIT_DOES_NOT_EXIST } from '../constants/index';

export const fetchSubmissionSuccess = (submissions) => {
    submissions = submissionsParser(submissions);
    return {
        type: FETCH_SUBMISSIONS_SUCCESS,
        submissions
    }
};

export const fetchCommentsFromSubmissionSuccess = (commentsList) => {
    commentsList = commentsList.comments.map(a => a);
    return {
        type: FETCH_COMMENTS_SUCCESS,
        commentsList
    }
};

export const fetchSubmissions = (subredditLink) => {
    return (dispatch) => {
        dispatch({
            type: REQUEST_SENT
        });
        return r.getHot(subredditLink,{limit: 9})
            .then(response => {
                 dispatch(fetchSubmissionSuccess(response))
            })
            .catch(error => {
                dispatch({
                    type: SUBREDDIT_DOES_NOT_EXIST
                });
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
    console.log(submissions);
    return submissions.map(rawSubmission => {
        let submission = {
            domain:[''],
            author:[''],
            comments : {},
            id : [''],
            permalink : [''],
            selftext : [''],
            title : [''],
            preview : {},
            post_hint : [''],
            media : {},
            url : ['']
    };
        return {
            domain: rawSubmission.domain || [''],
            author: rawSubmission.author.name || [''],
            comments : {},
            id : rawSubmission.id || [''],
            permalink : rawSubmission.permalink || [''],
            selftext : rawSubmission.selftext || [''],
            title : rawSubmission.title || [''],
            preview : rawSubmission.preview || {},
            post_hint : rawSubmission.post_hint || [''],
            media : rawSubmission.media || {},
            url : rawSubmission.url || ['']
        };
    });
};

export const addSubreddit = (subredditInputedName, addedSubreddits) => {

    if (!addedSubreddits.find(subreddit => {
            return subreddit.subredditName === subredditInputedName
        })) {
        let subredditInputedObj = {
            subredditName: subredditInputedName
        };

        return (dispatch) => {
            dispatch(checkSubredditExistence(subredditInputedObj))
        };
    }

    return (dispatch) => {
        dispatch({
            type: WRONG_SUBREDDIT_DUPLICATE_FOUND
        });

    }
}

export const checkSubredditExistence = (subredditInputedObj) => {
    return (dispatch) => {
        dispatch({
            type: REQUEST_SENT
        });
        return r.getHot(subredditInputedObj.subredditName ,{limit: 0})
            .then(response => {
                dispatch(addSubredditSuccees(subredditInputedObj))
            })
            .catch(error => {
                    dispatch({
                        type: SUBREDDIT_DOES_NOT_EXIST
                    });
            });
    };
};

export const addSubredditSuccees = (subreddit) => {
    return {
        type: ADD_SUBREDDIT_SUCCESS,
        subreddit
    }
};