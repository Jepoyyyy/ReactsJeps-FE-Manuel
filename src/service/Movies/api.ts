import API from '../api';

export const getPopularmovies = async (page: number = 1) => {
    try{
        const response = await API.get(`movie/popular?page=${page}`)
        return response.data;
    } catch (error) {
        console.error("Error fetching popular movies:", error);
        throw error;
    }
}

export const getNowplayingmovies = async (page: number = 1) => {
    try{
        const response = await API.get(`movie/now_playing?page=${page}`)
        return response.data;
    } catch (error) {
        console.error("Error fetching now playing movies:", error);
        throw error;
    }
}

export const getTopratedmovie = async (page: number = 1) => {
    try{
        const response = await API.get(`movie/top_rated?page=${page}`)
        return response.data;
    } catch (error) {
        console.error("Error fetching top rated movies:", error);
        throw error;
    }
}

export const getUpcomingmovie = async (page: number = 1) => {
    try{
        const response = await API.get(`movie/upcoming?page=${page}`)
        return response.data;
    } catch (error) {
        console.error("Error fetching upcoming movies:", error);
        throw error;
    }
}
