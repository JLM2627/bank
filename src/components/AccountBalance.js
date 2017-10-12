import React, {Component} from 'react';



class AccountBalance extends Component{
    render () {
        return (
          <div>
            <h2>Balance: {this.props.accountBalance}</h2>
          </div>
        )
      }
}
// line 9 being passed into acct balance
/* class AccountBalance extends Component {
    state = {
        redirectToHome: false
    }

    saveSomething = () =>{
        console.log('Clicked')
    

    setTimeout= (() =>{
        this.setState({redirectToHome: true})
    }, 1500)

 }
  render() {

    if(this.state.redirectToHome){
        return <Redirect to="/" />
    }
    return (
        <div>
         Your Balance Is {this.props.accountBalance}
         <button onClick={this.saveSomething}>Redirect Button</button>
         <Link to="/">Home</Link>
        </div>
    );
  }
}
 */
export default AccountBalance;