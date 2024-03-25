"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Create() {
    const router = useRouter();

    const [form, setForm] = useState({
        title: "",
        description: "",
    });

    const handleChange = (e) => {
        setForm((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const res = await fetch("/api/tasks", {
            method: "POST",
            body: JSON.stringify(form),
            headers: {
                "Content-Type": "application/json",
            },
        });
        const data = await res.json();
        console.log(data);

        router.push("/");
    };

    return (
        <div className="h-screen flex justify-center items-center p-10">
            <form className="bg-slate-800 p-10 rounded" onSubmit={handleSubmit}>
                <label htmlFor="title" className="font-bold text-sm">
                    Título de la tarea
                </label>
                <input type="text" name="title" className="border border-gray-400 p-2 mb-4 w-full text-black rounded focus:outline-none focus:bg-blue-200" placeholder="Título..." onChange={(e) => handleChange(e)} />

                <label htmlFor="title" className="font-bold text-sm">
                    Descripción de la tarea
                </label>
                <textarea rows="3" name="description" className="border border-gray-400 p-2 mb-4 w-full text-black rounded focus:outline-none focus:bg-blue-200 resize-none" placeholder="Descripción de la tarea..." onChange={(e) => handleChange(e)} />

                <input type="submit" value="Crear" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded cursor-pointer" />
            </form>
        </div>
    );
}
