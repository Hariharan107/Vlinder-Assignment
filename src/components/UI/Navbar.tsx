import { Link } from "react-router-dom";
import styles from "../Home.module.css";

const Navbar = () => {
  return (
    <>
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
      <button>vsdv</button>
    </>
  );
};

export default Navbar;