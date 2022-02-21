import React,{useState} from 'react';

import './Product.css';

const Product = (props) => {
    
  const [counter, setCounter] = useState(1);
  
    const incrementCounter = () => {
        setCounter(counter + 1);
    }


    let decrementCounter = () => {
      setCounter(counter - 1);
    }


    if(counter<=0) {
        setCounter(1);
    }


    return (
        <div className="card" >
            <img className="card-img-top" src={require(`../assets/${props.product.image}`)}  width="500" height="300" alt="Card image cap" />
            <div className="card-body">
                    <h3>{props.product.name}</h3>
                    <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                    <div className="d-flex justify-content-between align-items-center">
                        <p className="price"><span>Price $</span>{props.product.price}</p>
                        <div className="btn-group">
                        <div className="button_for_addmore">
                            <div className="btn_flex_count">
                            <button type="button" class="minus_add" onClick={decrementCounter} >-</button>
                                <span id="count_value1">{counter}</span>
                            <button type="button" id="plus_add" onClick={incrementCounter}>+</button>
                            </div>
                        </div>
                        </div>
                        <button type="button" className="btn btn-success" 
                                onClick={() => {
                                    props.product.quantity = counter;
                                    props.addCart(props.product);
                                }}>
                            Add to Cart 
                        </button>
                    </div>
            </div>
        </div>
    );
};

export default Product;
