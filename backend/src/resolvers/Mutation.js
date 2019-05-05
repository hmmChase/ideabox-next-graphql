export default {
  createIdea: async (parent, args, ctx, info) => {
    return await ctx.prisma.mutation.createIdea({
      data: { idea: args.idea }
    });
  },
  updateIdea: async (parent, args, ctx, info) => {
    return await ctx.prisma.mutation.updateIdea({
      data: { idea: args.idea },
      where: { id: args.id }
    });
  },
  deleteIdea: async (parent, args, ctx, info) => {
    return await ctx.prisma.mutation.deleteIdea({
      where: { id: args.id }
    });
  }
};
