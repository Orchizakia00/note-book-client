/* eslint-disable react/prop-types */

import { FaEdit, FaTrashAlt } from "react-icons/fa";


const NoteCard = ({ note }) => {
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <div className="card-body">
                <h2 className="card-title">{note.title}</h2>
                <p>{note.note}</p>
                <p><span className="font-bold">Month: </span>{note.month}</p>
                <div className="card-actions justify-end">
                    <button className="btn"> <FaEdit size={20}></FaEdit> </button>
                    <button className="btn"> <FaTrashAlt color="red" size={20}></FaTrashAlt> </button>
                </div>
            </div>
        </div>
    );
};

export default NoteCard;