import { cn } from "../../utils/cn";
import { useTheme } from "../../utils/useTheme";

const Content = ({
  id,
  upperTitle,
  title,
  paragraphs = [],
  img: { src, alt, width, height },
  isImgLeft = false,
  extraContent = null,
}) => {
  const { theme } = useTheme();
  const isLightTheme = theme === "light";

  return (
    <section id={id} className='py-10 px-3 md:px-0'>
      <div className='container flex flex-col items-center justify-between gap-8 md:flex-row mx-auto relative'>
        {isImgLeft ? (
          <div className='self-stretch min-w-[40%] w-[400px] md:static absolute left-0 top-0 opacity-40 md:opacity-100 max-w-full flex justify-center items-center'>
            <img
              className='rounded-lg shadow-lg'
              src={src}
              alt={alt}
              width={width}
              height={height}
            />
          </div>
        ) : null}
        <div className='grow flex flex-col max-w-[750px] z-10'>
          <p
            className={cn(
              "uppercase font-bold text-[0.85rem] mb-2",
              isLightTheme ? "text-gray-700" : "text-gray-300"
            )}
          >
            {upperTitle}
          </p>
          <h2
            className={cn(
              "text-[2.3rem] font-bold tracking-[-0.5px] mb-3",
              isLightTheme ? "text-slate-800" : "text-slate-200"
            )}
          >
            {title}
          </h2>
          {paragraphs.map((p) => (
            <p
              className={cn(
                "mb-2 font-semibold",
                isLightTheme ? "text-slate-700" : "text-slate-300"
              )}
            >
              {p}
            </p>
          ))}
          {extraContent ? extraContent : null}
        </div>
        {!isImgLeft ? (
          <div className='self-stretch min-w-[40%] w-[400px] md:static absolute right-0 top-0 opacity-40 md:opacity-100 max-w-full flex justify-center items-center'>
            <img
              className='rounded-lg shadow-lg'
              src={src}
              alt={alt}
              width={width}
              height={height}
            />
          </div>
        ) : null}
      </div>
    </section>
  );
};

export default Content;
