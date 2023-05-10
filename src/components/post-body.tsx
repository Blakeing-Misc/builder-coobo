import { BuilderComponent } from "@builder.io/react";

type PostBodyProps = {
  content: Record<string, unknown>;
};

export default function PostBody({ content }: PostBodyProps) {
  return (
    <div className="max-w-2xl mx-auto">
      <BuilderComponent
        options={{ includeRefs: true }}
        model="post"
        content={content}
      />
    </div>
  );
}
