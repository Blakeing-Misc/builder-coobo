import { Builder, BuilderComponent, builder } from "@builder.io/react";
import Header from "../components/header";
import "@/components/hero";
import "@/components/heading";
import type { GetStaticPropsContext, InferGetStaticPropsType } from "next";

export default function Home({
  builderJson,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <Header />
      {/* Render your Builder.io content https://www.builder.io/c/docs/quickstart */}
      <BuilderComponent model="page" content={builderJson} />
    </>
  );
}

// Fetch Builder.io content from the content API
// https://www.builder.io/c/docs/content-api
export async function getStaticProps() {
  const content = await builder.get("page", { url: "/" }).promise();
  return {
    props: { builderJson: content || null },
    // Next.js will attempt to re-generate the page:
    // - When a request comes in
    // - At most once every 5 seconds
    revalidate: 5,
  };
}

// Create a custom menu for your components
// https://www.builder.io/c/docs/custom-components-visual-editor#organizing
Builder.register("insertMenu", {
  name: "My Components",
  items: [{ name: "Heading" }, { name: "Hero" }],
});
