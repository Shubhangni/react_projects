import { Button } from "bootstrap";
import styles from "./item.module.css"

const Item = ({ foodItem, bought, handleBuyButton }) => {
    return (
        <li className={`${styles['kg-item']} list-group-item ${bought && 'active'} `} ><span className={styles['kg-span']}>{foodItem}</span>
            <button className={`${styles.button} btn btn-primary`} onClick={handleBuyButton} >Buy</button></li>
    )
};

export default Item;

