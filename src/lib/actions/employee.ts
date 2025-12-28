// api handling

'use server';

import { EmployeeInterface } from "@/models/model";
import axios from "axios";
import { revalidatePath } from "next/cache";

export async function addEmployee(employee: EmployeeInterface) {
    try {
        await axios.post('https://68c8e3b8ceef5a150f629236.mockapi.io/redux/employees', employee);
        revalidatePath('/'); // like we use to use 'invalidateTags' to refresh browser or reset cache in react
        return { success: true, message: 'Employee added successfully' }
    } catch (error) {
        console.log(error)
        return { success: false, message: error }
    }
}


export async function updateEmployee(employee: EmployeeInterface, id: string) {
    try {
        await axios.patch(`https://6943678a69b12460f31474d4.mockapi.io/employess/${id}`, employee);
        revalidatePath('/');
        return { success: true, message: 'Employee updated successfully' }
    } catch (err: any) {
        return { success: false, message: err.message }
    }
}


export async function removeEmployee(id: string) {
    try {
        await axios.post(`https://68c8e3b8ceef5a150f629236.mockapi.io/redux/employees/${id}`);
        revalidatePath('/'); // like we use to use 'invalidateTags' to refresh browser or reset cache in react
        return { success: true, message: 'Employee removed successfully' }
    } catch (error) {
        return { success: false, message: error }
    }
}