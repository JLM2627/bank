import React, {Component} from 'react';

class NewCreditForm extends Component {

  constructor(props) {
    super(props);

    this.defaultState = {
      newCredit: {
        amount: 0.00,
        description: '',
        date: Date.now(),
      },
    };

    this.state = {...this.defaultState};
  }

  _handleInputChange = (event) => {
    const attribute = event.target.name;
    let value = event.target.value;

    if (attribute === 'amount') {
      value = Number(value);
    }

    const newCredit = {...this.state.newCredit};
    newCredit[attribute] = value;

    this.setState({newCredit});
  };

  _resetForm = () => {
    const newCredit = {...this.defaultState.newCredit};
    this.setState({newCredit});
  };

  _addNewCredit = (event) => {
    event.preventDefault();
    this.props.addNewCredit(this.state.newCredit);
    this._resetForm();
  };

  render() {
    return (
        <div>
          <form onSubmit={this._addNewCredit}>

            <div>
              <span>Amount (USD) </span>
              <input
                  type="number"
                  name="amount"
                  placeholder="Amount"
                  value={this.state.newCredit.amount}
                  onChange={this._handleInputChange}/>
            </div>

            <div>
              <span>Description </span>
              <input
                  type="text"
                  name="description"
                  placeholder="Description"
                  value={this.state.newCredit.description}
                  onChange={this._handleInputChange}/>
            </div>

            <div>
              <input
                  type="submit"
                  value="Add New Credit"/>
            </div>

          </form>
        </div>
    );
  }
}

export default NewCreditForm;

//every time we click, there is an event. and when we pass that 
//event in as a function, it is updated? event.target specifies what we are tampering
// if attribute === ("amount"){value=numericValue}// use this as a function across all button clicks
// give enents the names that are on the state. this will automatically update with event.target.whatev 