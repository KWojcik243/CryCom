import { ResponsiveLine } from '@nivo/line'
import { linearGradientDef } from '@nivo/core'
import React, { Component } from "react";

const data = [{
    "id": "japan",
    "color": "hsl(240, 70%, 50%)",
    "data": [
      {
        "x": "plane",
        "y": 114
      },
      {
        "x": "helicopter",
        "y": 229
      },
      {
        "x": "boat",
        "y": 56
      },
      {
        "x": "train",
        "y": 150
      },
      {
        "x": "subway",
        "y": 282
      },
      {
        "x": "bus",
        "y": 3
      },
      {
        "x": "car",
        "y": 244
      },
      {
        "x": "moto",
        "y": 253
      },
      {
        "x": "bicycle",
        "y": 3
      },
      {
        "x": "horse",
        "y": 34
      },
      {
        "x": "skateboard",
        "y": 182
      },
      {
        "x": "others",
        "y": 152
      }
    ]
  },
  {
    "id": "france",
    "color": "hsl(123, 70%, 50%)",
    "data": [
      {
        "x": "plane",
        "y": 81
      },
      {
        "x": "helicopter",
        "y": 86
      },
      {
        "x": "boat",
        "y": 71
      },
      {
        "x": "train",
        "y": 211
      },
      {
        "x": "subway",
        "y": 95
      },
      {
        "x": "bus",
        "y": 254
      },
      {
        "x": "car",
        "y": 176
      },
      {
        "x": "moto",
        "y": 200
      },
      {
        "x": "bicycle",
        "y": 128
      },
      {
        "x": "horse",
        "y": 279
      },
      {
        "x": "skateboard",
        "y": 189
      },
      {
        "x": "others",
        "y": 252
      }
    ]
  },
  {
    "id": "us",
    "color": "hsl(182, 70%, 50%)",
    "data": [
      {
        "x": "plane",
        "y": 92
      },
      {
        "x": "helicopter",
        "y": 252
      },
      {
        "x": "boat",
        "y": 216
      },
      {
        "x": "train",
        "y": 71
      },
      {
        "x": "subway",
        "y": 180
      },
      {
        "x": "bus",
        "y": 160
      },
      {
        "x": "car",
        "y": 274
      },
      {
        "x": "moto",
        "y": 189
      },
      {
        "x": "bicycle",
        "y": 254
      },
      {
        "x": "horse",
        "y": 190
      },
      {
        "x": "skateboard",
        "y": 225
      },
      {
        "x": "others",
        "y": 49
      }
    ]
  },
  {
    "id": "germany",
    "color": "hsl(259, 70%, 50%)",
    "data": [
      {
        "x": "plane",
        "y": 51
      },
      {
        "x": "helicopter",
        "y": 35
      },
      {
        "x": "boat",
        "y": 269
      },
      {
        "x": "train",
        "y": 258
      },
      {
        "x": "subway",
        "y": 10
      },
      {
        "x": "bus",
        "y": 152
      },
      {
        "x": "car",
        "y": 276
      },
      {
        "x": "moto",
        "y": 258
      },
      {
        "x": "bicycle",
        "y": 146
      },
      {
        "x": "horse",
        "y": 123
      },
      {
        "x": "skateboard",
        "y": 260
      },
      {
        "x": "others",
        "y": 116
      }
    ]
  },
  {
    "id": "norway",
    "color": "hsl(207, 70%, 50%)",
    "data": [
      {
        "x": "plane",
        "y": 172
      },
      {
        "x": "helicopter",
        "y": 43
      },
      {
        "x": "boat",
        "y": 84
      },
      {
        "x": "train",
        "y": 275
      },
      {
        "x": "subway",
        "y": 148
      },
      {
        "x": "bus",
        "y": 179
      },
      {
        "x": "car",
        "y": 41
      },
      {
        "x": "moto",
        "y": 260
      },
      {
        "x": "bicycle",
        "y": 270
      },
      {
        "x": "horse",
        "y": 35
      },
      {
        "x": "skateboard",
        "y": 108
      },
      {
        "x": "others",
        "y": 128
      }
    ]
  }]

  export default class Chart extends Component {
    render() {
        return (
            <ResponsiveLine
                theme={{
                    fontFamily: "Cabin",
                    legends: { text: { fontSize: 15 } },
                    axisBottom: { text: { fontSize: 15 } },
                    yScale: { text: { fontSize: 15 } },
                    axis: {fontSize: '150px'},
                    labels: {text:{fontSize: 20}}
                }}
                data={data}
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
                    legend: 'Date',
                    legendOffset: 36,
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
                colors={{ scheme: 'category10' }}
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
                        translateX: 100,
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
                                    itemBackground: 'rgba(0, 0, 0, .03)',
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