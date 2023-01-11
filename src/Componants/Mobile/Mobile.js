const Mobile = () =>
{
    return (
            <div style={{ "marginTop": "250px" }} >
                <div className="container d-flex justify-content-around align-items-center flex-wrap">
                    <div className="text text-white text-center col-lg-6 col-md-8 col-12 mb-5 wow fadeInLeft">
                        <article>
                            <h1>Don't try this at home</h1>
                            <h4>With the Replit mobile app, you can build and run your projects from anywhere in the world.</h4>
                        </article>
                        <div className="d-flex justify-content-center align-items-center mt-3">
                            <div className="me-4 p-2 d-flex justify-content-center align-items-center bg-black border" style={{ "borderRadius": "8px" }}>
                                <i className="fa-brands fs-3 fa-apple me-3"></i>
                                <div className="me-2">
                                    <p className="m-0" style={{ "fontSize": "11px" }}>Download on the</p>
                                    <h6 className="m-0">App Store</h6>
                                </div>
                            </div>
                            <div className="me-4 p-2 d-flex justify-content-center align-items-center bg-black border" style={{ "borderRadius": "8px" }}>
                                <svg className="kOqhQd" aria-hidden="true" width="25" height="25" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path fill="none" d="M0,0h40v40H0V0z"></path><g><path d="M19.7,19.2L4.3,35.3c0,0,0,0,0,0c0.5,1.7,2.1,3,4,3c0.8,0,1.5-0.2,2.1-0.6l0,0l17.4-9.9L19.7,19.2z" fill="#EA4335"></path><path d="M35.3,16.4L35.3,16.4l-7.5-4.3l-8.4,7.4l8.5,8.3l7.5-4.2c1.3-0.7,2.2-2.1,2.2-3.6C37.5,18.5,36.6,17.1,35.3,16.4z" fill="#FBBC04"></path><path d="M4.3,4.7C4.2,5,4.2,5.4,4.2,5.8v28.5c0,0.4,0,0.7,0.1,1.1l16-15.7L4.3,4.7z" fill="#4285F4"></path><path d="M19.8,20l8-7.9L10.5,2.3C9.9,1.9,9.1,1.7,8.3,1.7c-1.9,0-3.6,1.3-4,3c0,0,0,0,0,0L19.8,20z" fill="#34A853"></path></g></svg>
                                <div className="me-2 ms-2">
                                    <p className="m-0" style={{ "fontSize": "11px" }}>Get IT On</p>
                                    <h6 className="m-0">Google Play</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="wow fadeInRight" style={{ "boxShadow": "0 0 104px #ffa5003d " , "background": "trasnperant" }} >
                        <img src="https://replit.com/public/images/marketing-features/mobile.png" style={{ "backgroundColor": "#212022" , "maxWidth": "100%" }} width={353} alt="mobile code img" />
                    </div>
                </div>
            </div>
    );
}
export default Mobile;