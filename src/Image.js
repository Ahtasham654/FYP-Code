import React ,{Components} from 'react';
import login from './login.jpg';

class Image extends React.Component{
    render(){
        return(
            <div>
                <img src={login} alt="MyLogin" width="1500x"></img>

            </div>
        );
    }
}
export default Image;
