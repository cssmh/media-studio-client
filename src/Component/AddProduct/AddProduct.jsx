import swal from "sweetalert";

const AddProduct = () => {
  const handleAddCine = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const image = form.image.value;
    const media = form.media_name.value;
    const media_type = form.media_type.value;
    const price = form.price.value;
    const description = form.description.value;
    const rating = form.rating.value;
    // console.log(name, image, media, media_type, price, description, rating);
    const getCine = {
      name,
      image,
      media,
      media_type,
      price,
      description,
      rating,
    };

    fetch(
      "https://cinemix-server.vercel.app/cine",
      {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(getCine),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          form.reset();
          swal("Good job!", "Cinemix added!", "success");
        }
      });
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
          name="name"
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
          className="input input-bordered"
          required
        />
      </div>
      <div className="form-control">
        <label className="label">
          <span className="label-text">Cinemix Name</span>
        </label>
        <select id="n" name="media_name" className="input input-bordered">
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
        <select id="t" name="media_type" className="input input-bordered">
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
          required
          name="rating"
          className="input input-bordered"
        />
      </div>

      <div className="form-control mt-6">
        <button className="btn bg-green-600 hover:bg-green-600 text-white">
          Add CineMIX
        </button>
      </div>
    </form>
  );
};

export default AddProduct;
