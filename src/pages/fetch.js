// api.js

import { MongoClient } from 'mongodb';

const uri = 'mongodb://127.0.0.1:27017/farmers'; // Update this with your MongoDB URI
const dbName = 'farmers';
const collectionName = 'products';

export async function fetch() {
  const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

  try {
    await client.connect();
    const database = client.db(dbName);
    const collection = database.collection(collectionName);

    // Fetch all documents from the collection
    const products = await collection.find().toArray();//cd frontend/deshboard-sidebar

    return products;
  } catch (error) {
    console.error('Error fetching products:', error);
    throw error; // Throw the error so it can be handled by the component
  } finally {
    await client.close();
  }
}


export default fetch
