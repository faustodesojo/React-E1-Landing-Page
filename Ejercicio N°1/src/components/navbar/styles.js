import styled from "styled-components";

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  height: 80px;
  width: 100%;
  box-shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);
  background-color: #242424;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
  img {
    height: 80px;
    width: 80px;
    object-fit: cover;
    border-radius: 50%;
  }
`;

export const NavbarLinks = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  height: 50px;
  width: 400px;
`;

export const HomeContainer = styled(NavbarLinks)`
  display: flex;
  align-items: center;
  @media (max-width: 1024px) {
    display: none;
  }
`;

export const MenuToggle = styled.div`
  display: none;
  cursor: pointer;
  font-size: 1.5rem;
  color: #fff;
  @media (max-width: 1024px) {
    display: flex;
  }
`;

export const NavbarLink = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 60px;
  color: #fff;
  text-decoration: none;
  font-size: 1rem;
  cursor: pointer;
  li {
    list-style: none;
  }
  li:hover {
    transition: 0.3s;
    text-decoration: underline;
    color: var(--background-lightblue);
  }
  @media (max-width: 1024px) {
    display: none;
  }
`;
