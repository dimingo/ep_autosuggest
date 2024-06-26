exports.clientVars = function (hook, context, cb) {
  cb({
    ep_hello: {
      message: 'Hello from your plugin!'
    }
  });
};
