import {Component} from 'react'

import './index.css'

import DenominationItem from '../DenominationItem'

class CashWithdrawal extends Component {
  state = {balance: 2000}

  amtwithdraw = value => {
    this.setState(prevState => ({balance: prevState.balance - value}))
  }

  render() {
    const {denominationsList} = this.props
    const {balance} = this.state
    const name = 'Sarah Williams'
    const initial = name.slice(0, 1)
    return (
      <div className="back">
        <div className="card">
          <div className="title-container">
            <div className="icon">
              <p className="letter">{initial}</p>
            </div>
            <h1 className="heading">{name}</h1>
          </div>
          <div className="balance-view-container">
            <p className="yourbalance">Your Balance</p>
            <p className="amount">
              {balance} <br /> In Rupees
            </p>
          </div>
          <p className="withdraw">Withdraw</p>
          <p className="subheading">CHOOSE SUM (IN RUPEES)</p>
          <ul className="denomination">
            {denominationsList.map(each => (
              <DenominationItem
                itemDetails={each}
                key={each.id}
                withdrawfunc={this.amtwithdraw}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default CashWithdrawal
