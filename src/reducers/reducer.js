import { movieListAsMap, getAllIds, getLeastValuedIds,getMostValuedIds   } from "../utils/normalize";;
const movieReducer = (state,action) => {
    switch (action.type) {
        case 'ADD_MOVIES':
            const movieList = movieListAsMap(action.payload, state.movieList)
            const all = getAllIds(action.payload, state.list.all)
            const leastValued = getLeastValuedIds(action.payload, state.list.leastValued)
            const mostValued = getMostValuedIds(action.payload, state.list.mostValued)
            
            return {
                ...state,
                movieList,
                list: {
                    ...state.list,
                    all,
                    leastValued,
                    mostValued,
                }
            }
            case 'SET_FILTER':
            return {
                ...state,
                filter: action.payload,
            }
            default:
                return state;
    }
}

export default movieReducer;