import React, { Component } from "react";
import './table.css'
const data = [
    { name: "Anom", age: 19, gender: "Male" , dif:22},
    { name: "Megha", age: 19, gender: "Female" , dif:22},
    { name: "Subham", age: 25, gender: "Male", dif:22},
    { name: "Anom", age: 19, gender: "Male" , dif:22},
    { name: "Megha", age: 19, gender: "Female" , dif:22},
    { name: "Subham", age: 25, gender: "Male", dif:22},
    { name: "Subham", age: 25, gender: "Male", dif:22},
    { name: "Anom", age: 19, gender: "Male" , dif:22},
    { name: "Megha", age: 19, gender: "Female" , dif:22},
    { name: "Subham", age: 25, gender: "Male", dif:22},
  ]

  export default class TableLoss extends Component {
    render() {
        return (
        <div>
            <table>
                <th colspan="4" className="upper-header upper-header-color-o">Top 10 biggest loss last week  </th>
                
                <tr className="lower-header lower-header-color-o" >
                    <th>Name</th>
                    <th>Last week price</th>
                    <th>Current price</th>
                    <th>Difference</th>
                </tr>
                {data.map((val, key) => {
                    return (
                    <tr key={key}>
                        <td>{val.name}</td>
                        <td>{val.age}</td>
                        <td>{val.gender}</td>
                        <td className="diff-red">{val.dif}</td>
                    </tr>
                    )
                })}
            </table>
        </div>
        )
    }
}
