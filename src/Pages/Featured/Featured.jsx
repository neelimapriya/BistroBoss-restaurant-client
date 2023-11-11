import SectionTitle from "../../Component/SectionTitle/SectionTitle";
import featuredImg from '../../assets/home/featured.jpg'
import '../Featured/Feature.css'

const Featured = () => {
    return (
        <div className="featured-Bg bg-fixed  bg-opacity-30 text-white  py-20">
             <div className="bgOpacity"></div>
             <div className="">
            <SectionTitle subHeading="Checking it out" heding="Featured Item"></SectionTitle>

            <div className="flex justify-center px-32 text-white ">
                <img className="w-[548px] h-[300px]" src={featuredImg} alt="" />
                <div className="ml-10 space-y-2">
                    <h2>March 20, 2023</h2>
                    <h3>WHERE CAN I GET SOME?</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, in? Dolores explicabo iste perspiciatis distinctio nulla architecto omnis illo saepe? Obcaecati sit eveniet itaque quod suscipit impedit iusto reiciendis ducimus.</p>
                    <button className="btn btn-outline border-0 border-b-4"> Read More</button>
                </div>
            </div>
            </div>
        </div>
    );
};

export default Featured;