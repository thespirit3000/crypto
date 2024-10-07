import TaskItem from "../components/TaskItem";

const tasks = [
  { id: 1, title: "Subscribe us", reward: "5000" },
  { id: 2, title: "Get 3 friends", reward: "5000" },
  { id: 3, title: "Get more more friends", reward: "5000" },
  { id: 4, title: "Give me million dollars and cup of tee", reward: "5000" },
];

function TasksPage() {
  return (
    <div className="flex flex-col items-center">
      <ul className="flex flex-col  md:w-6/12  w-full">
        {tasks.map((item) => (
          <TaskItem task={item} />
        ))}
      </ul>
    </div>
  );
}

export default TasksPage;
