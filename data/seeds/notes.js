
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('notes').del()
    .then(function () {
      // Inserts seed entries
      return knex('notes').insert([
        {
          "_id": "_5z4at91l1",
          "tags": 
            "python,established,ruby,javascript",
          "title": "What is Lorem Ipsum?",
          "textBody": "😃It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).\n\n\nIt is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
          "__v": 0,
          "time": "2018-08-23T20:13:34.539Z",
          "length": 1231,
          "index": 0
        },
        {
          "_id": "_abo3amwau",
          "tags": 
            "javascript,sheets",
          "title": "How did Project Week Go? ",
          "textBody": "😁👀🔥🔥The project went pretty well. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
          "__v": 0,
          "time": "2018-08-23T20:17:56.945Z",
          "length": 920,
          "index": 1
        },
        {
          "_id": "_troggmewi",
          "tags": 
            "programming,coding",
          "title": "Where can I get some?",
          "textBody": "✔🏀🏀There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which",
          "__v": 1,
          "time": "2018-08-23T20:21:58.944Z",
          "length": 614,
          "index": 2
        },
        {
          "_id": "_9y0eqwalx",
          "tags": 
            "test,python,sheets",
          "title": "Whats your plans?",
          "textBody": " 🤣🎶😍😍 Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
          "__v": 1,
          "time": "2018-08-23T20:24:45.294Z",
          "length": 2306,
          "index": 3
        },
        {
          "_id": "_cfuo2sje4",
          "tags": 
            "poetry,rhyme,javascript",
          "title": "Poetry ",
          "textBody": "🌹Roses are Red Violets are blue  Just finished Project week at Lambda School. 🥩😀😆😎\nThe Wise by Countee Cullen\nDead men are wisest, for they know\nHow far the roots of flowers go,\nHow long a seed must rot to grow.\n\nDead men alone bear frost and rain\nOn throbless heart and heatless brain,\nAnd feel no stir of joy or pain.\n\nDead men alone are satiate;\nThey sleep and dream and have no weight,\nTo curb their rest, of love or hate.\n\nStrange, men should flee their company,\nOr think me strange who long to be\nWrapped in their cool immunity.",
          "__v": 1,
          "time": "2018-08-23T20:30:02.603Z",
          "length": 537,
          "index": 4
        },
        {
          "_id": "_g295awagl",
          "tags": 
            "poetry,sheets,coding",
          "title": "Langston Hughes 1902-1967",
          "textBody": "✍📝📝 Born in Joplin, Missouri, James Langston Hughes was the great-great-grandson of Charles Henry Langston (brother of John Mercer Langston, the first Black American to be elected to public office). He attended Central High School in Cleveland, Ohio, where he began writing poetry in the eighth grade. His father would discourage him from pursuing writing as a career, in favour of something 'more practical'. Langston's tuition fees to Columbia University were paid on the grounds that he study engineer..\nLife Is Fine by Langston Hughes\nI went down to the river,\nI set down on the bank.\nI tried to think but couldn't,\nSo I jumped in and sank.\n\nI came up once and hollered!\nI came up twice and cried!\nIf that water hadn't a-been so cold\nI might've sunk and died.\n\nBut it was Cold in that water! It was cold!\n\nI took the elevator\nSixteen floors above the ground.\nI thought about my baby\nAnd thought I would jump down.\n\nI stood there and I hollered!\nI stood there and I cried!\nIf it hadn't a-been so high\nI might've jumped and died.\n\nBut it was High up there! It was high!\n\nSo since I'm still here livin',\nI guess I will live on.\nI could've died for love--\nBut for livin' I was born\n\nThough you may hear me holler,\nAnd you may see me cry--\nI'll be dogged, sweet baby,\nIf you gonna see me die.\n\nLife is fine! Fine as wine! Life is fine!",
          "__v": 0,
          "time": "2018-08-23T20:33:17.690Z",
          "length": 1336,
          "index": 5
        },
        {
          "_id": "_bkeuivwnz",
          "tags": 
            "ruby,coding,rhyme,programming",
          "title": "Maya Angelou (1928 - present)\n",
          "textBody": "📝✍😍Maya Angelou was born Marguerite Johnson in St. Louis, Missouri, on April 4, 1928. She grew up in St. Louis and Stamps, Arkansas. She is an author, poet, historian, songwriter, playwright, dancer, stage and screen producer, director, performer, singer, and civil rights activist. She is best known for her autobiographical books: All God's Children Need Traveling Shoes (1986), The Heart of a Woman (1981), Singin' and Swingin' and Gettin' Merry Like Christmas (1976), Gather Together in My Name (197..",
          "__v": 0,
          "time": "2018-08-23T20:34:27.233Z",
          "length": 507,
          "index": 6
        },
        {
          "_id": "_uqepbsoef",
          "tags": 
            "test,python,coding,poetry,rhyme",
          "title": "Edgar Allan Poe (1809 - 1849)\n",
          "textBody": "📝🦅The Raven by Edgar Allan Poe\nOnce upon a midnight dreary, while I pondered, weak and weary, \nOver many a quaint and curious volume of forgotten lore, \nWhile I nodded, nearly napping, suddenly there came a tapping, \nAs of some one gently rapping, rapping at my chamber door. \n\"'Tis some visitor,\" I muttered, \"tapping at my chamber door - \nOnly this, and nothing more.\" \n\nAh, distinctly I remember it was in the bleak December, \nAnd each separate dying ember wrought its ghost upon the floor. \nEagerly I wished the morrow; - vainly I had sought to borrow \nFrom my books surcease of sorrow - sorrow for the lost Lenore - \nFor the rare and radiant maiden whom the angels name Lenore - \nNameless here for evermore. \n\nAnd the silken sad uncertain rustling of each purple curtain \nThrilled me - filled me with fantastic terrors never felt before; \nSo that now, to still the beating of my heart, I stood repeating, \n\"'Tis some visitor entreating entrance at my chamber door - \nSome late visitor entreating entrance at my chamber door; - \nThis it is, and nothing more.\" \n\nPresently my soul grew stronger; hesitating then no longer, \n\"Sir,\" said I, \"or Madam, truly your forgiveness I implore; \nBut the fact is I was napping, and so gently you came rapping, \nAnd so faintly you came tapping, tapping at my chamber door, \nThat I scarce was sure I heard you\"- here I opened wide the door; - \nDarkness there, and nothing more. \n\nDeep into that darkness peering, long I stood there wondering, fearing, \nDoubting, dreaming dreams no mortals ever dared to dream before; \nBut the silence was unbroken, and the stillness gave no token, \nAnd the only word there spoken was the whispered word, \"Lenore?\" \nThis I whispered, and an echo murmured back the word, \"Lenore!\" - \nMerely this, and nothing more. \n\nBack into the chamber turning, all my soul within me burning, \nSoon again I heard a tapping somewhat louder than before. \n\"Surely,\" said I, \"surely that is something at my window lattice: \nLet me see, then, what thereat is, and this mystery explore - \nLet my heart be still a moment and this mystery explore; - \n'Tis the wind and nothing more.\" \n\nOpen here I flung the shutter, when, with many a flirt and flutter, \nIn there stepped a stately raven of the saintly days of yore; \nNot the least obeisance made he; not a minute stopped or stayed he; \nBut, with mien of lord or lady, perched above my chamber door - \nPerched upon a bust of Pallas just above my chamber door - \nPerched, and sat, and nothing more. \n\nThen this ebony bird beguiling my sad fancy into smiling, \nBy the grave and stern decorum of the countenance it wore. \n\"Though thy crest be shorn and shaven, thou,\" I said, \"art sure no craven, \nGhastly grim and ancient raven wandering from the Nightly shore - \nTell me what thy lordly name is on the Night's Plutonian shore!\" \nQuoth the Raven, \"Nevermore.\" \n\nMuch I marvelled this ungainly fowl to hear discourse so plainly, \nThough its answer little meaning- little relevancy bore; \nFor we cannot help agreeing that no living human being \nEver yet was blest with seeing bird above his chamber door - \nBird or beast upon the sculptured bust above his chamber door, \nWith such name as \"Nevermore.\" \n\nBut the raven, sitting lonely on the placid bust, spoke only \nThat one word, as if his soul in that one word he did outpour. \nNothing further then he uttered- not a feather then he fluttered - \nTill I scarcely more than muttered, \"other friends have flown before - \nOn the morrow he will leave me, as my hopes have flown before.\" \nThen the bird said, \"Nevermore.\" \n\nStartled at the stillness broken by reply so aptly spoken, \n\"Doubtless,\" said I, \"what it utters is its only stock and store, \nCaught from some unhappy master whom unmerciful Disaster \nFollowed fast and followed faster till his songs one burden bore - \nTill the dirges of his Hope that melancholy burden bore \nOf 'Never - nevermore'.\" \n\nBut the Raven still beguiling all my fancy into smiling, \nStraight I wheeled a cushioned seat in front of bird, and bust and door; \nThen upon the velvet sinking, I betook myself to linking \nFancy unto fancy, thinking what this ominous bird of yore - \nWhat this grim, ungainly, ghastly, gaunt and ominous bird of yore \nMeant in croaking \"Nevermore.\" \n\nThis I sat engaged in guessing, but no syllable expressing \nTo the fowl whose fiery eyes now burned into my bosom's core; \nThis and more I sat divining, with my head at ease reclining \nOn the cushion's velvet lining that the lamplight gloated o'er, \nBut whose velvet violet lining with the lamplight gloating o'er, \nShe shall press, ah, nevermore! \n\nThen methought the air grew denser, perfumed from an unseen censer \nSwung by Seraphim whose footfalls tinkled on the tufted floor. \n\"Wretch,\" I cried, \"thy God hath lent thee - by these angels he hath sent thee \nRespite - respite and nepenthe, from thy memories of Lenore:\nQuaff, oh quaff this kind nepenthe and forget this lost Lenore!\" \nQuoth the Raven, \"Nevermore.\" \n\n\"Prophet!\" said I, \"thing of evil! - prophet still, if bird or devil! - \nWhether Tempter sent, or whether tempest tossed thee here ashore, \nDesolate yet all undaunted, on this desert land enchanted - \nOn this home by horror haunted- tell me truly, I implore - \nIs there - is there balm in Gilead? - tell me - tell me, I implore!\" \nQuoth the Raven, \"Nevermore.\" \n\n\"Prophet!\" said I, \"thing of evil - prophet still, if bird or devil! \nBy that Heaven that bends above us - by that God we both adore - \nTell this soul with sorrow laden if, within the distant Aidenn, \nIt shall clasp a sainted maiden whom the angels name Lenore - \nClasp a rare and radiant maiden whom the angels name Lenore.\" \nQuoth the Raven, \"Nevermore.\" \n\n\"Be that word our sign in parting, bird or fiend,\" I shrieked, upstarting - \n\"Get thee back into the tempest and the Night's Plutonian shore! \nLeave no black plume as a token of that lie thy soul hath spoken! \nLeave my loneliness unbroken!- quit the bust above my door! \nTake thy beak from out my heart, and take thy form from off my door!\" \nQuoth the Raven, \"Nevermore.\" \n\nAnd the Raven, never flitting, still is sitting, still is sitting \nOn the pallid bust of Pallas just above my chamber door; \nAnd his eyes have all the seeming of a demon's that is dreaming, \nAnd the lamplight o'er him streaming throws his shadow on the floor; \nAnd my soul from out that shadow that lies floating on the floor \nShall be lifted - nevermore!",
          "__v": 0,
          "time": "2018-08-23T20:36:10.057Z",
          "length": 6427,
          "index": 7
        }
      ]);
    });
};
