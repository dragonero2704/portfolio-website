export async function generateStaticParams() {
  // projects logic
  const projects = ["alfa", "beta"];
  return projects.map((p) => ({ project: p }));
}

export default async function Page({
  params,
}: {
  params: Promise<{ project: string }>;
}) {
  const { project } = await params;

  return <p>{project}</p>;
}
