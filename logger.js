let counter = 0;
exports.logger = (req,res,next) => {
   console.log(`counter : ${counter}`);
   counter++;
   next();
}
exports.date = (req,res,next) => {
    console.log(`date : ${new Date()}`);
    next();
 }

exports.method = (req,res,next) => {
    console.log(`method : ${req.method}`);
    next();
 }