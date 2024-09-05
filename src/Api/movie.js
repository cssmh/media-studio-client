import axiosSecure from ".";

export const getAllCategory = async () => {
  const { data } = await axiosSecure("/categories");
  return data;
};

export const getLatestMovies = async () => {
  const { data } = await axiosSecure("/latest-movies");
  return data;
};

export const getFeaturedMovies = async () => {
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