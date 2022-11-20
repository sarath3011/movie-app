import { createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import MovieApi from '../../common/API/MovieApi';
import {APIKey} from "../../common/API/MovieApiKey"
const initialState = {
    movies : {},
    shows : {},
    selectedMovieorShow:{}
}
 export const fetchAsyncMovies = createAsyncThunk('movies/fetchAsyncMovies',
async()=>{
     const MovieText = "Furious"

     const response = await MovieApi.get(`?apikey=${APIKey}&s=${MovieText}&type=movie`)
    
return response.data
 
})
 export const fetchAsyncShows = createAsyncThunk('movies/fetchAsyncShows',
async()=>{
     const ShowText = "Friends"
     const response = await MovieApi.get(`?apikey=${APIKey}&s=${ShowText}&type=series`)
    
return response.data
 
})
export const fetchAsyncMovieOrShowDetail = createAsyncThunk('movies/fetchAsyncMovieOrShowDetail',
async(id)=>{
     const response = await MovieApi.get(`?apikey=${APIKey}&i=${id}&Plot=full`)
    
return response.data
 
})
const movieSlice = createSlice ({
    name:"movies",initialState,
    reducers:{
        removeSelectedMovieorShow:(state) =>{
            state.selectedMovieorShow = {}
        }
    },
    extraReducers:{
        [fetchAsyncMovies.pending]:() =>{
            console.log("pending");
        },
        [fetchAsyncMovies.fulfilled]:(state,{payload}) =>{
            console.log("fetched SuccessFully");
            return {
                ...state,movies : payload            }
        },
        [fetchAsyncMovies.rejected]:() =>{
            console.log("rejected");
        },
        [fetchAsyncShows.fulfilled]:(state,{payload}) =>{
            console.log("fetched SuccessFully");
            return {
                ...state,shows : payload            }
        },
        [fetchAsyncMovieOrShowDetail.fulfilled]:(state,{payload}) =>{
            console.log("fetched SuccessFully");
            return {
                ...state,selectedMovieorShow : payload            }
        }
    }
})
export const {removeSelectedMovieorShow} = movieSlice.actions;
 export const getAllMovies =(state)=>state.movies.movies; // fetching state value from store
 export const getAllShows =(state)=>state.movies.shows; 
 export const getSelectedMovieorShow = (state)=>state.movies.selectedMovieorShow;
 export default movieSlice.reducer;
