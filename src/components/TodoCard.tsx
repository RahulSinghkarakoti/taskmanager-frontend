import React  from "react"; 
import { useNavigate } from "react-router-dom";
interface TaskProps {
  _id:string;
  title: string;
  description: string;
  deadline: string;
  status: string;
}

const TodoCard: React.FC<TaskProps> = ({
  _id,
  title,
  description,
  deadline,
}) => {
  

  const navigate = useNavigate();
  const goToTask=(id:string)=>{
    navigate(`/task/${id}`);
  }

  return (
    <div onClick={()=>goToTask(_id)} className="relative bg-white shadow-md rounded-lg p-2 w-full h-full  ">
      <span className=" rounded-full px-1 py-1 text-xs font-semibold text-gray-700 ">
       Id: {_id}
      </span>
      <h2 className="text-2xl font-bold ">{title}</h2>
      <p className="text-gray-700 text-sm">{description.length>10 ? description.slice(0,10)+"..." :description}
      
      </p>
      <div className="flex justify-between">
      <p className="text-gray-500 text-sm ">Deadline:  
      {new Date(deadline).toLocaleString()}

      </p>
       
      </div>
    </div>
  );
};

export default TodoCard;
