
import { useState } from "react";
import Item from "./item";
let FoodItems = ({ items }) => {

    const [activeItems, setActiveItems] = useState([])

    const onBuyButton = (event, item) => {
        let newItems = [...activeItems, item];
        setActiveItems(newItems)
    }

    //let foodItems = []
    return (
        <ul className="list-group">
            {items.map(item => <Item key={item} foodItem={item} bought={activeItems.includes(item)} handleBuyButton={(event) => onBuyButton(event, item)}></Item>)}
        </ul>
    );

};

export default FoodItems;

