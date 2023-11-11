/* eslint-disable react/prop-types */
import MenuCard from "../Menu/MenuCard";

const MenuCategory = ({items}) => {
    return (
        <div>
            <div className="grid md:grid-cols-2 gap-5">
                {
                    items?.map(item=><MenuCard key={item._id} item={item}></MenuCard>)
                }
            </div>
        </div>
    );
};

export default MenuCategory;