const initialState = {
  likedDogs: [],
  status: "idle",
};

export default function dogsReducer(state = initialState, action) {
  switch (action.type) {
    case "REQUEST_DOGS":
      return {
        ...state,
        status: "loading",
      };
    case "RECEIVE_DOGS":
      return {
        ...state,
        likedDogs: action.dogs,
        status: "idle",
      };
    case "RECEIVE_DOGS_ERROR":
      return {
        ...state,
        status: "error",
      };
    default: {
      return state;
    }
  }
}
