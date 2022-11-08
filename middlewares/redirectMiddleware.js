module.exports = (req, res, next) => {
  if (req.session.userID) {
    return res.redirect('/');
  }
  next();
};
// module.exports = (req, res, next) => {
//   if (req.session.userID) {
//     return res.redirect('/');
//   }
//   next();
// };
