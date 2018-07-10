import { RECEIVE_API_DATA } from "../actions";

export default (state = {}, { type, data }) => {
  debugger;
  switch (type) {
    case RECEIVE_API_DATA:
      return data;
    default:
      return state;
  }
};
