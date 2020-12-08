const { Item, Icon, Button } = require("semantic-ui-react")

const CartItem = (props) => {
    return(
        <Item>
            <Item.Image size='tiny' src={props.img}/>
            <Item.Content verticalAlign='middle'>
                <Item.Header>{props.name}</Item.Header>
                <Item.Description>{'Quantity: ' + props.quantity}</Item.Description>
                <Button size='tiny' icon onClick={props.onIncreaseClick}>
                    <Icon name='chevron up'/>
                </Button>
                <Button size='tiny' icon onClick={props.onDecreaseClick}>
                    <Icon name='chevron down'/>
                </Button>
                <Button size='tiny' icon onClick={props.onRemoveClick}>
                    <Icon name='remove'/>
                </Button>
            </Item.Content>
        </Item>
    )
}

export default CartItem;