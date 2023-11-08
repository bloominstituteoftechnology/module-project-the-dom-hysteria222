function moduleProject1() {
  const footer = document.querySelector('footer')
  const currentYear = new Date().getFullYear()
  footer.textContent = `© BLOOM INSTITUTE OF TECHNOLOGY ${currentYear}`

  // 👇 WORK WORK BELOW THIS LINE 👇

  // 👉 TASK 1 - Add a "widget" class name to widgets so CSS kicks in
          const qotdWidget = document.querySelector('.quoteoftheday');
          qotdWidget.classList.add('widget');
          const corpSpeakWidget = document.querySelector('.corporatespeak');
          corpSpeakWidget.classList.add('widget');
          const countdownWidget = document.querySelector('.countdown');
          countdownWidget.classList.add('widget');
          const friendsWidget = document.querySelector('.friends');
          friendsWidget.classList.add('widget');
  
  // 👉 TASK 2 - Build a "Quote of the Day" widget
        const randomIndex = Math.floor(Math.random() * quotes.length)
        // console.log(randomIndex)
        const randomQuote = quotes[randomIndex]
        // console.log(randomQuote)
        const qotdDiv = document.createElement('div');
        const authorDiv = document.createElement('div');
        document.querySelector('.quoteoftheday').appendChild(qotdDiv);
        document.querySelector('.quoteoftheday').appendChild(authorDiv);
        qotdDiv.textContent = randomQuote['quote'];
        if (randomQuote.date === null){
          authorDiv.textContent = `${randomQuote['author']} in an unknown date`;
        }
        else {
        authorDiv.textContent = `${randomQuote['author']} in ${randomQuote['date']}`;
        }
        
  // 👉 TASK 3 - Build a "Corporate Speak" widget
          // console.log(adverbs, nouns, verbs)
          const corpSpeakDiv = document.createElement('p');
          document.querySelector('.corporatespeak').appendChild(corpSpeakDiv);
          //adverb
          const randomNumberAdverb = Math.floor(Math.random() * adverbs.length);
          const randomAdverb = adverbs[randomNumberAdverb];
          //verb 
          const randomNumberVerb = Math.floor(Math.random() * verbs.length);
          const randomVerb = verbs[randomNumberVerb];
          //noun 
          const randomNumberNoun = Math.floor(Math.random() * nouns.length)
          const randomNoun = nouns[randomNumberNoun]
          corpSpeakDiv.textContent = `We need to ${randomVerb} our ${randomNoun} ${randomAdverb} in order to ${randomVerb} our ${randomNoun} ${randomAdverb}.`; 

  // 👉 TASK 4 - Build a "Countdown" widget
          const countdownDiv = document.createElement('p')
          document.querySelector('.countdown').appendChild(countdownDiv)
          let counter = 4;
          countdownDiv.textContent = 'T-minus 5...';
          function count() {
            countdownDiv.textContent = `T-minus ${counter}...`;
            counter--
            if (counter < 0){
              countdownDiv.textContent = 'Liftoff! 🚀';
            }
          }
          setInterval(count, 1000);
           
  // 👉 TASK 5 - Build a "Friends" widget
          const friendsDiv = document.createElement('p')
          document.querySelector('.friends').appendChild(friendsDiv)
          const randomPersonGenny = Math.floor(Math.random() * people.length);
          const randomPerson = people[randomPersonGenny];
          const year = randomPerson.dateOfBirth.split('', 4).join('');
          
          
          const friendsArray = randomPerson.friends.map((i) => {
             for (let i = 0; i < people.length; i++){
              if (randomPerson.friends[i] === people.id){
                const name = randomPerson.friends.map((i) =>{
                  if (randomPerson.friends[i] === people.id){
                    return people.fname
                  }
                })
                return name
              }
             }
          });

        
        console.log(people, randomPerson, friendsArray)
          friendsDiv.textContent = ` ${randomPerson.fname} ${randomPerson.lname} was born in ${year} and is friends with ${friendsArray}`



  // 👉 TASK 6 - Make it so user can tab through the widgets
        qotdWidget.setAttribute('tabindex', '0');
        corpSpeakWidget.setAttribute('tabindex', '0');
        countdownWidget.setAttribute('tabindex', '0');
        friendsWidget.setAttribute('tabindex', '0');





  // 👆 WORK WORK ABOVE THIS LINE 👆
}

// ❗ DO NOT WORK BELOW THIS LINE
// ❗ DO NOT WORK BELOW THIS LINE
// ❗ DO NOT WORK BELOW THIS LINE
if (typeof module !== 'undefined' && module.exports) module.exports = { moduleProject1 }
else moduleProject1()
