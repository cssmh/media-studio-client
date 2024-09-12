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
    const price = form.price.value;
    const description = form.description.value;
    const rating = form.rating.value;
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
        swal("Good job!", `${name} added!`, "success");
      }
    } catch (error) {
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
        />
      </div>
      <div className="form-control">
        <label className="label">
          <span className="label-text">Image Url</span>
        </label>
        <input
          type="text"
          required
          name="image"
          className="input input-bordered"
          style={{ outline: "none" }}
        />
      </div>
      <div className="form-control">
        <label className="label">
          <span className="label-text">Cinemix Name</span>
        </label>
        <select
          style={{ outline: "none" }}
          id="n"
          name="media_name"
          className="input input-bordered"
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
          style={{ outline: "none" }}
          id="t"
          name="media_type"
          className="input input-bordered"
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
          type="text"
          name="price"
          required
          className="input input-bordered"
          style={{ outline: "none" }}
        />
      </div>
      <div className="form-control">
        <label className="label">
          <span className="label-text">Description</span>
        </label>
        <input
          name="description"
          cols="20"
          rows="10"
          className="input input-bordered"
          style={{ outline: "none" }}
        ></input>
      </div>
      <div className="form-control">
        <label className="label">
          <span className="label-text">Rating</span>
        </label>
        <input
          type="text"
          name="rating"
          className="input input-bordered"
          style={{ outline: "none" }}
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
