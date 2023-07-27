import { Link } from "react-router-dom";
import { StyledHeroImage } from "./Styled/HeroImage";
import { Nav } from "./Styled/HeroImage";
import styles from "./Home.module.css";
const Home = () => {
  return (
    <StyledHeroImage>
      <Nav>
        <Link to='/' className={styles.logo}>
          avo
        </Link>
        <ul>
          <li>
            <Link to='#'>Home</Link>
          </li>
          <li>
            <Link to='#'>Showcases</Link>
          </li>
          <li>
            <Link to='#'>About</Link>
          </li>
          <li>
            <Link to='#'>Portfolio</Link>
          </li>
          <li>
            <Link to='#'>Contact</Link>
          </li>
        </ul>
        <button>Search</button>
      </Nav>
    </StyledHeroImage>
  );
};

export default Home;
