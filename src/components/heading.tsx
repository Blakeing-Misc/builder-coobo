import { Builder } from "@builder.io/react";
import dynamic from "next/dynamic";
import { FC } from "react";

interface HeadingProps {
  title: string;
}

export const Heading: FC<HeadingProps> = (props) => (
  <h1 className="text-5xl text-blue-900">{props.title}</h1>
);

Builder.registerComponent(
  dynamic(() => import("./heading").then((module) => module.Heading), {
    ssr: true,
  }),
  {
    name: "Heading",

    inputs: [
      {
        name: "title",
        type: "text",
        defaultValue: "I am a heading!",
      },
    ],
  }
);
