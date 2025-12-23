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
        return { success: false, message: error }
    }
}
