import BlogCard from "../components/BlogCard";

const blogDetails = [
  {
    imageURL:
      "https://plus.unsplash.com/premium_photo-1684164601229-c069b1538e32?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8YmxvZyUyMGhvdXNlfGVufDB8fDB8fHww",
    title: "Transform Your Home with Cozy Residential Decoration Ideas",
    description:
      "Discover how to create a cozy and inviting atmosphere in your home with our residential decoration ideas. Explore personalized design solutions that reflect your style and enhance the comfort and beauty of your living space.",
  },
  {
    imageURL:
      "https://images.unsplash.com/photo-1533090161767-e6ffed986c88?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGJsb2clMjBob3VzZXxlbnwwfHwwfHx8MA%3D%3D",
    title: "Modern and Functional Office Decoration Tips",
    description:
      "Transform your office space into a productive and aesthetically pleasing environment with our expert decoration services. We specialize in creating modern, functional, and stylish office designs that inspire and motivate.",
  },
  {
    imageURL:
      "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmxvZyUyMGhvdXNlfGVufDB8fDB8fHww",
    title: "Boost Your Online Sales with E-commerce Decoration",
    description:
      "Enhance your e-commerce store's look and feel with our specialized decoration services. From product displays to overall store ambiance, we ensure your online store captivates and retains customers, driving more sales and engagement.",
  },
  {
    imageURL:
      "https://images.unsplash.com/photo-1501127122-f385ca6ddd9d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8YmxvZyUyMGhvdXNlfGVufDB8fDB8fHww",
    title: "Make Your Events Memorable with Stunning Decorations",
    description:
      "Make your events memorable with our professional decoration services. Whether it's a wedding, corporate event, or private party, we create stunning and unique designs that leave a lasting impression on your guests.",
  },
];

const Blog = () => {
  return (
    <div>
      <h1 className="mb-10 text-center text-3xl font-bold uppercase">
        Latest Blogs
      </h1>
      <div className="m-auto flex w-4/5 flex-wrap justify-center gap-5">
        {blogDetails.map((blog) => (
          <BlogCard data={blog} />
        ))}
      </div>
    </div>
  );
};

export default Blog;
