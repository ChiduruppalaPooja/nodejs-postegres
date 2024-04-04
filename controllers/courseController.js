const Course = require('../models/course');



exports.getCourses = async(req,res)=>{
    try{
        const allCourses = await Course.findAll()
        res.status(200).json(allCourses); 
    }catch(err){
        res.status(500).json(error);
    }
}

exports.postCourses = async (req,res)=>{
    try{
        const title = req.body.title;
        const duration =req.body.duration;
        const newCourse = await Course.create({
            title,
            duration,   
        });
        res.status(200).json(newCourse)
    }catch(err){
        // console.log(err);
        res.status(500).json({err})
    }

}

exports.updateCourses = async (req,res)=>{
    try{
        const id = req.params.id;
        const title=req.body.title;
        const duration=req.body.duration;
        const updatedCourse= await Course.findByPk(id);
        if (!updatedCourse) {
            return res.status(404).json({ error: 'Course not found' });
        }
            updatedCourse.title = title;
            updatedCourse.duration = duration;
            updatedCourse.save();
       
        res.status(200).json(updatedCourse);
    }catch(err){
        // console.log(err);
        res.status(500).json({err})
    }
}


exports.deleteCourse = async(req,res)=>{
    try{
        const id = req.params.id;
        const deleteCourse = await Course.findByPk(id);
        await deleteCourse.destroy();
        res.status(200).json(deleteCourse);
    }catch(err){
        // console.log(err);
        res.status(500).json({err})
    }
}


