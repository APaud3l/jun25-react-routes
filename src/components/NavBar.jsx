import { styled } from "styled-components";
import { NavLink } from 'react-router-dom';

const StyledNav = styled.nav`
  margin-bottom: 1rem;
`;

const StyledNavLink = styled(NavLink)`
    margin-right: 1rem;
    text-decoration: none;
    color: #333;

    &.active {
        font-weight: bold;
        color: #30c472ff;
    }

    &:hover {
        text-decoration: underline;
    }
`;

function NavBar() {
  return (
    <StyledNav>
      {/* Navigation using Link  */}
      {/* <Link to="/">Home</Link>
      <Link to="/about">About</Link> */}

      {/* Navitaion using StyledNavLink */}
      <StyledNavLink to="/" end>
        Home
      </StyledNavLink>
      <StyledNavLink to="/about">
        About
      </StyledNavLink>
      <StyledNavLink to="/dashboard">
        Dashboard
      </StyledNavLink>
    </StyledNav>
  );
}

export {NavBar, StyledNavLink};
