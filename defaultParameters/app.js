//Boot.dev CH3, L9 

//Complete function.  Should take 3 parameters(phoneNumber, name with default of "Anonymous", and avatar with default of "default.jpg")
//If phone number not passed, should return string "Invalid Phone Number". Otherwise, create new string by concatenating the given avatar to the string "/public/pictures/"

function createContact(phoneNumber, name = "Anonymous", avatar = "default.jpg") {
  
  if (phoneNumber == "") {
    return "Invalid phone number"
  }
  
  let avatarFilePath = "/public/pictures/" + avatar; 

  //return string in this format: Contact saved! Name: NAME, Phone number: PHONE_NUMBER, Avatar: AVATAR_FILEPATH.
  return `Contact saved! Name: ${name}, Phone number: ${phoneNumber}, Avatar: ${avatarFilePath}`
  
}

// don't touch below this line

export { createContact };