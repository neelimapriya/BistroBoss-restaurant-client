import { FaTrash } from "react-icons/fa";
import useCart from "../../../Hooks/useCart";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { Link } from "react-router-dom";

const Cart = () => {
  const [cart, refetch] = useCart();
  const totalPrice = cart?.reduce((total, item) => total + item.price, 0);
  const axiosSecure = useAxiosSecure();
  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`/carts/${id}`).then((res) => {
          // console.log(res.data)
          if (res.data.deletedCount > 0) {
            Swal.fire({
              title: "Deleted!",
              text: "Your item deleted.",
              icon: "success",
            });
            refetch()
          }
        });
      }
    });
  };
  return (
    <div>
      <div className="flex justify-around mt-10 p-8">
        <h2 className="text-3xl ">Items: {cart?.length}</h2>
        <h2 className="text-3xl ">Total price: ${totalPrice}</h2>
        {cart?.length ? (
          <Link to="/dashboard/payment">
            {" "}
            <button className="btn btn-success text-white">Pay</button>
          </Link>
        ) : (
          <button disabled className="btn btn-success text-white">
            Pay
          </button>
        )}
      </div>
      <div>
        <div className="overflow-x-auto ">
          <table className="table w-full">
            {/* head */}
            <thead>
              <tr>
                <th>#</th>
                <th>Image</th>
                <th>Name</th>
                <th>Price </th>
                <th></th>
              </tr>
            </thead>
            {cart?.map((item, index) => (
              <tbody key={item._id}>
                {/* row 1 */}
                <tr>
                  <th>{index + 1}</th>
                  <td>
                    <div className="flex items-center gap-3">
                      <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                          <img
                            src={item?.image}
                            alt="Avatar Tailwind CSS Component"
                          />
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="text-xl text-orange-700">{item?.name}</td>
                  <td className="text-orange-700 font-bold text-xl">
                    ${item?.price}
                  </td>
                  <th>
                    <button
                      onClick={() => handleDelete(item._id)}
                      className="btn btn-ghost text-xl text-red-600"
                    >
                      <FaTrash></FaTrash>
                    </button>
                  </th>
                </tr>
              </tbody>
            ))}
          </table>
        </div>
      </div>
    </div>
  );
};

export default Cart;
