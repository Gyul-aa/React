import css from "../css/include.css"

function Footer(props){
    const {footer} = props;
    return(
        <footer>
            <p>{footer}</p>
        </footer>
    );
}
export default Footer;