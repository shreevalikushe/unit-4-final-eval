import {
  GET_DATA_ERROR,
  GET_DATA_LOADING,
  GET_DATA_SUCCESS,
  POST_DATA_ERROR,
  POST_DATA_LOADING,
  POST_DATA_SUCCESS,
} from "./actionTypes";

export function getDataLoading() {
  return {
    type: GET_DATA_LOADING,
  };
}
export function getDataSuccess(data) {
  return {
    type: GET_DATA_SUCCESS,
    payload: data,
  };
}
export function getDataError() {
  return {
    type: GET_DATA_ERROR,
  };
}

export function postDataLoading() {
  return {
    type: POST_DATA_LOADING,
  };
}
export function postDataSuccess(data) {
  return {
    type: POST_DATA_SUCCESS,
    payload: data,
  };
}
export function postDataError() {
  return {
    type: POST_DATA_ERROR,
  };
}
