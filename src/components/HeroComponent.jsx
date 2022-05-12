import React from "react";
import { Hero } from "react-daisyui";

const HeroComponent = ({ user }) => {
    return (
        <Hero className="one">
            <Hero.Overlay className="bg-opacity-60" />
            <Hero.Content className="text-center">
                <div className="max-w-md text-black uppercase space-y-24">
                    <h1 className="text-5xl font-bold">Hello {user.name}</h1>
                    <button className="btn btn-primary">Age {user.age}</button>
                </div>
            </Hero.Content>
        </Hero>
    );
};

export default HeroComponent;
