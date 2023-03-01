import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";

import "./banner.css";

const Banner = () => {
  return (
    <section className="banner">
      <Container className="banner-text-container">
        <div className="vertical-line"></div>
        <div className="main-text">
          <div class="content">
            <div class="content__container">
              <p class="content__container__text">Hello</p>

              <ul class="content__container__list">
                <li class="content__container__list__item">world !</li>
                <li class="content__container__list__item">Sherzod !</li>
                <li class="content__container__list__item">users !</li>
                <li class="content__container__list__item">everybody !</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="info-myself-text">
          <h4>I am a skilled developer with a focus on back-end development,</h4>
          <p>
            proficient in technologies such as C++, Python, and Node.js. I also
            have experience in setting up and managing cloud-based
            infrastructure using tools like AWS and Docker.
          </p>
        </div>
        <div className="vertical-line"></div>
      </Container>
    </section>
  );
};

export default Banner;
