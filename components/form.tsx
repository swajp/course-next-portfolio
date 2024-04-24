export default function Form() {
  return (
    <div className="pt-16 flex justify-between max-w-screen-2xl mx-auto p-4">
      <div className="w-full">
        <h1 className="text-5xl font-semibold">Contact me</h1>
        <p className="text-gray-700 text-lg">
          Feel free to reach out to me htmlFor any questions or comments.
        </p>
      </div>
      <form className="w-full mx-auto">
        <div className="mb-5">
          <label
            htmlFor="email"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Your email
          </label>
          <input
            type="email"
            id="email"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            placeholder="name@email.com"
            required
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="subject"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Your subject
          </label>
          <input
            type="text"
            id="subject"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            required
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="message"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Your message
          </label>
          <textarea
            id="message"
            rows={4}
            className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
            placeholder="Leave a comment..."
          ></textarea>
        </div>
        <button
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
