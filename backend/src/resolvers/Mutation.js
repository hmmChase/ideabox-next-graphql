const Mutation = {
  createIdea: (parent, args, ctx, info) => {
    return ctx.prisma.createIdea(
      {
        idea: args.idea
      },
      info
    );
  },
  updateIdea: (parent, args, ctx, info) => {
    return ctx.prisma.updateIdea(
      {
        data: { idea: args.idea },
        where: { id: args.id }
      },
      info
    );
  },
  deleteIdea: (parent, args, ctx, info) => {
    return ctx.prisma.deleteIdea(
      {
        id: args.id
      },
      info
    );
  }
};

module.exports = Mutation;
