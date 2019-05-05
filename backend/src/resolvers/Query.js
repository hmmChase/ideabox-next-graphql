export default {
  idea: (parent, args, ctx, info) => {
    return ctx.prisma.query.idea({ where: { id: args.id } });
  },

  ideas: (parent, args, ctx, info) => {
    return ctx.prisma.query.ideas();
  }
};
