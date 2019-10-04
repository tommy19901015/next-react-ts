import * as React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { addText } from '../actions/text'


interface TextProps {
    count:number,
    text:string,
    todosActions:any
}

const showText = (props:any) => {
    return props.count > 10 ? '>10' : '<10'
}

const Text: React.FC<TextProps> = (props) => (
  <div>
      <h2>{showText(props)}</h2>
      <h2>{props.text}</h2>
      <button onClick={()=>props.todosActions(props)}>set text state</button>
  </div>
)

const mapStateToProps = (state:any) => {
    return {
        count : state.count,
        text : state.text
    }
}

const setTextState = (props) => {
    return {
        ...addText(),
        text:props.count
    }
}

const mapDispatchToProps = (dispatch) => ({
    todosActions: (props) => dispatch(setTextState(props))
});

export default connect(mapStateToProps,mapDispatchToProps)(Text)