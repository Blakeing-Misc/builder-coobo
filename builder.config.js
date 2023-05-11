import { Builder } from "@builder.io/react";
import dynamic from "next/dynamic";

Builder.registerComponent(
  dynamic(() => import("@/components/card")),
  {
    name: "Card",
    image: "https://tabler-icons.io/static/tabler-icons/icons-png/id-badge.png",
    inputs: [
      {
        name: "title",
        type: "string",
        required: true,
        defaultValue: "I am a React + Tailwind component!",
      },
      {
        name: "description",
        type: "text",
        defaultValue:
          "You can find my source code at: https://github.com/BuilderIO/blog-example/blob/main/components/Card.js",
        required: true,
      },
      {
        name: "imgSrc",
        defaultValue:
          "https://cdn.builder.io/api/v1/image/assets%2Fccda6c7abf4c4b8195aa67d47de420dd%2F784e7fa828bd440391e222589df3968c",
        friendlyName: "image",
        type: "file",
        allowedFileTypes: ["png", "jpg", "webp"],
      },
      {
        name: "href",
        friendlyName: "link",
        type: "url",
      },
    ],
  }
);

Builder.registerComponent(
  dynamic(() => import("@/components/heading")),
  {
    name: "Heading",
    inputs: [{ name: "title", type: "text" }],
    image:
      "https://tabler-icons.io/static/tabler-icons/icons-png/3d-cube-sphere-off.png",
  }
);

Builder.registerComponent(
  dynamic(() => import("@/components/pre")),
  {
    name: "Code",
    image:
      "https://tabler-icons.io/static/tabler-icons/icons-png/code-asterix.png",
    inputs: [
      {
        name: "children",
        friendlyName: "code",
        type: "code",
        options: {
          language: "javascript",
        },
        defaultValue: `const hello = 'world'`,
        required: true,
      },
    ],
  }
);

Builder.register("insertMenu", {
  name: "Blog Post Components",
  items: [
    { name: "NewsletterForm" },
    { name: "Card" },
    { name: "Code" },
    { name: "PageTitle" },
    { name: "SocialIcons" },
    { name: "TableOfContents" },
  ],
});