import { Fragment, useEffect } from "react"
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () =>
{
    const toggle_nav_bg = () =>
    {
        const nav = document.querySelector(".navbar");
        window.scrollY > 1500 ? nav.style.cssText += "background: var(--main-color)" :  nav.style.cssText += "background: transparent";
    }
    useEffect(() =>
    {
        toggle_nav_bg();
        window.addEventListener("scroll", () =>
        {
            toggle_nav_bg();
        });
    });
    return (
        <Fragment>
            <nav className="navbar w-100 position-relative text-center navbar-expand-lg bg-body-tertiary position-fixed" style={{ "zIndex": "10" , "transition": "var(--transition)" }}>
                <div className="container-fluid">
            
                    <Link className=" text-white navbar-brand fw-bold" to="#">
                        <svg width="110" height="40" viewBox="0 0 122 44" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M111.515 18.2193V16.7908C111.515 16.5455 111.313 16.3579 111.053 16.3579H106.046V13.5873C106.046 13.342 105.844 13.1544 105.584 13.1544H103.68C103.42 13.1544 103.218 13.3564 103.218 13.5873V16.3579H100.26C100 16.3579 99.798 16.5599 99.798 16.7908V18.2193C99.798 18.4646 100 18.6522 100.26 18.6522H103.218V22.8947C103.218 26.1414 104.747 27.6421 108.038 27.6421H110.721C110.981 27.6421 111.183 27.4401 111.183 27.2092V25.7807C111.183 25.5354 110.981 25.3478 110.721 25.3478H108.47C106.681 25.3478 106.046 24.6407 106.046 22.8802V18.6667H111.053C111.313 18.6522 111.515 18.4502 111.515 18.2193Z" fill="var(--foreground-default)"></path><path d="M96.4647 12H93.8672C93.6075 12 93.4055 12.202 93.4055 12.4329V14.2655C93.4055 14.5108 93.6075 14.6984 93.8672 14.6984H96.4647C96.7244 14.6984 96.9264 14.4964 96.9264 14.2655V12.4329C96.912 12.1876 96.71 12 96.4647 12Z" fill="var(--foreground-default)"></path><path d="M96.811 25.3478V16.7908C96.811 16.5455 96.6089 16.3579 96.3492 16.3579H90.5339C90.2742 16.3579 90.0721 16.5599 90.0721 16.7908V18.2193C90.0721 18.4646 90.2742 18.6522 90.5339 18.6522H93.9827V25.3478H90.5339C90.2742 25.3478 90.0721 25.5498 90.0721 25.7807V27.2092C90.0721 27.4545 90.2742 27.6421 90.5339 27.6421H100.346C100.606 27.6421 100.808 27.4401 100.808 27.2092V25.7807C100.808 25.5354 100.606 25.3478 100.346 25.3478H96.811Z" fill="var(--foreground-default)"></path><path d="M87.8932 25.3478H84.9495V12.4329C84.9495 12.1876 84.7475 12 84.4877 12H78.7157C78.456 12 78.254 12.202 78.254 12.4329V13.8615C78.254 14.1068 78.456 14.2944 78.7157 14.2944H82.1212V25.3478H78.2973C78.0375 25.3478 77.8355 25.5498 77.8355 25.7807V27.2092C77.8355 27.4545 78.0375 27.6421 78.2973 27.6421H87.8932C88.153 27.6421 88.355 27.4401 88.355 27.2092V25.7807C88.355 25.5354 88.153 25.3478 87.8932 25.3478Z" fill="var(--foreground-default)"></path><path d="M72.2222 16.1414C71.241 16.1414 70.5339 16.3579 69.9856 16.8773L69.3074 17.5267H68.6869L68.456 16.6898C68.3983 16.5022 68.2251 16.3579 68.0087 16.3579H66.71C66.4502 16.3579 66.2482 16.5599 66.2482 16.7908V31.5671C66.2482 31.8124 66.4502 32 66.71 32H68.6147C68.8745 32 69.0765 31.798 69.0765 31.5671V28.3636L68.8312 26.6465L69.4661 26.5022L70.1443 27.1515C70.6782 27.6421 71.3276 27.8874 72.2944 27.8874C75.0938 27.8874 76.7821 25.9538 76.7821 22.0144C76.7677 18.075 75.0938 16.1414 72.2222 16.1414ZM71.2843 25.5209C69.8557 25.5209 69.0621 24.785 69.0621 23.3853V20.6147C69.0621 19.215 69.8413 18.4791 71.2843 18.4791C73.0303 18.4791 73.824 19.5758 73.824 21.9856C73.8095 24.4242 73.0303 25.5209 71.2843 25.5209Z" fill="var(--foreground-default)"></path><path d="M58.1818 16.1414C54.5455 16.1414 52.5974 18.075 52.5974 22C52.5974 25.9394 54.531 27.873 58.1097 27.873C60.8802 27.873 62.6696 26.7186 63.1458 24.7417C63.2179 24.4675 62.987 24.2078 62.6984 24.2078H60.9668C60.7792 24.2078 60.6061 24.3232 60.5339 24.4964C60.2309 25.3478 59.3651 25.7518 58.1963 25.7518C56.3781 25.7518 55.5123 24.7561 55.3968 22.4329H63.2901C63.723 18.0895 61.9192 16.1414 58.1818 16.1414ZM55.4834 20.6724C55.7576 18.9697 56.609 18.176 58.1674 18.176C59.8269 18.176 60.6061 19.0563 60.6494 20.6724H55.4834Z" fill="var(--foreground-default)"></path><path d="M46.9697 16.8629L46.3203 17.5123H45.671L45.469 16.6898C45.4257 16.4877 45.2381 16.3579 45.0216 16.3579H40.8658C40.6061 16.3579 40.404 16.5599 40.404 16.7908V18.2193C40.404 18.4646 40.6061 18.6522 40.8658 18.6522H43.3189V25.3478H40.4618C40.202 25.3478 40 25.5498 40 25.7807V27.2092C40 27.4545 40.202 27.6421 40.4618 27.6421H49.4517C49.7114 27.6421 49.9134 27.4401 49.9134 27.2092V25.7807C49.9134 25.5354 49.7114 25.3478 49.4517 25.3478H46.1472V20.6147C46.1472 19.2872 46.9264 18.5945 48.456 18.5945H50.938C51.1977 18.5945 51.3997 18.3925 51.3997 18.1616V16.5887C51.3997 16.3434 51.1977 16.1558 50.938 16.1558H49.4661C48.3838 16.1414 47.5325 16.3434 46.9697 16.8629Z" fill="var(--foreground-default)"></path><path d="M10 11.5C10 10.6716 10.6716 10 11.5 10H18.5C19.3284 10 20 10.6716 20 11.5V18H11.5C10.6716 18 10 17.3284 10 16.5V11.5Z" fill="#F26207"></path><path d="M20 18H28.5C29.3284 18 30 18.6716 30 19.5V24.5C30 25.3284 29.3284 26 28.5 26H20V18Z" fill="#F26207"></path><path d="M10 27.5C10 26.6716 10.6716 26 11.5 26H20V32.5C20 33.3284 19.3284 34 18.5 34H11.5C10.6716 34 10 33.3284 10 32.5V27.5Z" fill="#F26207"></path></svg>
                        <span style={{ "marginLeft": "-70px" }}>replit</span></Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item dropdown">
                                <Link className=" text-white nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Features
                                </Link>
                                <ul className="dropdown-menu" style={{ "backgroundColor": "var(--second-color)" }}>
                                    <li><Link className=" text-white dropdown-item" to="#">IDE</Link></li>
                                    <li><Link className=" text-white dropdown-item" to="#">Multiplayer</Link></li>
                                    <li><Link className=" text-white dropdown-item" to="#">Community</Link></li>
                                    <li><Link className=" text-white dropdown-item" to="#">Hosting</Link></li>
                                    <li><Link className=" text-white dropdown-item" to="#">Bounties</Link></li>
                                    <li><hr className="dropdown-divider" /></li>
                                    <li><Link className=" text-white dropdown-item" to="#">Ghostwriter</Link></li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <Link className=" text-white nav-link active" aria-current="page" to="#">Blog</Link>
                            </li>
                            <li className="nav-item">
                                <Link className=" text-white nav-link" to="#">Pricing</Link>
                            </li>
                            <li className="nav-item">
                                <Link className=" text-white nav-link" to="#">Teams Pro</Link>
                            </li>
                            <li className="nav-item">
                                <Link className=" text-white nav-link" to="#">Teams For Education</Link>
                            </li>
                            <li className="nav-item">
                                <Link className=" text-white nav-link" to="#">Careers</Link>
                            </li>
                        </ul>
                        <div className="d-flex align-items-center justify-content-center">
                            <button className="p-1 pe-2 ps-2 me-3 text-white box-shadow btn" style={{ "backgroundColor": "var(--blue)", "fontSize": "14px", "borderRadius": "10px" }}>Sign Up</button>
                            <button className="p-1 pe-2 ps-2 text-white gray-shadow btn" style={{ "backgroundColor": "var(--second-color)", "fontSize": "14px", "borderRadius": "10px" }}>Log In</button>
                        </div>
                    </div>
                </div>
            </nav>
        </Fragment>
    );
}

export default Header;