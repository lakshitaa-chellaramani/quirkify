import React from "react";
import Aside from "./Aside";
import MenuItem from "./MenuItem/MenuItem";

const Menu = () => {
  return (
    <div>
      <div className="grid  grid-cols-9">
        
        <div className="col-span-9">
          <MenuItem/>
        </div>
      </div>
    </div>
  );
};

export default Menu;
