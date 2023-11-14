const express = require('express')
const bodyParser = require('body-parser');
const cors = require('cors');
const { sequelize } = require('./models');

const app = express()
const PORT = 3000

app.use(cors());
app.use(bodyParser.json());


sequelize
  .authenticate()
  .then(() => {
    console.log('Database Connected.');
  })
  .catch((err) => {0
    console.error('Database are not connected:', err);
  });

const authRoutes = require('./routing/auth');

app.use('/auth', authRoutes);

app.get('/', (req, res) => {
    res.send('Hello World!')
  })
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});