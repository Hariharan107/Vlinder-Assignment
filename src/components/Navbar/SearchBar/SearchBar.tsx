import styles from "./SearchBar.module.css";

const SearchBar = () => {
  return (
    <div className={styles.input_wrapper}>
      <button className={styles.icon}>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 24 24'
          height='25px'
          width='25px'
        >
          <path
            strokeLinejoin='round'
            strokeLinecap='round'
            strokeWidth='1.5'
            stroke='#fff'
            d='M11.5 21C16.7467 21 21 16.7467 21 11.5C21 6.25329 16.7467 2 11.5 2C6.25329 2 2 6.25329 2 11.5C2 16.7467 6.25329 21 11.5 21Z'
          ></path>
          <path
            strokeLinejoin='round'
            strokeLinecap='round'
            strokeWidth='1.5'
            stroke='#fff'
            d='M22 22L20 20'
          ></path>
        </svg>
      </button>
      <input
        placeholder='Search...'
        className={styles.input}
        name='text'
        type='text'
      />
    </div>
  );
};

export default SearchBar;
