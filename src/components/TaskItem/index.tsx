const taskItemClass =
  "flex justify-between items-center space-x-1 text-gray-dark font-semibold border rounded px-6 my-1";
const TaskItem = (props) => {
  const task = props.task;
  return (
    <div className={taskItemClass}>
      <div>
        <h2>{task.title}</h2>
        <div>Reward:{task.reward} $</div>
      </div>
      <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-yellow transitions-colors hover:text-white border border-blue-500 hover:border-transparent rounded h-8 w-16 ">
        Start
      </button>
      {/* <Link to={item.url}>{item.title}</Link> */}
    </div>
  );
};

//TaskItem.propTypes = {};

export default TaskItem;
