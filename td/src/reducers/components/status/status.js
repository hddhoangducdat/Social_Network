import _ from "lodash";

export default (state = {}, action) => {
  switch (action.type) {
    case "CREATE_STATUS":
      return { ...state, [action.payload.id]: action.payload };
    case "POST_STATUS":
      return { ...state, ..._.mapKeys(action.payload, "id") };
    case "GET_STATUS":
      return { ...state, ..._.mapKeys(action.payload, "id") };
    case "UNFRIEND":
      return _.omit(state, action.payload);
    case "ERASE_ALL":
      return {};

    default:
      return state;
  }
};
