import axios from "axios";

 const Axiospublic =axios.create({
    baseURL:'https://bistro-boss-server-six-iota.vercel.app'
})
const useAxiospublic = () => {
    return Axiospublic
};

export default useAxiospublic;