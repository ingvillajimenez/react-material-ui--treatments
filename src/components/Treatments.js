import React, {Component} from 'react';
import superagent from 'superagent';

class Users extends Component {
    constructor() {
        super();

        this.state = {
            treatments: []
        }

    }

    componentDidMount() {   
        superagent.get('https://young-wildwood-11812.herokuapp.com/api/v1/treatments')
        .then((serverResult) => {
            console.log(serverResult.body.data)
            var allTreatments =  serverResult.body.data
            this.setState({
                treatments: allTreatments
            });
        });
    }

    render(){
        return(
            <div>
                <table>
                    <tr>
                        <th>Id</th>
                        <th>Description</th>
                        <th>List Of Treatments</th>
                        <th>List Of Appoinments</th>
                    </tr>
                    {this.state.treatments.map(treatment => {
                    return(
                        <tr>
                            <th>{treatment._id}</th>
                            <th>{treatment.description}</th>
                            <th>{treatment.listOfTreatments}</th>
                            <th>{treatment.listOfAppointments}</th>
                        </tr>
                    );
                    })
                    }
                </table>
            </div>
        );
    }
}

export default Users;