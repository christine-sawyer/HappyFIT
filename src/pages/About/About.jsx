import "./About.scss";

import { Link } from "react-router-dom";

import logo from "../../assets/logos/HappyFITLogo.png";
import penguin from "../../assets/gifs/PenguinCurls.gif";

export const About = () => {
  return (
    <section className="about">
      <div className="about__top-bar">
        <Link to ="/" className = "about__logo-link">
        <img className="about__logo" src={logo} alt="HappyFIT logo" />
        </Link>
        <h1 className="about__title">About HappyFIT</h1>
        <img
          className="about__penguin"
          src={penguin}
          alt="HappyFIT penguin mascot git doing curls"
        />
      </div>
      <div className="about__content">
        <p className="about__header">Our Mission:</p>
        <p className="about__text">
          From a young age, our founder held a deep reverence for our planet,
          firmly believing that individual happiness contributes to a happier
          Earth. At HappyFIT, we're driven by the philosophy that "Healthy
          people = Happy people = Happy world = Healthy world." This mission
          embodies the idea that personal transformation and inner harmony have
          the power to heal not just individuals but the entire world.
        </p>
        <p className="about__header">Our Inspiration:</p>
        <p className="about__text">
          "If you restore balance in your own self, you will be contributing
          immensely to the healing of the world." — Deepak Chopra{" "}
        </p>
        <p className="about__text">
          These words resonate profoundly with us, encapsulating the essence of
          our guiding principle. Our journey at HappyFIT is rooted in the belief
          that we must care for ourselves first to find happiness and, in doing
          so, restore balance to our world.
        </p>
        <p className="about__header">Who is HappyFIT for?</p>
        <p className="about__text">
          HappyFIT is designed to cater to individuals of all ages who are
          interested and curious about cultivating a healthier lifestyle through
          exercise. Users engage with HarmonyFIT to embark on a transformative
          fitness journey that aligns with their unique needs and aspirations.
          This diverse user base ranging from those who are just starting their
          fitness journey to seasoned fitness pros who recognize the importance
          of maintaining correct form to prevent injuries and optimize results.
        </p>
        <p className="about__header">Finding Balance:</p>
        <p className="about__text">
          In a fast-paced world, it's easy to neglect our well-being while
          focusing on external matters. However, this quote reminds us of the
          importance of self-care and self-reflection. By nurturing our
          physical, mental, and emotional health, we become more compassionate,
          resilient, and aware individuals. When we are in balance, we radiate
          positivity, kindness, and understanding towards others, inspiring and
          uplifting those around us.
        </p>
        <p className="about__header">Our Vision:</p>
        <p className="about__text">
          By prioritizing our own well-being and embarking on a journey of
          self-restoration, we not only enhance our lives but also have the
          potential to positively impact the world. Our personal equilibrium
          influences our interactions with others, shapes the environment we
          inhabit, and inspires transformative change. Let us embrace this quote
          as our guiding principle, striving for inner balance as a means to
          contribute to the healing and betterment of our global community.
        </p>
        <p className="about__header">Our Offering:</p>
        <p className="about__text">
          HappyFIT offers you a joyful and secure path to wellness. We help you
          build a strong foundation in fitness, find inspiration in your
          workouts, and embark on a transformational journey. With our
          cutting-edge web app, you can enjoy personalized workouts using your
          camera, ensuring proper form and guidance. Experience the happiness of
          balanced living while contributing to a healthier world, one
          harmonious pose at a time.
        </p>
        <p className="about__header">Our Focus:</p>
        <p className="about__text">
          While our mission paints a grand vision, we understand that building a
          healthier world is a journey. We're committed to providing you with
          the tools and support to take the first steps towards your own
          well-being and, in turn, contribute to a more balanced world. HappyFIT
          is not just an app; it's your partner in achieving your fitness and
          happiness goals, one step at a time.
        </p>
        <p className="about__header">Join Us:</p>
        <p className="about__text">
          We invite you to embark on this journey of self-discovery and
          well-being with HappyFIT. Together, we can create a happier, healthier
          world, one step at a time.
        </p>
        <p className="about__header--small">Attrubutions</p>
        <p className="about__text--small">
          Arctic Background Vectors by Vecteezy: 
          <a href = "https://www.vecteezy.com/free-vector/arctic-background">
            www.vecteezy.com/free-vector/arctic-background
          </a>
        </p>
        <p className="about__text--small">
          Exercise descriptions from ACE: 
          <a href = "https://www.acefitness.org/resources/everyone/exercise-library/">
            www.acefitness.org/resources/everyone/exercise-library
          </a>
        </p>
        <p className="about__text--small">
          Logo created with: 
          <a href="www.logo.com">
            www.logo.com
          </a>
        </p>
        <p className="about__text--small">
          Penguin gif used: 
          <a href = "www.pudgypenguins.com">
            www.pudgypenguins.com
          </a>
        </p>
        <p className="about__text--small">
          <a href = "https://gymguider.com/mastering-dumbbell-standing-dumbbell-lateral-raise-guide-form-flaws-set-up-execution/">
            Lateral Raises gif used
          </a>
        </p>
        <p className="about__text--small">
          <a href = "https://program.rapidloss.com.au/plank-to-high-plank/female-plank-to-high-plank/"> 
           Plank gif used
          </a>
        </p>
        <p className="about__text--small">
          <a href = "https://trainerpl.us/exercise-of-the-month/squats">
            Squat gif used
          </a> 
        </p>
      </div>

      <Link to="/" className="about__link">
        🏠Home
      </Link>
    </section>
  );
};
