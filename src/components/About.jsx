import React from "react";
import "./About.scss";
import bg from "../assets/img/quiz_0.png";
import bg2 from "../assets/img/fun quiz2.jpg";
import bg3 from "../assets/img/fun quiz.jpg";

const Home = () => {
  return (
    <>
      <div className="containerHome">
        <span>What we Offer</span>
        <div className="cards">
          <div className="card">
            <h5 className="cardHeading">Create Quiz</h5>
            <p className="cardDetail">
              Welcome to the ultimate quiz-making haven! Unleash your creativity
              and captivate minds with our user-friendly quiz maker. Craft
              engaging quizzes effortlessly, whether it's for education, fun, or
              serious assessment. Choose from a plethora of question
              types—multiple choice, true/false, or open-ended—and customize the
              look to match your style. Track participant progress with ease and
              analyze results seamlessly. With our intuitive interface, you'll
              transform information into an interactive experience. Whether
              you're a seasoned educator, a quiz enthusiast, or someone looking
              to add a spark to your website, our quiz maker is your go-to tool.
              Let the quizzing begin!
            </p>

            <div className="cardimg">
              <img src={bg} alt="imgs" />
            </div>
          </div>
        </div>
        <div className="cards">
          <div className="card">
            <h5 className="cardHeading">Quiz Fun</h5>
            <p className="cardDetail">
              Quizzes and tests aren't just for education and learning. Our quiz
              games also include fun, whimsical, and unique questions. Fans of
              tricky questions and riddles can enjoy Brain Test: Tricky Puzzles.
              If humor and laughter is your thing, then you will enjoy The
              Impossible Quiz. You can also test your geography skills with
              games like Flags Maniac, and show everyone how good you are at
              numbers with Math Trivia Lite. With our quiz games, you can
              improve your knowledge, and showcase your intelligence to set the
              class record!
            </p>

            <div className="cardimg ">
              <img src={bg2} alt="imgs" />
            </div>
          </div>
        </div>
        <div className="cards">
          <div className="card">
            <h5 className="cardHeading">Quiz Games</h5>
            <p className="cardDetail">
              Our quiz games put the fun into learning. Your knowledge will be
              tested regarding a variety of subjects, including geography,
              cultures, and cartoons. Well-traveled players will love showcasing
              their map skills in every continent. Answer questions about
              international borders and capitals to score points and advance. If
              you get stuck, certain games allow hints and retries. The
              objective is always to earn a perfect score. Play again and again
              to achieve a 100% rating!
            </p>

            <div className="cardimg ">
              <img src={bg3} alt="imgs" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
