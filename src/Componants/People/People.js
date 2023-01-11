import { Fragment, useEffect } from "react";
import { autoplay_scrolling } from "../gloable_Functions";

const People = () =>
{
    useEffect(() =>
    {
        const timeOut = setInterval(() =>
        {
            autoplay_scrolling("opinions-bar", "right");
        }, 60);
        return () => clearInterval(timeOut);
    }, []);
    return (
        <Fragment>
            <h6 className="mt-5 container text-white wow zoomIn">What people are saying</h6>
            <div className="opinions-bar wow fadeInRight text-white d-flex justify-content-between overflow-auto">
                <div className="box d-flex col-lg-3 col-md-4 col-12 flex-column justify-content-between  p-3 col-lg-3  user-select-none" style={{ "borderRadius": "10px", "backgroundColor": "var(--second-color)" }}>
                    <p>"What Replit Is Doing in the DevEx space is a truly revolution and it will chage how we develop apps."</p>
                    <p>@admar</p>
                </div>
                <div className="box p-3 d-flex col-lg-4 col-md-6 col-12 flex-column justify-content-between col-lg-3 user-select-none" style={{ "borderRadius": "10px", "backgroundColor": "var(--second-color)" }}>
                    <p>"Lately, every time i open Replit, somthing new is added.
                        i can really appreciate Replit when i think of the tremendous development costs i would have incurred if i had to make somthing like this myself"</p>
                    <p>@happylogica</p>
                </div>
                <div className="box d-flex col-lg-3 col-md-4 col-12 flex-column justify-content-between  p-3 col-lg-3 user-select-none" style={{ "borderRadius": "10px", "backgroundColor": "var(--second-color)" }}>
                    <p>"The team at Replit are on fire as always-constantly seeing initatives like this coming out that make me so excited to get coding and bring new ideas into my workshops and lessons"</p>
                    <p>@tanyahowden</p>
                </div>
                <div className="box d-flex col-lg-3 col-md-4 col-12 flex-column justify-content-between  p-3 col-lg-3 user-select-none" style={{ "borderRadius": "10px", "backgroundColor": "var(--second-color)" }}>
                    <p>Tightly integrated code generation, editing and output-well executed. Sets a high bar for computing education.</p>
                    <p>@CrunchingData</p>
                </div>
                <div className="box d-flex col-lg-3 col-md-4 col-12 flex-column justify-content-between  p-3 col-lg-3 user-select-none" style={{ "borderRadius": "10px", "backgroundColor": "var(--second-color)" }}>
                    <p>Replit has fullfilled my dreams of making tinkering with my code from my phone both vible and fun.</p>
                    <p>@phlopus</p>
                </div>
                <div className="box d-flex col-lg-3 col-md-4 col-12 flex-column justify-content-between  p-3 col-lg-3 user-select-none" style={{ "borderRadius": "10px", "backgroundColor": "var(--second-color)" }}>
                    <p>"What Replit Is Doing in the DevEx space is a truly revolution and it will chage how we develop apps."</p>
                    <p>@admar</p>
                </div>
                <div className="box d-flex col-lg-3 col-md-4 col-12 flex-column justify-content-between  p-3 col-lg-3 user-select-none" style={{ "borderRadius": "10px", "backgroundColor": "var(--second-color)" }}>
                    <p>"The team at Replit are on fire as always-constantly seeing initatives like this coming out that make me so excited to get coding and bring new ideas into my workshops and lessons"</p>
                    <p>@tanyahowden</p>
                </div>
                <div className="box d-flex col-lg-3 col-md-4 col-12 flex-column justify-content-between  p-3 col-lg-3 user-select-none" style={{ "borderRadius": "10px", "backgroundColor": "var(--second-color)" }}>
                    <p>"The team at Replit are on fire as always-constantly seeing initatives like this coming out that make me so excited to get coding and bring new ideas into my workshops and lessons"</p>
                    <p>@tanyahowden</p>
                </div>
            </div>
        </Fragment>
    );
}
export default People;