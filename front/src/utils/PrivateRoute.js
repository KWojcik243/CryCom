import {Route, Navigate} from 'react-router-dom'

const PrivateRoute = ({component, ...rest}) => {
    console.log('Privete rout')
    const authenticated = true; 
    if(authenticated){
        return component
    }else{
        return <Navigate to="/login"/>
    }
}

export default PrivateRoute;