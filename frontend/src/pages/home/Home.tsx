import React from "react";
import MiddlePost from "../../components/content/MiddlePost"

const Home: React.FC = (): JSX.Element => {
  return (
      <div className="w-[80%] sm:w-[100%] lg:w-[50%] flex-1 border-l border-[#333] border-solid">
        <MiddlePost />
      </div>
  );
};
export default Home;