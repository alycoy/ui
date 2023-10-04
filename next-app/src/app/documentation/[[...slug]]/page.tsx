import { FC } from "react";
import { allDocumentations } from "contentlayer/generated";

interface Props {
  params: {
    slug: string[];
  };
}

const getDocFromParams = async (slug: string) => {
  const doc = allDocumentations.find((doc) => doc._raw.flattenedPath === slug);
  if (!doc) throw new Error(`Post not found for slug: ${slug}`);
  return doc;
};

const Page: FC<Props> = ({ params }) => {
  const slug = params.slug?.join("/") || ""

  const doc = allDocumentations.find(
    (doc) => doc._raw.flattenedPath === slug
  );

  if (!doc) throw new Error(`Post not found for slug: ${params.slug}`);

  return (
    <article className="mx-auto max-w-xl py-8">
      <div className="mb-8 text-center">
        <h1 className="text-3xl font-bold">{doc.title}</h1>
        <h3 className="text-3xl font-bold">{doc.description}</h3>
      </div>
      <div
        className="[&>*]:mb-3 [&>*:last-child]:mb-0"
        dangerouslySetInnerHTML={{ __html: doc.body.html }}
      />
    </article>
  );
};

export default Page;
