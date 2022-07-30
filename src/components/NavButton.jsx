import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function NavButton(props) {
    let show = props.fun;
    let fun = () => show(props.label)
    return (
        <button className="nav" onClick={fun}>
            <FontAwesomeIcon class="nav-icn" icon={props.icn} />
            {props.label}
        </button>
    )
} export default NavButton;