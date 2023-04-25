import  { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { userInfo } from '../UserContext/UserContext';

const PrivateRoute = ({children}) => {

    console.log(children);
    
        let {user, loading} = useContext(userInfo);

        if(loading){
            return 
        }
    
        if(user){
           return children
            
        }
        
    
        return <Navigate to='/login'></Navigate>

};

export default PrivateRoute;