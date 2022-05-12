import React from "react";
import { Button } from "react-daisyui";

const ButtonComp = ({ user }) => {
    return (
        <div className="flex gap-x-2">
            <Button onClick={() => alert(`${user}`)}>{user}</Button>
        </div>
    );
};

export default ButtonComp;
