import logo from "./logo.svg"
import cart from "./icon-cart.svg"

export default function Nav(){
    return(
        <>
        <div className="nav-bar">
            <img src={logo}></img>
            <ul className="nav-content">
                <li href="#">Collections</li>
                <li href="#">Men</li>
                <li href="#">Women</li>
                <li href="#">About</li>
                <li href="#">Contact</li>
            </ul>
            <div className="login">
                <button>Login</button>
                <img src={cart}></img>
            </div>
            
        </div>
        <div class="line-2"></div>
        </>

    )
}