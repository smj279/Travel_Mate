'use strict';
const { Model } = require('sequelize');
const bcrypt = require('bcrypt');
const validator = require('validator');

module.exports = (sequelize, DataTypes) => {
  class Client extends Model {
    static associate(models) {
      // Define associations if needed
    }

    static async signup(name, email, password, phone ,address) {
      try {
        
        if (!password || !email || password.trim() === '' || email.trim() === '') {
          throw new Error('All fields are required');
        }

        if(!validator.isEmail(email)) {
          throw new Error('Invalid email');
        }
        
        const existingUser = await this.findOne({ where: { email } });
        if (existingUser) {
          throw new Error('Email already in use');
        }
        const hashedPassword = await bcrypt.hash(password, 10);
        console.log(name, email, password, phone ,address);
        const user = await this.create({ name, email, password: hashedPassword, phone ,address});
    
        return user;
      } catch (error) {
        throw error;
      }
    }
    

    static async login(email, password) {
      try {
        const user = await this.findOne({ where: { email } });
        if (!user) throw new Error('User not found');

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) throw new Error('Incorrect password');

        return user;
      } catch (error) {
        throw error;
      }
    }
  }



  Client.init(
    {
    name: {
      type:DataTypes.STRING,
      allowNull:false,
    },  
    email:{
      type:DataTypes.STRING,
      allowNull:false,
      unique:true
    }, 
    password:{
      type:DataTypes.STRING,
      allowNull:false,
    },  
    phone:{
      type:DataTypes.STRING,
      allowNull:false,
    },  
    address:{
      type:DataTypes.STRING,
      allowNull:false,
    } 
  }, 
  {
    sequelize,
    modelName: 'Client',
  }
);
  return Client;
};








