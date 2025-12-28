import { Button } from "@/components/ui/button";
import { EmployeeInterface } from "@/models/model";
import axios from "axios";

export default async function Page() {
    const res = await axios.get(
        'https://68c8e3b8ceef5a150f629236.mockapi.io/redux/employees'
    );

    const employees = res.data;

    return (
        <div>
            <h1>Employees</h1>
            
            <hr className="mt-3 mb-3" />

            {employees.map((emp: EmployeeInterface) => (
                <div key={emp.id}>
                    <p>{emp.name}</p>
                    <p>{emp.position}</p>
                    <p>{emp.age}</p>

                    <div className="flex gap-3 mt-1">
                        <Button>Update</Button>
                        <Button>Delete</Button>
                    </div>

                    <hr className="mt-3 mb-3" />

                </div>
            ))}
        </div>
    );
}
