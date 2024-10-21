/*
======== Welcome (8 kyu) ========
Your start-up's BA has told marketing that your website has a large audience in Scandinavia and surrounding countries.

Marketing thinks it would be great to welcome visitors to the site in their own language.

Luckily you already use an API that detects the user's location, so this is an easy win.
The Task

    Think of a way to store the languages as a database. The languages are listed below so you can copy and paste!
    Write a 'welcome' function that takes a parameter 'language', with a type String, and returns a greeting - if you have it in your database. 
    It should default to English if the language is not in the database, or in the event of an invalid input.

The Database

Please modify this as appropriate for your language.

[ ('english', 'Welcome')
, ('czech', 'Vitejte')
, ('danish', 'Velkomst')
, ('dutch', 'Welkom')
, ('estonian', 'Tere tulemast')
, ('finnish', 'Tervetuloa')
, ('flemish', 'Welgekomen')
, ('french', 'Bienvenue')
, ('german', 'Willkommen')
, ('irish', 'Failte')
, ('italian', 'Benvenuto')
, ('latvian', 'Gaidits')
, ('lithuanian', 'Laukiamas')
, ('polish', 'Witamy')
, ('spanish', 'Bienvenido')
, ('swedish', 'Valkommen')
, ('welsh', 'Croeso')
]

Possible invalid inputs include:

IP_ADDRESS_INVALID - not a valid ipv4 or ipv6 ip address
IP_ADDRESS_NOT_FOUND - ip address not in the database
IP_ADDRESS_REQUIRED - no ip address was supplied

1) Parameter - A string, called language.
2) Return - A greeting string based on the language provided and the database above.
            If given an invalid language, return "Welcome".
3) Examples - see tests
4) Pseudocode - see comments

*/
export function greet(language: string): string {
  const languages = [
    "english",
    "czech",
    "danish",
    "dutch",
    "estonian",
    "finnish",
    "flemish",
    "french",
    "german",
    "irish",
    "italian",
    "latvian",
    "lithuanian",
    "polish",
    "spanish",
    "swedish",
    "welsh",
  ];

  const greeting = [
    "Welcome",
    "Vitejte",
    "Velkomst",
    "Welkom",
    "Tere tulemast",
    "Tervetuloa",
    "Welgekomen",
    "Bienvenue",
    "Willkommen",
    "Failte",
    "Benvenuto",
    "Gaidits",
    "Laukiamas",
    "Witamy",
    "Bienvenido",
    "Valkommen",
    "Croeso",
  ];

  return languages.includes(language)
    ? greeting[languages.indexOf(language)]
    : "Welcome";
}

// Tests
console.log(greet("english"), "Welcome");
console.log(greet("dutch"), "Welkom");
console.log(greet("IP_ADDRESS_INVALID"), "Welcome");
