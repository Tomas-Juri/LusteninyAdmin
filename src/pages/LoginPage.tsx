import { jwtDecode } from "jwt-decode";
import { useDispatch } from "react-redux";
import { useLocation } from "wouter";
import { login } from "../auth/authSlice";
import { TokenPayload } from "../auth/types";
import { mocks } from "../mock";

export const LoginPage = () => {
  const dispatch = useDispatch();

  const [_, setLocation] = useLocation();

  const onSubmit: React.FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();

    const token = jwtDecode<TokenPayload>(mocks.token);

    dispatch(login(token.email));
    setLocation("/");
  };

  return (
    <main className="flex h-screen items-center justify-center">
      <form action="" onSubmit={onSubmit}>
        <h1 className="mb-8 text-xl font-bold">Log in</h1>
        <div className="mb-4 flex flex-col gap-0.5">
          <label htmlFor="email" className="text-sm">
            Email
          </label>
          <input name="email" type="text" className="rounded border border-gray-300 px-4 py-2 shadow-sm" />
        </div>
        <div className="mb-4 flex flex-col gap-0.5">
          <label htmlFor="email" className="text-sm">
            Password
          </label>
          <input name="password" type="text" className="rounded border border-gray-300 px-4 py-2 shadow-sm" />
        </div>
        <button className="w-full rounded bg-blue-500 px-4 py-2 font-semibold text-white shadow">Log in</button>
      </form>
    </main>
  );
};
