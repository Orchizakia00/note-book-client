import { useForm } from "react-hook-form";
import useAxios from "../../hooks/useAxios";
import toast from "react-hot-toast";
import { useLoaderData } from "react-router-dom";
import { FaTasks } from "react-icons/fa";

const EditNotes = () => {

    const { register, handleSubmit } = useForm();
    const axios = useAxios();
    const loadedNote = useLoaderData();

    const { title, note, month, _id } = loadedNote;

    const onSubmit = async (data) => {
        console.log(data)

        axios.patch(`/notes/${_id}`, data)
            .then(res => {
                console.log(res.data);
                if (res.data.modifiedCount > 0) {
                    toast.success('Note updated successfully!');
                    // reset();
                }
            })
    };

    return (
        <div className="bg-base-200 py-10 px-40 min-h-screen">
            <h2 className="text-4xl font-bold text-center mb-8">Add New Note</h2>
            <form onSubmit={handleSubmit(onSubmit)}>

                <div className="flex gap-6">
                    {/* title */}
                    <div className="form-control w-full my-6">
                        <label className="label">
                            <span className="label-text">Note Title</span>
                        </label>
                        <input
                            type="text"
                            placeholder="Note Title"
                            defaultValue={title}
                            {...register('title', { required: true })}
                            required
                            className="input input-bordered w-full" />
                    </div>

                    {/* month */}
                    <div className="form-control w-full my-6">
                        <label className="label">
                            <span className="label-text">Month</span>
                        </label>
                        <select defaultValue={month} {...register('month', { required: true })}
                            className="select select-bordered w-full">
                            <option disabled value="default">Select Month</option>
                            <option value="January">January</option>
                            <option value="February">February</option>
                            <option value="March">March</option>
                            <option value="April">April</option>
                            <option value="May">May</option>
                            <option value="June">June</option>
                            <option value="July">July</option>
                            <option value="August">August</option>
                            <option value="September">September</option>
                            <option value="October">October</option>
                            <option value="November">November</option>
                            <option value="December">December</option>
                        </select>
                    </div>

                </div>
                {/* notes */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Note</span>
                    </label>
                    <textarea {...register('note', { required: true })} 
                    defaultValue={note}
                    className="textarea textarea-bordered h-24" 
                    placeholder="Note"></textarea>
                </div>

                <button className="btn btn-block mt-6 bg-purple-600 text-white hover:bg-purple-400 hover:text-black">
                    Update Note <FaTasks></FaTasks>
                </button>
                {/* <Button className="btn-block" text={'Add Task'}></Button> */}
            </form>
        </div>
    );
};

export default EditNotes;