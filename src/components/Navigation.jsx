import React from "react";
import { Menu } from "react-daisyui";
import Button from "./Button";

const Navigation = ({ user }) => {
    const menu = ["About", "Bio", "Website"];
    return (
        <div className="bg-base-200 h-92">
            <Menu className="bg-base-100 w-56">
                {menu &&
                    menu.map((list, idx) => (
                        <Menu.Title key={idx}>
                            <a href="#">
                                {user.name} - {user.age}
                                <Button user={user.name} />
                            </a>
                        </Menu.Title>
                    ))}
            </Menu>
        </div>
    );
};

export default Navigation;
