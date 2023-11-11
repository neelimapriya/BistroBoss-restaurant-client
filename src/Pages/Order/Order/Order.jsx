import { useState } from "react";
import orderCover from "../../../assets/shop/banner2.jpg";
import Cover from "../../Shared/Cover/Cover";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import useMenu from "../../../Hooks/useMenu";
import FoodCard from "../../../Component/FoodCard/FoodCard";
import Ordertab from "../OrderTab/Ordertab";
import { useParams } from "react-router-dom";
const Order = () => {
    const [tabIndex, setTabIndex]=useState(0)
    const [menu]=useMenu()
    const {category}=useParams()
    console.log(category)
    const dessert = menu.filter((item) => item.category === "dessert");
    const soup = menu.filter((item) => item.category === "dessert");
    const salad = menu.filter((item) => item.category === "salad");
    const pizza = menu.filter((item) => item.category === "pizza");
    const drinks = menu.filter((item) => item.category === "drinks");
  return (
    <div>
      <Cover
        img={orderCover}
        title="Order Food"
        des="Would you like to try a dish?"
      ></Cover>
      <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)} >
        <TabList className="flex justify-center mt-10 mb-3">
          <Tab>Salad</Tab>
          <Tab>Pizza</Tab>
          <Tab>Soup</Tab>
          <Tab>Dessert</Tab>
          <Tab>Drink</Tab>
        </TabList>
        <TabPanel>
           <Ordertab items={salad}></Ordertab>
        </TabPanel>
        <TabPanel>
        <Ordertab items={pizza}></Ordertab>
        </TabPanel>
        
        <TabPanel>
        <Ordertab items={soup}></Ordertab>
        </TabPanel>
        <TabPanel>
        <Ordertab items={dessert}></Ordertab>
        </TabPanel>
        <TabPanel>
        <Ordertab items={drinks} ></Ordertab>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default Order;
