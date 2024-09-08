import { useState } from "react";

import { useLogin } from "./useLogin";
import SpinnerMini from "../../ui/SpinnerMini";
import Logo from "../../ui/Logo";
import { NavLink } from "react-router-dom";

function Login() {
  const inputStyle = "border-2 rounded-full px-4 py-3";
  const [email, setEmail] = useState("daniel@example.com");
  const [password, setPassword] = useState("123321110");

  const { login, isPending } = useLogin();

  function handleClick(e) {
    e.preventDefault();
    if (!email || !password) return;
    login(
      { email, password },
      {
        onSettled: () => {
          setEmail("");
          setPassword("");
        },
      },
    );
  }

  return (
    <div className="flex h-lvh justify-center bg-cyan-100">
      <div className="flex max-w-[400px] flex-grow flex-col gap-10 bg-white">
        <div className="flex h-[100vh] flex-col items-center justify-center gap-[6rem] text-center text-3xl">
          <Logo />

          <form className="flex flex-col items-start justify-center gap-5 rounded-[7px] border-2 border-gray-100 bg-gray-50 p-8">
            <label className="px-2 font-semibold">Email</label>
            <input
              type="email"
              id="email"
              autoComplete="username"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={inputStyle}
              disabled={isPending}
            />
            <label className="px-2 font-semibold">Password</label>
            <input
              type="password"
              id="password"
              autoComplete="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className={inputStyle}
              disabled={isPending}
            />
            <div className="flex w-[100%] justify-between">
              <NavLink
                to="/signup"
                className="rounded-full border-2 px-4 py-2 text-xl font-semibold text-gray-400 hover:text-gray-500"
              >
                Signup
              </NavLink>
              <button
                onClick={handleClick}
                disabled={isPending}
                className="w-[50%] rounded-full border-2 bg-blue-500 py-2 text-gray-50 hover:bg-blue-600"
              >
                {isPending ? <SpinnerMini /> : "Login"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
