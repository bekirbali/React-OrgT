import React from "react";
import styles from "../styles/donate.module.scss";

const Donate = () => {
  return (
    <div id="donate" className={styles.donate}>
      <h1>DONATE</h1>
      <form>
        <div className={styles.card}>
          <input type="text" placeholder="Enter your name" />
          <input type="text" placeholder="Enter your last name" />
        </div>
        <div className={styles.card}>
          <input type="email" placeholder="Enter your email" />
          <input type="number" placeholder="Enter your phone" />
        </div>
        <div className={styles.amount}>
          <input type="number" placeholder="Enter donation amount" />
        </div>
        <button>Donate</button>
      </form>
    </div>
  );
};

export default Donate;
