require('dotenv').config()
let express = require('express');
const sequelize = require('./db');
const models = require('./models/models');
const cors = require('cors');
const fileUpload = require('express-fileupload');
const router = require('./routes/index');

const errorHandler = require('./middleware/ErrorHandlingMiddleware')
const path = require('path');
let PORT = process.env.PORT || 5000;

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static(path.resolve(__dirname, 'static')));
app.use(fileUpload({}));
app.use('/api', router);


//Обработка ошибок, последний middleware
app.use(errorHandler);

const start = () => {
   try {
      sequelize.authenticate();
      sequelize.sync();
      app.listen(PORT, () => console.log(`server running on port ${PORT}`));
   } catch(e) {
      console.log(e);
   }
}
start();