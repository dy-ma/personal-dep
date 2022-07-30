import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function NavButton(props) {
    return (
        <button className="nav" onClick={props.fun}>
            <FontAwesomeIcon class="nav-icn" icon={props.icn} />
            {props.label}
        </button>
    )
} export default NavButton;