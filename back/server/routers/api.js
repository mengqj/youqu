/**
 * api
 * 
 */
const express = require('express')
const router = express.Router()
const {
  authSession,
  cache,
  settings,
  service,
  validatorUtil
} = require('../../utils');
const authUser = require('../../utils/middleware/authUser');

const { AdminUser, ContentCategory, Content, ContentTag, User, Message, SystemConfig, UserNotify, Ads } = require('../lib/controller');
const _ = require('lodash');
const qr = require('qr-image')

function checkUserSession(req, res, next) {
  if (!_.isEmpty(req.session.user)) {
    next()
  } else {
    res.redirect("/");
  }
}

// 查询站点地图需要的信息
router.get('/sitemap/getList', (req, res, next) => {
  req.query.contentfiles = 'title';
  Content.getAllContens(req, res).then((contents) => {
    res.send({
      state: 'success',
      docs: contents
    })
  });
});

// 获取用户session
router.get('/users/session', (req, res) => {
  res.send({
    state: 'success',
    userInfo: req.session.user,
    logined: req.session.logined
  })
});

router.get('/getImgCode', User.getImgCode);
//获取用户ID
router.get('/users/getId',(req,res,next)=>{req.query.userName;next()},User.getId);
//获取用户
router.get('/users/getUser',(req,res,next)=>{req.query.searchkey;next()},User.getUsers);
// 查询文档列表
router.get('/content/getList', (req, res, next) => { req.query.state = true; next() }, Content.getContents);

// 查询简单的文档列表
router.get('/content/getSimpleListByParams', (req, res, next) => { req.query.state = true; next() }, Content.getContents)

// 查询文档详情
router.get('/content/getContent', Content.getOneContent)

//获得所有文档
router.get('/content/getAllContens',(req, res, next) => { req.query.state = true; next() }, Content.getAllContens)
//删除文章
router.get('/content/deleteContent',  Content.delContent)

// 更新喜欢文档
router.get('/content/updateLikeNum', checkUserSession, Content.updateLikeNum)

// 添加或更新文章
router.post('/content/addOne',(req, res, next) => {
  req.query.role = 'user';
  next();
}, Content.addContent)

router.post('/content/updateOne', checkUserSession, (req, res, next) => {
  req.query.role = 'user';
  next();
}, Content.updateContent)



//文章二维码生成
router.get('/qrImg', (req, res, next) => {
  let detailLink = req.query.detailLink;
  try {
    let img = qr.image(detailLink, { size: 10 });
    res.writeHead(200, { 'Content-Type': 'image/png' });
    img.pipe(res);
  } catch (e) {
    res.writeHead(414, { 'Content-Type': 'text/html' });
    res.end('<h1>414 Request-URI Too Large</h1>');
  }
});

// 用户登录
router.post('/users/doLogin', User.loginAction);

// 用户注册
router.post('/users/doReg', User.regAction);

// 修改用户信息
router.post('/users/updateInfo', User.updateUser);
// 修改密码
router.post('/users/updatePassword',  User.updatePassword);
// 获取用户通知信息
router.get('/users/getUserNotifys', (req, res, next) => { req.query.user = !_.isEmpty(req.session.user) ? req.session.user._id : req.query.author; next() }, UserNotify.getUserNotifys);

// 设置用户消息为已读
router.get('/users/setNoticeRead', (req, res, next) => { req.query.user = !_.isEmpty(req.session.user) ? req.session.user._id : req.query.author; next() }, UserNotify.setMessageHasRead);

// 删除用户消息
router.get('/users/delUserNotify', UserNotify.delUserNotify);
//根据ID获取通知消息
//router.get('/users/getOneNotifyByParams', (req, res,params) => { req.query.user = !_.isEmpty(req.session.user) ? req.session.user._id : req.query.author; next() }, UserNotify.getOneNotifyByParams);

// 获取用户参与话题
router.get('/users/getUserReplies', (req, res, next) => { req.query.user = !_.isEmpty(req.session.user) ? req.session.user._id : req.query.author; next() }, Message.getMessages);


// 获取用户发布文章
router.get('/users/getUserContents',(req, res, next) => { req.query.user; next() }, Content.getContents);

// 用户注销
router.get('/users/logOut', checkUserSession, User.logOut);

// 管理员登录
router.post('/admin/doLogin', AdminUser.loginAction);

// 获取类别列表
router.get('/contentCategory/getList', (req, res, next) => { req.query.enable = true; next() }, ContentCategory.getContentCategories)

// 获取标签列表
router.get('/contentTag/getList', ContentTag.getContentTags)

// 获取用户留言列表
router.get('/message/getList', Message.getMessages)
//发送留言
router.post('/message/post', Message.postMessages)

// 获取系统配置信息
router.get('/systemConfig/getConfig', (req, res, next) => { req.query.model = 'simple'; next() }, SystemConfig.getSystemConfigs)

// 根据ID获取广告列表
router.get('/ads/getOne', (req, res, next) => { req.query.state = true; next() }, Ads.getOneAd)

// 获取可见的所有广告信息
router.get('/ads/getAll', (req, res, next) => { req.query.state = true; next() }, Ads.getAds)


module.exports = router