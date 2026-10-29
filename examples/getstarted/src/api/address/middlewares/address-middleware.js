module.exports = (options) => {
  return (ctx, next) => {
    ctx.set('X-SKPL-Test', 'Address Middleware');
    return next();
  };
};
