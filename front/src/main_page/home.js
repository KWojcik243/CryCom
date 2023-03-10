import './home.css';
import TableProfit from '../components/table_profit.js';
import TableLoss from '../components/table_loss';
import Chart from '../components/chart';
export default function Home(){
    return(
        <div>
            <div className='crypto-piece'>
                <div className='table-of-changes'>
                    <TableProfit />
                    <TableLoss />
                </div>
                <div className='crypto-flex'>
                    <div className='crypto-changes-box'>
                        <Chart/>
                    </div>
                    <div className='crypto-changes-box crypto-changes-box-worst'>
                        <Chart/>
                    </div>
                </div>
            </div>
        </div>
    )
}
