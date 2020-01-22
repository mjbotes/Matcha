
var config = require('config');
module.exports = async function ct(con){
    var user_table = "CREATE TABLE IF NOT EXISTS `users` ("+
    " `Id` INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,"+
    " `Username` VARCHAR(30) NOT NULL,"+
    " `Firstname` VARCHAR(30) NOT NULL,"+
    " `Surname` VARCHAR(30) NOT NULL,"+
    " `Age` BOOL NOT NULL,"+
    " `Gender` VARCHAR(1) NOT NULL,"+
    " `Province` VARCHAR(30) NOT NULL,"+
    " `Interested` VARCHAR(1) NOT NULL,"+
    " `Race` VARCHAR(1) NOT NULL,"+
    " `Email` VARCHAR(255) UNIQUE NOT NULL,"+
    " `Passwd` VARCHAR(255) NOT NULL,"+
    " `Company` VARCHAR(255) NOT NULL,"+
    " `Website` VARCHAR(255) NOT NULL,"+
    " `Location` VARCHAR(255) NOT NULL,"+
    " `Status` VARCHAR(255) NOT NULL,"+
    " `Skills` VARCHAR(255) NOT NULL,"+
    " `Bio` VARCHAR(255) NOT NULL,"+
    " `GitHub` VARCHAR(255) NOT NULL,"+
    " `Verified` BOOL NOT NULL DEFAULT 0,"+
    " `Notify` BOOL NOT NULL DEFAULT 0,"+
    " `reg_date` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP)";
    var experience_table = "CREATE TABLE IF NOT EXISTS `Experience` ("+
    " `Title` VARCHAR(255) NOT NULL,"+
    " `Company` VARCHAR(255) NOT NULL,"+
    " `Location` VARCHAR(255) NOT NULL,"+
    " `From` INT(10) NOT NULL,"+
    " `To` INT(10) NOT NULL,"+
    " `Current` BOOL NOT NULL,"+
    " `Description` VARCHAR(255) NOT NULL)";
    var Education_table = "CREATE TABLE IF NOT EXISTS `Education` ("+
    " `School` VARCHAR(255) NOT NULL,"+
    " `Degree` VARCHAR(255) NOT NULL,"+
    " `FieldOfStudy` VARCHAR(255) NOT NULL,"+
    " `From` INT(10) NOT NULL,"+
    " `To` INT(10) NOT NULL,"+
    " `Current` BOOL NOT NULL,"+
    " `Discription` VARCHAR(255) NOT NULL)";
    var Social_table = "CREATE TABLE IF NOT EXISTS `Social` ("+
    " `YouTube` VARCHAR(255) NOT NULL,"+
    " `Twitter` VARCHAR(255) NOT NULL,"+
    " `Facebook` VARCHAR(255) NOT NULL,"+
    " `LinkedIn` VARCHAR(255) NOT NULL,"+
    " `Instagram` VARCHAR(255) NOT NULL)";
    var UserSchema_table = "CREATE TABLE IF NOT EXISTS `UserSchema` ("+
    " `Email` VARCHAR(255) NOT NULL,"+
    " `Passwd` VARCHAR(255) NOT NULL,"+
    " `Avatar` VARCHAR(255) NOT NULL,"+
    " `reg_date` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP)";	
    var PostSchema_table = "CREATE TABLE IF NOT EXISTS `PostSchema` ("+
    " `User` VARCHAR(255) NOT NULL,"+
    " `Text` VARCHAR(255) NOT NULL,"+
    " `Name` VARCHAR(255) NOT NULL,"+
    " `Avatar` VARCHAR(255) NOT NULL,"+
    " `reg_date` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP)";	
    await con.query("USE " + config.database);
    await con.query(user_table, (err, result) => {
        if (err) throw err;
        console.log("user_table created");
    });
    await con.query(experience_table, (err, result) => {
        if (err) throw err;
        console.log("experience_table created");
    });
    await con.query(Education_table, (err, result) => {
        if (err) throw err;
        console.log("Education_table created");
    });
    await con.query(Social_table, (err, result) => {
        if (err) throw err;
        console.log("Social_table created");
    });
    await con.query(UserSchema_table, (err, result) => {
        if (err) throw err;
        console.log("UserSchema_table created");
    });
    await con.query(PostSchema_table, (err, result) => {
        if (err) throw err;
        console.log("PostSchema_table created");
    });
};