import _ from "lodash";

export default (state = {}, action) => {
  switch (action.type) {
    case "POST_NOTI_COMMENT":
      return { ...state, [action.payload.id]: action.payload };
    case "ERASE_NOTI_COMMENT":
      return _.omit(state, action.payload);
    case "GET_NOTI_COMMENT":
      return { ...state, ..._.mapKeys(action.payload, "id") };
    case "ERASE_ALL":
      return {};
    default:
      return state;
  }
};
