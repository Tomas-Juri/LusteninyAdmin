import { jwtDecode } from "jwt-decode";
import { useDispatch } from "react-redux";
import { Link, useLocation } from "wouter";
import { login } from "../auth/authSlice";
import { TokenPayload } from "../auth/types";
import { Footer } from "../components/organisms";
import { mocks } from "../mock";

export const RegisterPage = () => {
  const dispatch = useDispatch();

  const [_, setLocation] = useLocation();

  const onSubmit: React.FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();

    const token = jwtDecode<TokenPayload>(mocks.token);

    dispatch(login(token.email));
    setLocation("/");
  };

  return (
    <div className="bg-gray-100">
      <main className="flex h-screen items-center justify-center">
        <div className="w-full max-w-md">
          <h1 className="mb-12 mt-6 text-center text-3xl font-bold text-gray-900">Zaregistrujte si nový účet</h1>

          <form action="" onSubmit={onSubmit} className="space-y-6">
            <div>
              <label htmlFor="email" className="block font-medium text-gray-700">
                Emailová adresa
              </label>
              <div className="mt-1">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-blue-500"
                />
              </div>
            </div>
            <div>
              <label htmlFor="password" className="block font-medium text-gray-700">
                Heslo
              </label>
              <div className="mt-1">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="password"
                  required
                  className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-blue-500"
                />
              </div>
            </div>
            <div>
              <label htmlFor="password-repeat" className="block font-medium text-gray-700">
                Potvrzení hesla
              </label>
              <div className="mt-1">
                <input
                  id="password-repeat"
                  name="password-repeat"
                  type="password"
                  autoComplete="password"
                  required
                  className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-blue-500"
                />
              </div>
            </div>
            <button
              type="submit"
              className="flex w-full justify-center rounded-md border border-transparent bg-blue-600 px-4 py-2 font-medium tracking-wide text-white shadow-sm transition duration-300 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
              Registrovat
            </button>
          </form>
          <p className="mt-8 text-center text-gray-700">
            Již máte účet?{" "}
            <Link href="/account/login" className="font-semibold text-blue-600">
              Přihlašte se
            </Link>
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
};
