import { useEffect } from "react";
import { setup_toggle_position } from "../gloable_Functions.js";
const Setup = () =>
{

    useEffect(() =>
    {
        setup_toggle_position();
    }, []);
    
    return (
        <div className="min-height">
            <div className="container setup-container d-flex justify-content-lg-between justify-content-center  text-white text-center flex-wrap">
                <div className="w-lg-50 w-sm-100 position-relative wow fadeInLeft">
                    <img src="https://github.com/ProNabowy/e-commerce-img/blob/main/setup.webp?raw=true" className="d-block mw-100 fixed fixed-center" style={{ "zIndex": "50", "transition": "var(transition)" }} alt="zero setup img" />
                </div>
                <article className="mt-3 re-order-text w-lg-50 w-sm-100 wow zoomIn  col-lg-6 col-12 mb-5">
                    <h2>Build anything with zero setup</h2>
                    <p className="w-md-100 w-lg-75 m-auto mb-3">Instantly start and rapidly develop projects in any programming language or framework.</p>
                    <a href="/" style={{ "color": "var(--blue)" }}>Learn more about workspace</a>
                </article>
            </div>
        </div>
    );
}
export default Setup;