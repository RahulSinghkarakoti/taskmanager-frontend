import React, { useState } from "react";
import { createTask } from "../api/taskService";
import { useNavigate } from "react-router-dom";
import Toast from "../components/Toast";

 

const AddTask  = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [expiryDate, setExpiryDate] = useState(""); // Added state for expiry date
  const formRef = React.useRef<HTMLFormElement | null>(null);
  const [toast, setToast] = useState<{
    message: string;
    variant: "success" | "error";
  } | null>(null);

  const navigate = useNavigate();

  const handleSubmit =async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (formRef.current) {
      const formData = new FormData(formRef.current);
      console.log(formData.get("title"))
      console.log(formData.get("description"))
      console.log(formData.get("deadline"))
      formData.append('status', 'inProgress');
      const newTask=await createTask(formData)
      if(newTask.statusCode=="201"){
        showToast('creation successful!', 'success')
      }
      const newTaskId=newTask.data._id
      navigate(`/task/${newTaskId}`)
      

    }
  };

  console.log(expiryDate)

  const showToast = (message: string, variant: "success" | "error") => {
    setToast({ message, variant });
  };

  return (
      <div className="w-full h-full">
        <form
        ref={formRef}
          onSubmit={handleSubmit}
          className=" bg-[#ECEDEE] h-full shadow-lg border-2 rounded-lg p-6 "
        >
          <h2 className="text-lg font-bold mb-2">Create New Task</h2>
          <div className="mb-4 ">
            <label
              htmlFor="title"
              className="block text-sm font-medium text-gray-700"
            >
              Title
            </label>
            <input
              type="text"
              id="title"
              name="title"
              value={title}
              required
              onChange={(e) => setTitle(e.target.value)}
              className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
          <div className="mb-4 ">
            <label
              htmlFor="description"
              className="block text-sm font-medium text-gray-700"
            >
              Description
            </label>
            <textarea
              id="description"
              name="description"
              value={description}
              required
              onChange={(e) => setDescription(e.target.value)}
              rows={6}
              className="mt-1  bg-white block w-full max-h-full px-3 py-2  border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
          <div className="mb-4 ">
            <label
              htmlFor="expiryDate"
              className="block text-sm font-medium text-gray-700"
            >
              Expiry Date
            </label>
            <input
               type="datetime-local"
              id="expiryDate"
              name="deadline"
              required
              value={expiryDate}
              onChange={(e)=>setExpiryDate(e.target.value)}
              className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500   
 sm:text-sm"
            />
          </div>
         
          <button
            type="submit"
            className="inline-flex items-center px-4 py-2 bg-indigo-600 border border-transparent rounded-md font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:w-auto sm:text-sm"
          >
            Create Task
          </button>
        </form>
        {toast && (
        <Toast
          message={toast.message}
          variant={toast.variant}
          onClose={() => setToast(null)}
        />
      )}
    </div>
  );
};

export default AddTask;
