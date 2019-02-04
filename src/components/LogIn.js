import React, {Component} from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import superagent from 'superagent';


class LogIn extends Component{
  constructor(props) {
    super(props)
        this.state = {
            firstForm: true,
            secondForm: false,
            name: '',
            email: '',
            redirect: false
        }
    }

    onChangeInput = event => {
      const {id, value } = event.target
      console.log(id)
      console.log(value)
      this.setState({
        [id]:value
      })
    }

    onSubmitHandle = e => {
      e.preventDefault()

      if(!this.state.showLogIn) {

        const json = {
          name: this.state.name,
          email: this.state.email
        }

        console.log(json)
        superagent.post('https://young-wildwood-11812.herokuapp.com/api/v1/users')
        .send(json)
        .then(res => alert('User saved'))
        .catch(e => alert(e))
      }
    }

    showFirstForm = () => {
      this.setState({
        firstForm: !this.state.firstForm,
        secondForm: !this.state.secondForm,
      })
    }
  render(){
    const formStyles = {
      width: 400,
     margin: '50px auto',
    }

  return(
  <React.Fragment>
  {this.state.firstForm &&
    <div style={formStyles}>
    <form onSubmit={ this.showFirstForm }>
           <TextField
             required
             name="email"
             label="Email"
             fullWidth
             // onChange={ this.handleChange }
           />
           <TextField
             required
             name="password"
             type="password"
             label="Password"
             fullWidth
             // onChange={ this.handleChange }
           />
           <Button type='submit'  variant='contained'>Login</Button>
         </form>
        </div>
  }

  {this.state.secondForm &&
    <div style={formStyles}>
      <form onSubmit={ this.onSubmitHandle }>
             <TextField
               required
               id="name"
               label="Name"
               fullWidth
               onChange={ this.onChangeInput }
             />
             <TextField
               required
               id="email"
               label="Email"
               fullWidth
               onChange={ this.onChangeInput }
             />
             <Button type='submit'  variant='contained'>Record</Button>
           </form>
        </div>
        }
    </React.Fragment>
  );
  }
}
export default LogIn