import { type ReactNode } from "react";

export type CourseGoalProps = {
  title: string;
  children?: ReactNode;
};

export default function CourseGoal({ title, children }: CourseGoalProps) {
  return (
    <article>
      <div>
        <h2>{title}</h2>
        {children}
      </div>
      <button>Delete</button>
    </article>
  );
}
