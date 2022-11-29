import React from 'react';
import{createContext,useState} from 'react'

const cartContext=createContext();

function CartContextProvider(props) {
    const [cart,setCart]=useState([]);

    const addToCart=(item,count)=>{
            if(isInCart(item.id)){
            setCart(cart.map(product => {
              return product.id === item.id ? {...product, count: product.count + count} : product
            }));
            } else {
              setCart([...cart, {...item, count}]);
            }
    }

    function removeItem(idToRemove) {
        let newCart = cart.filter((itemInCart) => itemInCart.id !== idToRemove);
        setCart(newCart);
    }

    function clearCart(){
        setCart([]);
    }
    
    function getTotalPrice(){
        let total=0;
        cart.forEach(item=>{
            total+=(item.price*item.count);
        })
        return total;
    }
    const isInCart=(id)=> cart.find(item=>item.id===id)?true:false;

    function getTotalItemCount(){
        let total=0;
        cart.forEach(itemInCart=>{
            total+=itemInCart.count;
        })
        return total;
    }

    return (
        <>
            <cartContext.Provider 
            value={{
                cart,
                addToCart,
                getTotalItemCount,
                removeItem,
                clearCart,
                getTotalPrice,
                isInCart,
                }}>
                {props.children}
            </cartContext.Provider>
        </>
    )
}

export  {CartContextProvider,cartContext};
