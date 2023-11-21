import { useForm } from "react-hook-form";
import SectionTitle from "../../../Component/SectionTitle/SectionTitle";
import { FaUtensils } from "react-icons/fa";
import useAxiospublic from "../../../Hooks/useAxiosPublic";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { AxiosError } from "axios";
import Swal from "sweetalert2";


const IMAGE_HOSTING_KEY=import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api=`https://api.imgbb.com/1/upload?key=${IMAGE_HOSTING_KEY}`

const AddItem = () => {
  const { register, handleSubmit, reset } = useForm();
  const axiosPublic =useAxiospublic()
  const axiosSecure=useAxiosSecure()
  const onSubmit = async(data) => {
    console.log(data);
    // image upload to imgbb and then get an url
    const imageFile= {image: data.image[0]}
    const res=await axiosPublic.post(image_hosting_api, imageFile, {
        headers:{
            'Content-Type':'multipart/form-data'
        }
    })
    console.log(res.data)
    if(res.data.success){
        // send the menu item data to the server with the image url
        const menuItem={
            name:data.name,
            category:data.category,
            price:parseFloat(data.price),
            recipe:data.recipe,
            image:res.data.data.display_url
        }
        const menuRes= await axiosSecure.post('/menu',menuItem)
        console.log(menuRes.data)
        if(menuRes.data.insertedId){
            reset()
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: `${data.name} has been saved` ,
                showConfirmButton: false,
                timer: 1500
              });
              
        }
    }
  };
  return (
    <div className="mt-5">
      <SectionTitle
        heding="add an item"
        subHeading="what's new?"
      ></SectionTitle>
      <div className="p-5 bg-gray-300 ml-5 mb-10">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-control w-full my-6">
            <label className="label">
              <span className="label-text">Recipe Name*</span>
            </label>
            <input
              type="text"
              placeholder="Recipe name"
              {...register("name", {required:true})}
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
              <select defaultValue="default"
                {...register("category", {required:true})}
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
                type="number"
                placeholder="Price"
                {...register("price", {required:true})}
                className="input input-bordered w-full "
              />
            </div>
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Recipe details</span>
            </label>
            <textarea
              {...register("recipe", {required:true})}
              className="textarea textarea-bordered h-24"
              placeholder="Recipe details"
            ></textarea>
          </div>
          <div className="form-control w-full my-6">
            <input
              {...register("image", {required:true})}
              type="file"
              className="file-input file-input-bordered w-full max-w-xs"
            />
          </div>
          <button className="btn ml-4 bg-orange-500">
            Add Item <FaUtensils></FaUtensils>
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddItem;
