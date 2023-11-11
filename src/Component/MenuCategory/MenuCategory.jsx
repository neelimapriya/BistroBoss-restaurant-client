/* eslint-disable react/prop-types */
import Cover from "../../Pages/Shared/Cover/Cover";
import MenuCard from "../Menu/MenuCard";

const MenuCategory = ({items, title,img}) => {
    return (
        <div className="pt-8">
            {title && <Cover img={img} title={title} des="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."></Cover>}
            <div className="grid md:grid-cols-2 gap-10 my-16">
                {
                    items?.map(item=><MenuCard key={item._id} item={item}></MenuCard>)
                }
            </div>
        </div>
    );
};

export default MenuCategory;