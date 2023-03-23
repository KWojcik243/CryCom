import React, { Component } from "react";
import PropTypes from "prop-types"
import './table.css'

  export default class TableProfit extends Component {

    static propTypes = {
        data:PropTypes.array
    }

    render() {
        const {data} = this.props;

        return (
        <div>
            <table>
                <th colSpan="4" className="upper-header upper-header-color-p">Top 10 biggest profit last week (USD) </th>
                
                <tr className="lower-header lower-header-color-p" >
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
                        <td className="diff-green">{Math.round(val.difference * 10000000) / 10000000}</td>
                    </tr>
                    )
                })}
            </table>
        </div>
        )
    }
}
