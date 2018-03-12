import r from "../API_wrapper";
import {FETCH_SUBMISSIONS_SUCCESS, FETCH_COMMENTS_SUCCESS, REQUEST_SENT, ADD_SUBREDDIT_SUCCESS, INPUT_SUBREDDIT_NAME, WRONG_SUBREDDIT_DUPLICATE_FOUND } from '../constants/index';

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
            media : {}
    };
        if (rawSubmission.domain) submission.domain = rawSubmission.domain;
        if (rawSubmission.author) submission.author = rawSubmission.author.name;
        if (rawSubmission.comments) submission.comments = {};
        if (rawSubmission.id) submission.id = rawSubmission.id;
        if (rawSubmission.permalink) submission.permalink = rawSubmission.permalink;
        if (rawSubmission.selftext) submission.selftext = rawSubmission.selftext;
        if (rawSubmission.title) submission.title = rawSubmission.title;
        if (rawSubmission.preview) submission.preview = rawSubmission.preview;
        if (rawSubmission.post_hint) submission.post_hint = rawSubmission.post_hint;
        if (rawSubmission.media) submission.media = rawSubmission.media;
        if (rawSubmission.url) submission.url = rawSubmission.url;
        return submission;
    });
};

export const addSubreddit = (e, addedSubreddits) => {
        e.preventDefault();
        let subredditInputedName = e.target.getElementsByTagName('input')[0].value;

    if(!addedSubreddits.find( subreddit =>   {return subreddit.subredditName === subredditInputedName}))
    {
        let subredditInputedObj = {
            subredditName: subredditInputedName
        };

        return (dispatch) => {
            dispatch(checkSubredditExistence(subredditInputedObj))
        };
    }else {
        return {
            type: WRONG_SUBREDDIT_DUPLICATE_FOUND
        }
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
                throw(error);
            });
    };
};

export const addSubredditSuccees = (subreddit) => {
    return {
        type: ADD_SUBREDDIT_SUCCESS,
        subreddit
    }
};