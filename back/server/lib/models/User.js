/**
 * Created by Administrator on 2017/5/19.
 */
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var shortid = require('shortid');
var moment = require('moment')

var UserSchema = new Schema({
    _id: {
        type: String,
        
        'default': shortid.generate
    },
    enable: { type: Boolean, default: true }, //用户是否有效
    name: String,
    userName: String,
    password: String,
    email: String,
    qq: Number,
    phoneNum: Number,
    date: { type: Date, default: Date.now },
    logo: { type: String, default: "/upload/images/defaultlogo.png" },
    bgLogo:{ type: String, default: "/upload/images/defaultbglogo.jpg"},//背景图片
    group: { type: String, default: "0" },
    gender: String,
    province: String, // 所在省份
    city: String, // 所在城市
    year: Number, // 出生年
    birth:{ type: Date,default:"1991-01-01"},
    openid: String,   // 针对qq互联
    retrieve_time: { type: Number } // 用户发送激活请求的时间

});

UserSchema.set('toJSON', { getters: true, virtuals: true });
UserSchema.set('toObject', { getters: true, virtuals: true });

UserSchema.path('date').get(function (v) {
    return moment(v).format("YYYY-MM-DD HH:mm:ss");
});

var User = mongoose.model("User", UserSchema);


module.exports = User;
