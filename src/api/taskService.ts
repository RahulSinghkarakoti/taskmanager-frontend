import axiosInstance from "./axiosInstence";

interface CreateTaskFormData{
    title:string,
    description:string,
    deadline: string,
}

const createTask = async (formData:any):Promise<any> => {
    try {
        const response = await axiosInstance.post("/", formData  )
        return response.data;
    } catch (error) {
        throw error;
    }
}

const getAllTasks = async ():Promise<any> => {
    try {
        const response = await axiosInstance.get("/" )
        return response.data;
    } catch (error) {
        throw error;
    }
}

const getTaskById = async (id:string):Promise<any> => {
    try {
        const response = await axiosInstance.get(`/${id}` )
        return response.data;
    } catch (error) {
        throw error;
    }
}

const updateTask = async (id:string,formData:CreateTaskFormData):Promise<any> => {
    try {
        const response = await axiosInstance.put(`/${id}`, formData )
        return response.data;
    } catch (error) {
        throw error;
    }
}

const deleteTask = async (id:string):Promise<any> => {
    try {
        const response = await axiosInstance.delete(`/${id}` )
        return response.data;
    } catch (error) {
        throw error;
    }
}

const toggleDone=async(id:string):Promise<any>=>{
    try {
        const response = await axiosInstance.patch(`/${id}`)
        return response.data;
        } catch (error) {
            throw error;
            }
}

export {
    createTask,
    getAllTasks,
    getTaskById,
    updateTask,
    deleteTask,
    toggleDone
}