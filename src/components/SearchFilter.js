import React, { useState } from "react";

const SearchFilter = () => {
    const [searchItem, setSearchItem] = useState("");
    const [filteredItems, setFilteredItems] = useState([]);

    const items = [
        "Apple",
        "Banana",
        "Grapes",
        "Orange",
        "Pineapple",
        "Mango",
        "Strawberry",
        "Watermelon"
    ];

    const handleFilter = () => {
        const filtered = items.filter((item) =>
            item.toLowerCase().includes(searchItem.toLowerCase())
        );
        setFilteredItems(filtered);
    };

    return (
        <div>
            <input
                type="text"
                value={searchItem}
                onChange={e => setSearchItem(e.target.value)}
            />
            <button onClick={handleFilter}>Search</button> {/* Button to trigger the search */}
            <ul>
                {filteredItems.length > 0 ? (
                    filteredItems.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))
                ) : (
                    <li>No Search Found</li>
                )}
            </ul>
        </div>
    );
};

export default SearchFilter;
