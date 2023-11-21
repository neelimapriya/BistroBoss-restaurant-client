import axios from "axios";

 const Axiospublic =axios.create({
    baseURL:'http://localhost:5000'
})
const useAxiospublic = () => {
    return Axiospublic
};

export default useAxiospublic;