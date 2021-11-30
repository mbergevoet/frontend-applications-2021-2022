import useD3 from "../helpers/useD3";
import React from "react";
import * as d3 from "d3";

function ForceLayout({ data }) {

    const eyeColorScale = ['#2E536F', '#F5FC6A', '#FF4D29', '#634E34', '#497665', '#000', '#FF8229', '#C3C185', '#FF8ad8', '#FFF', '#A72AC7', '#F7D000', '#06913B', '#FFF'];

    const ref = useD3(
        (svg) => {

            const width = window.innerWidth;
            const height = window.innerHeight;

            const nodes = data.map(function (d, index) {
                return {
                    radius: d.count * 7,
                    category: index % 1,
                    fill: eyeColorScale[index]
                }
            });

            const simulation = d3.forceSimulation(nodes)
                .force('charge', d3.forceManyBody().strength(10))
                .force('x', d3.forceX().x(function (d) {
                    return width / 2.1;
                }))
                .force('y', d3.forceY().y(function (d) {
                    return height / 8;
                }))
                .force('collision', d3.forceCollide(20).radius(function (d) {
                    return d.radius + 2;
                }))
                .on('tick', ticked);

            function ticked() {
                const u = d3.select('svg g')
                    .selectAll('circle')
                    .data(nodes)
                    .join('circle')
                    .attr('r', function (d) {
                        return d.radius;
                    })
                    .style('fill', function (d) {
                        return d.fill;
                    })
                    .attr('cx', function (d) {
                        return d.x;
                    })
                    .attr('cy', function (d) {
                        return d.y;
                    });
            }
        });

    return (
        <>
            <ul class="visualisation-legend">
                {data.map((e, i) => (
                    <li >
                        <span style={{ background: eyeColorScale[i] }}></span>{e.eye_color}: {e.count}
                    </li>
                ))}
            </ul>
            <div id="content">
                <svg width="100vw" height="100vh">
                    <g transform="translate(50, 200)"></g>
                </svg>
            </div>
        </>
    );
}

export default ForceLayout;