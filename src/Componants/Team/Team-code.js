const TeamCode = () =>
{
    return (
        <div className="fixed-center mw-100 fixed user-select-none text-start team-code p-3" style={{ "backgroundColor": "var(--second-color)", "borderRadius": "15px" }}>
            <pre>
                <p><span style={{ "color": "var(--code-color)" }}>const</span> cyrpto = <span style={{ "color": "#ebda86" }}>require</span>('cyrpto');</p>
                <p><span style={{ "color": "var(--code-color)" }}>const</span> alice = <span style={{ "color": "#ebda86" }}>cyrpto.getDiffieHellman</span>('modp5');</p>
                <p><span style={{ "color": "var(--code-color)" }}>const</span> bob = <span style={{ "color": "#ebda86" }}>cyrpto.getDiffieHellman</span>('modp5');</p>
                <br />
                <p>alice.<span style={{ "color": "#ebda86" }}>generateKeys();</span></p>
                <p>bob.<span style={{ "color": "#ebda86" }}>generateKeys();</span></p>
                <br />
                <p><span style={{ "color": "var(--code-color)" }}>const</span> alice_secret = alice.<span style={{ "color": "#ebda86" }}>computeSecret</span>(
                    <br />
                    bob.<span style={{ "color": "#ebda86" }}>getPublicKey</span>();, <span style={{ "color": "var(--code-color)" }}>null</span>, <span style={{ "color": "#eeb275" }}>'hex'</span>
                    );</p>
                <p><span style={{ "color": "var(--code-color)" }}>const</span> bob_secret = bob.<span style={{ "color": "#ebda86" }}>computeSecret</span>(
                    <br />
                    alice.<span style={{ "color": "#ebda86" }}>getPublicKey</span>();, <span style={{ "color": "var(--code-color)" }}>null</span>, <span style={{ "color": "#eeb275" }}>'hex'</span>
                    );</p>
                <br />
                <p>console.<span style={{ "color": "#ebda86" }}>log</span>(alice_secret === bob_secret);</p>
            </pre>
        </div>
    );
}

export default TeamCode;