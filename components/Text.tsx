import * as React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { addText } from '../actions/text'


interface TextProps {
    count:number,
    text:string,
    addText:any
}

const showText = (props:any) => {
    console.log(props);
    return props.count > 10 ? '>10' : '<10'
}

const setTextState = (props:any) => {
    props.todosActions
    // return props.text = props.count
} 

const Text: React.FC<TextProps> = (props) => (
  <div>
      <h2>{showText(props)}</h2>
      <h2>{props.text}</h2>
      <button onClick={props.addText}>set text state</button>
  </div>
)

const mapStateToProps = (state:any) => {
    return {
        count : state.count,
        text : state.text
    }
}

// const mapDispatchToProps = (dispatch:any) => {
//     return {
//       todosActions: bindActionCreators(addText, dispatch)
//     };
//   }

export default connect(mapStateToProps,{addText})(Text)