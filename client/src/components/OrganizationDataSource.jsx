import OrganizationMapSidebar from "./OrganizationMapSidebar";

const OrganizationDataSource = () => {
  return (
    <div className="w-full h-screen flex">
      <OrganizationMapSidebar />
      <div className="w-5/6 flex flex-col overflow-hidden bg-white">
        DataSource
      </div>
    </div>
  );
};

export default OrganizationDataSource;
