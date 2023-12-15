import CourseGoal from "./components/CourseGoal.tsx";
import goalsImg from "./assets/goals.jpg";
import Header from "./components/Header.tsx";
export default function App() {
  return (
    <main>
      <Header image={{ src: goalsImg, alt: "A list of goals" }}>
        <h1>Your Course Goals</h1>
      </Header>
      <CourseGoal title='Learn Typescript with React'>
        <p>Learn it in depth</p>
      </CourseGoal>
    </main>
  );
}
