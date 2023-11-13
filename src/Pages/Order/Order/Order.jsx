import { useState } from "react";
import orderCover from "../../../assets/shop/banner2.jpg";
import Cover from "../../Shared/Cover/Cover";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import useMenu from "../../../Hooks/useMenu";
import Ordertab from "../OrderTab/Ordertab";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";
const Order = () => {
  const categories =['salad','pizza','soup','dessert','drink']
  const {category}=useParams()
  const initialIndex =categories.indexOf(category)
    const [tabIndex, setTabIndex]=useState(initialIndex)
    const [menu]=useMenu()

    console.log(initialIndex)
    const dessert = menu.filter((item) => item.category === "dessert");
    const soup = menu.filter((item) => item.category === "soup");
    const salad = menu.filter((item) => item.category === "salad");
    const pizza = menu.filter((item) => item.category === "pizza");
    const drinks = menu.filter((item) => item.category === "drinks");
  return (
    <div>
      <Helmet>
        <title>Bistro Boss | Order Food</title>
      </Helmet>
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
