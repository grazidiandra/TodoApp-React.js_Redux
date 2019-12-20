import React from 'react';
import Grid from '../template/grid' 
import IconButton from '../template/iconButton'

export default props => (
  <section role='form' className='todoForm container'>
    <Grid cols='12 9 10'>
      <input id='description' value={props.description} onChange={props.handleChange} className='form-control' placeholder='Adicione uma tarefa' />
    </Grid>
    <Grid cols='12 3 2'>
      <IconButton styles='primary' icon='plus' onClick={props.handleAdd}/>
    </Grid>
</section>
)
