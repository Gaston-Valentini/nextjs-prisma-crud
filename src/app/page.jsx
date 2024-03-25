"use client";
import { useEffect, useState } from "react";
import Task from "@/components/Task";

export default function Home() {
    const [tasks, setTasks] = useState();

    const getTasks = async () => {
        const res = await fetch("/api/tasks", { method: "GET" });
        const data = await res.json();
        setTasks(data.tasks);
    };

    useEffect(() => {
        getTasks();
    }, []);

    return (
        <section className="container mx-auto">
            <h2 className="text-[28px]">Tus tareas</h2>
            <div className="grid grid-cols-3 gap-3 mt-10">{tasks ? tasks.map((task) => <Task key={task.id} id={task.id} title={task.title} description={task.description} createdAt={task.createdAt} />) : <div>Cargando tareas...</div>}</div>
        </section>
    );
}
