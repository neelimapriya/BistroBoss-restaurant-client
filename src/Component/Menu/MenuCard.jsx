
const MenuCard = ({item}) => {
    const {name, image, price,recipe}=item;
    return (
        <div className="flex space-x-3">
            <img style={{borderRadius: "0 200px 200px 200px"}} className="w-20" src={image} alt="" />
            <div>
                <h3 className="uppercase">{name}-------</h3>
                <p className="text-xs">{recipe}</p>
            </div>
            <p className="text-yellow-600">${price}</p>
        </div>
    );
};

export default MenuCard;