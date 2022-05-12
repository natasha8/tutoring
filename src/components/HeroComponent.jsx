import React from "react";
import { Hero } from "react-daisyui";

const HeroComponent = () => {
    return (
        <Hero className="border-2 p-10 rounded-2xl w-2/5 flex justify-center items-center">
            <Hero.Overlay className="bg-opacity-60" />
            <Hero.Content className="text-center">
                <div className="max-w-md text-black uppercase space-y-10">
                    <h1 className="text-5xl font-bold">Hello devs</h1>
                    <button className="btn btn-primary">Let's Start</button>
                </div>
            </Hero.Content>
        </Hero>
    );
};

export default HeroComponent;
