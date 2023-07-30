import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styles from "../Home.module.css";
import SearchBar from "./SearchBar";
import { useMediaQuery } from "react-responsive";
import MobileMenuIcon from "./MobileMenuIcon";
import { Link as ScrollLink } from "react-scroll"; // Import the ScrollLink component from react-scroll
import { styled } from "styled-components";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const mobileView = useMediaQuery({ maxWidth: 775 });

  useEffect(() => {
    setIsOpen(mobileView);
  }, [mobileView]);
  const StyledScrollLink = styled(ScrollLink)`
    color: #fff;
    text-decoration: none;
    color: #fff;
  `;
  return (
    <>
      <Link to='/' className={styles.logo}>
        <img
          src='https://www.freepnglogos.com/uploads/company-logo-png/bmw-car-company-logo-png-transparent-image-3.png'
          alt='logo'
          height={50}
          width={50}
        />
      </Link>
      {!mobileView ? (
        <ul>
          <li>
            <StyledScrollLink to='about-section' smooth={true} duration={500}>
              About
            </StyledScrollLink>
          </li>
          <li>
            <StyledScrollLink to='service-section' smooth={true} duration={500}>
              Services
            </StyledScrollLink>
          </li>
          <li>
            <StyledScrollLink to='gallery-section' smooth={true} duration={500}>
              Gallery
            </StyledScrollLink>
          </li>
          <li>
            <SearchBar />
          </li>
        </ul>
      ) : (
        <>
          <MobileMenuIcon />
        </>
      )}
    </>
  );
};

export default Navbar;
