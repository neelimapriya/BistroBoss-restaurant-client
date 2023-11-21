import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../Hooks/useAuth";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import SectionTitle from "../../../Component/SectionTitle/SectionTitle";

const PaymentHistory = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();

  const { data: payments = [] } = useQuery({
    queryKey: ["payments", user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/payments/${user?.email}`);
      return res.data;
    },
  });
  console.log(payments);
  return (
    <div className="mt-10">
      <SectionTitle
        heding={"PAYMENT HISTORY"}
        subHeading={"At a Glance!"}
      ></SectionTitle>
      <h2 className="text-3xl text-center">
        Total Payments: {payments?.length}
      </h2>
      <div className="overflow-x-auto p-5">
        <table className="table table-zebra">
          {/* head */}
          <thead className="bg-orange-400 text-white">
            <tr>
              <th>PAYENT DATE</th>
              <th>Transaction Id</th>
              <th>TOTAL PRICE</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {payments?.map((payment) => (
              <tr key={payment._id}>
                <th>{payment.date}</th>
                <td>{payment.transactionId}</td>
                <td className="font-bold">{payment.price}$</td>
                <td>{payment.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PaymentHistory;
