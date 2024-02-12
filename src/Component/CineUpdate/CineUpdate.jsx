import toast from "react-hot-toast";
import { useLoaderData, useNavigate } from "react-router-dom";

const CineUpdate = () => {
  const loadAllData = useLoaderData();
  const { _id, name, image, media, media_type, price, description, rating } =
    loadAllData;
  const navigateTo = useNavigate();

  const handleUpdate = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const image = form.image.value;
    const media = form.media_name.value;
    const media_type = form.media_type.value;
    const price = form.price.value;
    const description = form.description.value;
    const rating = form.rating.value;
    const updatedData = {
      name,
      image,
      media,
      media_type,
      price,
      description,
      rating,
    };
    fetch(`http://localhost:5000/cine/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updatedData),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          toast.success(`${name} update successfully`);
          navigateTo(-1);
        }
      });
  };

  return (
    <form onSubmit={handleUpdate} className="md:w-3/4 lg:w-1/2 mx-2 md:mx-auto">
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
          id="1"
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
          id="2"
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

export default CineUpdate;
