import Course from '../models/Course.js';

class SiteController {
    // [GET] /
    async index(req, res) {
        try {
            const courses = await Course.find({});
            res.json(courses);
        } catch (error) {
            res.status(400).json({ error: 'error' });
        }
    }

    // [GET] /search
    search(req, res) {
        res.render('search');
    }
}

const siteController = new SiteController();
export default siteController;
