import { useContext } from "react";
import { AuthContextCine } from "../AuthProvider/AuthProvider";
import toast from "react-hot-toast";

const MyProfile = () => {
  const { user, updateUser } = useContext(AuthContextCine);
  const { displayName, email, metadata, photoURL } = user;
  const handleUpdate = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const photo = form.photo.value;
    updateUser(name, photo)
      .then(() => {
        toast.success("update success");
      })
      .catch((err) => toast.error(err.message));
  };
  return (
    <div>
      <div className="flex flex-col-reverse md:flex-row justify-center gap-6 mt-8">
        <img src={photoURL} className="md:w-72 rounded-lg" alt="" />
        <div className="space-y-2 text-center md:text-left">
          <h1 className="font-semibold text-2xl">Hi, {displayName}</h1>
          <p>{email}</p>
          <p>
            Account Created on: <br></br>
            {metadata.creationTime}
          </p>
        </div>
      </div>
      <form onSubmit={handleUpdate} className="card-body mb-5">
        <h1 className="text-3xl font-semibold text-center">Update info</h1>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Your Name</span>
          </label>
          <input
            type="text"
            defaultValue={user.displayName}
            name="name"
            className="input input-bordered text-gray-500"
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Photo URL</span>
          </label>
          <input
            type="text"
            name="photo"
            defaultValue={user?.photoURL}
            className="input input-bordered text-gray-500"
            required
          />
        </div>
        <div className="form-control mt-6">
          <input
            className="btn bg-red-500 hover:bg-red-500 text-white"
            type="submit"
            value="Update Info"
          />
        </div>
      </form>
    </div>
  );
};

export default MyProfile;
