import useD3 from "../helpers/useD3";
import React from "react";
import * as d3 from "d3";

function ForceLayout({ data }) {
    const ref = useD3(
        (svg) => {

            var width = window.innerWidth;
            var height = window.innerHeight;

            var colorScale = '#FDDC38';
            var eyeColorScale = ['#2e536f', '#f5fc6a', '#ff4d29', '#634E34', '#497665', '#000', '#ff8229', 'C3C185', '#ff8ad8', '#fff', '#a72ac7', '#F7D000', '#06913b', '#fff'];

            var nodes = data.map(function (d, index) {
                return {
                    radius: d.count * 6,
                    category: index % 1,
                    fill: eyeColorScale[index]
                }
            });

            var simulation = d3.forceSimulation(nodes)
                .force('charge', d3.forceManyBody().strength(200))
                .force('x', d3.forceX().x(function (d) {
                    return width / 2;
                }))
                .force('y', d3.forceY().y(function (d) {
                    return height / 10;
                }))
                .force('collision', d3.forceCollide().radius(function (d) {
                    return d.radius + 2;
                }))
                .on('tick', ticked);

            function ticked() {
                var u = d3.select('svg g')
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
            <div id="content">
                <svg width="100vw" height="70vh">
                    <g transform="translate(50, 200)"></g>
                </svg>
            </div>
            <ul>
                {data.map(e => (
                    <li>{e.eye_color}: {e.count}</li>
                ))}
            </ul>
        </>
    );
}

export default ForceLayout;