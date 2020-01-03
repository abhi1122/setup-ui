import { ADD_ARTICLE } from "../constants/action-types";

let initialState = { articles: [] };

export default function users(state = initialState, action) {
    switch (action.type) {
        case ADD_ARTICLE:
            state.articles.push(action.payload.title);
            return state;
        default:
            return state
    }
}