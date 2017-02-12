import { Container } from "./styles";
import reactnative from "../../assets/react-native-1.svg";
import expo from "../../assets/expo.svg";
import ios from "../../assets/ios.svg";
import android from "../../assets/android.svg";
import swift from "../../assets/swift.svg";
import jsIcon from "../../assets/js-icon.svg";
import java from "../../assets/java.svg";
import typescriptIcon from "../../assets/typescript-icon.svg";
import kotlin from "../../assets/kotlin.svg";
import mobx from "../../assets/mobx.svg";
import fastline from "../../assets/fastline.svg";
import circleci from "../../assets/circleci.svg";
import mobileImage from "../../assets/mobile.png";
import ScrollAnimation from "react-animate-on-scroll";

export function About() {
  return (
    <Container id="about">
      <div className="about-text">
        <ScrollAnimation animateIn="fadeInLeft">
          <h2>About me</h2>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft" delay={0.1 * 1000}>
          <p>
            Hi there! I'm Pavlo Dovbysh, a mobile app developer with a passion
            for creating custom online experiences for my clients. With a skill
            set including React Native, Expo, Swift and Kotlin, I have the tools
            to bring any vision to life.
          </p>
        </ScrollAnimation>
        <ScrollAnimation
          animateIn="fadeInLeft"
          delay={0.2 * 1000}
          style={{ marginTop: "2rem", marginBottom: "2rem" }}
        >
          <p>
            I'm a hard worker who enjoys challenges that seek to push my
            learning experience and knowledge.
          </p>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft" delay={0.3 * 1000}>
          <p>
            If you're in need of a new mobile app or looking to enhance your
            current digital presence, I'd love to talk with you and explore how
            I can help. Let's bring your app ideas to reality together!
          </p>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft" delay={0.4 * 1000}>
          <h3>Here are my main skills:</h3>
        </ScrollAnimation>
        <div className="hard-skills">
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.1 * 1000}>
              <img src={reactnative} alt="ReactNative" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.12 * 1000}>
              <img src={expo} alt="expo" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.19 * 1000}>
              <img src={jsIcon} alt="JavaScript" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.14 * 1000}>
              <img src={typescriptIcon} alt="Typescript" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.13 * 1000}>
              <img src={ios} alt="iOS" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.15 * 1000}>
              <img src={android} alt="Android" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.16 * 1000}>
              <img src={swift} alt="Swift" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.17 * 1000}>
              <img src={java} alt="Java" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.17 * 1000}>
              <img src={kotlin} alt="kotlin" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.18 * 1000}>
              <img src={mobx} alt="MobX" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.19 * 1000}>
              <img src={fastline} alt="Fastline" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.19 * 1000}>
              <img src={circleci} alt="circleci" />
            </ScrollAnimation>
          </div>
        </div>
      </div>
      <div className="about-image">
        <ScrollAnimation animateIn="fadeInRight" delay={0.2 * 1000}>
          <img src={mobileImage} alt="iPhone 11" />
        </ScrollAnimation>
      </div>
    </Container>
  );
}
