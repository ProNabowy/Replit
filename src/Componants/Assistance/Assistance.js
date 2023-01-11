import { useEffect } from "react";
import Generate from "../Generate/Generate_Code";
import { generate_toggle_position } from "../gloable_Functions";

const Assistance = () =>
{
    useEffect(() =>
    {
        // this function from Globle Function file
        generate_toggle_position();
    }, []);

    return (
        <div className="min-height">
            <div className="container position-relative team d-flex justify-content-lg-between justify-content-center flex-wrap text-white text-center">
                <div className="w-lg-50 w-sm-100 position-relative wow fadeInRight code-generateor mw-100">
                    <Generate />
                </div>
                <article className="mt-3 re-order-text w-lg-50 w-sm-100 wow fadeInRight">
                    <h2>Create together, wherever</h2>
                    <p className="w-md-100 w-lg-75 m-auto mb-3">Accelerate your coding with AI assistance. Boost your speed, storage, and memory. Keep your app running forever. Take your project to the next level.</p>
                    <a href="/" style={{ "color": "var(--blue)" }}>Learn more about Power-Ups</a>
                </article>
            </div>

        </div>
    );
}

export default Assistance;