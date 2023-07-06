import React, { useState } from "react";

import styles from "../styles/about.module.scss";

const About = () => {
  return (
    <div id="about" className={styles.about}>
      <div>
        <h1>ASSOCIATION "CHANGED LIVES"</h1>
        <h3>Social reintegration of homeless people</h3>
      </div>
      <div
        className={`${styles["about-content"]} ${styles["about-content-left"]} flex items-center `}
      >
        <img src="./about/20170410_140511.jpg" alt="" className="w-1/2" />
        <p>
          The program "change lives" aims to help homeless people in Bihor
          county to start by providing a living space, reintegration into the
          labor market for those who have potential, medical support for some of
          them, drawing up identity documents, solving documents in terms of
          social aid, disability benefits or medical pensions.
        </p>
      </div>
      <div
        className={`${styles["about-content"]} ${styles["about-content-right"]} flex flex-row-reverse items-center`}
      >
        <img src="./about/truckTrailer.jpg" alt="" className="w-1/2" />
        <p>
          The association benefits from a 7600 sq.m. plot of land, on which are
          located 2 truck trailers that have been isolated and converted into
          living spaces and 3 containers that are used as living spaces.
        </p>
      </div>
      <div
        className={`${styles["about-content"]} ${styles["about-content-left"]} flex items-center`}
      >
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
      <div
        className={`${styles["about-content"]} ${styles["about-content-right"]}  flex flex-row-reverse items-center`}
      >
        <img src="./about/11.JPG" alt="" className="w-1/2" />
        <p>
          A 38 year old boy with severe myopia, i.e. almost blind, lived in a
          few rented flats after his parents died, but the pension didn't help
          him pay the rent so he ended up on the street.
        </p>
      </div>
      <div
        className={`${styles["about-content"]} ${styles["about-content-left"]} flex items-center`}
      >
        <img src="./about/4.JPG" alt="" className="w-1/2" />
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
      <div
        className={`${styles["about-content"]} ${styles["about-content-right"]} flex flex-row-reverse items-center`}
      >
        <img src="./about/DSC_0143.JPG" alt="" className="w-1/2" />
        <p>
          One woman was cheated by the old man's boy she had to sell her house
          to, and after the sudden death of the old man she ended up straight on
          the street.
        </p>
      </div>
      <div
        className={`${styles["about-content"]} ${styles["about-content-left"]} flex items-center`}
      >
        <img src="./about/house.jpg" alt="" className="w-1/2" />
        <p>
          Within this project we have also built a house (which is not
          finished), so that we can make identity cards for those who live in
          the centre. In addition to accommodation we want to teach those who
          live there the following things: - to maintain physical hygiene, and
          hygiene in the house - those who can do things that bring them
          satisfaction e.g: gardening, sewing, taking care of pets (chickens,
          ducks, goats, pigs). Each family is on its own, the property is shared
          and fenced for one maximum 2 families to avoid any kind of conflict.
        </p>
      </div>
      <div
        className={`${styles["about-content"]} ${styles["about-content-right"]} flex flex-row-reverse items-center`}
      >
        <img src="./about/DSC_0817.JPG" alt="" className="w-1/2" />
        <ul>
          <p>
            <span>Why we need volunteers:</span>
            <li>
              - to help the elderly with housework (cleaning, teaching them how
              to cook)
            </li>
            <li>- gardening to have more vegetables for daily food</li>
            <li>
              - work for property maintenance (painting, painting, digging and
              putting up fences etc.)
            </li>
            <li>- actions to promote the programme in the community</li>
            <li>- creating a website if there is know-how</li>
            <li>
              - to teach computer skills to young people who have not used
              computers
            </li>
            <li>- to take care of animals together</li>
            <li>
              - to create different annexes for storing wood during winter
            </li>
            <li>
              - to teach English to the children of Cihei and eventually to play
              games with them
            </li>
          </p>
        </ul>
      </div>
      <div
        className={`${styles["about-content"]} ${styles["about-content-left"]} flex items-center`}
      >
        <img src="./about/DSC_9181.JPG" alt="" className="w-1/2" />
        <p>
          We also have a program where we address disadvantaged people in Bihor
          (usually single people with reduced work capacity), to whom we offer
          bread in winter, food in different periods of time, and help them with
          various household chores.
        </p>
      </div>
      <div
        className={`${styles["about-content"]} ${styles["about-content-right"]} flex flex-row-reverse items-center`}
      >
        <img src="./about/13.jpg" alt="" className="w-1/2" />
        <p>
          Since most of them have not succeeded, and do not know how to repair a
          house, they are left with houses in a deplorable situation so
          volunteers should take care of all painting, repairs, cleaning. So far
          we managed to reintegrate 5 families, the biggest achievement was the
          Benedek family, who we took from Gheorghe Doja street, they were
          staying in a wooden shack 2 X2,5 m, 3 people, 2 in bed and one on the
          floor, without light and heat. I invited them to live in Cihei but I
          told them that they had to change their life (i.e. without cigarettes
          and alcohol), after 2 attempts they finally succeeded, I helped them
          to find a job. Due to the change of Mr. Bendek who was married for the
          second time, we tried to find the daughter of the dancer from the
          first marriage whom he had not seen for 15 years.
        </p>
      </div>
      <div
        className={`${styles["about-content"]} ${styles["about-content-left"]} flex items-center`}
      >
        <img src="./about/8.JPG" alt="" className="w-1/2" />
        <p>
          So far we managed to reintegrate 5 families, the biggest achievement
          was the Benedek family, who we took from Gheorghe Doja street, they
          were staying in a wooden shack 2 X2,5 m, 3 people, 2 in bed and one on
          the floor, without light and heat. I invited them to live in Cihei but
          I told them that they had to change their life (i.e. without
          cigarettes and alcohol), after 2 attempts they finally succeeded, I
          helped them to find a job. Due to the change of Mr. Bendek who was
          married for the second time, we tried to find the daughter of the
          dancer from the first marriage whom he had not seen for 15 years. The
          girl was amazed by the change of the father and came to Cihei to see
          him. She invited him and his second wife to come and visit her near
          Budapest and to come and see her 2 grandchildren aged 5 and 6. They
          went to visit, and on their return the girl suggested they think about
          whether they would like to stay in one of her houses in a village
          because they had moved to Budapest. The reunion was a great one from
          all of them. They were still thinking about what to do when they came
          back to Cihei, I encouraged them to go because Cihei was just a stop.
          Here in Cihei I taught them gardening and gave them a mental boost
          that they could. They went to Hungary, both of them are working, Mr
          Benedek went to driver's school and got a car, he raises animals and
          they are very happy. he often calls me and tells me that he thanks God
          that he met us and that they now have a future too.
        </p>
      </div>
      <div
        className={`${styles["about-content"]} ${styles["about-content-right"]} flex flex-row-reverse items-center`}
      >
        <img src="./about/DSC_01101.JPG" alt="" className="w-1/2" />
        <p>
          Another person we managed to integrate back into the family. One
          gentleman I have transitioned to a centre with locomotion problems,
          because he could not manage alone. A mother reconciled with her family
          and left the centre. A girl found a job and moved in with other girls
          in a rented flat.
        </p>
      </div>
      <div
        className={`${styles["about-content"]} ${styles["about-content-left"]} flex items-center`}
      >
        <img src="./about/15.JPG" alt="" className="w-1/2" />
        <p>
          We succeeded for 2 families to integrate them in the labour market, to
          facilitate for 5 people to obtain an income (consisting of social aid,
          pension, disability allowance). We also had 2 failures (all due to
          alcohol), to whom we offered another chance but they did not want to
          take advantage of it. Alcohol and smoking are not allowed in the
          centre.
        </p>
      </div>
    </div>
  );
};

export default About;
