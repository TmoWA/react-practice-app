import { useState } from "react";
import "./Tabs.css";


export default function Tabs() {
    // Used to track the active tab
    const [activeContentIndex, setActiveContentIndex] = useState(0);

    const ingredients = [
        ["Turkey Ranch", "BLT", "Beef Buster"],
        ["Wheat", "Rye", "White"],
        ["Turkey", "Roast Beef", "Ham", "Salami"],
        ["Cheddar", "Provolone", "Bacon", "Lettuce", "Tomato", "Pickles", "Raisins", "Raw Onions", "Fried Onions"],
        ["Mayonaise", "Mustard", "Ranch", "Cream Cheese"]
    ];

    const premadeSandwiches = [
        ["Wheat", "Turkey", "Bacon", "Provolone", "Ranch"],
        ["White", "Bacon", "Lettuce", "Tomato", "Mayonaise"],
        ["Rye", "Roast Beef", "Fried Onions", "Mustard"]
    ];

    // Used to track the list of selected ingredients
    const [currentIngredients, setCurrentIngredients] = useState([]);

    const INGREDIENT_LIMIT = 10;

    function selectIngredient(ingredient) {
        if (currentIngredients.length < INGREDIENT_LIMIT) {
            setCurrentIngredients([...currentIngredients, ingredient]);
        }
    }

    function setPremadeOptions(index) {
        setCurrentIngredients(premadeSandwiches[index]);
    }

    function deleteIngredient(indexToDelete) {
        // The unused object is to enable this syntax to use the index for filtering
        setCurrentIngredients(currentIngredients.filter((item, currentIndex) => currentIndex !== indexToDelete));
    }


    return (
        <div id="tabs-container">
            <div id="tabs">
                <menu>
                    <button className={activeContentIndex === 0 ? "active" : ""}
                        onClick={() => setActiveContentIndex(0)}>
                        Premade Sandwich
                    </button>

                    <button className={activeContentIndex === 1 ? "active" : ""}
                        onClick={() => setActiveContentIndex(1)}>
                        Breads
                    </button>

                    <button className={activeContentIndex === 2 ? "active" : ""}
                        onClick={() => setActiveContentIndex(2)}>
                        Meats
                    </button>

                    <button className={activeContentIndex === 3 ? "active" : ""}
                        onClick={() => setActiveContentIndex(3)}>
                        Toppings
                    </button>

                    <button className={activeContentIndex === 4 ? "active" : ""}
                        onClick={() => setActiveContentIndex(4)}>
                        Spreads
                    </button>
                </menu>
            </div>

            <div id="tab-content">
                <div id="selection-content">
                    <p>Available Ingredients</p>

                    {ingredients[activeContentIndex].map((btn, i) => {
                        if (activeContentIndex > 0) {
                            return (
                                <button className="ingredient-button" key={btn}
                                    onClick={() => selectIngredient(btn)}
                                >
                                    {btn}
                                </button>
                            )
                        } else {
                            return (
                                <button className="premade-sandwich-button" key={btn}
                                    onClick={() => setPremadeOptions(i)}
                                >
                                    {btn}
                                </button>
                            )
                        }
                    })}
                </div>

                <div id="sandwich-preview">
                    <p>Selected Ingredients</p>
                    <p className={currentIngredients.length === INGREDIENT_LIMIT ? "max-selected" : ""}>
                        Currently selected {currentIngredients.length}/10
                    </p>

                    <button id="clear-button" onClick={() => setCurrentIngredients([])}>Clear All</button>

                    {currentIngredients.map((ingredient, i) => (
                        <p key={ingredient + "-preview" + i}
                            className="preview-item"
                            onClick={() => { deleteIngredient(i) }}
                        >
                            {ingredient}
                        </p>
                    ))}
                </div>
            </div>
        </div >
    );
}