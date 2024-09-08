import Logo from "../../ui/Logo";
import { useForm } from "react-hook-form";
import Error from "../../ui/Error";
import { useSignup } from "./useSignup";
import { NavLink, useNavigate } from "react-router-dom";

function Signup() {
  const {
    register,
    formState: { errors },
    getValues,
    handleSubmit,
    reset,
  } = useForm();
  const { signup, isPending } = useSignup();
  const navigate = useNavigate();
  const labelStyle = "px-2 font-semibold";
  const inputStyle = "border-2 rounded-full px-4 py-3 w-[100%]";

  function onSubmit({ fullName, email, password }) {
    signup(
      { fullName, email, password },
      {
        onSettled: () => {
          reset();
          navigate("/login", { replace: true });
        },
      },
    );
  }
  return (
    <div className="flex h-lvh justify-center bg-cyan-100">
      <div className="flex max-w-[400px] flex-grow flex-col gap-10 bg-white">
        <div className="flex h-[100vh] flex-col items-center justify-center gap-[3rem] text-center text-2xl">
          <Logo />

          <div className="text-3xl font-bold text-gray-500">
            <p>Welcome!</p> <p>Create your account</p>
          </div>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex w-[85%] flex-col items-start justify-center gap-2 rounded-[7px] border-2 border-gray-100 bg-gray-50 p-6"
          >
            <label className={labelStyle}>Full name</label>
            <input
              type="text"
              id="fullName"
              className={inputStyle}
              {...register("fullName", {
                required: "This filed is required",
              })}
              disabled={isPending}
            />
            {errors?.fullName && (
              <Error size="sm" message={errors.fullName.message} />
            )}

            <label className={labelStyle}>Email address</label>
            <input
              type="email"
              id="email"
              className={inputStyle}
              {...register("email", {
                required: "This filed is required",
                pattern: {
                  value: /\S+@\S+\.\S+/,
                  message: "Please provide a valid email address",
                },
              })}
              disabled={isPending}
            />
            {errors?.email && (
              <Error size="sm" message={errors.email.message} />
            )}

            <label className={labelStyle}>Password (min 8 chars)</label>
            <input
              type="password"
              id="password"
              className={inputStyle}
              {...register("password", {
                required: "This filed is required",
                minLength: {
                  value: 8,
                  message: "Password needs a minimum of 8 characters",
                },
              })}
              disabled={isPending}
            />
            {errors?.password && (
              <Error size="sm" message={errors.password.message} />
            )}

            <label className={labelStyle}>Repeat password</label>
            <input
              type="password"
              id="passwordConfirm"
              className={inputStyle}
              {...register("passwordConfirm", {
                required: "This field is required",
                validate: (value) =>
                  value === getValues().password || "Passwords need to match",
              })}
              disabled={isPending}
            />
            {errors?.passwordConfirm && (
              <Error size="sm" message={errors.passwordConfirm.message} />
            )}
            <div className="mt-8 flex w-[100%] justify-between">
              <NavLink
                to="/login"
                className="rounded-full border-2 px-4 py-2 text-xl font-semibold text-gray-400 hover:text-gray-500"
              >
                Login now
              </NavLink>
              <button
                type="submit"
                className="w-[50%] rounded-full border-2 bg-blue-500 py-2 text-gray-50 hover:bg-blue-600"
              >
                Signup
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Signup;
