import express from 'express';
import Database from 'better-sqlite3';
import { createClient } from '@supabase/supabase-js';
import * as dotenv from 'dotenv';

dotenv.config();

const supabaseUrl = process.env.VITE_SUPABASE_URL || 'https://gadpfzwfwutqprsmuphm.supabase.co';
const supabaseKey = process.env.VITE_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdhZHBmendmd3V0cXByc211cGhtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzIyODY5NjEsImV4cCI6MjA4Nzg2Mjk2MX0.1CCj6Jz0xuwq2Y6CzcXNIeL_gX8lghSNEjgALmQrXh4';
const supabase = createClient(supabaseUrl, supabaseKey);

const app = express();
app.use(express.json());

// Enable CORS for development
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
    next();
});

const db = new Database('database.db');

// Create the blogs table
db.exec(`
  CREATE TABLE IF NOT EXISTS blogs (
    id TEXT PRIMARY KEY,
    title TEXT NOT NULL,
    excerpt TEXT NOT NULL,
    content TEXT NOT NULL,
    author_name TEXT NOT NULL,
    author_role TEXT NOT NULL,
    author_avatar TEXT NOT NULL,
    date TEXT NOT NULL,
    readTime TEXT NOT NULL,
    category TEXT NOT NULL,
    image TEXT NOT NULL
  )
`);

// Seed initial data if table is empty
const countStmt = db.prepare('SELECT COUNT(*) as count FROM blogs');
const count = countStmt.get() as { count: number };

if (count.count === 0) {
    const insert = db.prepare(`
    INSERT INTO blogs (id, title, excerpt, content, author_name, author_role, author_avatar, date, readTime, category, image)
    VALUES (@id, @title, @excerpt, @content, @author_name, @author_role, @author_avatar, @date, @readTime, @category, @image)
  `);

    const initialPosts = [
        {
            id: '1',
            title: 'The Future of AI in Business Software Ecosystems',
            excerpt: 'How machine learning is transforming the way modern enterprises manage their resources and automate complex workflows.',
            content: `# The Future of AI in Business Software

Artificial Intelligence is no longer just a buzzword; it's the backbone of modern business software. From predictive analytics to automated customer service, AI is reshaping how enterprises operate.

## The Shift to Intelligent Systems

Traditional ERP and CRM systems were reactive. They stored data and waited for human input. Modern ecosystems are proactive. They analyze patterns and suggest actions before a human even realizes there's a need.

### Key Benefits of AI Integration:

1. **Automated Workflows**: Reducing manual entry and human error.
2. **Predictive Analytics**: Forecasting sales and inventory needs with high precision.
3. **Enhanced Customer Experience**: Personalized interactions at scale.

> "The goal of AI in business isn't to replace humans, but to augment their capabilities and free them from mundane tasks." — Narendhiran C, CEO of NarenNet

## Real-World Applications

We are seeing AI being used in fascinating ways across industries. In retail, AI models can predict foot traffic based on weather patterns and local events, allowing store managers to optimize staffing levels in real-time. In manufacturing, predictive maintenance algorithms can identify potential equipment failures before they occur, saving companies millions in downtime.

## Looking Ahead

As we move further into 2024, we expect to see even deeper integration of Large Language Models (LLMs) into daily business tools, making software more conversational and intuitive than ever before. The interface of the future isn't a series of buttons and menus; it's a conversation.`,
            author_name: 'Narendhiran C',
            author_role: 'Founder and CEO, NarenNet',
            author_avatar: '/ceo-naren.jpeg',
            date: 'March 15, 2024',
            readTime: '5 min read',
            category: 'Tech',
            image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=1200'
        },
        {
            id: '2',
            title: 'Scaling Your Retail Business with Automation',
            excerpt: 'Discover the key strategies for implementing automated billing and inventory systems in a growing retail environment.',
            content: `# Scaling Retail with Automation

Retail is evolving faster than ever. To stay competitive, businesses must embrace automation not just as a luxury, but as a necessity for survival and growth.

## Why Automation Matters

When you scale from one store to ten, manual processes break. Automation provides the consistency and speed required to maintain quality and efficiency across multiple locations.

### Essential Automation Tools:

* **Self-Checkout Kiosks**: Reducing labor costs and wait times.
* **Automated Reordering**: Ensuring you never run out of top-selling items.
* **Unified Dashboard**: Real-time visibility into all store operations.

## The Human Element

One common misconception is that automation removes the "human touch" from retail. In reality, it does the opposite. By automating the repetitive tasks like inventory counting and basic transaction processing, your staff is free to engage more deeply with customers, providing the kind of personalized service that builds long-term loyalty.

## Conclusion

The transition to an automated retail environment can be challenging, but the long-term benefits in scalability and profitability are undeniable. Companies that invest in these technologies today will be the leaders of tomorrow.`,
            author_name: 'Sarah Chen',
            author_role: 'Product Manager',
            author_avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200',
            date: 'March 10, 2024',
            readTime: '4 min read',
            category: 'Business',
            image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=1200'
        },
        {
            id: '3',
            title: 'The Rise of "Vibe Coding": A New Paradigm',
            excerpt: 'Exploring the shift from technical syntax to conceptual intent in software development.',
            content: `# The Rise of "Vibe Coding"

The way we build software is undergoing a fundamental shift. We are moving away from the era of manual syntax and into the era of conceptual intent—what many are calling "Vibe Coding."

## What is Vibe Coding?

Vibe coding is the practice of describing the "vibe" or high-level behavior of a system, and letting intelligent tools handle the underlying implementation details. It's about focusing on the *what* and the *why*, rather than the *how*.

### Why Now?

The emergence of advanced Large Language Models has made it possible for machines to understand context and intent in ways that were previously impossible. We can now communicate with our development environments in natural language, describing complex UI patterns or data flows as if we were talking to a senior engineer.

## The Impact on Productivity

For experienced developers, vibe coding acts as a massive force multiplier. It allows them to prototype and iterate at speeds that were previously unimaginable. For newcomers, it lowers the barrier to entry, allowing them to build functional systems without needing to master every nuance of a programming language's syntax.

## The Future is Collaborative

Vibe coding doesn't replace the developer; it changes their role. The developer becomes a conductor, orchestrating a symphony of intelligent agents to bring a vision to life. It's a more creative, more intuitive, and ultimately more human way to build the future.`,
            author_name: 'David Miller',
            author_role: 'Lead Developer',
            author_avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200',
            date: 'March 5, 2024',
            readTime: '6 min read',
            category: 'Development',
            image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=1200'
        }
    ];

    const insertMany = db.transaction((posts) => {
        for (const post of posts) {
            insert.run(post);
        }
    });

    insertMany(initialPosts);
    console.log('Seeded initial blog posts into database.');
}

