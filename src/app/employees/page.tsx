import DeleteEmployee from "@/components/DeleteEmployee";
import { Button } from "@/components/ui/button";
import { EmployeeInterface } from "@/models/model";
import axios from "axios";
import { Edit2Icon } from "lucide-react";
import Link from "next/link";

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

                    <div className="mt-5 flex gap-5">
                        <Link href={`/employees/${emp.id}`}>
                            <Button variant={'ghost'}>
                                <Edit2Icon />
                            </Button>
                        </Link>

                        <DeleteEmployee id={emp.id ?? ''} />

                    </div>


                </div>
            ))}
        </div>
    );
}
