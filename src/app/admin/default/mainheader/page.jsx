import MainHeader from "@/components/admin/editor/MainHeaderEditor";

const MainHeaderPage = async () => {
  const response = await fetch("http://localhost:8000/api/admin/pages/all");
  const allPages = await response.json();

  return (
    <>
      <MainHeader allPages={allPages} />
    </>
  );
};

export default MainHeaderPage;
