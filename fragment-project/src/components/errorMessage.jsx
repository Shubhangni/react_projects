

const ErrorMessage = ({ items }) => {

    //let foodItems = [];
    let emptyMessage = items.length == 0 ? <h3>list is empty</h3> : null;
    return emptyMessage
};

export default ErrorMessage;