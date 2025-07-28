import React from 'react'

const Svg = () => {
    return (
        <div>
            <svg
                className="error"
                width="1600"
                height="118"
                color="#2f68ae"
                fill="#2f68ae"
                viewBox="0 0 516 118"
                fontFamily="Roboto"
                fontSize="50"
                wmlns="http://www.w3.org/2000/svg"
            >
                <text x="70" y="100">
                    E
                    <animate attributeName="x" id="xe1" from="70" to="95" begin="0s;x4b1.end" dur="200ms" />
                    <animate attributeName="y" id="ye1" from="100" to="85" begin="0s;y4b1.end" dur="200ms" />
                    <animate attributeName="x" id="xe2" from="95" to="70" begin="xe1.end" dur="200ms" />
                    <animate attributeName="y" id="ye2" from="85" to="100" begin="ye1.end" dur="200ms" />
                </text>
                <text x="120" y="100">
                    R
                    <animate attributeName="x" id="xr1" from="120" to="145" begin="xe1.end" dur="200ms" />
                    <animate attributeName="y" id="yr1" from="100" to="85" begin="ye1.end" dur="200ms" />
                    <animate attributeName="x" id="xr2" from="145" to="120" begin="xr1.end" dur="200ms" />
                    <animate attributeName="y" id="yr1" from="85" to="100" begin="yr1.end" dur="200ms" />
                </text>
                <text x="170" y="100">
                    R
                    <animate attributeName="x" id="xrb1" from="170" to="195" begin="xr1.end" dur="200ms" />
                    <animate attributeName="y" id="yrb1" from="100" to="85" begin="yr1.end" dur="200ms" />
                    <animate attributeName="x" id="xrb2" from="195" to="170" begin="xrb1.end" dur="200ms" />
                    <animate attributeName="y" id="yrb2" from="85" to="100" begin="yrb1.end" dur="200ms" />
                </text>
                <text x="220" y="100">
                    O
                    <animate attributeName="x" id="xo1" from="220" to="245" begin="xrb1.end" dur="200ms" />
                    <animate attributeName="y" id="yo1" from="100" to="85" begin="yrb1.end" dur="200ms" />
                    <animate attributeName="x" id="xo2" from="245" to="220" begin="xo1.end" dur="200ms" />
                    <animate attributeName="y" id="yo2" from="85" to="100" begin="yo1.end" dur="200ms" />
                </text>
                <text x="270" y="100">
                    R
                    <animate attributeName="x" id="xrbb1" from="270" to="295" begin="xo1.end" dur="270ms" />
                    <animate attributeName="y" id="yrbb1" from="100" to="85" begin="yo1.end" dur="200ms" />
                    <animate attributeName="x" id="xrbb2" from="295" to="270" begin="xrbb1.end" dur="200ms" />
                    <animate attributeName="y" id="yrbb2" from="85" to="100" begin="yrbb1.end" dur="200ms" />
                </text>

                <text x="330" y="100">
                    4
                    <animate attributeName="x" id="x41" from="330" to="355" begin="xrbb1.end" dur="200ms" />
                    <animate attributeName="y" id="y41" from="100" to="85" begin="yrbb1.end" dur="200ms" />
                    <animate attributeName="x" id="x41" from="355" to="330" begin="x41.end" dur="200ms" />
                    <animate attributeName="y" id="y41" from="85" to="100" begin="y41.end" dur="200ms" />
                </text>
                <text x="380" y="100">
                    0
                    <animate attributeName="x" id="x01" from="380" to="405" begin="x41.end" dur="200ms" />
                    <animate attributeName="y" id="y01" from="100" to="85" begin="y41.end" dur="200ms" />
                    <animate attributeName="x" id="x01" from="405" to="380" begin="x01.end" dur="200ms" />
                    <animate attributeName="y" id="y01" from="85" to="100" begin="y01.end" dur="200ms" />
                </text>
                <text x="430" y="100">
                    4
                    <animate attributeName="x" id="x4b1" from="430" to="455" begin="x01.end" dur="200ms" />
                    <animate attributeName="y" id="y4b1" from="100" to="85" begin="y01.end" dur="200ms" />
                    <animate attributeName="x" id="x4b1" from="455" to="430" begin="x4b1.end" dur="200ms" />
                    <animate attributeName="y" id="y4b1" from="85" to="100" begin="y4b1.end" dur="200ms" />
                </text>
            </svg>
        </div>
    )
}

export default Svg
