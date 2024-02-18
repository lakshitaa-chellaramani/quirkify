import React, { useState, useEffect } from "react";
import MenuItem from "./MenuItem/MenuItem";
import Dropdown from "./DropDown"; // Adjust the path based on your project structure
import Cart from "../Cart/Cart"; //
import FoodItem from "./MenuItem/FoodItem";
import CardGenerator from "../MenuPage/CardGenerator";

const Dashboard = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth >= 1024);
  const [activeTab, setActiveTab] = useState("tab1");
  const [menuData, setMenuData] = useState([]);
  const [sortType, setSortType] = useState("default");
  const [showFilter, setShowFilter] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (item) => {
    const existingItem = cartItems.find((cartItem) => cartItem.id === item.id);

    if (existingItem) {
      // If item already exists, update its quantity
      setCartItems((prevItems) =>
        prevItems.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        )
      );
    } else {
      // If item doesn't exist, add it to the cart
      setCartItems((prevItems) => [...prevItems, { ...item, quantity: 1 }]);
    }
  };

  const toggleSidebar = () => {
    setIsSidebarOpen((prevIsSidebarOpen) => !prevIsSidebarOpen);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `http://localhost:4000/api/items/getItems`,
          {
            method: "GET",
          }
        );
        const data = await response.json();
        setMenuData(data);
      } catch (error) {
        console.error("Error fetching menu data:", error);
      }
    };

    fetchData();
  }, [activeTab]);
  //   const handleResize = () => {
  //     setIsLargeScreen(window.innerWidth >= 1024);
  //   };

  //   window.addEventListener("resize", handleResize);

  //   return () => {
  //     window.removeEventListener("resize", handleResize);
  //   };
  // }, []);

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  const handleSortChange = (type) => {
    setSortType(type);
    // Implement sorting logic based on the selected type
    // You may need to modify this based on your actual data structure
    const sortedData = [...menuData];
    switch (type) {
      case "default":
        // No sorting needed, keep the default order
        break;
      case "alphabetical":
        sortedData.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case "price":
        sortedData.sort((a, b) => a.price - b.price);
        break;
      // Add more cases for additional sorting options
      default:
        break;
    }
    setMenuData(sortedData);
  };

  const renderTabContent = (tab) => {
    <div className="px-6 pt-6 overflow-y-auto 2xl:container"></div>;
  };

  const tabClassName = (tab) => `tab ${activeTab === tab ? "checked" : ""}`;

  return (
    <div>
      <div className="ml-auto mb-6 lg:w-[100%] xl:w-[100%] 2xl:w-[100%]">
        <div className="sticky top-0 z-10 h-16 border-b bg-white dark:bg-gray-800 dark:border-gray-700 lg:py-2.5">
          
        {/* Tabs Component */}
        <div role="tablist" className="tabs tabs-bordered">
          <input
            type="radio"
            name="my_tabs_1"
            role="tab"
            className={tabClassName("tab1")}
            aria-label="Starters"
            onClick={() => handleTabChange("tab1")}
          />
          <input
            type="radio"
            name="my_tabs_1"
            role="tab"
            className={tabClassName("tab2")}
            aria-label="Main Course"
            onClick={() => handleTabChange("tab2")}
          />
          <input
            type="radio"
            name="my_tabs_1"
            role="tab"
            className={tabClassName("tab3")}
            aria-label="Dessert"
            onClick={() => handleTabChange("tab3")}
          />
          <input
            type="radio"
            name="my_tabs_1"
            role="tab"
            className={tabClassName("tab3")}
            aria-label="Quick Bites"
            onClick={() => handleTabChange("tab3")}
          />

          {renderTabContent(activeTab)}
        </div>
        {/* <div className="px-6 pt-6 overflow-y-auto 2xl:container">
          <div className="flex h-auto items-center justify-center rounded-xl">
            {menuData.map((item) => (
              <div
                key={item._id}
                className="flex h-auto items-center justify-center rounded-xl"
              >
                {/* Render your menu item component here using the 'item' data 
                <div className="flex h-auto items-center justify-center rounded-xl">
                  <FoodItem onAddToCart={addToCart} food={item} />
                </div>
              </div>
            ))}
          </div>
        </div> */}
        <CardGenerator></CardGenerator>
        {/* {menuData.map((item) => (
          <div
            key={item._id}
            className="flex h-auto items-center justify-center rounded-xl"
          >
            <div className="flex h-auto items-center justify-center rounded-xl">
              {item.itemName}
            </div>
          </div>
        ))} */}
      </div>
      </div>
    </div>                                                                                                    
  );
};

export default Dashboard;
