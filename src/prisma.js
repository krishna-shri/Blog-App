import { Prisma, ex } from 'prisma-binding';
import { fragmentReplacements } from './resolvers/index';

const prisma = new Prisma({
  typeDefs: 'src/generated/prisma.graphql',
  endpoint: process.env.PRISMA_ENDPOINT,
  secret: 'thisisasecretkey',
  fragmentReplacements,
});

export { prisma as default };

// const createPostForUser = async (authorId, data) => {
//   const userExists = await prisma.exists.User({ id: authorId });

//   if (!userExists) throw new Error('User not found');

//   const post = await prisma.mutation.createPost(
//     {
//       data: {
//         ...data,
//         author: {
//           connect: {
//             id: authorId,
//           },
//         },
//       },
//     },
//     '{ author { id name email posts {id title published } } }'
//   );
//   return post.author;
// };

// createPostForUser('ckch74sqg00210918ji6v2ytk', {
//   title: 'new one',
//   body: 'kill me',
//   published: true,
// })
//   .then((u) => console.log(JSON.stringify(u, undefined, 2)))
//   .catch((e) => console.log(e.message));

// const updatePostForUser = async (postId, data) => {
//   const postExists = await prisma.exists.Post({ id: postId });

//   if (!postExists) throw new Error('No post found');

//   const post = await prisma.mutation.updatePost(
//     {
//       where: {
//         id: postId,
//       },
//       data,
//     },
//     '{ author { id name email posts { id title body published } }}'
//   );

//   return post.author;
// };

// updatePostForUser('ckchc2is7018r0918cqp0ign9', {
//   body: 'new post updated',
//   published: false,
// })
//   .then((data) => console.log(JSON.stringify(data, undefined, 2)))
//   .catch((e) => console.log(e.message));

// prisma.query
//   .users(null, '{ id name email posts { id title } }')
//   .then((data) => console.log(JSON.stringify(data, undefined, 2)));

// prisma.query
//   .comments(null, '{id text author { id name }}')
//   .then((data) => console.log(JSON.stringify(data, undefined, 2)));

// prisma.mutation
//   .createPost(
//     {
//       data: {
//         title: 'Second post via node',
//         body: '',
//         published: false,
//         author: {
//           connect: {
//             id: 'ckch754uj002c09180icfdl9m',
//           },
//         },
//       },
//     },
//     '{ id title body published }'
//   )
//   .then((data) => {
//     console.log(data);
//     return prisma.query.users(null, '{ id name email posts { id title } }');
//   })
//   .then((data) => console.log(JSON.stringify(data, undefined, 2)));
