import logoImg from "../assets/quiz-logo.png";
export default function Header() {
  return (
    <header>
      <img src={logoImg} alt="plz upload the image..." />
      <h1>ReactQuiz</h1>
    </header>
  );
}
