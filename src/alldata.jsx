import { useState } from "react";
import Product from "./dataFetched/product";
import Recipes from "./dataFetched/recipes";
import User from "./dataFetched/user";

function ShowAll() {
  const [activeSection, setActiveSection] = useState(null);

  const toggleSection = (sectionName) => {
    setActiveSection(activeSection === sectionName ? null : sectionName);
  };
  return (
    <>
    <div className="combine">
      {/* Product Section */}
      <div className="section">
        <h2 onClick={() => toggleSection("product")} className="section-title">
          Products
        </h2>
        {activeSection === "product" && <Product />}
      </div>

      {/* Recipes Section */}
      <div className="section">
        <h2 onClick={() => toggleSection("recipes")} className="section-title">
          Recipes
        </h2>
        {activeSection === "recipes" && <Recipes />}
      </div>

        {/* Recipes Section */}
        <div className="section">
        <h2 onClick={() => toggleSection("users")} className="section-title">
          Users
        </h2>
        {activeSection === "users" && <User />}
      </div>

      </div>
    </>
  );
}
export default ShowAll;
