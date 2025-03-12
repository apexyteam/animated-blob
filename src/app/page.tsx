import { Metadata } from "next";
import Experience from "./experience";

export const metadata: Metadata = {
  title: "Animated blob",
  description: "WebGL blob.",
};

const ExperimentPage = () => {
  return <Experience />;
};

export default ExperimentPage;
