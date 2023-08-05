import { FC } from "react";

import { Footer } from "flowbite-react";
//Info: Not using default exports because we want to make sure we're exporting the right thing and same name as the file
export const MainFooter: FC = () => {
  return (
    <Footer container className="p-4 flex justify-between bg-gray-100">
      <Footer.Copyright
        className="flex gap-2"
        by="Digital Planner"
        href="#"
        year={2023}
      />
      <Footer.LinkGroup className="flex gap-2">
        <Footer.Link href="/home">Home</Footer.Link>
        <Footer.Link href="/pension-estimator">Pension Estimator</Footer.Link>
      </Footer.LinkGroup>
    </Footer>
  );
};
