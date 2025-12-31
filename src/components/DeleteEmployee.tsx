'use client';

import { useTransition } from "react";
import { Button } from "./ui/button";
import { Trash2Icon } from "lucide-react";
import { Spinner } from "./ui/spinner";
import { removeEmployee } from "@/lib/actions/employee";
import toast from "react-hot-toast";



export default function DeleteEmployee({ id }: { id: string }) {
    const [isPending, startTransition] = useTransition();

    const handleRemove = () => {
        startTransition(async () => {

            const res = await removeEmployee(id);
            if (res.success) {
                console.log(res.success)
                toast.success(res.message);
            } else {
                console.log(res.message)
                toast.error(res.message);
            }


        });
    }

    return (
        <div>

            {isPending ? <Button disabled variant={'ghost'}>
                <Spinner /> loading
            </Button> : <Button onClick={handleRemove} variant={'ghost'}>
                <Trash2Icon />
            </Button>}



        </div>

    )
}