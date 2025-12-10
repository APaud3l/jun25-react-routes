import { StyledNavLink } from "../components/NavBar";

function HomePage(){
    return(
        <div>
            <h1>Home</h1>
            <p>Welcome to our REACT ROUTER DEMO SPA.</p>

            <p>
                <StyledNavLink to="/users/developer">Go to the user's profile</StyledNavLink>
            </p>
        </div>
    )
}

export default HomePage;