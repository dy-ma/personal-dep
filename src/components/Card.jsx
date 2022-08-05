import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Card.css"

function Card(props) {
    return (
        <div class="card">
                <img src={props.image}/>
            <div class="label">
                <span class="label-text">{props.label}</span>
                <FontAwesomeIcon class="icon" icon={props.icon}/>
            </div>
        </div>
    )
} export default Card;