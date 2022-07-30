import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function NavButton(props) {
    let setState = props.fun;
    let fun = () => setState(props.label)
    return (
        <button className="nav" onClick={fun}>
            <FontAwesomeIcon class="nav-icn" icon={props.icn} />
            {props.label}
        </button>
    )
} export default NavButton;