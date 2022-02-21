import React,{useState,useEffect} from 'react';
import './Cart.css';
import './Product.css';
import CartItem from './CartItem';

const Cart = (products) => {
    
    const [total,setTotal] = useState(0);

    useEffect(() => {
        let totalNum = 0;
        Object.entries((products['products']).map(
            (product) => (
                totalNum+=((product.quantity)*product.price)   
            )
        ))
        setTotal(totalNum);
    },[products]);

    const handleCounterChange = (id,count) => {
        products.handleChange(id,count);
    }


    
    return(
        <div>
                <button type="button" className="btn" data-toggle="modal" data-target="#exampleModal">
                    <span className='badge badge-warning' id='lblCartCount'>{products.totalQuan}</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" className="bi bi-cart3" viewBox="0 0 16 16">
                        <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l.84 4.479 9.144-.459L13.89 4H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
                    </svg>
                </button>

            <div className="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog modal-lg modal-dialog-centered" role="document">
                        <div className="modal-content">
                        <div className="modal-header border-bottom-0">
                            <h5 className="modal-title" id="exampleModalLabel">
                            Your Shopping Cart
                            </h5>
                            <button type="button"  className="close" data-dismiss="modal" aria-label="Close" >
                            <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <table className="table table-image">
                            <thead>
                                <tr>
                                <th scope="col"></th>
                                <th scope="col">Product</th>
                                <th scope="col">Price</th>
                                <th scope="col">Qty</th>
                                <th scope="col">Total</th>
                                <th scope="col">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                            {


                                products['products']?(
                                    Object.entries((products['products']).map(
                                        (product,index) => (
                                            <CartItem id={index} product={product} handleCounterChange={handleCounterChange} deleteItem={products.deleteItem}/>
                                        )
                                    ))
                                ):(
                                    console.log('empty')
                                )
                            }
                            </tbody>
                            </table> 
                            <div className="d-flex justify-content-end">
                            <h5>Total: $<span className="price text-success">{total}</span></h5>
                            </div>
                        </div>
                        <div className="modal-footer border-top-0 d-flex justify-content-between">
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-success">Checkout</button>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
    );
}

export default Cart;
