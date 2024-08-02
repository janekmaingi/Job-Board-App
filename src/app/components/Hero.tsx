export default function Hero() {
  return (
    <section className="container py-12">
      <h1 className="text-4xl font-bold text-center">
        Find your next
        <br /> dream job
      </h1>
      {/* <p className="text-center text-gray-500">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero quasi
        veritatis cupiditate! Sit dolor delectus mollitia officia culpa
        recusandae magnam corrupti nostrum vitae ea quo voluptate,
        necessitatibus deleniti doloribus cum.
      </p> */}
      <form className="flex gap-2 mt-4 max-w-xl mx-auto">
        <input
          type="search"
          className="border border-gray-400 w-full py-2 px-3 rounded-md"
          placeholder="Search phrase..."
        />
        <button className="bg-blue-600 text-white py-2 px-4 rounded-md">
          Search
        </button>
      </form>
    </section>
  );
}
