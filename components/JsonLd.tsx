/**
 * `<` is escaped so a "</script>" inside any FAQ answer or caption can't end the
 * script block early and break both the schema and the page HTML.
 */
export default function JsonLd({ data }: { data: object }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }}
    />
  );
}
