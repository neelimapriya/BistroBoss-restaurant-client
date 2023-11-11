import SectionTitle from "../SectionTitle/SectionTitle";
import MenuCard from "./MenuCard";
import useMenu from "../../Hooks/useMenu";


const PopularMenu = () => {
    const [menu]=useMenu()
    const popular=menu.filter(item=>item.category === 'popular')
    // const [menu, setMenu]=useState([])
    // useEffect(()=>{
    //     fetch('menu.json')
    //     .then(res=>res.json())
    //     .then(data=>{
    //         const popularItems=data?.filter(item=>item.category === 'popular')
    //         setMenu(popularItems)})

    // },[])
    return (
        <section className="mb-20 flex flex-col items-center">
            <SectionTitle heding="From Our Menu" subHeading="Popular Items"></SectionTitle>
            <div className="grid md:grid-cols-2 gap-5">
                {
                    popular?.map(item=><MenuCard key={item._id} item={item}></MenuCard>)
                }
            </div>
            <button className="btn btn-outline border-0 border-b-4"> view full</button>
        </section>
    );
};

export default PopularMenu;