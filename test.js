let profile =  { 
    experience : [1, 2, 3], 
    education: [1, 2, 3]
}


profile.education = profile.education.filter(item => item !== 1); 

console.log(profile); 
