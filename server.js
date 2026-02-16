const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 3000;
const DATA_FILE = path.join(__dirname, 'data.json');

// Serve static files (index.html, etc.)
app.use(express.static(__dirname));
app.use(express.json());

// Read counter from file
function readData() {
  try {
    return JSON.parse(fs.readFileSync(DATA_FILE, 'utf8'));
  } catch {
    return { count: 0 };
  }
}

// Write counter to file
function writeData(data) {
  fs.writeFileSync(DATA_FILE, JSON.stringify(data, null, 2));
}

// GET — return current count
app.get('/api/interested', (req, res) => {
  const data = readData();
  res.json({ count: data.count });
});

// POST — increment count
app.post('/api/interested', (req, res) => {
  const data = readData();
  data.count++;
  writeData(data);
  res.json({ count: data.count });
});

app.listen(PORT, () => {
  console.log(`DonutStock running at http://localhost:${PORT}`);
});
