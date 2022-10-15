import './index.css'

const DenominationItem = props => {
  const {itemDetails, withdrawfunc} = props
  const {value} = itemDetails

  const onClickWithdraw = () => {
    withdrawfunc(value)
  }

  return (
    <li className="withdrawel">
      <button className="amount" onClick={onClickWithdraw}>
        {value}
      </button>
    </li>
  )
}

export default DenominationItem
