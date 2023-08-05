import Link from "next/link";
import { usePathname } from "next/navigation";
import { FC } from "react";
import { ImHome, ImSphere } from "react-icons/im";

//Info: Not using default exports because we want to make sure we're exporting the right thing and same name as the file

export const MainHeader: FC = () => {
  const pathName = usePathname();

  return (
    <div className="flex flex-wrap text-sm font-medium text-center text-gray-500 border-b justify-between px-4">
      <div className="flex gap-2 items-center">
        <span
          className={`px-2 flex items-center hover:text-gray-600 hover:bg-gray-50 ${
            pathName === "/home" ? "text-blue-600 bg-gray-100 active" : ""
          }`}
        >
          <ImHome className="w-6 h-6" />
          <Link
            href="/home"
            aria-current="page"
            className={`inline-block p-4 rounded-t-lg`}
          >
            Home
          </Link>
        </span>
        <span
          className={`px-2 flex items-center hover:text-gray-600 hover:bg-gray-50 ${
            pathName === "/pension-estimator"
              ? "text-blue-600 bg-gray-100 active"
              : ""
          }`}
        >
          <ImSphere className="w-6 h-6" />
          <Link
            href="/pension-estimator"
            className={`inline-block p-4 rounded-t-lg`}
          >
            Pension Estimator
          </Link>
        </span>
      </div>
    </div>
  );
};
