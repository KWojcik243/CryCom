import React, { Component } from "react";
import PropTypes from "prop-types"
import './table.css'

  export default class TableLoss extends Component {
    static propTypes = {
        data:PropTypes.array
    }


    render() {
        const {data} = this.props;


        return (
        <div>
            <table>
                <th colSpan="4" className="upper-header upper-header-color-o">Top 10 biggest loss last week (USD) </th>
                
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
                        <td>{val.last_week_price}</td>
                        <td>{val.todays_price}</td>
                        <td className="diff-red">{Math.round(val.difference * 10000000) / 10000000}</td>
                    </tr>
                    )
                })}
            </table>
        </div>
        )
    }
}
