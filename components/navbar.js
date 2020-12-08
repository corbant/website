import React from 'react'
import { Menu, Header, Search, Icon, Popup, Form, Divider, Button, Item } from 'semantic-ui-react'
import CartItem from './cartItem'
import { connect } from 'react-redux'
import styles from '../styles/Navbar.module.css'
import { addQuantity, subtractQuantity, removeFromCart} from '../redux/actions/cartActions'



const Navbar = ({products, total, addQuantity, subtractQuantity, removeFromCart}) => {

    function handleAddQuantity(id){
        addQuantity(id);
    }
    function handleSubtractQuantity(id){
        subtractQuantity(id);
    }
    function handleRemove(id){
        removeFromCart(id);
    }

    let addedProducts = products.length ?
    (
        products.map(product => {
            return (
                <>
                    <CartItem img={product.img} name={product.name} quantity={product.quantity} onIncreaseClick={() => handleAddQuantity(product.id)} onDecreaseClick={ () => handleSubtractQuantity(product.id)} onRemoveClick={() => handleRemove(product.id)}/>
                </>
            )
        })
    ):
    (
        <p><b>No Products</b></p>
    );

    return(
        <Header className={styles.header}>
            <Menu className={styles.navbar} borderless>
                <Menu.Item position='left'>
                    <Icon link='/' name='coffee' size='huge'/>
                </Menu.Item>
                <Menu.Item position='right'>
                    <Search size='large'/>
                </Menu.Item>
                <Menu.Item>
                    <Icon link='/' name='heart' size='large' aria-label='wishlist'/>
                </Menu.Item>
                <Menu.Item>
                    <Popup on='click' position='bottom left' trigger={<Icon link name='cart' size='large' aria-label='cart'/>}>
                        <Popup.Content>
                            <Item.Group divided>
                                {addedProducts}
                                <b>Total: ${total}</b>
                            </Item.Group>
                            <Button size='small'>Proceed to Checkout</Button>
                        </Popup.Content>
                    </Popup>
                </Menu.Item>
                <Menu.Item>
                    <Popup on='click' position='bottom left' trigger={<Icon link name='user' size = 'large' aria-label='account'/>}>
                        <Popup.Content >
                            <Form>
                                <Form.Input label='Username' placeholder='Username'/>
                                <Form.Input label='Password' placeholder='Password' type='password'/>
                                <Form.Button content='Login' primary/>
                                <Divider horizontal>Or</Divider>
                                <Form.Button secondary>Sign Up</Form.Button>
                            </Form>
                        </Popup.Content>
                    </Popup>
                </Menu.Item>
            </Menu>
        </Header>
    )
}

const mapStateToProps = (state) => {
    return {
        products: state.shoppingCart,
        total: state.totalPrice
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addQuantity: (id) =>{dispatch(addQuantity(id))},
        subtractQuantity: (id) =>{dispatch(subtractQuantity(id))},
        removeFromCart: (id) =>{dispatch(removeFromCart(id))}
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (Navbar);