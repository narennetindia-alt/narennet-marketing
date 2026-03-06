const fs = require('fs');

for (let i = 1; i <= 5; i++) {
    const file = `c:/Users/Naren/Desktop/web/Narennet/narennet/src/data/blogs/seoBlogs${i}.ts`;
    let content = fs.readFileSync(file, 'utf8');

    // Replace escaped backticks at the end of content, handling \r\n line endings
    content = content.replace(/\\`,\r?\n\s*author/g, '`,\n    author');
    content = content.replace(/\\`\r?\n\s*}/g, '`\n  }');

    fs.writeFileSync(file, content);
}
console.log("Syntax fixed robustly.");
