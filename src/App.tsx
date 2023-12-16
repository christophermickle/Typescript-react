import { useState } from "react";
import goalsImg from "./assets/goals.jpg";
import Header from "./components/Header.tsx";
import CourseGoalList from "./components/CourseGoalList.tsx";
import NewGoal from "./components/NewGoal.tsx";

export type CourseGoalType = {
  title: string;
  description: string;
  id: number;
};

export default function App() {
  const [goals, setGoals] = useState<CourseGoalType[]>([]);
  const handleAddGoal = (goal: string, summary: string) => {
    setGoals((prevGoals) => {
      const newGoal: CourseGoalType = {
        id: Math.random(),
        title: goal,
        description: summary,
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
        <h1>Your Tasks</h1>
      </Header>
      <CourseGoalList goals={goals} onDeleteGoal={handleDeleteGoal} />

      <NewGoal onAddGoal={handleAddGoal} />
    </main>
  );
}
