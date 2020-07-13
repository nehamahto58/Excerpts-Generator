$(document).ready(function(){
  
    var randomNumber;
    var randomWriting;
    
    function newQuote() {
      var writing = ["I always wish I could postpone the living process",
                   "Don't hate her just because you can't love her", 
                   "It's okay if your soul can't choose me as a mate. I am your admirer and will remain forever", 
                   "Despite the constant 'you can tell me anything's I get, I can't -not yet anyway", 
                   "Voices make no sense when your eyes says it all", 
                   "No matter what the ending be, I choose to suffer to have him in my life as long as I can", 
                   "You gave me tears that smudges my inked love letters", 
                   "Tears that I've hold for so long has now started to block my vision", 
                   "Nothing aches actually but it hurts everywhere", 
                   "He came to me, \n held my hands tightly, \n and as I got closer, \n I could feel his breath on my skin. \n He whispered softly \n I am yours and will be, forever. \n And when those words kept echoing \n I held my breath for a while to realize the most \nbeautiful thing that had just happened to me \n I got in a step closer and asked him \n if he would walk miles and miles with me \n He smiled knowing that \n he had stolen me from me, and then \n he lost himself in me \n and I lost myself in it...",
                   "Should I tell you about the one with the best smile that kept me awake at 2 in the morning or about the one who gave me insomnia and a broken home ", 
                   "I want to write about something deeper than love and sadder than death. You, perhaps?", 
                   "An unsatisfied soul noting down the reasons of why should I not end my life yet", 
                   "I was dependent on you to heal my wounds, fill the unfilled spaces and that's where I went wrong", 
                   "In a place where I can't tell myself I am safe and I am sure of breaking myself in the process of getting away from here", 
                   "Waiting for the sun to rise because this night is choking me", 
                   "Whats worse that suffering for nothing?", 
                   "My every tear has a question you would never listen to", 
                   "Broken hearts play a tune that only few can tap their feet onto", 
                   "Our eyes meeet, as if with a wish - May we never part", 
                   "Something wrong could be right, could be wonderful", 
                   "I want the time to stop by, the moment to freeze and the love to be in the air forever like this", 
                   "I want to be your strength rather than weakness. I want to be your soulmate rather than a partner. And believe me, I crave for your words more than your touch", 
                   "Forever is never possible for some people, I guess", 
                   "I thought 'WE' existed, if not today then somewhere in the past", 
                   "You and I were never we, You and I were just together", 
                   "All her smiles were the result of his organized lies", 
                   "Breaking of a heart doesn't make any sound, because if it did, he would have heard it for sure", 
                   "At this very moment, her heart is loud but she keeps it quiet", 
                   "Even his goodbye kiss felt like home", 
                   "Yesterday I let myself crack \n and burst into tears, \n saying this one last time.\n But I know tomorrow again\n I won't have gathered \n enough courage to fight back\n the urge to cry out.\n So on the days like this,\n I don't tell myself to remember\n how strong I have been,\n I simply let myself\nfall and break.\n I let my mascara that I painted\n so bravely around my eyes \n fade away from heavy tears... ", 
                   "She keeps quiet and \n notices things from a distance. \n She knew what it takes to just sit \n and listen understand and no judgement. \n As if she had been \nunnoticed, \n unheard, \n unhealed, \n and she doesn't hold that against anyone. \n Even at the verge of fading away \n she knows how to believe. \n And, so I say she is meant for perfection \n because she doesn't stop even when lost, \n she knows to find her way from within...", 
                   "If you ever miss me, follow the path that leads to me", 
                   "She dances to the rhythm of her heartbeats",
                   "There will come a day when the 20 years you got with me become enough for the next 20 years you will never have",
                    "I'm so thankful to have met you in this life <3",
                    "As much as I want to have that one last conversation, I can't and that breaks me",
                    "You're never too busy for your loved ones",
                    "Sometimes life hurts suddenly and one feels very lonely",
                    "When I first met you, \n you were a little bundle of joy. \n The world seemed right \n in your eyes so bright. \n But later I realized \n You are a poem of unsung \n and I yearn for the glory to \n write down your story. \n \n I don't know if you ever think of me \n the same way I think about you. \n I told you that I like you but \n Togetherness is not what I pray. \n I want you to be the way you are. \nAnd before I become a memory of someone you knew, \n I want to capture our moments to make it enough for the rest of my life...",
                    "I wrapped up all my feelings into a box and kept it in the corner of my heart and never opened up about it to anyone. I will carry these memories silently till the end of my life, it makes my heart bleed but I try to stay strong, as people say and expect me to be.",
                    "I try to write about other stuffs too but the old thing I end up writing about is you",
                    "And ik he isn't my forever, ik he isn't meant to be but you know what I really really want him to be \n -A girl in love",
                    "He is my world even though I am not his. Everyone said he isn't the one, still my heart chose to be his",
                    "I never fell in love, I grew into love with you. Over time, over long night talks, over the joy and tears shared. I choose to be yours over and over everyday and I guess thats what love is",
                    "He wants perfect, I can't be one \n I want permanent, he can't be one",
                    "I am not doing fine lately, I feel okay-ish today but I was so much worse yesterday",
                    "This life I have got was not supposed to be a burden but I feel it heavy on my shoulder and a burden on my heart",
                    "I can live with grief but never with guilt",
                    "Whatever you just said to me has made my heart heavy yet empty. I want to cry but my tears betray me at the moment.",
                    "What is this feeling? \n When I felt everything \n so hard and enough, \n he had no hints \n  what wonders his smile did, \n what it meant to actually have him \n by my side even if he was there \n just as a friend, and \n nothing more than that. \n Yes it used to hurt, but \n the sense of having him \n in any way gave peace \n to my heart that sought his love. \n Now when he is stepping inside \n I feel it's too late, and I am scared, \n because there are the crumbled pages \n on my diary that screams his name \n I want to go back and try to mend them \n But I can't, because he fits perfectly \n in those damaged pages and the broken pieces... \n",
                    "In life I have done things that had certain repercussions",
                    "I am scared of unknown, I am scared if I will ever genuinely feel happiness",
                    "I am called heartless because I choose not to share my feelings",
                    "Maybe she needs a friend more than a lover",
                    "Accept me as I am, here alive if this is not enough, don't cry as I leave",
                    "Can you wait, wait till I be sad so that I can be happy again, by myself or can you wait till I trust you enough to tell you all I've hidden for so long",
                    "Don't expect me to work so hard for name and fame because I am struggling bad to find peace",
                    "You're here because yesterday you said Today I won't give up",
                    "And my soul, it turns cold, extremely cold as days passes by, the warmth of reassurance also couldn't prevent it from dying within",
                    "Now I hold out a NO sign to whoever tries to knock on my door because my heart has burning questions that still wears me down",
                    "Being emotionally naked with someone is how she expresses her love",
                    "She is extremely uncomfortable with other people seeing her vulnerable or in pain. Her pains and emotions are hers and this is what she is used to",
                    "Courageous enough to stay? Stay.",
                    "I have perfected the art of pusing people away",
                    "Years ago, I was a girl who created tantrums everywhere not only at relatives, dinner table but even on roads. I was a complete mess that was completely seen from outside but now the mess I have inside makes no noise and the chaos are killing me ugly and nobody can see, neither can feel it",
                    "We all need that someone in our life who chooses to stay no matter how hard we try to push them out of our life. They stay and they console for, not that they are sympathetical, but because they care. They say they want to be there for us. What else do we need? All these words in action are enough for us to blindly lose ourselves in them",
                    "When you enter the room, it seems like there is some kind of magic in the air that calms me",
                    "I lose myself into you as you hold me around yourself",
                    "I treasured you since the moment I saw you",
                    "There will always be some people to whom we will keep special affection from very small and although we don't remember very well all the moments we live with them, we always carry them in our hearts",
                    "The quote 'Don't say I have been sad too, Listen' is so true. Whenever someone is trying to open up, try your very hardest to not make it about you. It will lead them away from truly telling you what they need to talk about, and will make them think,'oh, this is normal, I should probably stop telling people because they probably dont care'",
                    "We really never know when’s the last time we’re speaking/meeting anyone. So, learn to hold on tightly to all the moments and cherish them",
                    "While caring about you, I forgot to pamper myself",
                    "I keep on playing every single memory in my head until it drives me insane",
                    "Forgetting and moving on is a process...but hey..life is short..you dont want to live according to memories right?",
                    "I know its not okay when in the middle of the night, I choke up on my own tears and have to shut my mouth so that my sobs don't wake up my roommate. I know its not okay when in the middle of the lecture, I can't hold back my tears and I lock myself in the washroom and come out with a perfect smile. I know its not okay when I don't join the trip with my friends, so that I can finally cry out loud alone at home. Though,I always wished for a friend to magically appear out of thin air and hug me so tightly that all the broken pieces come together. I am empty. I am buried. But I am not dead yet. And there in this moment, I have suicidal tendencies but then I step back with all the knowledge and understandings I have. Sleeping with these thoughts and then waking up to same but yet wiping away all my tears with my own sleeve and still keeping hope that this world is a better place,still believe in love when everyone around me is busy finding someone beautiful, and not broken.",                  
                    "I needed to talk to people who could contain what I had to say. Because often you will talk to somebody and they will in response also respond with anxiety, they will respond with stress and then you feel guilty. It feels like you should not be doing this to the person because its too stressful for them too.",
                    "We live in a society where everyone is pretending to be ok all the time. We are just whitewashing everything. We are all scared, we all have fear yet for some reasons we all are pretending that we don't.",
                    "And ever since I tasted coffee, I have been in love",
                    "Find someone who looks at you the way she looks at coffee",
                    "Problems come without prior notice . Likewise, happiness too come without prior notice. The problem is we concentrate so hard on our problems and others' mistakes, that we ignore our own happiness. That's why forget whatever happened and concentrate on your own happiness.",
                    "When strong emotions are born they are often accompanied by pain",
                    "There's always a journal hidden under my pillow",
                    "I lost a brother that day. I lost a cheerleader, a mentor, a best friend. ",
                    "I also feel immensely thankful for all those “maybes” and “what ifs.",
                    "I just couldnt help but cry",
                    "But noone realized she was serious when she used humor to cover up her pain because she always said it with a smirk on her face.",
                    "The intrinsic fear of getting comfortable with another person is,'WHAT DO I DO IF THEY LEAVE?'",
                    "Sometimes we need to be broken to come back as a whole again.",
                    "Am I an aimless boat, That will drown one day? Is my brain a useless train Without a driver to show the lane? Are my eyes, signs that show I will be a loser one day? Why am I so confused? What can be my destiny",
                    "....but I can't die easily, not that easy. God gave us life because we are strong enough to live it.",
                    "Does he know that you like silences? That they don’t make you uncomfortable?",
                    "It takes courage to make yourself free from 'what people will say/think, if i do this?'",
                    "Why not tell people how wonderful they are because we can?",
                    "But I had felt each and every entity of you from zero to infinity and you ask me to forget you?",
                    "They speak when you do something. They speak when you don't do anything. So its better to do whatever you want anyway and let them say.",
                    "Most of the friendships starts with a smile and an eye contact only",
                    "There is 'before' and 'after between us now'",
                    "My definition of forever is you. And you were a lie",
                    "There is a story you can read in everyone's eyes"
                  ];
     
      randomNumber = Math.floor((Math.random()*writing.length));
      randomWriting = writing[randomNumber];
     
      
      $(".quote").text(randomWriting);
     
    };
    
    $("#newQuote").on("click", function(){
      newQuote();
    });
    
   $("#tweet").on("click", function(){
     window.open("https://twitter.com/intent/tweet?text="+randomWriting + " ");
   });
    
    
  });