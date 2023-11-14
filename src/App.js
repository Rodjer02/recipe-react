import { useEffect } from "react";
import { useState } from "react";
import Recipe from "./components/Recipe/Recipe";

function App() {
  const APP_ID = "6ed44aa4";
  const APP_KEY = "7841e42f95e3c9ccedc783f2434cdcf3";

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("chicken");

  useEffect(() => {
    getRecipes();
  }, [query]);

  const getRecipes = async () => {
    const response = await fetch(
      `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`
    );
    const data = await response.json();
    setRecipes(data.hits);
    console.log(data.hits);
  };

  const updateSearch = (e) => {
    setSearch(e.target.value);
  };

  const getSearch = (e) => {
    e.preventDefault();
    setQuery(search);
    setSearch("");
  };

  return (
    <div className="App">
      <form
        onSubmit={getSearch}
        className="search-form"
        style={{
          display: "flex",
          "align-items": "center",
          "justify-content": "center",
          padding: "40px",
        }}
      >
        <input
          className="search-bar"
          type="text"
          value={search}
          onChange={updateSearch}
          placeholder="Product name..."
          style={{
            width: "50%",
            padding: "15px",
            "border-radius": "30px",
            background: "aliceblue",
            outline: "none",
            border: "1px solid #fff",
          }}
        ></input>
        <button
          className="search-button"
          type="submit"
          style={{
            padding: "15px 30px",
            "border-radius": "30px",
            "margin-left": "10px",
            "background-color": "teal",
            color: "#fff",
            border: " 1px solid",
          }}
        >
          Search
        </button>
      </form>
      <div
        className="recipes"
        style={{
          display: "flex",
          "flex-wrap": "wrap",
          gap: "20px",
          "align-items": "center",
          "justify-content": "center",
        }}
      >
        {recipes.map((recipe) => (
          <Recipe
            key={recipe.recipe.label}
            title={recipe.recipe.label}
            calories={recipe.recipe.calories}
            image={recipe.recipe.image}
            ingredients={recipe.recipe.ingredients}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
