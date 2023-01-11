import { useEffect } from "react";
import { team_toggle_position, toggle_btns } from "../gloable_Functions";
import TeamCode from "./Team-code";

const Team = () =>
{

    useEffect(() =>
    {
        team_toggle_position();
    }, []);
    
    const text_descrption = (btn) =>
    {
        const p = document.querySelector(".text-descrption");
        btn === "Multiplayer" ? p.textContent = "Live collaboration is built-in. Create together with others from anywhere in the world, on any device." : p.textContent = "Supercharge your collaboration with Teams. Work efficiently, safely, and deliver the best possible outcomes.";
    }
    
    return (
        <div className="min-height">
            <div className="container wow fadeInLeft team d-flex justify-content-lg-between justify-content-center flex-wrap text-white text-center">
                <div className="w-lg-50 w-sm-100 position-relative">
                    <TeamCode />
                </div>
                <article className="mt-3 re-order-text w-lg-50 w-sm-100 wow ">
                    <h2>Create together, wherever</h2>
                    <div className="mb-3 mt-3">
                        <button className="btn text-white p-2 myltiplayer-btn me-2" onClick={(e) => toggle_btns(e.target, document.querySelector(".team-btn")) + text_descrption("Multiplayer")} style={{ "borderRadius": "10px" }}>Multiplayer</button>
                        <button className="btn text-white p-1 pe-3 ps-3 team-btn toggle-btns" onClick={(e) => toggle_btns(e.target, document.querySelector(".myltiplayer-btn")) + text_descrption("teams")} style={{ "borderRadius": "10px" }}>Teams</button>
                    </div>
                    <p className="w-md-100 w-lg-75 m-auto text-descrption mb-3">Supercharge your collaboration with Teams. Work efficiently, safely, and deliver the best possible outcomes.</p>
                    <a href="/" style={{ "color": "var(--blue)" }}>Learn more about Teams</a>
                </article>
            </div>
        </div>
    );
}

export default Team;