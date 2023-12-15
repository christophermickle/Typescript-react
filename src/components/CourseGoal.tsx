import { type ReactNode } from "react";

export type CourseGoal = {
  title: string;
  children?: ReactNode;
  id?:number
  description?:string;
};

export default function CourseGoal({ title, children }: CourseGoal) {
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
