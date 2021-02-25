 const profile = {
    "skills": [
        "HTML",
        "CSS",
        "JS",
        "PHP",
        "NodeJS"
    ],
    "_id": "60373077cfcf2d830281f49d",
    "user": "6036c20b98b3245a0c3aecee",
    "company": "Goodtime",
    "website": "cariny@dev.com",
    "location": "Oakland, CA",
    "bio": "I am a developer",
    "status": "cariny@github.com",
    "experience": [
        {
            "current": true,
            "_id": "6038175aeee9d09bfe1c28bd",
            "title": "Instructor & Senior Developer",
            "company": "Goodtime ",
            "location": "SF",
            "from": "2010-08-10T07:00:00.000Z",
            "description": "Create objects and courses on web development"
        },
        {
            "current": true,
            "_id": "603815267cefdd994394576a",
            "title": "Instructor & Senior Developer",
            "company": "Goodtime ",
            "location": "SF",
            "from": "2010-08-10T07:00:00.000Z",
            "description": "Create objects and courses on web development"
        },
        {
            "current": true,
            "_id": "603814d37cefdd9943945769",
            "title": "Instructor & Senior Developer",
            "company": "Goodtime ",
            "location": "SF",
            "from": "2010-08-10T07:00:00.000Z",
            "description": "Create objects and courses on web development"
        },
        {
            "current": true,
            "_id": "603814707cefdd9943945768",
            "title": "Instructor & Senior Developer",
            "company": "Goodtime ",
            "location": "SF",
            "from": "2010-08-10T07:00:00.000Z",
            "description": "Create objects and courses on web development"
        },
        {
            "current": true,
            "_id": "603814337cefdd9943945767",
            "title": "Instructor & Senior Developer",
            "company": "Goodtime ",
            "location": "SF",
            "from": "2010-08-10T07:00:00.000Z",
            "description": "Create objects and courses on web development"
        }
    ],
    "education": [],
    "date": "2021-02-25T05:07:03.677Z",
    "__v": 5
}

// array of experience 
const removeIndex = profile.experience; 
// console.log(removeIndex); 
// id of experience objects 
const removeId = removeIndex.map(item => item._id); 
// console.log(removeId); 
const removeIndexOf = removeId.indexOf('603814337cefdd9943945767'); 
console.log(removeIndexOf);

const updatedProfile = profile.experience.splice(removeIndexOf, 1);
console.log(updatedProfile);
console.log(profile); 


//.indexOf(req.params.exp_id);
// { exp_id: '603814337cefdd9943945767' }

