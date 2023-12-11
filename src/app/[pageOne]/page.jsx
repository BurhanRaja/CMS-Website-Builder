import PageRender from "@/components/PageRender";
import React from "react";

export async function generateMetadata({ params }) {
  const response = await fetch(
    `http://localhost:8000/api/admin/pages/endpoints?endpoint=${params.pageOne}`
  );
  let data = await response.json();

  if (data?.success) {
    return {
      title: data?.data?.name,
      description: data?.data?.description,
    };
  }
}

const page = async ({ params }) => {
  const response = await fetch(
    `http://localhost:8000/api/admin/pages/endpoints?endpoint=${params.pageOne}`
  );
  let data = await response.json();

  return (
    <>
      <PageRender data={data} />
    </>
  );
};

export default page;
