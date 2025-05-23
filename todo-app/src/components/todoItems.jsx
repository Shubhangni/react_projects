const TodoItems = ({ todoItems }) => {

    return (

        <div className="container">
            {todoItems.map((item, index) => (
                <div key={item.name} className="row kg-row">

                    <div className="col-6">
                        {item.name}
                    </div>

                    <div className="col-4">
                        {item.dueDate}
                    </div>
                    <div className="col-2">
                        <button type="button" className="btn btn-danger kg-button">Delete
                        </button>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default TodoItems;