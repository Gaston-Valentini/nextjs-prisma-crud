"use client";
import { useRouter } from "next/navigation";

export default function Task({ id, title, description, createdAt }) {
    const router = useRouter();

    return (
        <div className="flex flex-col gap-2 bg-slate-900 p-3 hover:bg-slate-800 hover:cursor-pointer" onClick={() => router.push(`/tasks/edit/${id}`)}>
            <div className="font-bold text-2xl">{title}</div>
            <div>{description}</div>
            <div>{new Date(createdAt).toLocaleDateString()}</div>
        </div>
    );
}
