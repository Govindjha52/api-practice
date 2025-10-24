import { useEffect, useState } from "react";

function Recipes() {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://dummyjson.com/recipes")
      .then((res) => res.json())
      .then((data) => {
        setRecipes(data.recipes);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading recipes...</p>;

  return (
    <div className="data-list">
      {recipes.map((r) => (
        <div key={r.id} className="data-card">
        <div className="recipy-card">
          <div className="r-im">
            <img src={r.image} alt="" />
          </div>
          <div className="r-about">
            <h2>ID: {r.id}</h2>
            <h3>name: {r.name}</h3>
            <h3>mealType: {r.mealType}</h3>
            <h4>caloriesPerServing: {r.caloriesPerServing}</h4>
            <h4>rating:{r.rating}</h4>
          <p><b>ingredients :</b>{r.ingredients}</p>
          </div>
        </div>
          
        </div>
      ))}
    </div>
  );
}

export default Recipes;
