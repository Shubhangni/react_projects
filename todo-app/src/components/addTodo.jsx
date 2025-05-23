import { useState } from 'react';

function AddTodo({ addNewItem }) {
    let [addItem, setAddItem] = useState();
    let [addDate, setAddDate] = useState();

    const handleNewItem = (event) => {
        setAddItem(event.target.value)
    }
    const handleNewDate = (event) => {
        setAddDate(event.target.value)
    }
    const handleAddNewItem = () => {
        addNewItem(addItem, addDate)
        setAddItem('')
        setAddDate('')
    }

    return (

        <div className="container text-center">

            <div className="row kg-row">
                <div className="col-6">
                    <input type="text" className="w-100" placeholder="Enter Todo Here" value={addItem} onChange={handleNewItem}>
                    </input>

                </div>
                <div className="col-4 ">
                    <input type="date" className="w-100" value={addDate} onChange={handleNewDate} />
                </div>

                <div className="col-2">
                    <button type="button" className="btn btn-success kg-button" onClick={handleAddNewItem}>Add</button>
                </div>

            </div>

        </div>


    )

}

export default AddTodo;