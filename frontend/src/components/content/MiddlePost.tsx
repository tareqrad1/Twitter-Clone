import React from "react";
import CreatePost from "./CreatePost"
import Navbar from "./Navbar"
import Posts from "./Posts"

const MiddlePost: React.FC = () => {
    return (
        <>
            <div>
                <div>
                    <Navbar />
                </div>
                <div>
                    <CreatePost />
                </div>
                <div>
                    <Posts />
                </div>
            </div>
        </>
    )
};

export default MiddlePost