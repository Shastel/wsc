import gwss from '../gameServer';

console.log(gwss)

export default store => next => action => {
  const result = next(action);

  wss.connections.forEach(c => c.send('wow'));

  return result
}
