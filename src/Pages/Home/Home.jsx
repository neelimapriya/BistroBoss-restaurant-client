import Menu from "../../Component/Menu/Menu";
import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import Featured from "../Featured/Featured";
import Testimonials from "../Textimonials/Testimonials";

const Home = () => {
    return (
        <div>
           <Banner></Banner>
           <Category></Category>
           <Menu></Menu>
           <Featured></Featured>
           <Testimonials></Testimonials>
        </div>
    );
};

export default Home;