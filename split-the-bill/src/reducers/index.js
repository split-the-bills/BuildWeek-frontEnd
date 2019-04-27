import {
    LOGIN_START,
    LOGIN_SUCCESS,
    LOGIN_FAILURE,
    REGISTER_START,
    REGISTER_SUCCESS,
    REGISTER_FAILURE,
    FETCH_DATA_START,
    FETCH_DATA_SUCCESS,
    FETCH_DATA_FAILURE
  } from "../actions";
  
  const initialState = {
    id: "",
    username: "",
    password: "",
    phone: "",
    email: "",
    isRegistering: false,
    isLogginIn: false,
    errors: "",
    errorStatusCode: null,
    fetchingData: false,
    isLoggingIn: false,
    userDashboard: []
  };
  
  const reducer = (state = initialState, action) => {
    switch (action.type) {
      case LOGIN_START: {
        return {
          ...state,
          loginError: "",
          isLoggingIn: true
        };
      }
      case LOGIN_SUCCESS: {
        return {
          ...state,
          isLoggingIn: false
        };
      }
      case LOGIN_FAILURE: {
        return {
          ...state,
          loginError: "failed login",
          isLoggingIn: false
        };
      }
      case REGISTER_START: {
        return {
          ...state,
          registerError: "",
          isRegistering: true
        };
      }
      case REGISTER_SUCCESS: {
        return {
          ...state,
          isRegistering: false
        }
      }
      case REGISTER_FAILURE: {
        return {
          ...state,
          registerError: "failed to register",
          isRegistering: false
        }
      }
      case FETCH_DATA_START:
        return {
          ...state,
          error: "",
          fetchingData: true
        };
      case FETCH_DATA_SUCCESS:
        console.log(action.payload);
        return {
          ...state,
          error: "",
          fetchingData: false,
          userDashboard: action.payload
        };
      case FETCH_DATA_FAILURE:
        return {
          ...state,
          errorStatusCode: action.payload.status
        };
      default:
        return state;
    }
  };
  
  export default reducer;