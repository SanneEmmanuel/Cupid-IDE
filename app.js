// app.js by Dr Sanne Karibo
import express from 'express';
import fs from 'fs/promises';
import path from 'path';
import { exec } from 'child_process';
import bodyParser from 'body-parser';

const app = express();
const TMP = '/tmp/cupid';
await fs.mkdir(TMP, { recursive: true });

app.use(express.static('public'));
app.use(bodyParser.json());

// Save file
app.post('/api/save', async (req, res) => {
  const { name, content } = req.body;
  await fs.writeFile(path.join(TMP, name), content);
  res.json({ status: 'saved' });
});

// Load file
app.get('/api/load', async (req, res) => {
  const name = req.query.name;
  const content = await fs.readFile(path.join(TMP, name), 'utf-8');
  res.json({ content });
});

// Run JS code
app.post('/api/run', async (req, res) => {
  const { name } = req.body;
  exec(`node ${path.join(TMP, name)}`, (err, stdout, stderr) => {
    res.json({ output: stdout + stderr });
  });
});

// GitHub: Import
app.post('/api/github/import', async (req, res) => {
  const { repo, token } = req.body;
  const url = repo.replace('https://', `https://${token}@`);
  exec(`git clone ${url} ${TMP}`, () => res.json({ status: 'cloned' }));
});

// GitHub: Push
app.post('/api/github/push', async (req, res) => {
  const { token, message } = req.body;
  const cmd = `
    cd ${TMP} &&
    git config user.name "CupidIDE" &&
    git config user.email "cupid@example.com" &&
    git add . &&
    git commit -m "${message}" &&
    git push https://${token}@github.com
  `;
  exec(cmd, () => res.json({ status: 'pushed' }));
});

app.listen(3000, () => console.log('Cupid-IDE 💘 running at http://localhost:3000'));
