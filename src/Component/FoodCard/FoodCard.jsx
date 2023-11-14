import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProviders";
import useAuth from "../../Hooks/useAuth";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import useCart from "../../Hooks/useCart";

const FoodCard = ({ item }) => {
  // array er moddhe onno data thakle oigulo skip korar jonno ekta comma use kora jay
  const [, refetch]=useCart()
  const { user } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const AxiosSecure= useAxiosSecure()

  const { name, image, price, recipe, _id } = item;
  const handleAddCart = (food) => {
    console.log(food, user?.email);

    if (user && user.email) {
      const cartItem = {
        menuId: _id,
        email: user.email,
        name,
        image,
        price,
      };

      // axios.post("http://localhost:5000/carts", cartItem)
      AxiosSecure.post("/carts", cartItem)
      .then((res) => {
        console.log(res.data);
        if (res.data.insertedId) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: `${name} added in cart`,
            showConfirmButton: false,
            timer: 2000,
          });
          // to added autometicaly without refresh
          refetch()
        }
      });
    } else {
      Swal.fire({
        title: "Please login",
        text: "you have to login to add to cart",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, log in!",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/login", { state: { from: location } });
        }
      });
    }
  };

  return (
    <div className="card w-96 bg-[#F3F3F3] shadow-xl">
      <figure>
        <img src={image} alt="food" />
      </figure>
      <p className="absolute bg-slate-800 text-white font-semibold right-0 mt-3 mr-5 text-xl p-2">
        ${price}
      </p>
      <div className="card-body">
        <h2 className="card-title text-center">{name}</h2>
        <p>{recipe}</p>
        <div className="card-actions justify-center">
          <button
            onClick={() => handleAddCart(item)}
            className="btn border-0 border-yellow-700 border-b-4 text-yellow-700 bg-slate-200 hover:bg-black "
          >
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
