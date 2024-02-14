import { useContext } from "react";
import { AuthContextCine } from "../../AuthProvider/AuthProvider";

const MyProfile = () => {
  const { user } = useContext(AuthContextCine);
  //   console.log(user);
  const { displayName, email, metadata, photoURL } = user;
  return (
    <div className="flex flex-col-reverse md:flex-row justify-center gap-6">
      <img src={photoURL} className="md:w-96 rounded-sm" alt="" />
      <div className="space-y-2 text-center md:text-left">
        <h1 className="font-semibold text-2xl">Hi, {displayName}</h1>
        <p>{email}</p>
        <p>
          Account Created on: <br></br>
          {metadata.creationTime}
        </p>
      </div>
    </div>
  );
};

export default MyProfile;
