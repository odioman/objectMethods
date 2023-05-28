//1
//Write a JavaScript program to list the properties of a JavaScript object.
//Sample Output: name,sclass,rollno
var student = {
    name : "David Rayy",
    sclass : "VI",
    rollno : 12, 
    deskNumber: 0,
    };
    
    function objectKeys(obj) {
        return Object.keys(obj)
    }
    
    //console.log(objectKeys(student))
    
    //2
    //Write a JavaScript program to delete the rollno property from the following object. Also print the object before or after deleting the property.
    
    function deleteProp(obj) {
      delete obj.rollno
      return obj
    }
    
    //console.log(deleteProp(student))
    
    //3
    //Write a JavaScript program to get the length of a JavaScript object.
    
    function objLength(obj) {
      return Object.keys(obj).length
    }
    
    //console.log(objLength(student))
    
    //4 
    //Write a JavaScript program to display the reading status (i.e. display book name, author name and reading status) of the following books.
    
    var library = [ 
       {
           author: 'Bill Gates',
           title: 'The Road Ahead',
           readingStatus: true
       },
       {
           author: 'Steve Jobs',
           title: 'Walter Isaacson',
           readingStatus: true
       },
       {
           author: 'Suzanne Collins',
           title:  'Mockingjay: The Final Book of The Hunger Games', 
           readingStatus: false
       }];
    
    function readingBook(obj) {
      for (let i = 0; i < library.length; i++) {
        if (obj[i].readingStatus) {
         console.log("You are reading " + obj[i].title + " by " + obj[i].author) 
        } else {
         console.log("You are not reading " + obj[i].title + " by " + obj[i].author) 
        }
      }
      
    }
    
    //console.log(readingBook(library))
    
    //14
    //Write a JavaScript function to retrieve all the values of an object's properties.
    
    function objValues(obj) {
        return Object.values(obj)
    }
    
    //console.log(objValues(student))
    
    //15
    //Write a JavaScript function to convert an object into a list of `[key, value]` pairs.
    
    function objEntries(obj) {
      return Object.entries(obj)
    }
    
    //console.log(objEntries(student))
    
    //16
    // Write a JavaScript function to get a copy of the object where the keys become the values and the values are the keys.
    
    //return an object
    
    function switchKeyAndValue(obj) {
      const newObj = {};
      for (let key in obj) {
        console.log('key: ', key)
        const value = obj[key]
        newObj[value] = key
        console.log(newObj[value])
      }
      console.log(obj);
      console.log(newObj)
    }
    
    switchKeyAndValue(student)
    
    //17 
    //Write a JavaScript function to check whether an object contains a given property.
    
    function objLookup(obj, prop) {
        if (obj[prop] !== undefined) {
          return true;
        } else {
          return false;
        }
    }
    
    console.log(objLookup(student, 'deskNumber')) 
    
    //https://github.com/LearnTeachCode/pair-partners/issues/42
    
    const myPenguin = { name: 'Whiteblack', origin: 'Whiteblack the Penguin Sees the World', author: 'H.A. Rey and Margret Rey' }
    
    //20 
    //Use console.log() to print the penguin's name to the console as part of a welcome message, like "Hello, I'm a penguin and my name is [NAME HERE]!"
    
    console.log("Hello, I'm a penguin and my name is " + myPenguin.name);
    
    //21
    //Write another line of code that adds a new property to your penguin called canFly and set it to false. (Note: Don't modify your penguin-creation code that you wrote above! Do this step in a separate line of code.)
    
    myPenguin.canFly = false;
    
    //22
    //22. Add a method to your penguin called chirp that prints to the console: "CHIRP CHIRP! Is this what penguins sound like?" (Note: Again, don't modify your previous code! Do this step by writing a new line of code.)
    
    myPenguin.chirp = console.log("CHIRP CHIRP! Is this what penguins sound like?")
    
    //23 
    //Add another method to your penguin called sayHello that prints to the console the same message from step 20 above. But this time, be sure to use the mystical, magical, all-powerful this keyword to access your penguin's name, so that way the sayHello method could potentially work for any penguin that has a name!
    
    myPenguin.sayHello = function() {
      console.log("Hello, I'm a penguin and my name is " + this.name)
    }
    
    //24 
    //Next, call your penguin's sayHello() method and make sure that it works! (Hint: if you need an example of what it looks like when you call a method of an object, look at console.log() -- that's how you call the log() method of the console object!)
    
    myPenguin.sayHello();
    
    //25
    //Without modifying any of your previous code, change the penguin's name to "Penguin McPenguinFace" and then call your penguin's sayHello() function one more time to make sure it still works.
    
    myPenguin.name = "Penguin McPenguinFace"
    
    myPenguin.sayHello()
    
    //26
    //Write another method called fly, and inside that method, use an if / else statement to print "I can fly!" to the console if your penguin's canFly property is true, or "No flying for me!" if its canFly property is false.
    
    myPenguin.fly = function() {
      if (myPenguin.canFly) {
        console.log("I can fly!")
      } else {
        console.log("No flying for me")
      }
    }
    
    //27
    // Call your penguin's fly() method and make sure it works!
    
    myPenguin.fly()
    
    //28 
    //Change the canFly property to true -- again, without modifying any of your previous code!
    
    myPenguin.canFly = true;
    
    //29
    // Now call your penguin's fly() method again and make sure it works as expected!
    
    myPenguin.fly()
    
    //30
    //Write a for ... in loop to print each key to the console. 
    
    function forInLoop(obj) {
      for (let key in obj) {
        console.log(key)
      }
    }
    
    console.log(forInLoop(myPenguin))
    
    //31
    // Write another for ... in loop to print the value of each key to the console. (Hint: You'll need to use bracket notation to access the values this way, instead of dot notation!)
    
    function forInLoopForValues(obj) {
      for (let key in obj) {
        console.log(obj[key])
      }
    }
    
    console.log(forInLoopForValues(myPenguin))
    
    //Medium Object Problem Set

    function isPlainObject(obj) {
        if (obj !== null && !Array.isArray(obj)) {
          return true
        } else {
          return false
        }
      }
      
      //console.log(isPlainObject({a: 1}))
      
      function makePairs(obj) {
        return Object.entries(obj)
      }
      
      //console.log(makePairs({a: 1, b:2}))
      
      function without(obj, delProp) {
        delete obj[delProp]
        return obj
      }
      //const data = { a: 1, b: 2 };
      //console.log(without(data, 'b'))
      
      function isEmpty(obj) {
        if (Object.keys(obj).length === 0) {
          return true
        }
      
        return !Object.keys(obj).filter((key) => obj[key] || obj[key] === 0 || obj[key] === false).length
      }
      
      //const data = { a: 1, b: undefined };
      //const data2 = { a: undefined };
      //console.log(isEmpty(data)); // false
      //console.log(isEmpty(data2)); // true
      
      function isEqual(Obj, Obj2) {
       if (Object.keys(Obj).length !== Object.keys(Obj2).length) {
         return false
       }
        return !Object.keys(Obj).filter((key) => Obj[key] !== Obj2[key]).length
      } 
      
      const data = { a: 1, b: 1 };
      const data2 = { a: 1, b: 1 };
      const data3 = { a: 1, b: 2 };
      //console.log(isEqual(data, data2)); // true
      //console.log(isEqual(data, data3)); // false
      
      
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    //Leetcode Majority Element
    /**
     * @param {number[]} nums
     * @return {number}
     */
    /* var majorityElement = function(nums) {
        //use reduce to find the number of times an element appears
        //choose the one that appears more than n/2 times
    
        const numsCountObj = nums.reduce((acc, numberElement) => {
            if (acc[numberElement]) {
                acc[numberElement] += 1
            } else {
                acc[numberElement] = 1
            }
            return acc
        },{}) 
        
        const half = Math.ceil(nums.length/2)
        console.log("half: ", half)
        console.log('numsCountObj: ', numsCountObj)
    
        //if value from key-value pair is more than half, return key
    
        for (let key in numsCountObj) {
            if (numsCountObj[key] >= half) {
                return key
            }
        }
    } */