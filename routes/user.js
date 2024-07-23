const { Router } = require("express");
const userMiddleware = require("../middleware/user");
const router = Router();
const {Admin, User, Course} = require("../db");
const jwt = require("jsonwebtoken");
const {JWT_SECRET} =  require("../config");


// User Routes
router.post('/signup',async (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    await User.create({
        username: username,
        password: password
    })

    res.json({
        message: 'user created successfully'
    })
});

router.post('/signin',  async (req, res) => {
    // Implement admin signup logic

    const username = req.body.username;
    const password = req.body.password;


    const user = await User.find({
        username,
        password
    })
    if(user){

    const token =jwt.sign({

        username

    },JWT_SECRET)


    res.json({
        token
    })

    }

});

router.get('/courses',async (req, res) => {
    // Implement listing all courses logic
    const response = await Course.find({});

    res.json({
        courses: response
    })
});

router.post('/courses/:courseId', userMiddleware, async (req, res) => {
    // Implement course purchase logic
    const username = req.username
    const courseId = req.params.courseId; // Extract courseId from params

    await User.updateOne({
        username: username
    }, {
        "$push": {
            purchasedCourses: courseId
        }
    })
    res.json({
        message: "Purchase complete!"
    })
     
});

router.get('/purchasedCourses', userMiddleware, async (req, res) => {
    // Implement fetching purchased courses logic
    const username = req.username

    const user = await User.findOne({
        username: username
    });

    console.log(user.purchasedCourses);
    const courses = await Course.find({
        _id: {
            "$in": user.purchasedCourses
        }
    });

    res.json({
        courses: courses
    })
});

module.exports = router