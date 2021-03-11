import React from 'react';

class Api extends React.Component{
    constructor()
    {
        super();
        this.state={
            user:null
        }
    }

    componentDidMount(){
        fetch('https://reqres.in/api/users?page=2').then((resp) =>{

        resp.json().then((result)=>{
            this.setState({user:result.data})
        })
        })
    }
    render(){
        return(
            <div>
                <h1> Fetch Api Data

                </h1>
                {
                
                    this.state.user?
                    this.state.user.map((item,id)=>
                    <div><p>
                        {id}--
                        {item.first_name}--
                        {item.last_name}---
                        {item.email}
                    </p></div>
                    )
                    :
                    null
                }
            </div>
        );
    }
}
export default Api;