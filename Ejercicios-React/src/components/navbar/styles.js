import { Link } from "react-router-dom";
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

  @media (max-width: 1024px) {
    opacity: 0.9;
    height: 80px;
    img {
      position: absolute; 
      top: 0;
      left: 0;
      right:32px;
      bottom: 0;
      margin: auto;
      z-index: 100;
    }
  }
`;

export const NavbarLinks = styled.div`
  display: flex;
  align-items: center;
  margin-right: 50px;
  justify-content: end;
  height: 50px;
  width: 400px;
`;

export const HomeContainer = styled(NavbarLinks)`
  display: flex;
  align-items: center;
  gap: 2rem;
  @media (max-width: 1024px) {
    display: none;
  }
`;

export const HomeContainerResponsive = styled.div`
  display: none;
  align-items: center;
  gap: 2rem;
  width: 100%;
  margin-right: 30px;
  margin-top: 20px;
  @media (max-width: 1024px) {
    display: flex;
  }
`;

export const NavbarLink = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  gap: 60px;
  color: #fff;
  text-decoration: none;
  font-size: 1rem;
  cursor: pointer;
  li {
    list-style: none;
  }
`;

export const NavbarList = styled.ul`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 1024px) {
    width: 100vw;
    height: 90vh;
    position: absolute;
    top: 60px;
    right: ${(props) => (props.click ? "0" : "-100%")};
    flex-direction: column;
    align-items: center;
    padding: 0 2rem;
    background-color: #242424;
    transition: all 0.5s ease;
    margin-right: 20px;
  }
`;

export const Links = styled.li`
  height: 100%;
  padding: 0 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.2rem;
  font-weight: 600;

  &:hover {
    background-color: var(--background-lightblue);
    border-bottom: 2px solid #fff;
    transition: 0.4s ease-in;
  }

  @media (max-width: 1024px) {
    text-decoration: none;
    width: 100%;
    height: 70px;
    border-top: 1px solid grey;
    border-bottom: 1px solid grey;
  }
`;

export const LinkItem = styled(Link)`
  text-decoration: none;
  color: #fff;
`;

export const HamburguerMenu = styled.div`
  display: none;
  font-size: 2.5rem;
  color: #fff;
  @media (max-width: 1024px) {
    display: block;
  }
`;
