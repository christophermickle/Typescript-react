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

  const handleDeleteGoal = (id: number): void => {
    setGoals((prevGoals) => {
      const newGoals = prevGoals.filter((goal) => goal.id !== id);
      return newGoals;
    });
  };
  return (
    <main>
      <Header image={{ src: goalsImg, alt: "A list of goals" }}>
        <h1>Your Course Goals</h1>
      </Header>
      <CourseGoalList goals={goals} onDeleteGoal={handleDeleteGoal} />

      <button onClick={handleAddGoal}>Add goal</button>
    </main>
  );
}
