import axiosSecure from ".";

export const getTopMovies = async () => {
  const { data } = await axiosSecure("/top-movies");
  return data;
};

export const getNowPlaying = async () => {
  const { data } = await axiosSecure("/now-playing");
  return data;
};

export const getMyBookings = async (email) => {
  const { data } = await axiosSecure(`/my-bookings/${email}`);
  return data;
};

export const getMovieDetails = async (id) => {
  const { data } = await axiosSecure(`/cine/${id}`);
  return data;
};

export const deleteMyBooking = async (id) => {
  const { data } = await axiosSecure.delete(`/my-booking/${id}`);
  return data;
};

export const addBooking = async (cartData) => {
  const { data } = await axiosSecure.post("/add-booking", cartData);
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
