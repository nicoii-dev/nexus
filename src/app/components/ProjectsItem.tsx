import Icon from "@/lib/icon";
import clsx from "clsx";
import Link from "next/link";
import { Tooltip } from "rizzui";

export interface ItemInterface {
  name: string;
  description: string;
  image: string;
  github: {
    frontend: string;
    backend: string;
  };
  madeWith: string[];
}
interface ProjectInterface {
  item: ItemInterface;
}
export const ProjectItem = ({ item }: ProjectInterface) => {

  return (
    <div
      className={clsx(
        "flex flex-col mt-10 border rounded-md bg-cover sm:h-[400px]"
      )}
      style={{ backgroundImage: `url(${item.image})` }}
    >
      <div className="flex justify-center h-full bg-zinc-900/70 backdrop:blur-md rounded-md">
        <div className="flex flex-col w-full">
          <div className="flex p-2 items-center gap-2 justify-center sm:justify-start">
            <h1 className="text-ellipsis font-bold text-white">Made with:</h1>
            {item.madeWith.map((made, index) => {
              return (
                <div key={index} className="rounded-sm">
                  {Icon(made)}
                </div>
              );
            })}
          </div>
          <div className="flex flex-col h-full">
            <h1 className="text-white text-center font-mono text-[25px] sm:text-[40px]">
              {item.name ?? ""}
            </h1>
            <h1 className="text-gray-100 text-[13px] p-5 text-ellipsis text-center font-semibold sm:text-[18px]">
              {item.description ?? ""}
            </h1>
          </div>
          <div className="flex justify-end gap-2 p-2">
            {Object.keys(item?.github).map((key: string) => (
              <div
                className={clsx("flex bg-gray-700 p-2 h-5/6 w-fit rounded-md items-center cursor-pointer", item.github[key].length < 1 ? "invisible" : "visible" )}
                key={key}
              >
                <Tooltip
                  content={key === "frontend" ? "Front-end" : "Back-end"}
                  className="bg-white shadow-xl p-2 border"
                  placement="bottom-start"
                  showArrow={false}
                >
                  <Link href={item.github[key]} target="_blank">
                    {Icon("github")}
                  </Link>
                </Tooltip>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
