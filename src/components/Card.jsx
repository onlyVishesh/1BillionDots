const Card = ({data}) => {
  return (
    <div className="bg-[#3A3F57] text-white w-[350px] flex justify-center items-center flex-col gap-5 px-5 relative mt-28 pb-5">
      <div className="">
        <img
          src={data.imageURL}
          alt={data.serviceName}
          className="rounded-full aspect-square p-3 bg-white w-52 absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2"
        />
      </div>
      <div className="flex justify-center items-center flex-col gap-2 pt-28 ">
        <h2 className="text-center font-semibold">{data.serviceName}</h2>
        <p className="text-center line-clamp-4">
          {data.serviceDescription}
        </p>
        <button className="w-max px-2 py-2 rounded-md bg-orange-500 border-2 border-orange-500 hover:bg-transparent text-white hover:text-orange-500 duration-100">Read More</button>
      </div>
    </div>
  );
};

export default Card;
