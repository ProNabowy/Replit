import { useEffect } from "react";
import { video_toggle_position } from "../gloable_Functions";

const Host = () =>
{

    useEffect(() =>
    {
        video_toggle_position();
    } , []);

    return (
        <div className="min-height" id="hosting" >
            <div className="container d-flex justify-content-lg-between justify-content-center  text-white text-center flex-wrap">
                <div className="w-lg-50 w-sm-100 position-relative wow fadeInRight">
                    <video src="https://github.com/ProNabowy/e-commerce-img/blob/main/earth.mp4?raw=true" className="fixed-center mw-100 fixed" style={{ "backgroundColor": "var(--main-color)" , "width": "500px" }} autoPlay muted loop></video>
                </div>
                <article className="mt-3 re-order-text w-lg-50 w-sm-100 wow flipInX">
                    <h2>Instantly host everything</h2>
                    <p className="w-md-100 w-lg-75 m-auto mb-3">All your projects are instantly live. With zero setup deployment and custom domains, sharing your work with the world is easy.</p>
                    <a href="/" style={{ "color": "var(--blue)" }}>Learn more about Hosting</a>
                </article>
            </div>
        </div>
    );
}

export default Host;