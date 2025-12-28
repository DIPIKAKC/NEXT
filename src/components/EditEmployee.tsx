import { EmployeeInterface } from '@/models/model'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Formik } from 'formik';
import toast from 'react-hot-toast';
import { Label } from './ui/label';
import { Input } from './ui/input';
import { Button } from './ui/button';
import { useRouter } from 'next/navigation';
import { updateEmployee } from '@/lib/actions/employee';

export default function EditEployee({ employee }: { employee: EmployeeInterface }) {
    const router = useRouter();
    return (
        <Card className="w-full max-w-sm">
            <CardHeader>
                <CardTitle>Update employee</CardTitle>
                <CardDescription>
                    Fill the required fields
                </CardDescription>
            </CardHeader>
            <CardContent>
                <Formik
                    initialValues={{
                        name: employee.name || '',
                        position: employee.position || '',
                        age: employee.age || ''
                    }}
                    onSubmit={async (val) => {
                        if (!employee.id) {
                            toast.error('Employee ID is missing');
                            return;
                        }
                        try {
                            const response = await updateEmployee(
                                {
                                    ...val,
                                    age: Number(val.age),
                                },
                                employee.id
                            );
                            console.log(response)
                            toast.success('employee updated successfully')
                            router.back();
                        } catch (error) {
                            console.log(error)
                            toast.error('failed to add the employee')
                        }
                    }}
                >
                    {({ handleChange, handleSubmit, values }) => (

                        <form onSubmit={handleSubmit}>
                            <div className="flex flex-col gap-6">
                                <div className="grid gap-2">
                                    <Label htmlFor="name">Name</Label>
                                    <Input
                                        id="name"
                                        placeholder="John Doe"
                                        value={values.name}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className="grid gap-2">
                                    <Label htmlFor="position">Position</Label>
                                    <Input
                                        id="position"
                                        placeholder="Dev"
                                        value={values.position}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className="grid gap-2">
                                    <Label htmlFor="age">Age</Label>
                                    <Input
                                        id="age"
                                        type="number"
                                        placeholder="90"
                                        value={values.age}
                                        onChange={handleChange}
                                    />
                                </div>


                                <Button type="submit" className="w-full">
                                    Add Employee
                                </Button>
                            </div>

                        </form>
                    )}
                </Formik>
            </CardContent>

        </Card>
    )
}

