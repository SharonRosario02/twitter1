const express = require('express')
const cors = require('cors')
const app = express()
const port = process.env.PORT || 5000
const { MongoClient, ServerApiVersion } = require('mongodb');

app.use(cors())
app.use(express.json)

const uri = 'mongodb+srv://sharonrosario362:XWGH3HC9xKc41EGX@cluster0.jdh2tky.mongodb.net/?retryWrites=true&w=majority';

// Create a MongoClient
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true,
  serverApi: {
    version: '1',
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    // Connect to the MongoDB instance
    await client.connect();
    console.log('Connected to MongoDB successfully!');

    // Perform operations on your database here
    const postCollection = client.db('database').collection('posts');
    const userCollection = client.db('database').collection('users');

    // Get all posts
    app.get('/post', async (req, res) => {
      const post = await postCollection.find().toArray();
      res.send(post); 
    });

    // Create a new post
    app.post('/post', async (req, res) => {
      console.log(req.body);
      const post = req.body;
      const result = await postCollection.insertOne(post);
      res.send(result.ops); // Send the inserted document(s)
    });
    
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
  }
}
run().catch(console.dir);

app.get('/', (req, res) => {
  res.send('hello from twitter!')
})

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

