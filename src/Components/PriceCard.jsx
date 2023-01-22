import { FaCheck } from "react-icons/fa";
import Card from "./Cards/Card";
import './PriceCard.css';
const PriceCard = (props)=>{
  return (
    <Card className="grid-items">
      <p>{props.package}</p>
      <h1>{props.priceLists}<span>/month</span></h1>
      <ul>
        {props.lis}
        </ul>  
        <button>Button</button>
    </Card>
  )
}

export default PriceCard;