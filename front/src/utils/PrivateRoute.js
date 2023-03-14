import {Route, Navigate} from 'react-router-dom'
import { useContext } from 'react';
import AuthContext from '../context/AuthContext';

const PrivateRoute = ({component, ...rest}) => {
    let {user} = useContext(AuthContext);
    if(user){
        return component
    }else{
        return <Navigate to="/login"/>
    }
}

export default PrivateRoute;