import * as React from 'react'
import { connect } from 'react-redux'
import { increment } from '../actions/count'


interface CountProps {
    count?:number,
    increment:any
}

const Count: React.FC<CountProps> = (props) => (
  <div>
      <h1>{props.count}</h1>
      <button onClick={props.increment}>+</button>
  </div>
)

const mapStateToProps = (state:any) => {
    return {
        count :state.count
    }
}

export default connect(mapStateToProps, {increment})(Count)