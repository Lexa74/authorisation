import { Link } from "react-router-dom";
import { postLogout } from "../../service/authorization";

export const Home = () => {
    const handlerLogoutClick = () => {
        alert('Logout')
        postLogout();
    }

    return (
        <>
            <Link onClick={handlerLogoutClick} to={'/login'}>Logout</Link>
        </>
    )
}