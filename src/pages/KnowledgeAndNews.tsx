import BlogCard from "../components/blog/BlogCard";
import Pagination from "../components/common/Pagination";
import { blogs } from "../data/blogs";

const KnowledgeAndNews = () => {
  return (
    <>
      <div
        className="bg-white md:bg-white md:dark:bg-gray-900
        md:bg-[radial-gradient(#d1d5db_1px,transparent_1px)] md:dark:bg-[radial-gradient(#4b5563_1px,transparent_1px)]
        md:bg-[length:16px_16px]">
        <div className="bg-[#ECF3ED] dark:bg-[#2F3A4D] flex justify-center items-center h-[208px]">
          <h1 className="font-(family-name:--font-montserrat) text-[32px] dark:text-gray-300">
            Znanje in novosti
          </h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 gap-y-10 max-w-[1216px] mx-auto py-12">
          {blogs.map((blog, index) => {
            const lastRowStartIndex = blogs.length - (blogs.length % 3 || 3);

            return (
              <div
                key={blog.id}
                className={index >= lastRowStartIndex ? "hidden sm:block" : ""}>
                <BlogCard
                  image={blog.image}
                  author={blog.author}
                  date={blog.date}
                  title={blog.title}
                  text={blog.text}
                  buttonText={blog.buttonText}
                />
              </div>
            );
          })}
        </div>

        <Pagination />
      </div>
    </>
  );
};

export default KnowledgeAndNews;
