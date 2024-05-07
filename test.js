const axios = require('axios');
const { test, expect } = require('@jest/globals');

test('GET request', async () => {
  const response = await axios.get('https://jsonplaceholder.typicode.com/posts/1');
  
  expect(response.status).toBe(200);
  expect(response.data.id).toBe(1);
});