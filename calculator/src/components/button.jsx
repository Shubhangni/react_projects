import styles from '../App.module.css';
const handlebuttonclick = (event) => {
    console.log("button clicked")
}

const Button = ({ button_display }) => {

    return <div onClick={handlebuttonclick(event)} className={styles.buttonContainer
    } > {button_display.map((items) => <button key={items} className={styles.button}>{items}</button>)}
    </div>

}

export default Button