import React, { useState, useEffect } from "react";
import MenuItem from "./MenuItem/MenuItem";
import Dropdown from "./DropDown";  // Adjust the path based on your project structure


const Dashboard = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth >= 1024);
  const [activeTab, setActiveTab] = useState("tab1");
  const [menuData, setMenuData] = useState([]);
  const [sortType, setSortType] = useState("default");
  const [showFilter, setShowFilter] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen((prevIsSidebarOpen) => !prevIsSidebarOpen);
  };

  

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`/api/menu/${activeTab}`);
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
      <div className="px-6 pt-6 overflow-y-auto 2xl:container">
        {menuData.map((item) => (
          <div key={item.id} className="flex h-auto items-center justify-center rounded-xl">
            {/* Render your menu item component here using the 'item' data */}
            <MenuItem item={item} />
          </div>
        ))}
      </div>
  };

  const tabClassName = (tab) => `tab ${activeTab === tab ? "checked" : ""}`;
  
  return (
    <div>
      <div
        className={`lg:hidden fixed top-0 left-0 w-full h-full bg-gray-800 bg-opacity-50 ${
          isSidebarOpen ? "" : "hidden"
        }`}
        onClick={toggleSidebar}
      ></div>
      {/*<aside
        className={`fixed top-0 left-0 z-10 h-screen w-[70%] flex flex-col justify-between border-r bg-white px-6 pb-3 transition duration-300 md:w-4/12 lg:ml-0 lg:w-[25%] xl:w-[20%] 2xl:w-[15%] dark:bg-gray-800  ${
          isSidebarOpen || isLargeScreen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex flex-col justify-between flex-1 mt-6">
          <nav className="flex-1 -mx-3 space-y-3">
            <div className="mx-3 pt-6">
              <h3 className="text-gray-600 heading dark:text-gray-300 text-lg font-semibold mt-3">
                Filter
              </h3>
              <div className="mt-2 space-y-2">
                <div className="flex mt-4 flex-wrap gap-4">
                  <label className="inline-flex items-center cursor-pointer">
                    <input type="checkbox" value="" className="sr-only peer" />
                    <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-[#43aa8b]"></div>
                    <span className="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300">
                      Veg
                    </span>
                  </label>

                  <label className="inline-flex items-center cursor-pointer">
                    <input type="checkbox" value="" className="sr-only peer" />
                    <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-[#ff0000]"></div>
                    <span className="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300">
                      Non Veg
                    </span>
                  </label>
                  <label className="inline-flex items-center cursor-pointer">
                    <input type="checkbox" value="" className="sr-only peer" />
                    <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-[#21b0fe]"></div>
                    <span className="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300">
                      Jain
                    </span>
                  </label>
                </div>
              </div>
            </div>
          </nav>
        </div>
      </aside>*/}

      <div className="ml-auto mb-6 lg:w-[100%] xl:w-[100%] 2xl:w-[100%]">
        <div className="sticky top-0 z-10 h-16 border-b bg-white dark:bg-gray-800 dark:border-gray-700 lg:py-2.5">
          <div className="flex items-center justify-between space-x-4 px-6 2xl:container">
            <h5
              hidden
              className="text-2xl font-medium text-gray-600 lg:block dark:text-white"
            >
              Menu
            </h5>
            <div className="flex space-x-4">
              <div hidden className="md:block">
                <div className="relative flex items-center text-gray-400 focus-within:text-cyan-400">
                  <span className="absolute left-4 flex h-6 items-center border-r border-gray-300 pr-3 dark:border-gray-700">
                    <svg
                      xmlns="http://ww50w3.org/2000/svg"
                      className="w-4 fill-current"
                      viewBox="0 0 35.997 36.004"
                    >
                      <path
                        id="Icon_awesome-search"
                        data-name="search"
                        d="M35.508,31.127l-7.01-7.01a1.686,1.686,0,0,0-1.2-.492H26.156a14.618,14.618,0,1,0-2.531,2.531V27.3a1.686,1.686,0,0,0,.492,1.2l7.01,7.01a1.681,1.681,0,0,0,2.384,0l1.99-1.99a1.7,1.7,0,0,0,.007-2.391Zm-20.883-7.5a9,9,0,1,1,9-9A8.995,8.995,0,0,1,14.625,23.625Z"
                      ></path>
                    </svg>
                  </span>
                  <input
                    type="search"
                    name="leadingIcon"
                    id="leadingIcon"
                    placeholder="Search here"
                    className="outline-none w-full rounded-xl border border-gray-300 py-2.5 pl-14 pr-4 text-sm text-gray-600 transition focus:border-cyan-300 dark:bg-gray-900 dark:border-gray-700"
                  />
                </div>
              </div>
              <button
                aria-label="search"
                className="h-10 w-10 rounded-xl border bg-gray-100 active:bg-gray-200 md:hidden dark:bg-gray-700 dark:border-gray-600 dark:active:bg-gray-800"
              >
                <svg
                  xmlns="http://ww50w3.org/2000/svg"
                  className="mx-auto w-4 fill-current text-gray-600 dark:text-gray-300"
                  viewBox="0 0 35.997 36.004"
                >
                  <path
                    id="Icon_awesome-search"
                    data-name="search"
                    d="M35.508,31.127l-7.01-7.01a1.686,1.686,0,0,0-1.2-.492H26.156a14.618,14.618,0,1,0-2.531,2.531V27.3a1.686,1.686,0,0,0,.492,1.2l7.01,7.01a1.681,1.681,0,0,0,2.384,0l1.99-1.99a1.7,1.7,0,0,0,.007-2.391Zm-20.883-7.5a9,9,0,1,1,9-9A8.995,8.995,0,0,1,14.625,23.625Z"
                  ></path>
                </svg>
              </button>
              {/* Search Bar and Filter Button */}
              <div className="flex items-center space-x-4">
                <div className="relative flex items-center text-gray-400 focus-within:text-cyan-400">
                  {/* ... (existing search input) */}
                </div>

              </div>
              
            </div>
            <Dropdown sortType={sortType} handleSortChange={handleSortChange} />
          </div>
        </div>

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
        {/* <div role="tablist" className="tabs tabs-bordered">
          <a role="tab" className="tab">Tab 1</a>
          <a role="tab" className="tab tab-active">Tab 2</a>
          <a role="tab" className="tab">Tab 3</a>
        </div> */}
        {/*<div className="mt-4 ml-3">
      <label className="text-gray-600 dark:text-gray-300">Sort By:</label>
      <select
        value={sortType}
        onChange={(e) => handleSortChange(e.target.value)}
        className="mt-1 block w-full p-2 border border-gray-300 rounded-md bg-white dark:bg-gray-800 dark:border-gray-700"
      >
        <option value="mood">Mood</option>
        <option value="trending">Trending</option>
        <option value="price">Price</option>
        {/* Add more sorting options as needed }
      </select>
    </div>*/}

        <div className="px-6 pt-6 overflow-y-auto 2xl:container max-w-[1024px] mx-auto">
          <div className="flex h-auto items-center justify-center rounded-xl">
            <MenuItem />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
