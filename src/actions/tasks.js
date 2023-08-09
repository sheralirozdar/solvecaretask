import {FETCH_DATA_SUCCESS ,
  ADD_DATA_SUCCESS ,
  UPDATE_DATA_SUCCESS, 
  DELETE_DATA_SUCCESS,
  FETCH_SINGLE_DATA_SUCCESS 
} from "./types"
import axios from 'axios';

const baseURL = 'http://localhost:8000';

const api = axios.create({
  baseURL,
});




export const fetchTasks = () => async (dispatch) => {
  try {
    const response = await api.get('/tasks');
    dispatch({ type: FETCH_DATA_SUCCESS, payload: response.data });
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};
export const fetchTask = (id) => async (dispatch) => {
  try {           

    const response = await api.get(`/tasks/${id}`);
    console.log("actio n res",response.data)
    dispatch({ type: FETCH_SINGLE_DATA_SUCCESS, payload: response.data });
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};
export const addTask = (newData) => async (dispatch) => {
  try {
    const response = await api.post('/tasks', newData);
    dispatch({ type: ADD_DATA_SUCCESS, payload: response.data });
  } catch (error) {
    console.error('Error adding data:', error);
  }
};

export const updateTask = (id, updatedData) => async (dispatch) => {
  try {
    const response = await api.put(`/tasks/${id}`, updatedData);
    dispatch({ type: UPDATE_DATA_SUCCESS, payload: { id, updated: response.data } });
    dispatch(fetchTasks())
  } catch (error) {
    console.error('Error updating data:', error);
  }
};

export const deleteTask = (id) => async (dispatch) => {
  try {
    await api.delete(`/tasks/${id}`);
    dispatch({ type: DELETE_DATA_SUCCESS, payload: id });
    dispatch(fetchTasks())

  } catch (error) {
    console.error('Error deleting data:', error);
  }
};
