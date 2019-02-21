const Mutation = {
  newIdea: (parent, args, ctx, info) => {
    return ctx.prisma.createIdea({ ...args }, info);
  }
};

module.exports = Mutation;
