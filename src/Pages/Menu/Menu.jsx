import { Helmet } from "react-helmet-async";
import Cover from "../Shared/Cover/Cover";
import menuImg from "../../assets/menu/banner3.jpg";
import dessertImg from "../../assets/menu/dessert-bg.jpeg";
import pizzaImg from "../../assets/menu/pizza-bg.jpg";
import saladImg from "../../assets/menu/salad-bg.jpg";
import soupImg from "../../assets/menu/soup-bg.jpg";
// import PopularMenu from "../../Component/Menu/PopularMenu";
import useMenu from "../../Hooks/useMenu";
import SectionTitle from "../../Component/SectionTitle/SectionTitle";
import MenuCategory from "../../Component/MenuCategory/MenuCategory";
const Menu = () => {
  const [menu] = useMenu();
  const dessert = menu.filter((item) => item.category === "dessert");
  const soup = menu.filter((item) => item.category === "dessert");
  const salad = menu.filter((item) => item.category === "salad");
  const pizza = menu.filter((item) => item.category === "pizza");
  const offered = menu.filter((item) => item.category === "offered");
  return (
    <div>
      <Helmet>
        <title>Bistro Boss | Menu</title>
      </Helmet>
      <Cover
        img={menuImg}
        title={"OUR Menu"}
        des={"Would you like to try a dish?"}
      ></Cover>
      <SectionTitle
        subHeading={"---Don't miss---"}
        heding={"TODAY'S OFFER"}
      ></SectionTitle>
      {/* offered menu  */}
      <MenuCategory items={offered}></MenuCategory>
      {/* dessert menu */}
      <MenuCategory
        items={dessert}
        title={"desserts"}
        img={dessertImg}
      ></MenuCategory>

      {/* pizza menu */}
      <MenuCategory items={pizza} title={"pizza"} img={pizzaImg}></MenuCategory>
      {/* salad menu */}
      <MenuCategory items={salad} title={"salad"} img={saladImg}></MenuCategory>
      {/* soup menu */}
      <MenuCategory items={soup} title={"soup"} img={soupImg}></MenuCategory>
    </div>
  );
};

export default Menu;
