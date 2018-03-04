import { REQUEST_SENT, FETCH_COMMENTS_SUCCESS, FETCH_SUBMISSIONS_SUCCESS } from '../constants';


const initialState = {
	submissions: {},
	commentsList: [],
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
		default:
			return state
	}
}