import swal from "sweetalert";
import { addCine } from "../Api/movie";

const AddProduct = () => {
  const handleAddCine = async (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const image = form.image.value;
    const media = form.media_name.value;
    const media_type = form.media_type.value;
    const price = parseFloat(form.price.value);
    const description = form.description.value;
    const rating = parseFloat(form.rating.value);

    const getCine = {
      name,
      image,
      media,
      media_type,
      price,
      description,
      rating,
    };

    try {
      const res = await addCine(getCine);
      if (res.insertedId) {
        form.reset();
        swal("Success!", `${name} has been added!`, "success");
      }
    } catch (error) {
      swal("Error!", "Something went wrong. Please try again.", "error");
      console.log(error);
    }
  };

  return (
    <form
      onSubmit={handleAddCine}
      className="md:w-3/4 lg:w-1/2 mx-2 md:mx-auto"
    >
      <div className="form-control">
        <label className="label">
          <span className="label-text">Name</span>
        </label>
        <input
          type="text"
          required
          name="name"
          className="input input-bordered"
          style={{ outline: "none" }}
          aria-label="Name of the movie or series"
        />
      </div>
      <div className="form-control">
        <label className="label">
          <span className="label-text">Image URL</span>
        </label>
        <input
          type="url"
          required
          name="image"
          className="input input-bordered"
          style={{ outline: "none" }}
          aria-label="Image URL for the movie or series"
        />
      </div>
      <div className="form-control">
        <label className="label">
          <span className="label-text">Cinemix Name</span>
        </label>
        <select
          id="media_name"
          name="media_name"
          className="input input-bordered"
          style={{ outline: "none" }}
          aria-label="Select media provider"
        >
          <option value="disney">Disney</option>
          <option value="netflix">Netflix</option>
          <option value="sony_pictures">Sony Pictures</option>
          <option value="warner_bros">Warner Bros</option>
          <option value="universal_pictures">Universal Pictures</option>
          <option value="amazon_studios">Amazon Studios</option>
        </select>
      </div>
      <div className="form-control">
        <label className="label">
          <span className="label-text">Type</span>
        </label>
        <select
          id="media_type"
          name="media_type"
          className="input input-bordered"
          style={{ outline: "none" }}
          aria-label="Select type of media"
        >
          <option value="Movie">Movie</option>
          <option value="Series">TV Series</option>
          <option value="Animation">Animation</option>
          <option value="Anime">Anime</option>
        </select>
      </div>
      <div className="form-control">
        <label className="label">
          <span className="label-text">Price</span>
        </label>
        <input
          type="number"
          step="0.01"
          required
          name="price"
          className="input input-bordered"
          style={{ outline: "none" }}
          aria-label="Price of the movie or series"
        />
      </div>
      <div className="form-control">
        <label className="label">
          <span className="label-text">Description</span>
        </label>
        <textarea
          name="description"
          rows="5"
          className="textarea textarea-bordered"
          style={{ outline: "none" }}
          aria-label="Description of the movie or series"
        ></textarea>
      </div>
      <div className="form-control">
        <label className="label">
          <span className="label-text">Rating</span>
        </label>
        <input
          type="number"
          step="0.1"
          max="10"
          min="0"
          required
          name="rating"
          className="input input-bordered"
          style={{ outline: "none" }}
          aria-label="Rating of the movie or series"
        />
      </div>
      <div className="form-control mt-6">
        <button className="btn bg-purple-600 hover:bg-purple-600 text-white">
          Add CineMIX
        </button>
      </div>
    </form>
  );
};

export default AddProduct;
