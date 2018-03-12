import { REQUEST_SENT, FETCH_COMMENTS_SUCCESS, FETCH_SUBMISSIONS_SUCCESS, ADD_SUBREDDIT_SUCCESS, INPUT_SUBREDDIT_WRONG_NAME, SUBREDDIT_DOES_NOT_EXIST } from '../constants';


const initialState = {
	submissions: [],
	commentsList: [],
    addedSubreddits: [],
	isPending: false
}

export default (state = initialState, action) => {
	switch (action.type) {
		case REQUEST_SENT:
			return {
				...state,
				isPending: true
			}
		case FETCH_SUBMISSIONS_SUCCESS:
			return {
				...state,
				submissions: action.submissions,
				isPending: !state.isPending
			}
		case FETCH_COMMENTS_SUCCESS:
			return {
				...state,
				commentsList: action.commentsList,
				isPending: !state.isPending
			}
		case ADD_SUBREDDIT_SUCCESS:
			return{
				...state,
                addedSubreddits : [...state.addedSubreddits, action.subreddit],
                isPending: !state.isPending
			}
		case INPUT_SUBREDDIT_WRONG_NAME:
            return{
				...state,
                isPending: !state.isPending
            }
		case SUBREDDIT_DOES_NOT_EXIST:
			return{
				...state,
                isPending:  !state.isPending
			}
		default:
			return state
	}
}