import { Builder } from "@builder.io/react";
import dynamic from "next/dynamic";

import { FC } from "react";

interface HeroProps {
  title: string;
  subtitle: string;
  buttonLink: string;
  buttonText: string;
}

export const Hero: FC<HeroProps> = (props) => {
  return (
    <div className="relative isolate px-6 pt-14 lg:px-8 bg-slate-50">
      <div
        className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
        aria-hidden="true"
      >
        <div
          className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
        ></div>
      </div>
      <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight text-blue-900 sm:text-6xl">
            {props.title}
          </h1>
          <p className="mt-6 text-lg leading-8 text-orange-600">
            {props.subtitle}
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <a
              href={props.buttonLink}
              className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              {props.buttonText}
            </a>
          </div>
        </div>
      </div>
      <div
        className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
        aria-hidden="true"
      >
        <div
          className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
        ></div>
      </div>
    </div>
  );
};

Builder.registerComponent(
  dynamic(() => import("./hero").then((module) => module.Hero), {
    ssr: true,
  }),
  {
    name: "Hero",
    image: "https://tabler-icons.io/static/tabler-icons/icons-png/section.png",
    inputs: [
      { name: "title", type: "string", defaultValue: "I am a hero!" },
      {
        name: "subtitle",
        type: "string",
        defaultValue: "Welcome to Builder.io visual editing",
      },
      { name: "buttonText", type: "string", defaultValue: "Click me" },
      {
        name: "buttonLink",
        type: "string",
        defaultValue: "https://builder.io",
      },
    ],
  }
);
