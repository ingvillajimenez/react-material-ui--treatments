import React, {Component} from 'react';
import superagent from 'superagent';
import AddCircle from '@material-ui/icons/AddCircle';
import {Link} from 'react-router-dom';

class Users extends Component {
    constructor() {
        super();

        this.state = {
            users: []
        }

    }

    componentDidMount() {   
        superagent.get('https://young-wildwood-11812.herokuapp.com/api/v1/users')
        .then((serverResult) => {
            console.log(serverResult.body.data)
            var allUsers =  serverResult.body.data
            this.setState({
                users: allUsers
            });
        });
    }

    render(){
        return(
            <div>
                <table>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Email</th>
                    </tr>
                    {this.state.users.map(user => {
                    return(
                        <tr>
                            <th>{user._id}</th>
                            <th>{user.name}</th>
                            <th>{user.email}</th>
                        </tr>
                    );
                    })
                    }
                </table>
                <Link to='/login'><AddCircle></AddCircle></Link>
            </div>
        );
    }
}

export default Users;