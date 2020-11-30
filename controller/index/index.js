const { db } = require('../../configs/db');

//Fetch homepage based on loggedin status
exports.indexpage = async (req, res) => {
    res.render('index', { pagename: 'Twen - Where books and readers meet' });
}