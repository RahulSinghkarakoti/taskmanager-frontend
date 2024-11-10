import React from 'react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (updatedTask: FormData) => void;
  task: { title: string; description: string; deadline: string }; // Task to edit
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, onSave, task }) => {
  const formRef = React.useRef<HTMLFormElement | null>(null);

  // using FormData
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formRef.current) {
      const formData = new FormData(formRef.current);
      console.log(formData.get("title"))
      onSave(formData); // Pass FormData to onSave
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-96">
        <h2 className="text-2xl font-bold mb-4">Update Task</h2>
        <form ref={formRef} onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-600" htmlFor="title">
              Title
            </label>
            <input
              type="text"
              id="title"
              name="title"  
              defaultValue={task.title}  
              className="w-full px-3 py-2 mt-1 border border-gray-300 rounded-md"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-600" htmlFor="description">
              Description
            </label>
            <textarea
              id="description"
              name="description"  
              defaultValue={task.description} 
              className="w-full px-3 py-2 mt-1 border border-gray-300 rounded-md"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-600" htmlFor="deadline">
              Deadline
            </label>
            <input
              type="datetime-local"
              id="deadline"
              name="deadline" 
              defaultValue={task.deadline} 
              className="w-full px-3 py-2 mt-1 border border-gray-300 rounded-md"
            />
          </div>
          <div className="flex justify-end space-x-4">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 bg-gray-300 text-gray-800 rounded-md"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-blue-500 text-white rounded-md"
            >
              Save Changes
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Modal;
