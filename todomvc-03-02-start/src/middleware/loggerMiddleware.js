const logger = (store) => (next) => (action) => {
  console.log("dispatching", action);
};
