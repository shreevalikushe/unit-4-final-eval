import {
  GET_DATA_ERROR,
  GET_DATA_LOADING,
  GET_DATA_SUCCESS,
  POST_DATA_ERROR,
  POST_DATA_LOADING,
  POST_DATA_SUCCESS,
} from "./actionTypes";

const init = { loading: false, error: false, data: [] };
export function reducers(state = init, { type, payload }) {
  switch (type) {
    case GET_DATA_LOADING: {
      return {
        ...state,
        loading: true,
      };
    }
    case GET_DATA_SUCCESS: {
      return {
        ...state,
        data: payload,
        loading: false,
        error: false,
      };
    }
    case GET_DATA_ERROR: {
      return {
        ...state,
        error: true,
        loading: false,
      };
    }
    case POST_DATA_ERROR: {
      return {
        ...state,
        error: true,
        loading: false,
      };
    }
    case POST_DATA_LOADING: {
      return {
        ...state,
        loading: true,
        error: false,
      };
    }
    case POST_DATA_SUCCESS: {
      return {
        ...state,
        loading: false,
        error: false,
        data: [...state.data, payload],
      };
    }
    default: {
      return state;
    }
  }
}
