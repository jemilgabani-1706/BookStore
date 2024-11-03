import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

const Login = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => console.log(data);

    return (
        <>
            <dialog id="my_modal_3" className="modal dark:text-black">
                <div className="modal-box bg-white">
                    <form method="dialog" onSubmit={handleSubmit(onSubmit)}>
                        <Link
                            to={"/"}
                            className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
                            onClick={() => document.getElementById("my_modal_3").close()}
                        >
                        ✕
                        </Link>

                        <h3 className="font-bold text-lg">Login!</h3>
                        <div className="mt-4">
                            <span>Email</span>
                            <br />
                            <input
                                {...register("email", { required: true })}
                                type="email"
                                placeholder="Enter your email"
                                className="w-80 outline-none border rounded-md mt-2 px-3 py-1"
                            />
                            <br />
                            {errors.email && <span className="text-sm text-red-500">This field is required</span>}
                        </div>
                        <div className="mt-4">
                            <span>Password</span>
                            <br />
                            <input
                                {...register("password", { required: true })}
                                type="password"
                                placeholder="Enter your password"
                                className="w-80 outline-none border rounded-md mt-2 px-3 py-1"
                            />
                            <br />
                            {errors.password && <span className="text-sm text-red-500">This field is required</span>}
                        </div>
                        <div className="flex justify-around mt-4">
                            <button className="bg-pink-500 px-3 py-1 rounded-md text-white hover:bg-pink-700">
                                Login
                            </button>
                            <p>
                                Not registered ?{" "}
                                <Link
                                    to={"/Signup"}
                                    className="text-blue-500 underline cursor-pointer"
                                >
                                Signup
                                </Link>
                            </p>
                        </div>
                    </form>
                </div>
            </dialog>
        </>
    );
};

export default Login;
