import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  getTaskById,
  updateTask,
  deleteTask,
  toggleDone,
} from "../api/taskService";
import { Modal, Toast } from "../components";

interface Task {
  id: number;
  title: string;
  description: string;
  deadline: string;
  status: string;
}

function Task() {
  const { id } = useParams<{ id: string }>();
  const [loading, setLoading] = useState<boolean>(true);  
  const [task, setTask] = useState<Task | null>(null);  
  const [error, setError] = useState<string>("");
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false); // Modal open state
  const [doneStatus, setDoneStatus] = useState<boolean>(false);
  const [toast, setToast] = useState<{
    message: string;
    variant: "success" | "error";
  } | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchTaskData = async () => {
      try {
        if (id) {
          const taskResponse = await getTaskById(id);
          console.log(taskResponse.data);  
          setTask(taskResponse.data);
          if (
            taskResponse.data.status === "Done" ||
            taskResponse.data.status === "expired"
          ) {
            setDoneStatus(true);
          } else {
            setDoneStatus(false);
          }
        } else {
          setError("No task ID provided");
        }
        setLoading(false);
      } catch (err) {
        setError("Failed to fetch task data");
        setLoading(false);
      }
    };

    fetchTaskData();
  }, []);

  console.log(task);

  const handleSave = async (formData: FormData) => {
    const updatedTask = {
      title: formData.get("title") as string,
      description: formData.get("description") as string,
      deadline: formData.get("deadline") as string,
    };

    setTask((prevTask) => (prevTask ? { ...prevTask, ...updatedTask } : null));

    if (id) {
      const updtTask = await updateTask(id, formData as any);
      console.log(updtTask.statusCode);
      if (updtTask.statusCode == "200") {
        showToast("updation successful!", "success");
      }
    }

    setIsModalOpen(false); // Close modal after save
  };

  const handleDeleteTask = async () => {
    const deletedTask = await deleteTask(id!);
    if (deletedTask.statusCode == "200") {
      showToast("deletion successful!", "error");
    }
    setTimeout(() => {
      navigate("/");
    }, 2000);
    console.log(deletedTask.data);
  };

  const showToast = (message: string, variant: "success" | "error") => {
    setToast({ message, variant });
  };

  const handleDone = async () => {
    const toggle = await toggleDone(id!);
    console.log(toggle);
    if (toggle.statusCode == 200) {
      showToast("task done!", "success");
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="w-full sm:h-screen  h-full flex sm:p-0 p-4 justify-center items-center">
      <div className="task-container sm:p-6 p-4  sm:w-1/2 w-full h-3/4  bg-[#ECEDEE] rounded-lg shadow-xl flex flex-col justify-between">
        <div className="h-full   pb-4 flex flex-col justify-between ">
          <div>
            <h1 className="text-3xl font-bold text-gray-700 mb-4 text-center">
              Title: {task?.title}
            </h1>
            <div className="text-black text-xl mb-4 sm:p-6 text-center flex sm:flex-row flex-col  justify-between items-start h-full ">
              <p className="w-[20%]">Description:</p>

              <p className=" sm:w-[75%] w-full sm:p-0 p-3 text-white bg-[#353535] h-full rounded-xl">
                {task?.description}
              </p>
            </div>
          </div>

          <div className="flex justify-between text-gray-600">
            <span>
              <strong>Deadline:</strong>{" "}
              {new Date(task!.deadline).toLocaleString()}
            </span>
          </div>
        </div>
        <div className="flex gap-2">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 w-1/3 rounded"
            onClick={() => setIsModalOpen(true)}
          >
            Edit
          </button>
          <button
            onClick={() => handleDeleteTask()}
            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 w-1/3 rounded"
          >
            Delete
          </button>
          <button
            disabled={doneStatus}
            onClick={() => handleDone()}
            className={`   ${
              doneStatus ? "bg-green-700 cursor-not-allowed" : "bg-green-500 "
            } text-white font-bold py-2 px-4 w-1/3 rounded`}
          >
            Mark as done
          </button>
        </div>
        <Modal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          onSave={handleSave}
          task={task!} // insures task is non empty or null or undefine
        />
      </div>
      {toast && (
        <Toast
          message={toast.message}
          variant={toast.variant}
          onClose={() => setToast(null)}
        />
      )}
    </div>
  );
}

export default Task;
