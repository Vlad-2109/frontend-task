interface BlogSectionProps {
  title: string;
  children: React.ReactNode;
}

const BlogSection = ({ title, children }: BlogSectionProps) => {
  return (
    <div className="flex flex-col gap-5 pb-8">
      <h3 className="font-black font-(family-name:--font-montserrat) text-base">
        {title}
      </h3>
      {children}
    </div>
  );
};

export default BlogSection;
