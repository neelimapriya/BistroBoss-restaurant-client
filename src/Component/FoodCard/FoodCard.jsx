const FoodCard = ({item}) => {
    const {name, image, price,recipe}=item;

  return (
    <div className="card w-96 bg-[#F3F3F3] shadow-xl">
      <figure>
        <img
          src={image}
          alt="food"
        />
      </figure>
      <p className="absolute bg-slate-800 text-white font-semibold right-0 mt-3 mr-5 text-xl p-2">${price}</p>
      <div className="card-body">
        <h2 className="card-title text-center">{name}</h2>
        <p>{recipe}</p>
        <div className="card-actions justify-center">
          <button className="btn border-0 border-yellow-700 border-b-4 text-yellow-700 hover:bg-black ">Add to cart</button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
