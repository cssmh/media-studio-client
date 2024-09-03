import axiosSecure from ".";

export const getMyCart = async (email) => {
  const { data } = await axiosSecure(`/cart/${email}`);
  return data;
};

export const deleteMyCart = async (id) => {
  const { data } = await axiosSecure.delete(`/cart/${id}`);
  return data;
};
