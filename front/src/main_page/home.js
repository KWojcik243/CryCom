import './home.css';
import TableProfit from '../components/table_profit.js';
import TableLoss from '../components/table_loss';
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
                    </div>
                    <div className='crypto-changes-box crypto-changes-box-worst'>
                    </div>
                </div>
            </div>
        </div>
    )
}
