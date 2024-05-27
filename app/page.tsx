export default async function Home() {
  const databaseId = "b6db4592fa944c8d9a8105b9f21ce6f4";

  const response = await fetch(
    `https://api.notion.com/v1/databases/${databaseId}/query`,
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.NOTION_API_KEY}`,
        "Notion-Version": "2022-06-28",
        "Content-Type": "application/json",
      },
    }
  );

  console.log("response", response);
  const body = await response.json();
  // console.log("body", JSON.stringify(body, null, 2));

  const results = body.results;
  results.forEach((result: any, index: number) => {
    console.log("index", index);
    const name = result.properties.Name.title[0]?.plain_text;
    const tags = result.properties.Tags.multi_select.map((tag: any) => ({
      name: tag.name,
      color: tag.color,
    }));

    console.log("Name:", name);
    tags.forEach((tag: any) => {
      console.log("Tag Name:", tag.name, "Color:", tag.color);
    });
  });

  return <>てすと</>;
}
