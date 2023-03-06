import React, { Component } from "react";
import './table.css'
const data = [
    { name: "Anom", age: 19, gender: "Male" , pr: 19, dif:22},
    { name: "Megha", age: 19, gender: "Female" , pr: 19, dif:22},
    { name: "Subham", age: 25, gender: "Male", pr: 19, dif:22},
    { name: "Anom", age: 19, gender: "Male" , pr: 19, dif:22},
    { name: "Megha", age: 19, gender: "Female" , pr: 19, dif:22},
    { name: "Subham", age: 25, gender: "Male", pr: 19, dif:22},
    { name: "Subham", age: 25, gender: "Male", pr: 19, dif:22},
    { name: "Anom", age: 19, gender: "Male" , pr: 19, dif:22},
    { name: "Megha", age: 19, gender: "Female" , pr: 19, dif:22},
    { name: "Subham", age: 25, gender: "Male", pr: 19, dif:22},
  ]

  export default class TableFriends extends Component {
    render() {
        return (
        <div>
            <table>
                <th colspan="5" className="upper-header upper-header-color-p">RoomName  </th>
                
                <tr className="lower-header lower-header-color-p" >
                    <th>Nickname</th>
                    <th>Amount</th>
                    <th>Buy price</th>
                    <th>Current price</th>
                    <th>Difference</th>
                </tr>
                {data.map((val, key) => {
                    return (
                    <tr key={key}>
                        <td>{val.name}</td>
                        <td>{val.age}</td>
                        <td>{val.gender}</td>
                        <td>{val.pr}</td>
                        <td className="diff-green">{val.dif}</td>
                    </tr>
                    )
                })}
            </table>
        </div>
        )
    }
}
