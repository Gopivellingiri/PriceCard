import './Card.css';
const Card = (props) => {
  return <div className="grid-items">{props.children}</div>
}

export default Card