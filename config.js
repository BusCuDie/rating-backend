
const mongoose =require('mongoose');
async function connect (){
    const uri = "mongodb+srv://ratingapp:ratingapp12345@cluster0.sns68.mongodb.net/ratingApp?retryWrites=true&w=majority";
  try {
    await mongoose.connect(uri).then(()=>console.log('Đã kết nối tới cơ sỡ dữ liệu'));
  } catch (error) {
      
  }
}
module.exports = {
    MONGODB_USERNAME: "rateApp",
    MONGODB_PASSWORD: "rateApp",
    MONGODB_DB: "rateApp",
    connect
}