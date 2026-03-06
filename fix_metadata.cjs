const fs = require('fs');
const path = require('path');

const metadatas = [
    {
        category: 'Video Editing',
        image: 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&q=80&w=1200'
    },
    {
        category: 'Graphic Design',
        image: 'https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&q=80&w=1200'
    },
    {
        category: 'Cybersecurity',
        image: 'https://images.unsplash.com/photo-1563206767-5b18f218e8de?auto=format&fit=crop&q=80&w=1200'
    },
    {
        category: 'Financial Software',
        image: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&q=80&w=1200'
    },
    {
        category: 'Project Management',
        image: 'https://images.unsplash.com/photo-1512758117926-5711b4ba43fc?auto=format&fit=crop&q=80&w=1200'
    }
];

for (let i = 1; i <= 5; i++) {
    const filePath = `c:/Users/Naren/Desktop/web/Narennet/narennet/src/data/blogs/seoBlogs${i}.ts`;
    let content = fs.readFileSync(filePath, 'utf8');

    // Find the closing brace of the array
    const meta = metadatas[i - 1];
    const metadataString = `,
    author: {
      name: 'Narendhiran C',
      role: 'Content Strategist',
      avatar: '/favicon.png'
    },
    date: 'March 6, 2026',
    readTime: '6 min read',
    category: '${meta.category}',
    image: '${meta.image}'
  }
];`;

    // We look for \n  }\n]; or similar combinations of whitespace and CRLF
    content = content.replace(/\s*}\s*\];\s*$/, metadataString);

    fs.writeFileSync(filePath, content);
    console.log(`Updated seoBlogs${i}.ts`);
}
