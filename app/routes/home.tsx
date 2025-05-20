import type { Route } from "./+types/home";
import { Welcome } from "../welcome/welcome";
import Main from "~/routes/main";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Technical Assessment from GrowthOps 2025" },
    { name: "description", content: "This is the technical assessment done in React by HowJun." },
  ];
}

export default function Home() {
  return (
    <Main />
  );
}
