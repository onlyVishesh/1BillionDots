
const BlogCard = ({data}) => {
  return (
    <div className="bg-gray-100 max-w-[500px] md:max-w-[300px]  lg:max-w-[700px] flex-col flex gap-5 items-center lg:flex-row">
        <div className="flex "><img src={data.imageURL} alt={data.title} className="aspect-video w-[100rem]"/></div>
        <div className="p-2 flex flex-col gap-1 items-center lg:items-start">
            <h2 className=" text-xl font-semibold">{data.title}</h2>
            <p className="line-clamp-3">{data.description}</p>
            <button className="w-fit px-1 rounded-md py-2 bg-gray-900 text-white border-2 border-gray-900 hover:text-gray-900 hover:bg-transparent duration-100">Read More</button>
        </div>
    </div>
  )
}

export default BlogCard