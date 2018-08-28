const simpleAction = () => dispatch => {
  console.log('-----');
  dispatch({
    type: 'SIMPLE_ACTION',
    payload: 'result of the action',
  })
};

export default simpleAction;