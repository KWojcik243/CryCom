import './home.css';
import { useState, useContext, useEffect} from 'react';
import TableProfit from '../../components/table_profit.js';
import TableLoss from '../../components/table_loss';
import Chart from '../../components/chart';
import AuthContext from '../../context/AuthContext';
export default function Home(){

    let {logoutUser} = useContext(AuthContext)
    let [data,setData] = useState([])

    useEffect(() => {
        getData()
    }, [])

    let getData = async () => {
        let response = await fetch("http://localhost:8000/api/difference/", {
            method:'GET',
            headers:{
                'Content-type':'application/json',
            },})

        let data = await response.json()

        if(response.status === 200){
            setData(data)
        }else if(response.statusText === 'Unauthorized'){
            logoutUser()
        }
    }

    return(
        <div>
            <div className='crypto-piece'>
                <div className='table-of-changes'>
                    <TableProfit data = {data.slice(0, 10)}/>
                    <TableLoss data = {data.slice(10,20)} />
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
