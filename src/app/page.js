import InstagramIcon from "@mui/icons-material/Instagram";
import TopHeader from "@/components/admin/ui/header/TopHeader";

const page = () => {
  return (
    <div>
      {/* <MyComponent /> */}
      <TopHeader
        disabled={false}
        headerStyle={{
          backgroundColor: "#a6c626",
          padding: "5px 20px",
        }}
        toolbarStyle={{
          minHeight: "30px",
        }}
        rightSideContent={{
          text: {
            disable: true,
            content: "Hello",
            customClass: "toprightheader",
            style: {
              fontSize: "20px",
              textAlign: "end",
            },
          },
          icon: {
            disable: false,
            icons: [
              {
                id: "1",
                link: "",
                icon: <InstagramIcon className="" sx={{ color: "white" }} />,
              },
            ],
          },
        }}
      />
    </div>
  );
};

export default page;
