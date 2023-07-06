import React from "react";
// import styles from "../styles/contact.module.scss";

const Contact = () => {
  return (
    <div id="contact" className="h-[calc(100vh-24px)] bg-red-400 pt-4">
      <h1 className="text-center font-[700] text-[3rem]">Contact Us</h1>
      <div className="flex justify-center gap-32  mt-6">
        <div className={` flex flex-col items-center`}>
          <h2>
            <svg
              stroke="currentColor"
              fill="none"
              strokeWidth="2"
              viewBox="0 0 24 24"
              aria-hidden="true"
              height="3rem"
              width="3rem"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
              ></path>
            </svg>
            Phone
          </h2>
          <h3>
            <a href="tel:+90 (541) 270 3026">+90 (541) 270 3026</a>
          </h3>
        </div>
        <div className={` flex flex-col items-center`}>
          <h2>
            <svg
              stroke="currentColor"
              fill="none"
              strokeWidth="2"
              viewBox="0 0 24 24"
              aria-hidden="true"
              height="3rem"
              width="3rem"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              ></path>
            </svg>{" "}
            Email
          </h2>
          <h3>
            <a href="mailto:togetherwestrong@gmail.com">
              {" "}
              togetherwestrong@gmail.com
            </a>
          </h3>
        </div>
      </div>
    </div>
  );
};

export default Contact;
