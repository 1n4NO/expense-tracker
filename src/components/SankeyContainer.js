import { useEffect } from 'react';
import { sankey, sankeyLinkHorizontal } from "d3-sankey";
import chroma from "chroma-js";
import * as d3 from 'd3';
import { SankeyWrapper } from './styles';

function SankeyContainer() {

    useEffect(() => {
        const svg = d3.select('#graph-container');
        svg.attr("preserveAspectRatio", "xMinYMin meet")
            .attr("viewBox", "0 0 1000 200")
    })

    const data = {
            nodes: [
                {
                    "name": "Income"
                },
                {
                    "name": "Salary"
                },
                {
                    "name": "Bills"
                },
                {
                    "name": "Electric Bill"
                },
                {
                    "name": "Mobile Bill"
                }
            ],
            links: [
                {
                    "source": 0,
                    "target": 1,
                    "value": 5000
                },
                {
                    "source": 1,
                    "target": 2,
                    "value": 3000
                },
                {
                    "source": 2,
                    "target": 3,
                    "value": 1000
                },
                {
                    "source": 2,
                    "target": 4,
                    "value": 2000
                }
            ],
    };
    const width = 1000;
    const height = 200;
    const { nodes, links } = sankey()
    .nodeWidth(15)
    .nodePadding(10)
    .extent([[1, 1], [width - 1, height - 1]])(data);
  const color = chroma.scale("Set3").classes(nodes.length);
  const colorScale = d3
    .scaleLinear()
    .domain([0, nodes.length])
    .range([0, 1]);

    const SankeyNode = ({ name, x0, x1, y0, y1, color }) => (
        <svg>
        <rect x={x0} y={y0} width={x1 - x0} height={y1 - y0} fill={color}>
        <title>{name}</title>
        </rect>
        </svg>
    )

    const SankeyLink = ({ link, color }) => (
        <svg>
        <path
          d={sankeyLinkHorizontal()(link)}
          style={{
            fill: "none",
            strokeOpacity: ".3",
            stroke: color,
            strokeWidth: Math.max(1, link.width),
          }}
        />
        </svg>
      )


    return (
        <SankeyWrapper>
            <svg id="graph-container">
                <g style={{ mixBlendMode: "multiply" }}>
                    {nodes.map((node, i) => (
                    <SankeyNode
                        {...node}
                        color={color(colorScale(i)).hex()}
                        key={node.name}
                    />
                    ))}
                    {links.map((link, i) => (
                    <SankeyLink
                        link={link}
                        color={color(colorScale(link.source.index)).hex()}
                    />
                    ))}
                </g>
            </svg>
        </SankeyWrapper>
    );
  }
  
  export default SankeyContainer;
  