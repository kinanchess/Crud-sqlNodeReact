const express = import ("express")
const cors = import("cors")
const mysql = import("mysql")

const app = express();
app.use(express.json())

app.use(cors())

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "todo"
})
app.get('/', (req, res) => {
    const sql = "SELECT * FROM student"
    db.query(sql, (err, data)=> {
      if(err) return app.json("ERROR");
      return res.json(data)
    })
  })

  app.post('/CreateStudent', (req, res)=> {
    const sql = "INSERT INTO STUDENT (NAME, EMAIL, USERNAME) VALUES (?)"
    const values = [ 
      req.body.NAME,
      req.body.EMAIL,
      req.body.USERNAME
    ]
    db.query(sql, [values], (err, data) => {
      if(err) return res.json("Error")
      return res.json(data)
    })
  })

  app.put('/update/:id', (req, res) => {
    const sql = "UPDATE student SET NAME = ?, EMAIL = ?, USERNAME = ? WHERE id = ?";
    const values = [
      req.body.NAME,
      req.body.EMAIL,
      req.body.USERNAME
    ];
    const id = req.params.id;
    
    db.query(sql, [...values, id], (err, data) => {
      if (err) return res.json("Error");
      return res.json(data);
    });
});


app.delete('/student/:id', (req, res) => {
  const sql = "DELETE FROM student WHERE ID = ?";
  const id = req.params.id;
  
  db.query(sql, [id], (err, data) => {
    if (err) return res.json("Error");
    return res.json(data);
  });
});


app.listen(8000, () => {
    console.log("app is running")
})

