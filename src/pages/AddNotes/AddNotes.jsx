import { useForm } from "react-hook-form";
import { FaTasks } from "react-icons/fa";

const AddNotes = () => {
    const { register, handleSubmit, reset } = useForm();
    // const axios = useAxios();

    const onSubmit = async (data) => {
        console.log(data)

        // axios.post('/tasks', data)
        //     .then(res => {
        //         console.log(res.data);
        //         if (res.data.insertedId) {
        //             toast.success('Tasks inserted successfully!');
        //             reset();
        //         }
        //     })
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
                            {...register('title', { required: true })}
                            required
                            className="input input-bordered w-full" />
                    </div>

                    {/* month */}
                    <div className="form-control w-full my-6">
                        <label className="label">
                            <span className="label-text">Month</span>
                        </label>
                        <select defaultValue="default" {...register('month', { required: true })}
                            className="select select-bordered w-full">
                            <option disabled value="default">Select Month</option>
                            <option value="january">January</option>
                            <option value="february">February</option>
                            <option value="march">March</option>
                            <option value="april">April</option>
                            <option value="may">May</option>
                            <option value="june">June</option>
                            <option value="july">July</option>
                            <option value="august">August</option>
                            <option value="september">September</option>
                            <option value="october">October</option>
                            <option value="november">November</option>
                            <option value="december">December</option>
                        </select>
                    </div>

                </div>
                {/* notes */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Note</span>
                    </label>
                    <textarea {...register('note', { required: true })} className="textarea textarea-bordered h-24" placeholder="Note"></textarea>
                </div>

                <button className="btn btn-block mt-6 bg-purple-600 text-white hover:bg-purple-400 hover:text-black">
                    Add Task <FaTasks></FaTasks>
                </button>
                {/* <Button className="btn-block" text={'Add Task'}></Button> */}
            </form>
        </div>
    );
};

export default AddNotes;