import React, { useState } from "react";
import CreatePost from "./CreatePost"
import Navbar from "./Navbar"
import Posts from "./Posts"
import FollowingContent from "./FollowingContent";

const MiddlePost: React.FC = () => {
    const [isActive, setIsActive] = useState<boolean>(true);
    return (
        <>
            <div>
                <div>
                    <Navbar setIsActive={setIsActive} isActive={isActive} />
                </div>
                <div>
                    <CreatePost />
                </div>
                {isActive ? (
                <div>
                    <Posts />
                </div>) : (
                    <FollowingContent />
                )}
            </div>
        </>
    )
};
export default MiddlePost