// Map db row to structured blog post
const mapDbRowToPost = (row: any) => ({
    id: row.id,
    title: row.title,
    excerpt: row.excerpt,
    content: row.content,
    author: {
        name: row.author_name,
        role: row.author_role,
        avatar: row.author_avatar,
    },
    date: row.date,
    readTime: row.readTime,
    category: row.category,
    image: row.image,
});

// Middleware to verify Supabase JWT
const verifyAuth = async (req: any, res: any, next: any) => {
    const authHeader = req.headers.authorization;
    if (!authHeader) {
        return res.status(401).json({ error: 'No authorization header' });
    }

    const token = authHeader.split(' ')[1];
    const { data: { user }, error } = await supabase.auth.getUser(token);

    if (error || !user) {
        return res.status(401).json({ error: 'Invalid token' });
    }

    req.user = user;
    next();
};

// Routes
app.get('/api/blogs', (req, res) => {
    try {
        const rows = db.prepare('SELECT * FROM blogs ORDER BY id DESC').all();
        res.json(rows.map(mapDbRowToPost));
    } catch (error: any) {
        console.error('Fetch blogs error:', error.message);
        res.status(500).json({ error: 'Failed to fetch blogs' });
    }
});

app.get('/api/blogs/:id', (req, res) => {
    try {
        const row = db.prepare('SELECT * FROM blogs WHERE id = ?').get(req.params.id);
        if (!row) return res.status(404).json({ error: 'Blog post not found' });
        res.json(mapDbRowToPost(row));
    } catch (error: any) {
        console.error('Fetch blog detail error:', error.message);
        res.status(500).json({ error: 'Failed to fetch blog post' });
    }
});

app.post('/api/blogs', verifyAuth, (req, res) => {
    try {
        const { title, excerpt, content, author, readTime, category, image } = req.body;
        const id = Date.now().toString();
        const date = new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });

        const stmt = db.prepare(`
      INSERT INTO blogs (id, title, excerpt, content, author_name, author_role, author_avatar, date, readTime, category, image)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    `);

        stmt.run(id, title, excerpt, content, author.name, author.role, author.avatar, date, readTime, category, image);
        res.status(201).json({ success: true, id });
    } catch (error: any) {
        console.error('Create blog error:', error.message);
        res.status(500).json({ error: 'Failed to create blog post' });
    }
});

const PORT = 3001;
app.listen(PORT, '0.0.0.0', () => {
    console.log(`Blog API server listening on http://0.0.0.0:${PORT}`);
});
