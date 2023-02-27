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


// Musa Dawodu is a 19 years old Nigerian male who lives with his parents in Lekki, Lagos State. 
// Recently, he wrote the JAMB exam and had the following scores in his combination:
// ENG - 70
// GOVT - 85
// LIT - 82
// CRK - 94
// Using the factory method, implement a createPerson() factory function that takes name, age and location as arguments.
// Afterwards, create an object representing Musa from the factory function. 
// Also, implement a factory function createJambScores() that takes eng, govt, lit, crk as arguments. 
// Then create an object representing Muse’s JAMB scores. 
// Add the object as a property to Musa object you created above in (a) above
function createPerson (name, age, location){
    return {
        name : name,
        age : age,
        location: location,
    }
}
function createJambScores (eng, govt, lit, crk){
    return {
        eng : eng,
        govt : govt,
        lit : lit,
        crk : crk,
    }
}

let Musa = createPerson('Musa Dawodu', 19, 'Lekki, Lagos')
let MusaScore = createJambScores(70,85,82,94)
Musa.score = MusaScore

//Different ways you can clone an object? Give examples for each of them.
// METHOD 1: CLONE BY REMOVING IMMUTABILITY
let myobject = {
    p1: 10,
    p2: 30,
  };
  let object2 = myobject;
  myobject.p1 = 50;
  console.log(object2.p1);

  // METHOD 2: CLONE USING FOR LOOP
  function copy(myObject) {
    let objectCopy = {}; // objectCopy will store a copy of the mainObject
    let key;
    for (key in myObject) {
      objectCopy[key] = myObject[key]; // copies each property to the objectCopy object
    }
    return objectCopy;
  }
  const myObject = {
    a: 1,
    b: 3,
    c: {
      x: 5,
      y: 4,
    },
  }
  console.log(copy(myObject));

  // method 3: shallow copy

  let obj = {
    key1: "value1",
    key2: "value2"
  };
  let clonedObject = { ...obj };
  console.log(clonedObject);


  // METHOD 4; OBJECT ASSIGN

  let myobj = {
    key1: "value1",
    key2: "value2"
  };
  let myclonedObject = Object.assign({}, myobj);
  console.log(myclonedObject);