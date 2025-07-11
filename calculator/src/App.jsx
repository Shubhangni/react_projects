import styles from './App.module.css';
import Display from './components/display';
import Button from './components/button';
import { useState } from 'react';
function App() {

  const [button_names, setbuttonnames] = useState(['C', '1', '2', '+', '3', '4', '-', '5', '6', '*', '7', '8', '/', '=', "9", "0", "."])



  return (
    <center>
      <div className={`${styles.calculator} mt-5`}>
        <Display></Display>

        <Button button_display={button_names} ></Button>

      </div>
    </center >



  )
}

export default App
