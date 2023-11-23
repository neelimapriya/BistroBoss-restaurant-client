import { useLoaderData } from "react-router-dom";
import SectionTitle from "../../../Component/SectionTitle/SectionTitle";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { useForm } from "react-hook-form";
import useAxiospublic from "../../../Hooks/useAxiosPublic";
import Swal from "sweetalert2";

const IMAGE_HOSTING_KEY = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${IMAGE_HOSTING_KEY}`;
const UpdateItem = () => {
  const { name, category, recipe, price, image, _id } = useLoaderData();
  // console.log(data)

  const { register, handleSubmit, reset } = useForm();
  const axiosPublic = useAxiospublic();
  const axiosSecure = useAxiosSecure();
  const onSubmit = async (data) => {
    console.log(data);
    // image upload to imgbb and then get an url
    const imageFile = { image: data.image[0] };
    const res = await axiosPublic.post(image_hosting_api, imageFile, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    console.log(res.data);
    if (res.data.success) {
      // send the menu item data to the server with the image url
      const menuItem = {
        name: data.name,
        category: data.category,
        price: parseFloat(data.price),
        recipe: data.recipe,
        image: res.data.data.display_url,
      };
      const menuRes = await axiosSecure.patch(`/menu/${_id}`, menuItem);
      console.log(menuRes.data);
      if (menuRes.data.modifiedCount > 0) {
          reset()
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: `${data.name} is updated to the manu`,
          showConfirmButton: false,
          timer: 1500,
        });
      }
    }
  };

  return (
    <div className="mt-5">
      <SectionTitle
        heding="Update Item"
        subHeading="Refresh Info"
      ></SectionTitle>

      <div className="p-5 bg-gray-300 ml-5 mb-10">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-control w-full my-6">
            <label className="label">
              <span className="label-text">Recipe Name*</span>
            </label>
            <input
              defaultValue={name}
              type="text"
              placeholder="Recipe name"
              {...register("name", { required: true })}
              className="input input-bordered w-full "
              required
            />
          </div>
          <div className="flex gap-24">
            {/* category */}
            <div className="form-control w-full my-6">
              <label className="label">
                <span className="label-text">Category Name*</span>
              </label>
              <select
                defaultValue={category}
                {...register("category", { required: true })}
                className="select select-bordered w-full "
              >
                <option disabled value="default">
                  Select a category?
                </option>
                <option value="salad">salad</option>
                <option value="pizza">Pizza</option>
                <option value="soup">Soup</option>
                <option value="dessert">Dessert</option>
                <option value="drink">Drink</option>
              </select>
            </div>

            {/* price */}
            <div className="form-control w-full my-6">
              <label className="label">
                <span className="label-text">Price*</span>
              </label>
              <input
                defaultValue={price}
                type="number"
                placeholder="Price"
                {...register("price", { required: true })}
                className="input input-bordered w-full "
              />
            </div>
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Recipe details</span>
            </label>
            <textarea
              defaultValue={recipe}
              {...register("recipe", { required: true })}
              className="textarea textarea-bordered h-24"
              placeholder="Recipe details"
            ></textarea>
          </div>
          <div className="flex flex-col md:flex-row justify-around">
            <div className="form-control w-full my-6 ">
              <input
                {...register("image", { required: true })}
                type="file"
                className="file-input file-input-bordered w-full max-w-xs"
              />
            </div>
            <div className="md:mr-20 md:mt-5">
              <img className="w-64 " src={image} alt="" />
            </div>
          </div>
          <button className="btn ml-4 bg-orange-500">Update Item</button>
        </form>
      </div>
    </div>
  );
};

export default UpdateItem;
