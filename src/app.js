import React,{useState} from 'react';
import Header from './components/header';
import Footer from './components/footer';
import Product from './components/product';
import Categories from './components/categories';
import SimpleCart from './components/simpleCart';
import Cart from './components/Cart';
import ProductDetails from './components/productDetails';
import { BrowserRouter, Switch, Route } from 'react-router-dom';


export default function App (props){
    const [cartList, setCartList] = useState(false);
    function handleShow(){
        setCartList(!cartList);
    }
    return (
        <>
        <BrowserRouter>
        <Header show={handleShow}/>
            <Switch>
                <Route exact path='/'>
                    {
                        cartList && <SimpleCart/>
                    }
                    <Categories/>
                    <Product/>
                </Route>
                <Route exact path='/cart'>
                    <SimpleCart/>
                    <Cart/>
                </Route>
                <Route exact path='/products'>
                    <SimpleCart/>
                    <ProductDetails/>
                </Route>
            </Switch>
            <Footer/>
        </BrowserRouter>
        </>
    )
} ;