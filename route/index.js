const idea=require('./idea');
const userRoute=require('./User');
const faqRoute=require('./faq');
function route(app){
   app.use('/api/ideas',idea);
    app.use('/api/users',userRoute);
    app.use('/api/faqs',faqRoute);
}
module.exports=route;