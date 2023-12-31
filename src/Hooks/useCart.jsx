
// https://bistro-boss-server-six-iota.vercel.app/carts

import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import useAuth from "./useAuth";

const useCart = () => {
    // use tanstack query
    const {user}=useAuth()
    const AxiosSecure =useAxiosSecure();
    const {refetch,data:cart}=useQuery({
        queryKey:['cart', user?.email],
        queryFn:async()=>{
            const res =await AxiosSecure.get(`/carts?email=${user?.email}`)
            return res.data;
        }
    })

    return [cart, refetch]
};

export default useCart;