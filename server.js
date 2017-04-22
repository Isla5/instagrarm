const express = require('express');
const http = require('http');
const path = require('path');
const body_parser = require('body-parser');
const json_pr = body_parser.json();
const form_pr = body_parser.urlencoded({extended: true});
const bcrypt_promises = require('./backend/bcrypt-promise');
const sqlite3 = require('sqlite3').verbose();

const db = new sqlite3.Database('instagrarm.db');
const appServer = express();
const port = 8081;

const db_promises = require('./backend/sqlite-promises')(db);

appServer.use(express.static(path.join(__dirname, 'public')));

appServer.post('/signUp', json_pr, form_pr, async (req, res)=>{
  const { email, password } = req.body;

  const email_query =
	await db_promises.get(`select email from account where email = $email`,
  	     {$email:email});

  if (email_query) {
    res.end('email already is registered');
    return;
  }

  const hash = await bcrypt_promises.hash(password, 10);
  try {
    await db_promises
      .run(`insert into account (email, hashed_password) values ($e, $h)`,
	   { $e: email, $h: hash});
     console.log(`New user registered- email: ${email}, password: ${hash}`);
    res.end('registered');
  } catch (err) {
    res.end();
  }
});

http.createServer(appServer).listen(port, function() {
   console.log(`Express server listening on port ${port}`);
});
