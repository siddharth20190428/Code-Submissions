const connection = require("./connection.js");

// GET /submissions
function getAllSubmissions(req, res) {
  connection.query("SELECT * FROM submissions", (err, results) => {
    if (err) {
      console.error("Error executing query: " + err.stack);
      return res.status(500).send("Error executing query");
    }

    if (!results || results.length === 0) {
      return res.status(404).send("No submissions found");
    }

    res.json(results);
  });
}

// POST /submissions/create
function createSubmission(req, res) {
  const data = req.body;

  // Check if required fields are present in the request body
  if (
    !data.username ||
    !data.code_language ||
    !data.stdin ||
    !data.source_code
  ) {
    return res.status(400).send("Missing required fields");
  }

  const checkTableQuery = "SHOW TABLES LIKE 'submissions'";
  connection.query(checkTableQuery, (checkErr, results) => {
    if (checkErr) {
      console.error("Error checking table existence: " + checkErr.stack);
      return res.status(500).send("Error checking table existence");
    }

    if (results.length === 0) {
      // If table doesn't exist
      const createTableQuery = `
        CREATE TABLE submissions (
          id INT AUTO_INCREMENT PRIMARY KEY,
          username VARCHAR(255) NOT NULL,
          code_language VARCHAR(255) NOT NULL,
          stdin TEXT NOT NULL,
          stdout TEXT NOT NULL,
          source_code TEXT NOT NULL,
          created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        )
      `;

      connection.query(createTableQuery, (createErr) => {
        if (createErr) {
          console.error("Error creating table: " + createErr.stack);
          return res.status(500).send("Error creating table");
        }

        // Table created, proceed with inserting data
        insertData();
      });
    } else {
      // Table exists, proceed with inserting data
      insertData();
    }
  });

  function insertData() {
    const insertQuery = `INSERT INTO submissions (username, code_language, stdin, stdout, source_code) VALUES ('${data.username}', '${data.code_language}', '${data.stdin}', '${data.stdout}', '${data.source_code}')`;

    connection.query(insertQuery, (insertErr, results) => {
      if (insertErr) {
        console.error("Error executing query: " + insertErr.stack);
        return res.status(500).send("Error executing query");
      }
      // Render results or do something with them
      res.json(results);
    });
  }
}

module.exports = {
  getAllSubmissions,
  createSubmission,
};
