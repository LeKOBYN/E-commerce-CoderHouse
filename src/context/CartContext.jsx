import{createContext,useState} from 'react'

const cartContext=createContext();

function CartContextProvider(props) {
    const [cart,setCart]=useState([]);

    function addToCart (item,count) {
            if(inCart(item.id)){
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
    
    function getTotalPrice(){
        let total=0;
        cart.forEach(item=>{
            total+=(item.price*item.count);
        })
        return total;
    }

    function getTotalItemCount(){
        let total=0;
        cart.forEach(itemInCart=>{
            total+=itemInCart.count;
        })
        return total;
    }
    const inCart=(id)=> cart.find(item=>item.id===id)?true:false;

    function clearCart(){
        setCart([]);
    }

    return (
        <>
            <cartContext.Provider 
            value={{cart,
                    addToCart,
                    getTotalItemCount,
                    removeItem,
                    getTotalPrice,
                    inCart,
                    clearCart
                    }}>
                {props.children}
            </cartContext.Provider>
        </>
    )
}

export  {CartContextProvider,cartContext};