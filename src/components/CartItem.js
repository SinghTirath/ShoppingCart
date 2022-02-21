import React,{useState} from 'react';
import './Cart';
import './Product';
import './CartItem.css';

const CartItem = (props) => {

    const [counter, setCounter] = useState(props.product.quantity);
    const [refresh,setRefresh] = useState(false);
    const incrementCounter = () => {
        props.handleCounterChange(props.id,counter+1);
        setCounter(counter + 1);
        setRefresh(!refresh);

    }

    let decrementCounter = () => {
        props.handleCounterChange(props.id,counter-1);
        setCounter(counter - 1);
        
    }

    const deleteItem = () => {
        props.deleteItem(props.product);
    }


    if(counter<=1) {
        decrementCounter = () => setCounter(1);
    }

    return (
            <tr>
                <td className="w-25">
                    <img  src={require(`../assets/${props.product.image}`)} className="img-fluid img-thumbnail" alt="Sheep" />
                </td>

                <td>{props.product.name}</td>
                <td><span>$ </span>{props.product.price}</td>
                <td className="qty">
                    <div className="btn_flex_count">
                        <button type="button" className="minus_add" onClick={decrementCounter} >-</button>
                                <span id="count_value1">{props.product.quantity}</span>
                        <button type="button" id="plus_add" onClick={incrementCounter}>+</button>
                    </div>
                    </td>
                    <td><span>$ </span>{(props.product.quantity*(props.product.price))}</td>
                    <td>
                        <button className="btn btn-danger btn-sm" onClick={deleteItem}>
                            <i className="fa fa-times">Delete</i>
                        </button>
                </td>
            </tr>
    );
};

export default CartItem;