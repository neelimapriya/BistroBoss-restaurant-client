import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { FaTrash, FaUser } from "react-icons/fa";
import Swal from "sweetalert2";

const AllUser = () => {
  const axiosSecure = useAxiosSecure();
  const { data: users = [] , refetch} = useQuery({
    queryKey: ["user",],
    queryFn: async () => {
      const res = await axiosSecure.get("/user");
      return res.data;
    },
  });



  const handleMakeAdmin=(user)=>{
    axiosSecure.patch(`/user/admin/${user._id}`)
    .then(res=>{
        console.log(res.data)
        if(res.data.modifiedCount >0){
            refetch()
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: `${user.name} is an admin now`,
                showConfirmButton: false,
                timer: 1500
              });
        }
    })
  }

  const handleDeleteUser=(user)=>{
    Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
      }).then((result) => {
        if (result.isConfirmed) {
         
          axiosSecure.delete(`/user/${user?._id}`)
          .then(res=>{
            // console.log(res.data)
            if(res.data.deletedCount> 0){
                refetch()

               Swal.fire({
            title: "Deleted!",
            text: "Your item deleted.",
            icon: "success"
          });
            }
            
          })
        }
      });
  }

  return (
    <div className="mt-10">
      <div className="flex justify-evenly my-4 p-5">
        <h2 className="text-3xl font-semibold">All users</h2>
        <h2 className="text-3xl font-semibold">Total Users : {users.length}</h2>
      </div>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
            </tr>
          </thead>
          <tbody>
            {
                users?.map((user,index)=> <tr key={user._id}>
                    <th>{index+1}</th>
                    <td>{user?.name}</td>
                    <td>{user?.email}</td>
                    <td>
                    {user.role === 'admin' ? "Admin" : <button onClick={()=>handleMakeAdmin(user)} className="btn  text-xl bg-orange-400 text-white"><FaUser></FaUser></button>}
                    </td>
                    <td>
                    <button onClick={()=>handleDeleteUser(user)} className="btn btn-ghost text-xl text-red-600"><FaTrash></FaTrash></button>
                    </td>
                  </tr>)
            }
           
           
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllUser;
