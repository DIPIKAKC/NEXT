'use client';
import { Button } from "@/components/ui/button"
import {
    Card,
    CardAction,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Spinner } from "@/components/ui/spinner";
import { addEmployee } from "@/lib/actions/employee";
import { Formik } from "formik";
import { useRouter } from "next/router";
import { useTransition } from "react";
import toast from "react-hot-toast";


export default function EmployeeAdd() {
    const [loading, startTransition] = useTransition();

    const router = useRouter();
    return (
        <Card className="w-full max-w-sm">
            <CardHeader>
                <CardTitle>Add an employee</CardTitle>
                <CardDescription>
                    Fill the required fields
                </CardDescription>
            </CardHeader>
            <CardContent>
                <Formik
                    initialValues={{
                        name: '',
                        position: '',
                        age: 0
                    }}
                    onSubmit={async (val) => {
                        try {
                            const response = await addEmployee(val);
                            console.log(response)
                            toast.success('employee added successfully')
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


                                {loading ? <Button disabled className="w-full">
                                    <Spinner /> Submit
                                </Button> : <Button type="submit" className="w-full">
                                    Submit
                                </Button>}

                            </div>

                        </form>
                    )}
                </Formik>
            </CardContent>

        </Card>
    )
}