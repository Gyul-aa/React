import css from "../css/include.css"

function Header(props){
    const {menu} = props;
    return(
        <header>
            <h1>LOGO</h1>
            <nav>
                <ul>
                    <li>{menu[0]}</li>
                    <li>{menu[1]}</li>
                    <li>{menu[2]}</li>
                    <li>{menu[3]}</li>
                </ul>
            </nav>
        </header>
    );
}
export default Header;