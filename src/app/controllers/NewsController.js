class NewsController {
    // [GET] /news
    index(req, res) {
        res.render('news');
    }

    // [GET] /news/:slug
    show(req, res) {
        res.send('News detail.');
    }
}

const newController = new NewsController();
export default newController;
