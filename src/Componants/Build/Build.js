import { useEffect } from "react";
import { autoplay_scrolling } from "../gloable_Functions";

const Build = () =>
{

    useEffect(() =>
    {
        const timeOut = setInterval(() => {
            autoplay_scrolling("project-example-one", "left");
            autoplay_scrolling("project-example-two", "right");
            autoplay_scrolling("project-example-three" , "left");
        }, 40);
        return () => clearInterval(timeOut);
    }, []);


    return (
        <div className="min-height">
            <div className="container  position-relative build-container d-flex justify-content-lg-between justify-content-center flex-wrap align-items-center text-white text-center">
                <div className="w-lg-50 w-sm-100 wow fadeInLeft build-project overflow-hidden ">
                    <div className="d-flex justify-content-between align-items-center mb-1 overflow-auto project-example-one ">
                        <p className="p-3 col-lg-6 col-8 me-2" style={{ "backgroundColor": "var(--second-color)", "whiteSpace": "nowrap", "overflow": "hidden", "borderRadius": "15px" }}><i className="me-2 fa-brands fa-python" style={{ "color": "rgb(0, 147, 176)" }}></i> Build a static site in Python</p>
                        <p className="p-3 col-lg-6 col-8 me-2" style={{ "backgroundColor": "var(--second-color)", "whiteSpace": "nowrap", "overflow": "hidden", "borderRadius": "15px" }}><i className="me-2 fa-solid fa-staff-snake" style={{ "color": "rgb(0, 147, 176)" }}></i> Build a Snake Game</p>
                        <p className="p-3 col-lg-6 col-8 me-2" style={{ "backgroundColor": "var(--second-color)", "whiteSpace": "nowrap", "overflow": "hidden", "borderRadius": "15px" }}><i className="me-2 fa-brands fa-python" style={{ "color": "rgb(0, 147, 176)" }}></i> Building a Game with PyGame</p>
                        <p className="p-3 col-lg-6 col-8 me-2" style={{ "backgroundColor": "var(--second-color)", "whiteSpace": "nowrap", "overflow": "hidden", "borderRadius": "15px" }}><i className="me-2 fa-brands fa-node-js" style={{ "color": "rgb(0, 147, 176)" }}></i> Building a Chat App with Node.js</p>
                        <p className="p-3 col-lg-6 col-8 me-2" style={{ "backgroundColor": "var(--second-color)", "whiteSpace": "nowrap", "overflow": "hidden", "borderRadius": "15px" }}><i className="me-2 fa-brands fa-phoenix-squadron" style={{ "color": "rgb(0, 147, 176)" }}></i> Building with Nix</p>
                    </div>
                    <div className="d-flex justify-content-between align-items-center mb-1 overflow-auto project-example-two">
                        <p className="p-3 col-lg-6 col-8 me-2" style={{ "backgroundColor": "var(--second-color)", "whiteSpace": "nowrap", "overflow": "hidden", "borderRadius": "15px" }}><i className="me-2 fa-brands fa-js" style={{ "color": "rgb(0, 147, 176)" }}></i> Rendering 3D scenes with three.js</p>
                        <p className="p-3 col-lg-6 col-8 me-2" style={{ "backgroundColor": "var(--second-color)", "whiteSpace": "nowrap", "overflow": "hidden", "borderRadius": "15px" }}><i className="me-2 fa-solid fa-star-of-life" style={{ "color": "rgb(0, 147, 176)" }}></i> Creative coding with Replit</p>
                        <p className="p-3 col-lg-6 col-8 me-2" style={{ "backgroundColor": "var(--second-color)", "whiteSpace": "nowrap", "overflow": "hidden", "borderRadius": "15px" }}><i className="me-2 fa-brands fa-ethereum" style={{ "color": "rgb(0, 147, 176)" }}></i> Build the Ethereum  with Solidity</p>
                        <p className="p-3 col-lg-6 col-8 me-2" style={{ "backgroundColor": "var(--second-color)", "whiteSpace": "nowrap", "overflow": "hidden", "borderRadius": "15px" }}><i className="me-2 fa-brands fa-html5" style={{ "color": "rgb(0, 147, 176)" }}></i>HTML, CSS, and JS Basics</p>
                        <p className="p-3 col-lg-6 col-8 me-2" style={{ "backgroundColor": "var(--second-color)", "whiteSpace": "nowrap", "overflow": "hidden", "borderRadius": "15px" }}><i className="me-2 fa-solid fa-star-of-life" style={{ "color": "rgb(0, 147, 176)" }}></i>Build Space Invaders With Kaboom</p>
                    </div>
                    <div className="d-flex justify-content-between align-items-center mb-1 overflow-auto project-example-three">
                        <p className="p-3 col-lg-6 col-8 me-2" style={{ "backgroundColor": "var(--second-color)", "whiteSpace": "nowrap", "overflow": "hidden", "borderRadius": "15px" }}><i className="me-2 fa-brands fa-js" style={{ "color": "rgb(0, 147, 176)" }}></i> Building a CRM app with Node.js</p>
                        <p className="p-3 col-lg-6 col-8 me-2" style={{ "backgroundColor": "var(--second-color)", "whiteSpace": "nowrap", "overflow": "hidden", "borderRadius": "15px" }}><i className="me-2 fa-solid fa-file-pdf" style={{ "color": "rgb(0, 147, 176)" }}></i> Generate PDF reports from  data</p>
                        <p className="p-3 col-lg-6 col-8 me-2" style={{ "backgroundColor": "var(--second-color)", "whiteSpace": "nowrap", "overflow": "hidden", "borderRadius": "15px" }}><i className="me-2 fa-solid fa-robot" style={{ "color": "rgb(0, 147, 176)" }}></i> Build A Robot NFT</p>
                        <p className="p-3 col-lg-6 col-8 me-2" style={{ "backgroundColor": "var(--second-color)", "whiteSpace": "nowrap", "overflow": "hidden", "borderRadius": "15px" }}><i className="me-2 fa-brands fa-discord" style={{ "color": "rgb(0, 147, 176)" }}></i> Discord Role Bot</p>
                        <p className="p-3 col-lg-6 col-8 me-2" style={{ "backgroundColor": "var(--second-color)", "whiteSpace": "nowrap", "overflow": "hidden", "borderRadius": "15px" }}><i className="me-2 fa-solid fa-database" style={{ "color": "rgb(0, 147, 176)" }}></i> Keep your data in check</p>
                    </div>
                </div>

                <article className="mt-3 w-lg-50 re-order-text w-sm-100 wow flipInY">
                    <h2>Learn while you build</h2>
                    <p className="w-md-100 w-lg-75 m-auto mb-3">Take step-by-step tutorials that teach you how to build your dream project, whatever it may be.</p>
                    <a href="/" style={{ "color": "var(--blue)" }}>Learn more about Tutorial</a>
                </article>
            </div>

        </div>
    );
}

export default Build;