import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { FaEdit, FaTrashAlt } from "react-icons/fa";
import useAxios from "../../hooks/useAxios";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";


const AllNotes = () => {
    const axios = useAxios();
    const [selectedMonth, setSelectedMonth] = useState(null);

    const { data: notes = [], refetch } = useQuery({
        queryKey: ['notes'],
        queryFn: async () => {
            const res = await axios.get(`/notes`);
            return res.data;
        }
    });

    const handleFilterByMonth = (month) => {
        setSelectedMonth(month);
    };

    const handleDelete = note => {
        toast.custom((t) => (
            <div
                className={`${t.visible ? 'animate-enter' : 'animate-leave'
                    } max-w-md w-full bg-white shadow-lg rounded-lg pointer-events-auto flex ring-1 ring-black ring-opacity-5`}
            >
                <div className="flex-1 w-0 p-4">
                    <div className="flex items-start">
                        <div className="ml-3 flex-1">
                            <p className="mt-1 text-sm text-gray-500">
                                Are you sure you want to delete?
                            </p>
                        </div>
                    </div>
                </div>
                <div className="flex border-l border-gray-200">
                    <button
                        onClick={() => {
                            toast.dismiss(t.id);
                            axios.delete(`/notes/${note._id}`)
                                .then(res => {
                                    console.log(res.data);
                                    if (res.data.deletedCount > 0) {
                                        refetch();
                                        toast.success(`Note Deleted!`)
                                    }
                                })
                        }}
                        className="w-full border border-transparent rounded-none rounded-r-lg p-4 flex items-center justify-center text-sm font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    >
                        Yes
                    </button>
                    <button
                        onClick={() => toast.dismiss(t.id)}
                        className="w-full border border-transparent rounded-none p-4 flex items-center justify-center text-sm font-medium text-gray-600 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-500"
                    >
                        Cancel
                    </button>
                </div>
            </div>
        ));
    }

    return (
        <div>
            <div className="dropdown mb-8">
                <div tabIndex={0} role="button" className="btn m-1">Filter By Months</div>
                <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                    <li><a onClick={() => handleFilterByMonth('January')}>January</a></li>
                    <li><a onClick={() => handleFilterByMonth('February')}>February</a></li>
                    <li><a onClick={() => handleFilterByMonth('March')}>March</a></li>
                    <li><a onClick={() => handleFilterByMonth('April')}>April</a></li>
                    <li><a onClick={() => handleFilterByMonth('May')}>May</a></li>
                    <li><a onClick={() => handleFilterByMonth('June')}>June</a></li>
                    <li><a onClick={() => handleFilterByMonth('July')}>July</a></li>
                    <li><a onClick={() => handleFilterByMonth('August')}>August</a></li>
                    <li><a onClick={() => handleFilterByMonth('September')}>September</a></li>
                    <li><a onClick={() => handleFilterByMonth('October')}>October</a></li>
                    <li><a onClick={() => handleFilterByMonth('November')}>November</a></li>
                    <li><a onClick={() => handleFilterByMonth('December')}>December</a></li>
                </ul>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {notes.map((note) => {
                    // Check if the note's month matches the selectedMonth
                    if (selectedMonth && note.month !== selectedMonth) {
                        return null; // Skip rendering if not matching
                    }

                    return (
                        <div key={note._id} className="card w-96 bg-base-100 shadow-xl">
                            <div className="card-body">
                                <h2 className="card-title">{note.title}</h2>
                                <p>{note.note}</p>
                                <p><span className="font-bold">Month: </span>{note.month}</p>
                                <div className="card-actions justify-end">
                                    <Link to={`/edit-notes/${note._id}`}><button className="btn"> <FaEdit size={20}></FaEdit> </button></Link>
                                    <button onClick={() => handleDelete(note)} className="btn"> <FaTrashAlt color="red" size={20}></FaTrashAlt> </button>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default AllNotes;