const profileFields = {}; 
const skills = "HTML, CSS, PHP, Ruby"; 

//{ skills: 'HTML,CSS,PHP,Ruby' }
profileFields.skills = skills
// { skills: [ 'HTML', 'CSS', 'PHP', 'Ruby' ] }
.split(',')
// trims white space 
.map(skill => skill.trim())

console.log(profileFields); 