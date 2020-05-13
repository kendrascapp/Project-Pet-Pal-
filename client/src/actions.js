//--- save liked dogs

export const requestDogs = () => ({
  type: "REQUEST_DOGS",
});

export const receiveDogs = (dogs) => ({
  type: "RECEIVE_DOGS",
  dogs,
});

export const receiveDogError = () => ({
  type: "RECEIVE_DOGS_ERROR",
});
