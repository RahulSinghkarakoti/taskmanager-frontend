import { AddTask, Sidebar } from "../components";
import { getAllTasks } from "../api/taskService";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setGroupedTasks, setLoading, setError } from "../store/taskSlice";


const filterStats = (tasks: any) => {
  return tasks.reduce(
    (counts: any, task: any) => {
      console.log(task._id);
      switch (task._id) {
        case "Done":
          counts.done = task.count;
          break;
        case "inProgress":
          counts.inProgress = task.count;
          break;
        case "expired":
          counts.expired = task.count;
          break;
      }
      return counts;
    },
    { done: 0, inProgress: 0, expired: 0 }
  );
};

export const Dashboard = () => {
  const [tasksStats, setTasksStats] = useState<any>({
    done: 0,
    inProgress: 0,
    expired: 0,
  });

  const dispatch = useDispatch();
  const {  loading, error } = useSelector(
    (state: any) => state.tasks
  );

  const fetchTasks = async (): Promise<any> => {
    try {
      dispatch(setLoading(true));
      const tasks = await getAllTasks();
      const counts = filterStats(tasks.data);
      setTasksStats(counts);
      dispatch(setGroupedTasks(tasks.data));
    } catch (error) {
      dispatch(setError("Failed to fetch tasks"));
      console.error("error fetching tasks", error);
    } finally {
      dispatch(setLoading(false));
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="py-2 px-4 ">
      <div className="  flex sm:flex-row flex-col gap-2">
        <Sidebar tasksStats={tasksStats} />
        <AddTask />
      </div>
    </div>
  );
};

 