import Input from "../input";

export default function LogIn() {
  return (
    <div className="flex h-screen">
      <div className="w-full bg-gray-100 lg:w-1/2 flex items-center justify-center">
        <div className="max-w-md w-full p-6">
          <h1 className="text-3xl font-semibold mb-6 text-black text-center">
            Welcome back!
          </h1>
          <h1 className="text-sm font-semibold mb-6 text-gray-500 text-center">
            Let's get started!
          </h1>

          <form className="space-y-4">
            <Input label="Email" name="email" id="email" type="text" />
            <Input
              label="Password"
              name="password"
              id="password"
              type="password"
            />
            <div>
              <button
                type="submit"
                className="w-full bg-[#037cff] text-white my-9 p-2 rounded-md hover:bg-[#52a6ff] focus:outline-none focus:bg-[#52a6ff] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#52a6ff] transition-colors duration-300"
              >
                Log in
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className="hidden lg:flex items-center justify-center flex-1 bg-white text-black">
        <div className="max-w-md text-center">
          <img src="/images/loginimg.svg" alt="Login" />
        </div>
      </div>
    </div>
  );
}
