// Our static "database"
export const posts = [
  {
    id: 1,
    title: 'My First Blog Post',
    content: 'This is the full content of my first blog post. We are building this with React and CSS Modules. This method scopes our styles to each component.',
    author: 'John Doe',
    date: 'Oct 25, 2025',
  },
  {
    id: 2,
    title: 'A Second Post',
    content: 'This is another post, just to show a list. Routing helps us navigate between this list and the full post page. It is a core concept in single-page applications.',
    author: 'Jane Smith',
    date: 'Oct 26, 2025',
  },
  // Add more posts here if you like

  {
    id: 3,
    title: 'A Third Post',
    content: 'This is third post, just to show a list. Routing helps us navigate between this list and the full post page. It is a core concept in single-page applications.',
    author: 'Dev Dipankar Bera',
    date: 'Oct 29, 2025',
  },
];

// We'll store comments separately, keyed by post ID
export const comments = {
  1: [ // Comments for post with id 1
    { id: 101, name: "Alice", text: "Great first post!" },
    { id: 102, name: "Bob", text: "Looking forward to more." },
  ],
  2: [ // Comments for post with id 2
    { id: 103, name: "Charlie", text: "Nice example!" },
  ],
};