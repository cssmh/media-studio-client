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
    <div className="container mx-auto p-4 md:p-8">
      <div className="flex flex-col md:flex-row items-center gap-6 mb-8">
        <img
          src={photoURL}
          alt="Profile"
          className="w-32 md:w-48 rounded-full shadow-lg"
        />
        <div className="text-center md:text-left">
          <h1 className="text-3xl font-semibold">
            Hi, {displayName}
          </h1>
          <p>{email}</p>
          <p>
            Account Created on: <br />
            {new Date(metadata.creationTime).toLocaleDateString()}
          </p>
        </div>
      </div>
      <form
        onSubmit={handleUpdate}
        className="border shadow-md rounded-lg p-6 max-w-lg mx-auto"
      >
        <h2 className="text-2xl font-semibold mb-6 text-center">
          Update Info
        </h2>
        <div className="mb-4">
          <label
            htmlFor="name"
            className="block text-sm font-medium mb-1"
          >
            Your Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            defaultValue={displayName}
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
            required
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="photo"
            className="block text-sm font-medium mb-1"
          >
            Photo URL
          </label>
          <input
            type="text"
            id="photo"
            name="photo"
            defaultValue={photoURL}
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
            required
          />
        </div>
        <div className="text-center">
          <button
            type="submit"
            className="px-4 py-2 bg-red-500 text-white font-semibold rounded-md shadow-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500"
          >
            Update Info
          </button>
        </div>
      </form>
    </div>
  );
};

export default MyProfile;
