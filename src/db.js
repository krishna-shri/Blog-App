const users = [
  { id: '1', name: 'Shri', email: 'shri@shri.com' },
  { id: '2', name: 'Sarah', email: 'sarash@sra.com', age: 26 },
  { id: '3', name: 'john', email: 'john@jon.com', age: 22 },
];

const posts = [
  { id: '10', title: 'Road', body: 'Road body', published: true, author: '1' },
  { id: '20', title: 'Air', body: 'Air body', published: false, author: '2' },
  { id: '30', title: 'Sea', body: 'Sea body', published: true, author: '3' },
];

const comments = [
  { id: '100', text: 'this is hundred', author: '1', post: '10' },
  { id: '101', text: 'this is hundred one', author: '2', post: '20' },
  { id: '102', text: 'this is hundred two', author: '3', post: '30' },
  { id: '103', text: 'this is hundred three', author: '1', post: '10' },
];

const db = { users, posts, comments };

export { db as default };
