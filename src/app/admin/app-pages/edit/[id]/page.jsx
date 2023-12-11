import SectionEditor from "@/components/admin/editor/SectionEditor";

const Page = async ({ params }) => {
  const response = await fetch(
    `http://localhost:8000/api/admin/pages/editor/${params.id}`
  );
  let data = await response.json();

  return (
    <>
      <div className='' style={{ padding: "10px" }}>
        <SectionEditor type='update' rowData={data} />
      </div>
    </>
  );
};

export default Page;
