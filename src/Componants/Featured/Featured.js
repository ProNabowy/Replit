import { useEffect } from "react";
import { autoplay_scrolling } from "../gloable_Functions";
import "./carousel.css";
const Featured = () =>
{
    useEffect(() =>
    {
        const timeOut = setInterval(() => {
            autoplay_scrolling("carousel-bar", "left");
        }, 60);
        return () => clearInterval(timeOut);
    }, []);


    return (
        <div className="p-3 text-white wow fadeInLeft " style={{ "marginTop": "300px" }}>
            <div>
                <div className="wow fadeInRight">
                    <h2 className="text-center">Join a community of 15 million software creators building on Replit</h2>
                    <h5 className="text-center">Share to, learn from, and remix the work of top builders around the world</h5>
                </div>
                
                <h6 className="mt-5 container">Featured work</h6>
                <div className="carousel-bar d-flex justify-content-between overflow-auto">
                    <div className="box p-3 col-lg-4 col-md-6 col-12" style={{ "borderRadius": "10px", "backgroundColor": "var(--second-color)" }}>
                        <a href="https://replit.com/@IroncladDev/Replyte-Chat-App?v=1" style={{ "color": "var(--blue)" }} target={"_blank"} rel="noreferrer">
                            <h3 className="logo mb-3">Replyte</h3>
                            <img src="https://replit.com/public/images/featured-repls/ironcladdev/cover.png" className="w-100 mb-3" style={{ "height": "250px", "borderRadius": "10px" }} alt="eatured-repls/phil-mac/cover.png" />
                            <div className="d-flex justify-content-between align-items-center">
                                <div className="d-flex  align-items-center">
                                    <img src="https://replit.com/cdn-cgi/image/width=1920,quality=80,format=auto/https://storage.googleapis.com/replit/images/1658789800070_0a63aaa0e9586babd8c99f8a43188248.png" className="me-2" style={{ "width": "40px" }} alt="Replyte" />
                                    <p>IroncladDev</p>
                                </div>
                                <h6 className="p-2 pe-3 ps-3 text-white" style={{ "backgroundColor": "var(--blue)", "borderRadius": "10px" }}>Chat App</h6>
                            </div>
                        </a>
                    </div>
                    <div className="box p-3 col-lg-4 col-md-6 col-12" style={{ "borderRadius": "10px", "backgroundColor": "var(--second-color)" }}>
                        <a href="https://replit.com/@torcado/SSSPICY?v=1" style={{ "color": "var(--blue)" }} target={"_blank"} rel="noreferrer">
                            <h3 className="logo mb-3">SSSPICY!</h3>
                            <img src="https://replit.com/public/images/featured-repls/torcado/cover.png" className="w-100 mb-3" style={{ "height": "250px", "borderRadius": "10px" }} alt="eatured-repls/phil-mac/cover.png" />
                            <div className="d-flex justify-content-between align-items-center">
                                <div className="d-flex align-items-center">
                                    <img src="https://www.gravatar.com/avatar/f339d7d30fde29d99288ac3090d38e07?d=https://repl.it/public/images/evalbot/evalbot_40.png&s=256" className="me-2" style={{ "width": "40px" }} alt="Replyte" />
                                    <p>torcado</p>
                                </div>
                                <h6 className="p-2 pe-3 ps-3 text-white" style={{ "backgroundColor": "var(--blue)", "borderRadius": "10px" }}>Award-Wininng Game</h6>
                            </div>
                        </a>
                    </div>
                    <div className="box p-3 col-lg-4 col-md-6 col-12" style={{ "borderRadius": "10px", "backgroundColor": "var(--second-color)" }}>
                        <a href="https://web.nabowy.online/" target={"_blank"} style={{ "color": "var(--blue)" }} rel="noreferrer">
                            <h3 className="logo mb-3">Portfolio</h3>
                            <img src="https://github.com/ProNabowy/e-commerce-img/blob/main/Portfolio.webp?raw=true" className="w-100 mb-3" style={{ "height": "250px", "borderRadius": "10px" }} alt="eatured-repls/phil-mac/cover.png" />
                            <div className="d-flex justify-content-between align-items-center">
                                <div className="d-flex  align-items-center">
                                    <img src="https://raw.githubusercontent.com/ProNabowy/Portfolio_img/main/nabowy.PNG" className="me-2" style={{ "width": "40px" }} alt="Replyte" />
                                    <p>ProNabowy</p>
                                </div>
                                <h6 className="p-2 pe-3 ps-3 text-white" style={{ "backgroundColor": "var(--blue)", "borderRadius": "10px" }}>My Portfolio</h6>
                            </div></a>
                    </div>
                    <div className="box p-3 col-lg-4 col-md-6 col-12" style={{ "borderRadius": "10px", "backgroundColor": "var(--second-color)" }}>
                        <a href="https://replit.com/@stripe/node-stripe-checkout?v=1" style={{ "color": "var(--blue)" }} target={"_blank"} rel="noreferrer">
                                    
                            <h3 className="logo mb-3">node-stripe-checkout</h3>
                            <img src="https://replit.com/public/images/featured-repls/stripe/cover.png" className="w-100 mb-3" style={{ "height": "250px", "borderRadius": "10px" }} alt="eatured-repls/phil-mac/cover.png" />
                            <div className="d-flex justify-content-between align-items-center">
                                <div className="d-flex  align-items-center">
                                    <img src="https://replit.com/cdn-cgi/image/width=32,quality=80,format=auto/https://storage.googleapis.com/replit/images/1658523173924_7be592e1f785cef0edd0d19bcd867150.png" className="me-2" style={{ "width": "40px" }} alt="Replyte" />
                                    <p>stripe</p>
                                </div>
                                <h6 className="p-2 pe-3 ps-3 text-white" style={{ "backgroundColor": "var(--blue)", "borderRadius": "10px" }}>stripe-checkout</h6>
                            </div>
                        </a>
                    </div>
                    <div className="box p-3 col-lg-4 col-md-6 col-12" style={{ "borderRadius": "10px", "backgroundColor": "var(--second-color)" }}>
                        <a href="https://dashboard.nabowy.online/" target={"_blank"} style={{ "color": "var(--blue)" }} rel="noreferrer">
                            <h3 className="logo mb-3">Dash-board</h3>
                            <img src="https://raw.githubusercontent.com/ProNabowy/Portfolio_img/main/dashboard.jpg" className="w-100 mb-3" style={{ "height": "250px", "borderRadius": "10px" }} alt="eatured-repls/phil-mac/cover.png" />
                            <div className="d-flex justify-content-between align-items-center">
                                <div className="d-flex  align-items-center">
                                    <img src="https://raw.githubusercontent.com/ProNabowy/Portfolio_img/main/nabowy.PNG" className="me-2" style={{ "width": "40px" }} alt="Replyte" />
                                    <p>ProNabowy</p>
                                </div>
                                <h6 className="p-2 pe-3 ps-3 text-white" style={{ "backgroundColor": "var(--blue)", "borderRadius": "10px" }}>Dashboard App</h6>
                            </div>
                        </a>
                    </div>
                    <div className="box p-3 col-lg-4 col-md-6 col-12" style={{ "borderRadius": "10px", "backgroundColor": "var(--second-color)" }}>
                        <a href="https://e-commerce.nabowy.online/" target={"_blank"} style={{ "color": "var(--blue)" }} rel="noreferrer">
                            <h3 className="logo mb-3">E-commerce website</h3>
                            <img src="https://raw.githubusercontent.com/ProNabowy/Portfolio_img/main/e-commerce.webp" className="w-100 mb-3" style={{ "height": "250px", "borderRadius": "10px" }} alt="eatured-repls/phil-mac/cover.png" />
                            <div className="d-flex justify-content-between align-items-center">
                                <div className="d-flex  align-items-center">
                                    <img src="https://raw.githubusercontent.com/ProNabowy/Portfolio_img/main/nabowy.PNG" className="me-2" style={{ "width": "40px" }} alt="Replyte" />
                                    <p>ProNabowy</p>
                                </div>
                                <h6 className="p-2 pe-3 ps-3 text-white" style={{ "backgroundColor": "var(--blue)", "borderRadius": "10px" }}>E-commerce website</h6>
                            </div>
                        </a>
                    </div>
                    <div className="box p-3 col-lg-4 col-md-6 col-12" style={{ "borderRadius": "10px", "backgroundColor": "var(--second-color)" }}>
                        <a href="https://music.nabowy.online/" target={"_blank"} style={{ "color": "var(--blue)" }} rel="noreferrer">
                            <h3 className="logo mb-3">Music App</h3>
                            <img src="https://raw.githubusercontent.com/ProNabowy/Portfolio_img/main/music.webp" className="w-100 mb-3" style={{ "height": "250px", "borderRadius": "10px" }} alt="eatured-repls/phil-mac/cover.png" />
                            <div className="d-flex justify-content-between align-items-center">
                                <div className="d-flex  align-items-center">
                                    <img src="https://raw.githubusercontent.com/ProNabowy/Portfolio_img/main/nabowy.PNG" className="me-2" style={{ "width": "40px" }} alt="Replyte" />
                                    <p>ProNabowy</p>
                                </div>
                                <h6 className="p-2 pe-3 ps-3 text-white" style={{ "backgroundColor": "var(--blue)", "borderRadius": "10px" }}>Music App</h6>
                            </div>
                        </a>
                    </div>
                    <div className="box p-3 col-lg-4 col-md-6 col-12" style={{ "borderRadius": "10px", "backgroundColor": "var(--second-color)" }}>
                        <a href="https://binary.nabowy.online/" target={"_blank"} style={{ "color": "var(--blue)" }} rel="noreferrer">
                                    
                            <h3 className="logo mb-3">Binary Converter</h3>
                            <img src="https://raw.githubusercontent.com/ProNabowy/Portfolio_img/main/binary.jpg" className="w-100 mb-3" style={{ "height": "250px", "borderRadius": "10px" }} alt="eatured-repls/phil-mac/cover.png" />
                            <div className="d-flex justify-content-between align-items-center">
                                <div className="d-flex  align-items-center">
                                    <img src="https://replit.com/cdn-cgi/image/width=1920,quality=80,format=auto/https://storage.googleapis.com/replit/images/1658789800070_0a63aaa0e9586babd8c99f8a43188248.png" className="me-2" style={{ "width": "40px" }} alt="Replyte" />
                                    <p>ProNabowy</p>
                                </div>
                                <h6 className="p-2 pe-3 ps-3 text-white" style={{ "backgroundColor": "var(--blue)", "borderRadius": "10px" }}>Binary App</h6>
                            </div></a>
                    </div>
                    <div className="box p-3 col-lg-4 col-md-6 col-12" style={{ "borderRadius": "10px", "backgroundColor": "var(--second-color)" }}>
                        <a href="https://pronabowy.github.io/E-Sports/" target={"_blank"} style={{ "color": "var(--blue)" }} rel="noreferrer">
                            <h3 className="logo mb-3">E-Sport Website</h3>
                            <img src="https://raw.githubusercontent.com/ProNabowy/Portfolio_img/main/e-sports.jpg" className="w-100 mb-3" style={{ "height": "250px", "borderRadius": "10px" }} alt="eatured-repls/phil-mac/cover.png" />
                            <div className="d-flex justify-content-between align-items-center">
                                <div className="d-flex  align-items-center">
                                    <img src="https://raw.githubusercontent.com/ProNabowy/Portfolio_img/main/nabowy.PNG" className="me-2" style={{ "width": "40px" }} alt="Replyte" />
                                    <p>ProNabowy</p>
                                </div>
                                <h6 className="p-2 pe-3 ps-3 text-white" style={{ "backgroundColor": "var(--blue)", "borderRadius": "10px" }}>E-Sport Website</h6>
                            </div>
                        </a>
                    </div>
                    <div className="box p-3 col-lg-4 col-md-6 col-12" style={{ "borderRadius": "10px", "backgroundColor": "var(--second-color)" }}>
                        <a href="https://react-app-d38da.web.app/" target={"_blank"} style={{ "color": "var(--blue)" }} rel="noreferrer">
                            <h3 className="logo mb-3">React-App</h3>
                            <img src="https://raw.githubusercontent.com/ProNabowy/Portfolio_img/main/react-app.jpg" className="w-100 mb-3" style={{ "height": "250px", "borderRadius": "10px" }} alt="eatured-repls/phil-mac/cover.png" />
                            <div className="d-flex justify-content-between align-items-center">
                                <div className="d-flex  align-items-center">
                                    <img src="https://raw.githubusercontent.com/ProNabowy/Portfolio_img/main/nabowy.PNG" className="me-2" style={{ "width": "40px" }} alt="Replyte" />
                                    <p>ProNabowy</p>
                                </div>
                                <h6 className="p-2 pe-3 ps-3 text-white" style={{ "backgroundColor": "var(--blue)", "borderRadius": "10px" }}>React-App</h6>
                            </div>
                        </a>
                    </div>
                    <div className="box p-3 col-lg-4 col-md-6 col-12" style={{ "borderRadius": "10px", "backgroundColor": "var(--second-color)" }}>
                        <a href="https://pronabowy.github.io/Template_Four/" target={"_blank"} style={{ "color": "var(--blue)" }} rel="noreferrer">
                            <h3 className="logo mb-3">Page-Speed</h3>
                            <img src="https://raw.githubusercontent.com/ProNabowy/Portfolio_img/main/test-repeat.jpg" className="w-100 mb-3" style={{ "height": "250px", "borderRadius": "10px" }} alt="eatured-repls/phil-mac/cover.png" />
                            <div className="d-flex justify-content-between align-items-center">
                                <div className="d-flex  align-items-center">
                                    <img src="https://raw.githubusercontent.com/ProNabowy/Portfolio_img/main/nabowy.PNG" className="me-2" style={{ "width": "40px" }} alt="Replyte" />
                                    <p>ProNabowy</p>
                                </div>
                                <h6 className="p-2 pe-3 ps-3 text-white" style={{ "backgroundColor": "var(--blue)", "borderRadius": "10px" }}>Page-Speed</h6>
                            </div>
                        </a>
                    </div>
                    <div className="box p-3 col-lg-4 col-md-6 col-12" style={{ "borderRadius": "10px", "backgroundColor": "var(--second-color)" }}>
                        <a href="https://pronabowy.github.io/Quiz-Website/" target={"_blank"} style={{ "color": "var(--blue)" }} rel="noreferrer">
                                    
                            <h3 className="logo mb-3">Quiz App</h3>
                            <img src="https://raw.githubusercontent.com/ProNabowy/Portfolio_img/main/Quiz.jpg" className="w-100 mb-3" style={{ "height": "250px", "borderRadius": "10px" }} alt="eatured-repls/phil-mac/cover.png" />
                            <div className="d-flex justify-content-between align-items-center">
                                <div className="d-flex  align-items-center">
                                    <img src="https://raw.githubusercontent.com/ProNabowy/Portfolio_img/main/nabowy.PNG" className="me-2" style={{ "width": "40px" }} alt="Replyte" />
                                    <p>ProNabowy</p>
                                </div>
                                <h6 className="p-2 pe-3 ps-3 text-white" style={{ "backgroundColor": "var(--blue)", "borderRadius": "10px" }}>Chat App</h6>
                            </div></a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Featured;