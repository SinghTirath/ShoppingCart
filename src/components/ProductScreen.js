import React, { useState } from 'react';
import Product from './Product';
import Cart from './Cart';


import './ProductScreen.css';
 
const ProductScreen = () => {

    const [cart,addCart] = useState([]);
    const [cartLen, setCarLen] = useState(0);
    const [totalQuan,setTotalQuan] = useState(0);
    const [refresh,setRefresh] = useState(false);
    const productList = [
        {
            id:1,
            name:'Leather Cover',
            price: 90,
            image:'a.jpg',
            desc:'Excellent design',
            quantity:1,
        },
        {
            id:2,
            name:'Single Cover',
            price: 40,
            image:'b.jpg',
            desc:'Excellent design',
            quantity:1,
        },
        {
            id:3,
            name:'White',
            price: 190,
            image:'c.jpg',
            desc:'Excellent design',
            quantity:1,
        },
        {
            id:4,
            name:'Norlo',
            price: 20,
            image:'d.jpg',
            desc:'Excellent design',
            quantity:1,
        },
        {
            id:5,
            name:'Apple',
            price: 12,
            image:'e.jpg',
            desc:'Excellent design',
            quantity:1,
        },
        {
            id:6,
            name:'Full Cover',
            price: 100,
            image:'f.jpg',
            desc:'Excellent design',
            quantity:1,
        },
        {
            id:7,
            name:'Orange',
            price: 23,
            image:'g.jpg',
            desc:'Excellent design',
            quantity:1,
        },
        {
            id:8,
            name:'Bramo',
            price: 10,
            image:'h.jpg',
            desc:'Excellent design',
            quantity:1,
        },
        {
            id:9,
            name:'Famous',
            price: 122,
            image:'i.jpg',
            desc:'Excellent design',
            quantity:1,
        },
    ]

    const addItem = (item) => {
        let exit = false;
       
        setTotalQuan(totalQuan+item.quantity);

        if(cartLen===0){
            addCart(oldArray => [...oldArray, item]);
            setCarLen(cartLen+1);
        }
        else{
            cart.map( (product) => {
                if(item.id === product.id ){
                    cart[item.id-1].quantity+=item.quantity;
                    exit=true;
                    setRefresh(!refresh);
                }
            })
            if(!exit){
                addCart(oldArray => [...oldArray, item]);
                setCarLen(cartLen+1);
            }
        }
    }

    const handleCounterChange = (id,count) => {
        let dif = count-cart[id].quantity
        setTotalQuan(totalQuan+dif);
        cart[id].quantity=count;
        setRefresh(!refresh);
    }
    


    const deleteItem = (product) => {
        setTotalQuan(totalQuan-product.quantity);
        addCart(cart.filter(item => item.id !== product.id));
    }

    return (<div>
                <nav className="navbar navbar-light bg-light">
                    <span className="navbar-brand mb-0 h1">JIM CASES</span>
                    <Cart products={cart} handleChange={handleCounterChange} deleteItem={deleteItem} totalQuan={totalQuan}/>
                </nav>
                

                <div className="album py-5 bg-light">

                            <div className="container">
                                <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                                    {
                                        productList.map( (product) => {
                                            return(
                                                <Product id={product.id} product={product} addCart={addItem} />
                                            );
                                        })
                                    }           
                                </div>
                            </div>
                        </div>

    
            </div>
    );
};

export default ProductScreen;
