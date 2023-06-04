const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://sharmapckhushal007:123456789Aa@cluster0.xycm5du.mongodb.net/', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('MongoDB connected');
}).catch((err) => {
  console.error('MongoDB connection error', err);
});
