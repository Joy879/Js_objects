//Using the constructor method, create an InstagramPost() constructor function that takes the properties below as arguments.
//Handle of author
// content, 
//An image link posted by the author of the post
//Number of views, 
//Number of likes,

class InstagramPost {
    constructor(handle, content, image, views, likes) {
        this.authorhandle = handle;
        this.content = content;
        this.imagelink = image;
        this.numviews = views;
        this.numlikes = likes;
    }
}

// Create 2 Instagram post objects from the constructor function you created above

const post1 = new InstagramPost('@lima', "Keep moving forward!", "http://myimage.com", 10, 2)
const post2 = new InstagramPost('@exe', "Are you happy?", "http://myimageeds.com", 45, 90)


//Musa Dawodu is a 19 years old Nigerian male who lives with his parents in Lekki,
// Lagos State. 
//Recently, he wrote the JAMB exam and had the following scores in his combination:
//ENG - 70
// GOVT - 85
// LIT - 82
// CRK - 94
// Using the factory method, implement a createPerson() factory function that takes name, age and location as arguments. Afterwards, create an object representing Musa from the factory function. 
//Also, implement a factory function createJambScores() that takes eng, govt, lit, crk as arguments. Then create an object representing Muse’s JAMB scores. 
//Add the object as a property to Musa object you created above in (a) above