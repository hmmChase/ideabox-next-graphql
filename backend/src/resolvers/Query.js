const Query = {
  idea: (parent, args, ctx, info) => {
    return ctx.prisma.idea({ where: { id: args.id } }, info);
  },

  ideas: (parent, args, ctx, info) => {
    return ctx.prisma.ideas({}, info);
  }
};

module.exports = Query;
