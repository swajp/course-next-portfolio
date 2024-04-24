export default function Hero() {
  return (
    <>
      <div className="relative">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-0 mt-48"
        >
          <div
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
          ></div>
        </div>
      </div>

      <div className="h-[90vh] flex justify-center items-center flex-col">
        <h1 className="text-5xl font-semibold max-w-2xl text-center">
          This is my portfolio! Checkout my new projects
        </h1>
        <p className="text-xl mt-4 max-w-xl text-center">
          I create modern websites using Figma, NextJS, TailwindCSS. Send me a
          message!
        </p>
        <div className="flex mt-8 gap-4 justify-center items-center">
          <button className="bg-black text-white px-6 py-3 rounded-md">
            Contact me
          </button>
          <button className="text-black px-2 py-2">My projects</button>
        </div>
      </div>
    </>
  );
}
