const { importSchema } = require('graphql-import');
const path = require('path');
const prisma = importSchema(path.resolve('prisma/generated/prisma.graphql'));

async function main() {
  await prisma.createUser({ name: 'Chase' });
}

main();
