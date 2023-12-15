import goalsImg from "./assets/goals.jpg";
import Header from "./components/Header.tsx";
import { useState } from "react";
import CourseGoalList from "./components/CourseGoalList.tsx";

export type CourseGoalType = {
  title: string;
  description: string;
  id: number;
};

export default function App() {
  const [goals, setGoals] = useState<CourseGoalType[]>([]);
  const handleAddGoal = () => {
    setGoals((prevGoals) => {
      const newGoal: CourseGoalType = {
        id: Math.random(),
        title: "Learn Typescript with React",
        description: "Learn it in depth",
      };
      return [...prevGoals, newGoal];
    });
  };

  return (
    <main>
      <Header image={{ src: goalsImg, alt: "A list of goals" }}>
        <h1>Your Course Goals</h1>
      </Header>
      <CourseGoalList goals={goals} />

      <button onClick={handleAddGoal}>Add goal</button>
    </main>
  );
}
