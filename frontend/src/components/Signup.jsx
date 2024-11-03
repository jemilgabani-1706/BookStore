import React from "react";
import { Link } from "react-router-dom";
import Login from "./Login";
import { useForm } from "react-hook-form";

const Signup = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => console.log(data);

    return (
        <>
            <div className="flex h-screen items-center justify-center dark:text-black">
                <div className="w-[600px]">
                    <div className="bg-white modal-box">
                        <form method="dialog" onSubmit={handleSubmit(onSubmit)}>
                            <Link 
                                to={"/"}>
                                <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                                ✕
                                </button>
                            </Link>

                            <h3 className="font-bold text-lg">Signup!</h3>
                            <div className="mt-4">
                                <span>Name</span>
                                <br />
                                <input
                                    type="text"
                                    placeholder="Enter your fullname"
                                    className="w-80 outline-none border rounded-md mt-2 px-3 py-1"
                                    {...register("name", { required: true })}
                                />
                                <br />
                                {errors.name && <span className="text-sm text-red-500">This field is required</span>}
                            </div>
                            <div className="mt-4">
                                <span>Email</span>
                                <br />
                                <input
                                    type="email"
                                    placeholder="Enter your email"
                                    className="w-80 outline-none border rounded-md mt-2 px-3 py-1"
                                    {...register("email", { required: true })}
                                />
                                <br />
                                {errors.email && <span className="text-sm text-red-500">This field is required</span>}
                            </div>
                            <div className="mt-4">
                                <span>Password</span>
                                <br />
                                <input
                                    type="password"
                                    placeholder="Enter your password"
                                    className="w-80 outline-none border rounded-md mt-2 px-3 py-1"
                                    {...register("password", { required: true })}
                                />
                                <br />
                                {errors.password && <span className="text-sm text-red-500">This field is required</span>}
                            </div>
                            <div className="flex justify-around mt-4">
                                <button className="bg-pink-500 px-3 py-1 rounded-md text-white hover:bg-pink-700">
                                Signup
                                </button>
                                <p>
                                    Have account ?{" "}
                                    <button
                                        className="text-blue-500 underline cursor-pointer"
                                        onClick={() =>
                                        document.getElementById("my_modal_3").showModal()
                                    }
                                    >
                                        Login
                                    </button>
                                </p>
                                <Login></Login>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Signup;
