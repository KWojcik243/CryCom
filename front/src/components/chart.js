import { ResponsiveLine } from '@nivo/line'
import { linearGradientDef } from '@nivo/core'
import React, { Component } from "react";
import PropTypes from "prop-types"

  export default class Chart extends Component {
      static propTypes = {
        data:PropTypes.array
    }


    render() {
        const {data} = this.props;
        return (
            <ResponsiveLine
                theme={{
                    fontFamily: "Cabin",
                    legends: { text: { fontSize: 15 } },
                    axisBottom: { text: { fontSize: 15 } },
                    yScale: { text: { fontSize: 15 } },
                    axis: {fontSize: '150px'},
                    labels: {text:{fontSize: 20}},
                    
                    // background: "#A411EA"
                }}
                data= {data}
                margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
                xScale={{ type: 'point' }}
                yScale={{
                    type: 'linear',
                    min: 'auto',
                    max: 'auto',
                    stacked: true,
                    reverse: false
                }}
                yFormat=" >-.2f"
                
                curve="catmullRom"
                axisTop={null}
                axisRight={null}
                defs={[
                  
                  linearGradientDef('gradientA', [
                      { offset: 0, color: 'inherit' },
                      { offset: 100, color: 'inherit', opacity: 0 },
                  ]),
              ]}
                
                fill={[{ match: '*', id: 'gradientA' }]}
                axisBottom={{
                    orient: 'bottom',
                    tickSize: 5,
                    tickPadding: 5,
                    tickRotation: 0,
                    tickValues: [],
                    legend: 'Date',
                    legendOffset: 26,
                    legendPosition: 'middle'
                }}
                axisLeft={{
                    orient: 'left',
                    tickSize: 5,
                    tickPadding: 5,
                    tickRotation: 0,
                    legend: 'Price',
                    legendOffset: -40,
                    legendPosition: 'middle'
                }}
                colors={d => d.color}
                enablePoints={false}
                pointSize={10}
                pointColor={{ theme: 'background' }}
                pointBorderWidth={2}
                pointBorderColor={{ from: 'serieColor' }}
                pointLabelYOffset={-12}
                enableArea={true}
                areaOpacity={0.4}
                useMesh={true}
                legends={[
                    {
                        anchor: 'right',
                        direction: 'column',
                        justify: false,
                        translatex: 100,
                        translateY: 0,
                        itemsSpacing: 0,
                        itemDirection: 'left-to-right',
                        itemWidth: 80,
                        itemHeight: 20,
                        itemOpacity: 0.75,
                        symbolSize: 12,
                        symbolShape: 'circle',
                        symbolBorderColor: 'rgba(0, 0, 0, .5)',
                        effects: [
                            {
                                on: 'hover',
                                style: {
                                    // itemBackground: 'rgba(0, 0, 0, .03)',
                                    itemOpacity: 1
                                }
                            }
                        ]
                    }
                ]}
            />
        )
            }
        }