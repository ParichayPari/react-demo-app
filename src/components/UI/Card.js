import './Card.css';

const Card = (props) => {
    const classes = 'card ' + props.className;         //make sure to keep the value card with a space.     

    return <div className={classes}>{props.children}</div>
}

export default Card;