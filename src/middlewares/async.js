export default ({ dispatch }) => next => action => {
  // Check if the action has a promise on its payload property
  // yes => resolve
  // no => send action on next middleware
  if (!action.payload || !action.payload.then) {
    return next(action);
  }

  // if promise, wait for resolve, then create new action and dispatch
  action.payload.then(response => {
    const newAction = { ...action, payload: response };
    dispatch(newAction);
  });
};
