module.exports = async (ctx, next) => {
  if (ctx.params.id === String(ctx.state.user.id)) {
    // Go to next policy or will reach the controller's action.
    return await next();
  }

  ctx.unauthorized(`You cannot modify another user\'s profile!`);
}