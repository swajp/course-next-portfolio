export default function Projects() {
  return (
    <section className="max-w-screen-2xl mx-auto py-8 px-4">
      <h1 className="text-3xl font-semibold">My projects</h1>
      <p className="text-xl">
        My projects are the best. I only work with modern technologies.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
        <div className="flex flex-col items-center text-center rounded-md border p-4 py-8">
          <div className="border rounded-full p-8">
            <div className="w-[64px] h-[64px] bg-black" />
          </div>
          <h1 className="text-xl font-semibold">Project 1</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
        <div className="flex flex-col items-center text-center rounded-md border p-4 py-8">
          <div className="border rounded-full p-8">
            <div className="w-[64px] h-[64px] bg-black" />
          </div>
          <h1 className="text-xl font-semibold">Project 2</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
        <div className="flex flex-col items-center text-center rounded-md border p-4 py-8">
          <div className="border rounded-full p-8">
            <div className="w-[64px] h-[64px] bg-black" />
          </div>

          <h1 className="text-xl font-semibold">Projects 3</h1>
          <p>Lorem ipsum dolor sit amet consectetur.</p>
        </div>
      </div>
      <div
        role="button"
        className="px-4 py-3 bg-black text-white w-fit mx-auto mt-8 rounded-md"
      >
        About my projects
      </div>
    </section>
  );
}
