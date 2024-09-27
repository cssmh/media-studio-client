import toast from "react-hot-toast";
import useAuth from "../hooks/useAuth";

const MyProfile = () => {
  const { user, updateUser } = useAuth();
  const { displayName, email, metadata, photoURL } = user;

  const handleUpdate = async (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const photo = form.photo.value;

    try {
      await updateUser(name, photo);
      toast.success("Update successful");
    } catch (err) {
      toast.error(err.message);
    }
  };

  return (
    <div className="p-4 md:p-8">
      <div className="flex justify-center items-center md:gap-8 mb-8">
        <img
          src={photoURL}
          alt="Profile"
          className="w-20 h-20 md:w-24 md:h-24 rounded-full shadow-lg border-4 border-red-500"
        />
        <div className="text-center md:text-left">
          <h1 className="md:text-xl font-bold text-gray-800">
            Hi, {displayName}
          </h1>
          <p className="text-gray-600">{email}</p>
          <p className="text-gray-500">
            Account Created on: <br />
            <span className="font-medium">
              {new Date(metadata.creationTime).toLocaleDateString()}
            </span>
          </p>
        </div>
      </div>
      <form
        onSubmit={handleUpdate}
        className="border shadow-lg rounded-lg p-6 max-w-lg mx-auto bg-white"
      >
        <h2 className="md:text-xl font-semibold mb-6 text-center text-gray-800">
          Update Info
        </h2>
        <div className="mb-4">
          <label
            htmlFor="name"
            className="block text-sm font-medium mb-1 text-gray-700"
          >
            Your Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            defaultValue={displayName}
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 transition duration-200"
            required
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="photo"
            className="block text-sm font-medium mb-1 text-gray-700"
          >
            Photo URL
          </label>
          <input
            type="text"
            id="photo"
            name="photo"
            defaultValue={photoURL}
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 transition duration-200"
            required
          />
        </div>
        <div className="text-center">
          <button
            type="submit"
            className="px-6 py-3 bg-red-500 text-white font-semibold rounded-md shadow-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 transition duration-200"
          >
            Update Info
          </button>
        </div>
      </form>
    </div>
  );
};

export default MyProfile;
