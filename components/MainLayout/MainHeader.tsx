import Link from "next/link";
import { usePathname } from "next/navigation";
import { FC } from "react";

//Info: Not using default exports because we want to make sure we're exporting the right thing and same name as the file

export const MainHeader: FC = () => {
  const pathName = usePathname();

  return (
    <ul className="flex flex-wrap text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400">
      <li className="mr-2">
        <Link
          href="/home"
          aria-current="page"
          className={`inline-block p-4 rounded-t-lg ${
            pathName === "/home"
              ? "text-blue-600 bg-gray-100 active dark:bg-gray-800 dark:text-blue-500"
              : "hover:text-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 dark:hover:text-gray-300"
          }`}
        >
          Home
        </Link>
      </li>
      <li className="mr-2">
        <Link
          href="/pension-estimator"
          className={`inline-block p-4 rounded-t-lg ${
            pathName === "/pension-estimator"
              ? "text-blue-600 bg-gray-100 active dark:bg-gray-800 dark:text-blue-500"
              : "hover:text-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 dark:hover:text-gray-300"
          }`}
        >
          Pension Estimator
        </Link>
      </li>
    </ul>
  );
};
