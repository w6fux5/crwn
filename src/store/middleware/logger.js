// 自定義的 logger 中間件
export const loggerMiddleWare = (store) => (next) => (action) => {
  if (!action.type) {
    return next(action);
  }

  console.log('Type', action.type);
  console.log('Payload', action.payload);
  console.log('CurrentState', store.getState());

  next(action);
  console.log('NextState', store.getState());
};
