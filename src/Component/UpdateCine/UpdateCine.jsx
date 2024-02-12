import { useLoaderData } from "react-router-dom";

const UpdateCine = () => {
  const loadAllData = useLoaderData();
  const { name, image, media, media_type, price, description, rating } =
    loadAllData;

  return (
    <form className="md:w-3/4 lg:w-1/2 mx-2 md:mx-auto">
      <div className="form-control">
        <label className="label">
          <span className="label-text">Name</span>
        </label>
        <input
          type="text"
          name="name"
          defaultValue={name}
          className="input input-bordered"
          required
        />
      </div>
      <div className="form-control">
        <label className="label">
          <span className="label-text">Image Url</span>
        </label>
        <input
          type="text"
          name="image"
          defaultValue={image}
          className="input input-bordered"
          required
        />
      </div>
      <div className="form-control">
        <label className="label">
          <span className="label-text">Cinemix Name</span>
        </label>
        <select
          id="n"
          name="media_name"
          className="input input-bordered"
          defaultValue={media}
        >
          <option value="Disney">Disney</option>
          <option value="Netflix">Netflix</option>
          <option value="Sony Pictures">Sony Pictures</option>
          <option value="Spotify">Spotify</option>
          <option value="Time Warner">Time Warner</option>
          <option value="Warner Bros">Warner Bros</option>
        </select>
      </div>
      <div className="form-control">
        <label className="label">
          <span className="label-text">Type</span>
        </label>
        <select
          id="to"
          name="media_type"
          className="input input-bordered"
          defaultValue={media_type}
        >
          <option value="Movie">Movie</option>
          <option value="Series">Series</option>
          <option value="Animation">Animation</option>
          <option value="Telefilm">Telefilm</option>
          <option value="Show">TV Series</option>
          <option value="Cartoon">Cartoon</option>
        </select>
      </div>
      <div className="form-control">
        <label className="label">
          <span className="label-text">Price</span>
        </label>
        <input
          type="text"
          name="price"
          defaultValue={price}
          required
          className="input input-bordered"
        />
      </div>
      <div className="form-control">
        <label className="label">
          <span className="label-text">Description</span>
        </label>
        <input
          name="description"
          defaultValue={description}
          cols="20"
          required
          rows="10"
          className="input input-bordered"
        ></input>
      </div>

      <div className="form-control">
        <label className="label">
          <span className="label-text">Rating</span>
        </label>
        <input
          type="text"
          defaultValue={rating}
          required
          name="rating"
          className="input input-bordered"
        />
      </div>

      <div className="form-control mt-6">
        <button className="btn bg-green-600 hover:bg-green-600 text-white">
          Update {name}
        </button>
      </div>
    </form>
  );
};

export default UpdateCine;
