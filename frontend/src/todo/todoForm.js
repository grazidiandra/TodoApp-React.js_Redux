import React, { Component } from 'react';
import { connect } from 'react-redux'
import Grid from '../template/grid' ;
import IconButton from '../template/iconButton';
import { add, changeDescription, search } from './todoActions';
import { bindActionCreators } from 'redux';

class todoForm extends Component {
  constructor(props) {
    super(props)

    this.keyHandle = this.keyHandle.bind(this)
  }

  componentWillMount() {
    this.props.search()
  }

  keyHandle(e) {
    const { add, description, search} = this.props
    if (e.key === 'Enter') {
      e.shiftKey ? search() : add(description)
    } else if (e.key === 'Escape') {
      this.props.handleClear()
    }
  }

  render() {
    const { add, description, search} = this.props
    return (
      <section role='form' className='todoForm container'>
        <Grid cols='12 9 10'>
          <input id='description' value={this.props.description} onChange={this.props.changeDescription} className='form-control' placeholder='Adicione uma tarefa' onKeyUp={this.keyHandle} />
        </Grid>
        <Grid cols='12 3 2'>
          <IconButton styles='primary' icon='plus' onClick={() => add(description)}/>
          <IconButton styles='info' icon='search' onClick={() => search()}/>
          <IconButton styles='default' icon='close' onClick={this.props.handleClear}/>
        </Grid>
    </section>
    )
  }
}


const mapStateToProps = state => ({description: state.todo.description});
const mapDispatchToProps = dispatch => bindActionCreators({ add, changeDescription,search }, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(todoForm)