import { Helmet } from "react-helmet-async";
import PopularMenu from "../../Component/Menu/PopularMenu";
// import Menu from "../../Component/Menu/PopularMenu";
import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import Featured from "../Featured/Featured";
import Testimonials from "../Textimonials/Testimonials";

const Home = () => {
    return (
        <div>
              <Helmet>
        <title>Bistro Boss | Home</title>
        
      </Helmet>
           <Banner></Banner>
           <Category></Category>
           <PopularMenu></PopularMenu>
           <Featured></Featured>
           <Testimonials></Testimonials>
        </div>
    );
};

export default Home;