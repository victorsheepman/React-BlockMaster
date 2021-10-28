import DB from "../utils/DB"
import { movieListAsMap, getAllIds, getLeastValuedIds,getMostValuedIds   } from "../utils/normalize";
import { useState, useEffect } from "react";
const API = 'https://api.themoviedb.org/3/discover/movie?api_key=ffae6ceb377fb3d244739ecd9b2c1a1d'

export const initialState={
    movieList: movieListAsMap(DB),
    filter: 'all',
    list:{
        all: getAllIds(DB),
        mostValued: getMostValuedIds(DB),
        leastValued: getLeastValuedIds(DB),
    },
}

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