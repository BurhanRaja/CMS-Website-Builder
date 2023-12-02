import AdminLayout from "@/components/admin/pannel/AdminLayout";

function MainAdminLayout({ children }) {
  return (
    <>
      <AdminLayout>{children}</AdminLayout>
    </>
  );
}

export default MainAdminLayout;
