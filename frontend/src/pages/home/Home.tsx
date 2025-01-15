import React from "react";
import MiddlePost from "../../components/content/MiddlePost"
import RightBar from "../../components/content/RightBar";
import SideBar from "../../components/content/SideBar"

const Home: React.FC = (): JSX.Element => {
  return (
    <div className="container flex h-screen w-full gap-4">
      <div className="w-[25%] bg-black flex flex-col items-end">
        <SideBar />
      </div>
      <div className="w-[50%]">
        <MiddlePost />
      </div>
      <div className="w-[25%] border-l border-[#333] border-solid">
        <RightBar />
      </div>
    </div>
  )
};
export default Home;