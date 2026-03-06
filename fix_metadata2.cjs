const fs = require('fs');

const metadatas = {
    2: {
        category: 'Project Management',
        image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?auto=format&fit=crop&q=80&w=1200'
    },
    3: {
        category: 'Video Editing',
        image: 'https://images.unsplash.com/photo-1536240478700-b869070f9279?auto=format&fit=crop&q=80&w=1200'
    },
    4: {
        category: 'Cybersecurity',
        image: 'https://images.unsplash.com/photo-1614064641913-6d11e592676b?auto=format&fit=crop&q=80&w=1200'
    },
    5: {
        category: 'Collaboration Tools',
        image: 'https://images.unsplash.com/photo-1568992687947-868a62a9f521?auto=format&fit=crop&q=80&w=1200'
    }
};

for (let i = 2; i <= 5; i++) {
    const filePath = `c:/Users/Naren/Desktop/web/Narennet/narennet/src/data/blogs/seoBlogs${i}.ts`;
    let content = fs.readFileSync(filePath, 'utf8');

    // Skip if we already injected it (just in case)
    if (content.includes(`category: '${metadatas[i].category}'`)) {
        console.log(`seoBlogs${i}.ts already updated.`);
        continue;
    }

    const meta = metadatas[i];
    const metadataString = `\`,
    author: {
      name: 'Narendhiran C',
      role: 'Content Strategist',
      avatar: '/favicon.png'
    },
    date: 'March 6, 2026',
    readTime: '7 min read',
    category: '${meta.category}',
    image: '${meta.image}'
  },
  {`;

    // We look for JUST the backtick, newline, }, newline, {
    content = content.replace(/`\r?\n\s*},\r?\n\s*{/, metadataString);

    fs.writeFileSync(filePath, content);
    console.log(`Updated first post in seoBlogs${i}.ts`);
}
