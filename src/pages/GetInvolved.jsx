import React from "react";
import styles from "../styles/getInvolved.module.scss";

const GetInvolved = () => {
  return (
    <div id="involved" className={styles.involved}>
      <h1>Join this great community</h1>
      <form>
        <input type="text" placeholder="Enter your Name" />
        <input type="email" placeholder="Enter your email" />
        <input type="number" placeholder="Enter your phone" />
        <input type="number" placeholder="Enter your age" />
        <button>Get Involved</button>
      </form>
    </div>
  );
};

export default GetInvolved;
