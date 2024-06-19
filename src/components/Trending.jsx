import carosoul from "./data/Carosoul";

const Trending = () => {
  return (
    <>
      <div className="p-4">
        <p className="text-3xl font-bold text-white">Trending</p>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3  lg:grid-cols-4  xl:grid-cols-5">
        {carosoul.map((item) => (
          <div
            key={item.id}
            className="flex card card-compact m-4 lg:m-14 w-48 bg-black shadow-xl"
          >
            <figure>
              <img src={item.url} alt={item.title} />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{item.title}</h2>
              <p className="overflow-hidden h-1 ">{item.description}</p>
              <div className="card-actions justify-end">
                <button className="bg-purple-900 text-white p-2 mr-16 hover:text-black hover:bg-white duration-500  rounded-full">
                  Watch Now
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Trending;
