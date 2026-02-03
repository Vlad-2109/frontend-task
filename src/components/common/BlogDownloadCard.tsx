import FileDownload from "../../assets/icons/ui/file-download.png";
import type { BlogDownloadCardProps } from "../../types/blog";

const BlogDownloadCard = ({
  text,
  size,
  width,
  justify = "center",
  textFullWidth = false,
}: BlogDownloadCardProps & {
  justify?: "start" | "center";
  textFullWidth?: boolean;
}) => {
  return (
    <div
      className={`h-[144px] flex items-center justify-${justify} gap-7 bg-white dark:bg-[#D8E0EB] border-[1px] border-[#D0DD26] shadow-[16px_24px_32px_0px_rgba(108,182,63,0.2)] p-6 
      ${width ? width : "w-full lg:max-w-[384px] "}`}>
      <img
        src={FileDownload}
        alt="Prenesi datoteko"
        className="cursor-pointer"
      />
      <div
        className={`flex flex-col font-bold text-[#002A00] text-[14px] font-(family-name:--font-anonymous) w-full`}>
        <p
          className={`text-left ${textFullWidth ? "w-full" : "max-w-[180px]"}`}>
          {text}
        </p>
        <p className="text-[12px]">{size}</p>
      </div>
    </div>
  );
};

export default BlogDownloadCard;
