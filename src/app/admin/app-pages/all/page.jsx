import AppTable from "@/components/admin/ui/AppTable";

const AllPages = async () => {
  let response = await fetch("http://localhost:8000/api/admin/pages/all");
  response = await response.json();

  return (
    <>
      <AppTable data={response.data} />
    </>
  );
};

export default AllPages;
