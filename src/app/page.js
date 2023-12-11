import PageRender from "@/components/PageRender";

const page = async () => {
  const response = await fetch("http://localhost:8000/api/admin/pages/5");
  let data = await response.json();

  return (
    <>
      <PageRender data={data} />
    </>
  );
};

export default page;
