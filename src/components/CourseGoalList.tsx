import CourseGoal from "./CourseGoal";
import { type CourseGoalType } from "../App";
type CourseGoalListProps = {
  goals: CourseGoalType[];
};

export default function CourseGoalList({ goals }: CourseGoalListProps) {
  return (
    <ul>
      {goals.map((goal) => (
        <li key={goal.id}>
          <CourseGoal title={goal.title}>
            <p>{goal.description}</p>
          </CourseGoal>
        </li>
      ))}
    </ul>
  );
}
