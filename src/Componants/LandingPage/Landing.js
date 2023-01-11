import { useEffect } from "react";

import canvasStyle from "./canvas_style";

const Landing = () =>
{
    useEffect(() =>
    {
        // call Function When Page Loaded
        canvasStyle();
     }, []);
    
    return (
        <div id="canvas-parent" style={{ "minHeight": "150vh" }}>
            <canvas id="canvas" width={100} height={100} ></canvas>
            <div className={"landing-text w-sm-100 text-white text-center text-bold absolute-center"} style={{ "transition": "var(--transition)" }} >
                <h1 className="mb-4 wow zoomIn">Make something great.</h1>
                <h3 className="mb-4 wow zoomIn">Build software collaboratively from anywhere in the world, on any device, without spending a second on setup</h3>
                <button className="p-3 pe-4 ps-4 text-white wow flipInY box-shadow btn" style={{ "backgroundColor": "rgb(0, 83, 166)", "borderRadius": "10px", "boxShadow": "0 0 24px #0053A6" }}>Start creating</button>
            </div>
        </div>
    );
}


export default Landing;