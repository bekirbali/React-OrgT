import React, { useState } from "react";

import styles from "../styles/about.module.scss";

const About = () => {
  return (
    <div id="about" className={styles.about}>
      <div>
        <h1>ASSOCIATION "CHANGED LIVES"</h1>
        <h3>Social reintegration of homeless people</h3>
      </div>
      <div className="about-content flex items-center">
        <img src="./about/5.JPG" alt="" className="w-1/2" />
        <p>
          The program "change lives" aims to help homeless people in Bihor
          county to start by providing a living space, reintegration into the
          labor market for those who have potential, medical support for some of
          them, drawing up identity documents, solving documents in terms of
          social aid, disability benefits or medical pensions.
        </p>
      </div>
      <div className="about-content flex flex-row-reverse items-center">
        <img src="./about/7.JPG" alt="" className="w-1/2" />
        <p>
          The association benefits from a 7600 sq.m. plot of land, on which are
          located 2 truck trailers that have been isolated and converted into
          living spaces and 3 containers that are used as living spaces.
        </p>
      </div>
      <div className="about-content flex items-center">
        <img src="./about/12.JPG" alt="" className="w-1/2" />
        <p>
          In total we currently have 8 families living in these accommodation
          spaces. A family was taken away from the decebal market, a 23 year old
          boy was left by his parents, a family consisting of a mother and 2
          girls were kicked out of a rented accommodation because the owners
          sold the house, before the father kicked them out because he had
          alcohol problems. In a container there is a mother with a little girl,
          she went to the Czech Republic, she was cheated by a man, she got
          pregnant and after that she was banished to Romania, the brothers did
          not accept her in the parental home and she ended up on the street, we
          took her in and offered her a room.
        </p>
      </div>
      <div className="about-content flex flex-row-reverse items-center">
        <img src="./about/15.JPG" alt="" className="w-1/2" />
        <p>
          A 38 year old boy with severe myopia, i.e. almost blind, lived in a
          few rented flats after his parents died, but the pension didn't help
          him pay the rent so he ended up on the street.
        </p>
      </div>
      <div className="about-content flex items-center">
        <img src="./about/16.JPG" alt="" className="w-1/2" />
        <p>
          A 43 year old woman, who was initially adopted, after her adoptive
          parents died, her brother who was also adopted, threatened her with
          death if she didn't sign at the notary, so she signed out of fear and
          ended up on the street, from there she became a slave to several
          gypsies, where she was exploited, raped and slept on the floor, on
          concrete, we took her in and managed to reintegrate her back into
          work.
        </p>
      </div>
      <div className="about-content flex flex-row-reverse items-center">
        <img src="./about/DSC_0817.JPG" alt="" className="w-1/2" />
        <p>
          One woman was cheated by the old man's boy she had to sell her house
          to, and after the sudden death of the old man she ended up straight on
          the street.
        </p>
      </div>
      <div className="ending">
        <img src="./about/DSC_9181.JPG" alt="" className="w-1/2" />
        <p>
          The aim of the project is to provide more than a night shelter,
          because many old people on the street get sick (Aunt Florica had
          bronchial asthma, and is now on oxygen). We want to give them the
          opportunity to develop in all aspects: psychologically, socially,
          professionally.
        </p>
      </div>
    </div>
  );
};

export default About;
