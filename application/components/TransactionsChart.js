import React from 'react'
import { inject, observer } from 'mobx-react'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts'

@inject('transactions')
@observer

class TransactionsChart extends React.Component {
  constructor(props) {
    super(props)
    this.transactions = props.transactions
  }

  render() {
    return (
      <LineChart width={1099} height={156} data={this.transactions.chartData} margin={{top: 16, right: 39, left: 32}}>
        <CartesianGrid stroke='#ccc' strokeDasharray='6 6' />
        <Line type='monotone' dataKey='send' stroke='#b60127' />
        <Line type='monotone' dataKey='generate' stroke='#1A237E' />
        <Line type='monotone' dataKey='receive' stroke='#33691E' />
        <Tooltip />
        <XAxis dataKey='date' />
        <YAxis />
      </LineChart>
    )
  }
}

export default TransactionsChart
