import { useEffect } from 'react';
import MapSideBar from "./MapSidebar";

const DataSource = (props) => {
  useEffect(() => {
    document.title = props.title || "";
  }, [props.title]);
  return (
    <div className="w-full h-screen flex">
      <MapSideBar />
      <div className="w-3/4 flex flex-col overflow-hidden bg-white">
        DataSource
      </div>
    </div>
  );
};

export default DataSource;
