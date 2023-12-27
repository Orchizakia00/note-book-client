import { useQuery } from "@tanstack/react-query";
import useAxios from "../../hooks/useAxios";
import { Link } from "react-router-dom";

const Featured = () => {

    const axios = useAxios();

    const { data: notes = [] } = useQuery({
        queryKey: ['notes'],
        queryFn: async () => {
            const res = await axios.get(`/notes`);
            return res.data;
        }
    });

    return (
        <div className="my-16">
            <h2 className="text-4xl text-center font-bold my-8">Featured Notes</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {
                    notes.slice(0, 6).map((note) => <div key={note._id} className="card w-96 bg-base-100 shadow-xl">
                        <div className="card-body">
                            <h2 className="card-title">{note.title}</h2>
                            <p>{note.note}</p>
                            <p><span className="font-bold">Month: </span>{note.month}</p>
                            <div className="card-actions justify-end">
                                {/* <Link to={`/edit-notes/${note._id}`}><button className="btn"> <FaEdit size={20}></FaEdit> </button></Link>
                                <button onClick={() => handleDelete(note)} className="btn"> <FaTrashAlt color="red" size={20}></FaTrashAlt> </button> */}
                            </div>
                        </div>
                    </div>)
                }
            </div>
            <div className="text-center mt-8">
                <Link to={'/all-notes'}><button className="btn bg-blue-600 text-white border-none">See All</button></Link>
            </div>
        </div >
    );
};

export default Featured;