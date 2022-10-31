const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


  rl.question(`What's your name? Nicknames are also acceptable :) `, (personName) => {
    rl.question(`What's an activity you like doing? `, (activity) => {
      rl.question(`What do you listen to while doing that? `, (musicName) => {
        rl.question(`Which meal is your favourite (eg: dinner, brunch, etc.)? `, (favouriteMeal) => {
          rl.question(`What's your favourite thing to eat for that meal? `, (favouriteFood) => {
            rl.question(`Which sport is your absolute favourite?`, (favouriteSport) => {
              rl.question(`What is your superpower? In a few words, tell us what you are amazing at! `, (nameSuperpower) => {

                console.log(`${personName} loves listening to ${musicName} while ${activity}, devouring ${favouriteFood} for ${favouriteMeal}, prefers ${favouriteSport} over any other sport, and is amazing at ${nameSuperpower}.`);
                rl.close();
              })
            })
          })
        })
      });
    });
  });


