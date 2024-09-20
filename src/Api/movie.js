import axiosSecure from ".";

export const getNowPlaying = async () => {
  const { data } = await axiosSecure("/latest-movies");
  return data;
};

export const getTopMovies = async () => {
  const { data } = await axiosSecure("/featured-movies");
  return data;
};

export const getTypeMovies = async (type) => {
  const { data } = await axiosSecure(`/type-movies/${type}`);
  return data;
};

export const getMyCart = async (email) => {
  const { data } = await axiosSecure(`/cart/${email}`);
  return data;
};

export const getMovieDetails = async (id) => {
  const { data } = await axiosSecure(`/cine/${id}`);
  return data;
};

export const deleteMyCart = async (id) => {
  const { data } = await axiosSecure.delete(`/cart/${id}`);
  return data;
};

export const addCart = async (cartData) => {
  const { data } = await axiosSecure.post("/add-cart", cartData);
  return data;
};

export const addCine = async (cineData) => {
  const { data } = await axiosSecure.post("/cine", cineData);
  return data;
};

export const updateCine = async (id, updatedData) => {
  const { data } = await axiosSecure.put(`cine/${id}`, updatedData);
  return data;
};

export const addPayment = async (selectedItems) => {
  const { data } = await axiosSecure.put("/cart-payment", { selectedItems });
  return data;
};
