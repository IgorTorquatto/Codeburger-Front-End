import React, { createContext, useContext, useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { toast } from 'react-toastify'

const CartContext = createContext({})

export const CartProvider = ({ children }) => {
    const [cartProducts, setCartProducts] = useState([])


    const updateLocalStorage = async products =>{
        await localStorage.setItem('codeburger:cartInfo', JSON.stringify(products))
    }

    const putProductInCart = async product => {
       const cartIndex = cartProducts.findIndex(prd => prd.id === product.id)

       /*If the item exists in the cart, we update the quantity field,
        otherwise we create the new item with the quantity being 1 and
        update localstorage */
        
       let newCartProducts = []

       if( cartIndex > 0 ){
            newCartProducts = cartProducts
            newCartProducts[cartIndex].quantity += 1
            setCartProducts(newCartProducts)
       }
       else{
            //case where the product is not in the cart
            product.quantity = 1
            newCartProducts = [...cartProducts,product] 
            setCartProducts(newCartProducts)
       }
       await toast.success("Carrinho atualizado")
       updateLocalStorage(newCartProducts)
    }

    const deleteProducts = async productId =>{
        const newCart = cartProducts.filter( prodcut => prodcut.id !== productId)
        setCartProducts(newCart)

        updateLocalStorage(newCart)
    }

    const increaseProducts = async productId =>{
        const newCart = cartProducts.map( product => {
            return product.id === productId ? {...product, quantity: product.quantity + 1} : product
        })
        setCartProducts(newCart)

        updateLocalStorage(newCart)
    }

    const decreaseProducts = async productId =>{

        const cartIndex = cartProducts.findIndex(pdt => pdt.id === productId)

        if( cartProducts[cartIndex].quantity > 1){
            const newCart = cartProducts.map( product => {
                return product.id === productId ? {...product, quantity: product.quantity - 1} : product
            })
            setCartProducts(newCart)
            
            updateLocalStorage(newCart)
        }
        
        else{
            deleteProducts(productId)
        }
        
    }

    useEffect(() => {
        //save cart items to localstorage
        const loadUserData = async () => {
            const clientCartData = await localStorage.getItem('codeburger:cartInfo')

            if (clientCartData) {
                setCartProducts(JSON.parse(clientCartData))
            }

        }

        loadUserData()
    }, [])

    return (
        //everything that is placed in "value" is exported to be used elsewhere in our application
        <CartContext.Provider value={{ putProductInCart, cartProducts,increaseProducts,decreaseProducts }}>
            {children}
        </CartContext.Provider>
    )
}

export const useCart = () => {
    const context = useContext(CartContext)

    if (!context) {
        throw new Error("useCart must be used with UserContext")
    }

    return context
}

CartProvider.propTypes = {
    children: PropTypes.node
}