const express = require('express');
const router = express.Router();
const articleController = require('../controllers/article');
const articleAdminContoller = require('../controllers/admin/article');

router.get('/', articleController.getAllArticles)
router.get('/article/:slug', articleController.getArticleBySlug)
router.get('/articles/:author_id', articleController.getArticleByAuthor)

router.post('/admin/article/create', articleAdminContoller.createArticle);

module.exports = router;