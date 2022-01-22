const idea=require('./idea');
const userRoute=require('./User');
const faqRoute=require('./faq');
const conservationRoute=require('./conservation');
function route(app){
   app.use('/api/ideas',idea);
    app.use('/api/users',userRoute);
    app.use('/api/faqs',faqRoute);
    app.use('/api/conservation',conservationRoute);
}
module.exports=route;