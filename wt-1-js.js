module.exports = function(ctx, cb) {
  console.log("thing happened");
  cb(null, { hello: ctx.data.name || 'Anonymous' });
};