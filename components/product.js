const { Card, Rating, Button, Icon } = require("semantic-ui-react")
import styles from '../styles/Product.module.css'

const Product = (props)=>{
    return(
        <Card
        image={props.image}
        meta={'$' + props.price}
        header={props.name}
        description={props.description}
        extra={
            <>
                <Rating maxRating='5' rating={props.rating} disabled={true}/>
                <Button className={styles.button} onClick={props.onClick}>Add to Cart</Button>
            </>
            }
        link='/'
        />
    )
}

export default Product;