import FoodCard from "../../../Component/FoodCard/FoodCard";

const Ordertab = ({items}) => {
    return (
        <div className="grid md:grid-cols-3 gap-10 justify-center">
           {
                items.map(item=><FoodCard key={item._id} item={item}></FoodCard>)
            }
           </div>
    );
};

export default Ordertab;