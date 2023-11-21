import { FaEdit, FaTrash } from "react-icons/fa";
import SectionTitle from "../../../Component/SectionTitle/SectionTitle";
import useMenu from "../../../Hooks/useMenu";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { Link } from "react-router-dom";

const ManageItem = () => {
  const [menu, ,refetch] = useMenu();
  const axiosSecuire=useAxiosSecure()

  const handleDeleteItem=(item)=>{
    Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
      }).then(async(result) => {
        if (result.isConfirmed) {
            const res=await axiosSecuire.delete(`/menu/${item._id}`)
            console.log(res.data)
            if(res.data.deletedCount> 0){
                refetch()
                Swal.fire({
                    title: "Deleted!",
                    text: `${item.name}  has been deleted.`,
                    icon: "success",
                    timer:2000
                  });
            }
         
        }
      });

  }

 
  return (
    <div className="my-5">
      <SectionTitle
        heding="Manage all items"
        subHeading="Hurry Up"
      ></SectionTitle>
      <div>
        <div className="overflow-x-auto">
          <table className="table w-full">
            {/* head */}
            <thead>
              <tr>
                <th>#</th>
                <th>Image</th>
                <th>Item name</th>
                <th>Update</th>
                <th>Delete</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {
                menu?.map((item, i)=><tr key={item._id}>
                    <td>{i+1}</td>
                    <td>
                      <div className="flex items-center gap-3">
                        <div className="avatar">
                          <div className="mask mask-squircle w-12 h-12">
                            <img
                              src={item.image}
                              alt="Avatar Tailwind CSS Component"
                            />
                          </div>
                        </div>
                        <div>
                         <h2>{item.category}</h2>
                        </div>
                      </div>
                    </td>
                    <td>{item.name}</td>
                    
                    <td>
                   <Link to={`/dashboard/updateItem/${item._id}`}> <button className="btn btn-ghost text-xl "><FaEdit></FaEdit></button></Link>
                      
                    </td>
                    <td>
                    <button onClick={()=>handleDeleteItem(item)} className="btn btn-ghost text-xl text-red-600"><FaTrash></FaTrash></button>
                    </td>
                  </tr>)
              }
              
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ManageItem;
