import React, { useContext, useEffect, useRef, useState } from "react";
import colorGameLogo from "../assets/pictures/color-game-logo.png";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import useLocalStorage from "../custom/useLocalStorage";
import { colorGameContext } from "../App";

function LoginPage() {
  const { socket } = useContext(colorGameContext)
  const { setItem } = useLocalStorage();


  const navigate = useNavigate();
  const inputRef = useRef(null);
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm();

  const [userPassword, setUserPassword] = useState("");
  const [isInputFocus, setIsInputFocus] = useState(false);

  const handleLogin = () => {

    // if (storedTableName && storedTableId) {
    //   navigate("/color-game/select-view");
    // } else {
    //   navigate("/color-game/select-table");
    // }

    if (!userPassword) {
      setError("userPassword", {
        type: "manual",
        message: "Password is required.",
      });

      return;
    } else if (userPassword === "ITD@casin0!") {
      if (socket && socket.readyState === WebSocket.OPEN) {
        socket.send(JSON.stringify({
          type: "join-room:table_list",
          room: "table_list"
        }))
        setItem("itadmin", "admin-access");
        navigate("/color-game/select-table");
      }
    } else if (userPassword === "CPpass2024!") {
      if (socket && socket.readyState === WebSocket.OPEN) {
        socket.send(JSON.stringify({
          type: "join-room:table_list",
          room: "table_list"
        }))
      }
      setItem("user", "user-access");
      navigate("/color-game/select-table");
    } else {
      setError("userPassword", {
        type: "manual",
        message: "Invalid access, please try again.",
      });
    }

  };

  const handleFocusInput = () => {
    setIsInputFocus(true);
    inputRef.current.focus();
  };

  const handleBlur = () => {
    if (userPassword.length === 0) {
      return setIsInputFocus(false);
    }
  };

  return (
    <form
      onClick={handleBlur}
      onSubmit={handleSubmit(handleLogin)}
      className="min-h-screen font-rubik flex flex-col items-center bg-cover justify-center bg-[url(assets/pictures/casino-bg.jpg)]"
    >
      <div className="p-4 space-y-14 w-[500px]">
        <div className="flex justify-center">
          <img src={colorGameLogo} alt="casino-logo" className="w-[80%]" />
        </div>
        <div
          onClick={(e) => {
            e.stopPropagation();
          }}
          className=" text-center"
        >
          <div className=" transition-all duration-70 relative px-4 py-2 rounded-full ring-2 ring-orange-400 focus-within:ring-2 focus-within:outline-none focus-within:ring-yellow-500 font-bold duration-150">
            <input
              {...register("userPassword")}
              onClick={handleFocusInput}
              ref={inputRef}
              value={userPassword}
              onChange={(e) => setUserPassword(e.target.value)}
              className={`w-full text-sm bg-transparent border-none outline-none text-center text-amber-400`}
              type="password"
              autoComplete="off"
            />

            <label
              htmlFor="userPassword"
              onClick={handleFocusInput}
              id="userPassword"
              className={`${isInputFocus
                ? "scale-75 -translate-y-[21px] bg-amber-300 mx-3 text-black"
                : "opacity-80 text-amber-300"
                } left-0 right-0 transition-transform absolute max-w-[120px] cursor-text mx-3 rounded-md `}
            >
              Password
            </label>
          </div>
          {errors.userPassword && (
            <p className="text-amber-500 text-sm mt-2 font-medium opacity-80">{errors.userPassword.message}</p>
          )}
          <div>
            <button
              type="submit"
              className="w-full my-4 bg-yellow-300 shadow-md font-black shadow-black border-6 rounded-full py-2 text-[18px] text-orange-700 transition-colors hover:bg-yellow-200"
            >
              LOGIN
            </button>
          </div>
        </div>
      </div>
    </form>
  );
}

export default LoginPage;
