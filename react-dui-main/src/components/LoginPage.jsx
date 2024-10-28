import React, { useEffect, useState } from "react";
import colorGameLogo from "../assets/pictures/color-game-logo.png";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

function LoginPage() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
  } = useForm();

  const [tableInput, setTableInput] = useState("");

  const handleLogin = () => {
    const { userPassword } = getValues();
    navigate("/color-game/select-table");
    console.log(userPassword);
  };

  return (
    <form
      onSubmit={handleSubmit(handleLogin)}
      className="min-h-screen font-rubik flex flex-col items-center justify-center bg-gradient-to-t from-gray-700 via-amber-600 to-amber-400"
    >
      <div className="p-4 space-y-14 w-[500px]">
        <div className="flex justify-center">
          <img src={colorGameLogo} alt="casino-logo" className="w-[80%]" />
        </div>
        <div className="flex flex-col space-y-4">
          <input
            // ref={inputRef}
            {...register("userPassword", { required: true })}
            value={tableInput}
            onChange={(e) => setTableInput(e.target.value)}
            placeholder="Enter your password"
            type="password"
            autoComplete="off"
            className="w-full px-4 py-2 rounded-full 
            ring-2 ring-orange-400
            focus-within:ring-2 focus-within:outline-none focus-within:ring-yellow-500 text-center font-bold transition-colors duration-150"
          />
          <button
            type="submit"
            className=" bg-yellow-300 shadow-md font-black shadow-black border-6 rounded-full py-2 text-[18px] text-orange-700 transition-colors hover:bg-yellow-200"
          >
            LOGIN
          </button>
          {errors.userPassword?.type === "required" && (
            <p className="text-center">password is required.</p>
          )}
        </div>
      </div>
    </form>
  );
}

export default LoginPage;
