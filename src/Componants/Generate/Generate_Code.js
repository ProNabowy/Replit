import "./genrerate.css";
const Generate = () =>
{

    return (
        <div className="generateor-wrapper mw-100 fixed-center fixed text-start p-3" style={{ "borderRadius": "20px", "userSelect": "none", "backgroundColor": "var(--second-color)" }}>
            <h6 className="text-start mb-2">Generate Code</h6>
            <div className="text-white d-flex justify-content-between align-items-center">
                <p className="p-1 ps-3" style={{ "background": "#2b3245", "borderRadius": "10px", "border": "1px solid #dddddd42", "width": "70%" }}>Start A flask Server</p>
                <p className="p-1 pe-3 ps-3" style={{ "backgroundColor": "var(--blue)", "borderRadius": "5px" }}>&lt;&gt; Generate</p>
            </div>
            <pre className="p-3 text-start " style={{ "borderRadius": "inherit", "backgroundColor": "var(--main-color)", "fontWeight": "500" }}>
                <p><span style={{ "color": "var(--code-color)" }}>from</span> flask <span style={{ "color": "var(--code-color)" }}>import </span>Flask</p>
                <p>app = <span style={{ "color": "#f1dc5a" }}>Flask</span>(__name__)</p>
                <p><span style={{ "color": "var(--code-color)" }}>@</span>app.route(<span style={{ "color": "#ffbd7a" }}> ' / '</span> )</p>
                <p><span style={{ "color": "var(--code-color)" }}>def index</span>(  ):</p>
                <p><span style={{ "color": "var(--code-color)" }}>    return </span><span style={{ "color": "#ffbd7a" }}>'Hello,  World!'</span></p>
                <p>if __name__ == <span style={{ "color": "#ffbd7a" }}>'__main__'</span>:</p>
                <p>app.<span style={{ "color": "#f1dc5a" }}>run</span>()</p>

                <div className="d-flex justify-content-between align-items-center">
                    <p className="fs-6"><i className="fa-brands fa-python" style={{ "color": "#0093b0" }}></i> Python</p>
                    <div className="d-flex justify-content-between align-items-center">
                        <p className="me-3 p-2" style={{ "backgroundColor": "var(--second-color)", "borderRadius": "10px" }}><i className="fa-solid fa-copy"></i> Copy to cliboard</p>
                        <p className="me-3 p-2" style={{ "backgroundColor": "var(--second-color)", "borderRadius": "10px" }}><i className="fa-solid fa-arrow-up"></i> Insert in editor</p>
                    </div>
                </div>
            </pre>
            <div className="p-1 pe-0 ps-0 car-class" style={{ "backgroundColor": "#1c2333", "width": "fit-content", "borderRadius": "10px", "border": "1px solid #1e2535" }}>
                <pre>
                    <p><span style={{ "color": "var(--code-color)" }}>  class</span> <span style={{ "color": "#f1dc5a" }}>Car</span>:</p>
                    <div style={{ "backgroundColor": "#2b3245" }}>
                        <p>   <span style={{ "color": "var(--code-color)" }}>def</span> <span style={{ "color": "#f1dc5a" }}>_init_</span>(self, year, make, model):      </p>
                        <p className="text-white-50" style={{ "marginBottom": "-3px" }}>     self.year = year</p>
                        <p className="text-white-50" style={{ "marginBottom": "-3px" }}>     self.make = make</p>
                        <p className="text-white-50">     self.model = model</p>
                    </div></pre>
            </div>
            <div className="state-on p-3" style={{ "borderRadius": "15px", "backgroundColor": "#1c2232", "border": "1px solid #dddddd42", "width": "fit-content" }}>
                <h5 style={{ "color": "#2d8f51" }} className={"m-0 ms-4 position-relative"} >Always On</h5>
            </div>
            <div className="p-3 pt-2 pb-2 memory" style={{ "backgroundColor": "var(--second-color)", "borderRadius": "10px", "width": "fit-content", "border": "1px solid #dddddd42" }}>
                <div className="position-relative mb-2">
                    <h6 className="position-relative">CPU</h6>
                    <div>
                        <span></span>
                    </div>
                </div>
                <div className="position-relative mb-2">
                    <h6 className="position-relative">RAM</h6>
                    <div>
                        <span></span>
                    </div>
                </div>
                <div className="position-relative mb-2">
                    <h6 className="position-relative">Storage</h6>
                    <div>
                        <span></span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Generate;