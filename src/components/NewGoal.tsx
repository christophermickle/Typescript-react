import { useRef, type FormEvent } from "react";

type newGoalProps = {
  onAddGoal: (goal: string, summary: string) => void;
};

function NewGoal({ onAddGoal }: newGoalProps) {
  const goal = useRef<HTMLInputElement>(null);
  const summary = useRef<HTMLInputElement>(null);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const enteredGoal = goal.current!.value;
    const enteredSummary = summary.current!.value;
    e.currentTarget!.reset();
    onAddGoal(enteredGoal, enteredSummary);
  };

  return (
    <form onSubmit={handleSubmit}>
      <p>
        <label htmlFor="goal">Your Goal</label>
        <input id="goal" type="text" ref={goal}></input>
      </p>
      <p>
        <label htmlFor="summary">Short Summary</label>
        <input id="summary" type="text" ref={summary}></input>
      </p>
      <p>
        <button>Add Goal</button>
      </p>
    </form>
  );
}
export default NewGoal;
