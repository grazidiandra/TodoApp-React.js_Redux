import axios from 'axios';

const URL = 'http://localhost:8000/api/todos';

export const changeDescription = event => ({
  type: 'DESCRIPTION_CHANGE',
  payload: event.target.value
});

export const search = () => {
  const request = axios.get(`${URL}?sort=-createdAt`)
  return {
    type: 'TODO_SEARCHED',
    payload: request
  }
};

export const add = (description) => {
  return dispatch => {
    axios.post(URL, { description })
    .then(resp => dispatch({ type: 'TODO_ADDED', payload: resp.data}))
    .then(() => dispatch(search()))
  }
}