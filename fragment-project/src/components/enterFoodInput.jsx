import styles from "./foodInput.module.css"
const EnterFoodInput = ({ handleKeyDown }) => {


    return <input type="text" placeholder="Enter Food Item" className={styles.foodInput} onKeyDown={handleKeyDown}></input>
}

export default EnterFoodInput;