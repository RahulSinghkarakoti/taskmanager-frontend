import TodoCard from './TodoCard'
import { useSelector } from 'react-redux';

function Done() {
  const { groupedTasks} = useSelector((state: any) => state.tasks);
  const doneTasks = groupedTasks.filter((group:any) => group._id === 'Done')[0].tasks || [];

  return (
    <div className="bg-[#ECEDEE] shadow-lg rounded-lg w-full m-1 p-2">
      <div className="flex flex-col justify-center items-center">
        <h1 className="py-2 text-lg flex items-center justify-center gap-2">
          <div className="w-2 bg-[#8BC48A] h-2 rounded-lg   "></div>
          Done
        </h1>
        <div className="w-1/3 bg-[#8BC48A] h-1 rounded-lg   "></div>
      </div>
      <div className=" grid sm:grid-cols-3 grid-cols-1  gap-2 pt-2">
      {doneTasks.map((task:any, index:number) => (
          <TodoCard key={index} {...task} />
        ))}
      </div>
    </div>
  )
}

export default Done
