"use client";
import {
  PensionEstimatorFormView,
  PensionFormChartView,
} from "@Components/index";
// import styled from "styled-components";
// import tw from "twin.macro";

// const StyledButton = styled.button`
//   ${tw`
//     bg-blue-500
//     hover:bg-blue-700
//     text-white
//     font-bold
//     py-2
//     px-4
//     rounded
//   `}
// `;

export default function Page() {
  return (
    <>
      <PensionEstimatorFormView />
      <PensionFormChartView />
    </>
  );
}
