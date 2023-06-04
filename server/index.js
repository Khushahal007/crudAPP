
const express =require('express');
const cors =require ('cors');
const bodyParser =require('body-parser');
const db=require('./db');
const Routes=require('./Routes/route');

const app = express();




app.use(cors());
app.use(
  cors({
    origin: '*', // Replace with the appropriate client origin
    methods: ['GET', 'POST', 'PUT', 'DELETE'], // Specify the allowed HTTP methods
  })
);


app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }))

app.use('/', Routes);

const PORT = 8080;


app.listen(PORT, () => console.log(`Your server is running successfully on PORT ${PORT}`));
