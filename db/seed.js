const {
  BlogPost
} = require('../models/BlogPost')

BlogPost.remove({})
  .then(_ => {
    BlogPost.insertMany([{
          title: "Minecraft",
          content: `In just a few years, Minecraft has become one of the world's most popular games, mainly by word of mouth and despite the lack of a big marketing budget. Already a hot topic of conversation in the playground, Minecraft has also moved into the classroom, as teachers increasingly find ways to use the game for educational purposes.

          Minecraft is often described as a ‘sandbox game’. This means that it’s a virtual land where users can create their own worlds and experiences, using building blocks, resources discovered on the site and their own creativity.  
          
          The game is available on multiple platforms. You can play on a computer, smartphone, tablet, Pi, XBox, Nintendo Wii or Playstation. It is growing in popularity day by day, especially among primary-aged children. 
          
          Why is Minecraft so popular?
          Since its release in 2009, Minecraft has quickly become one of the most popular games in the world. As an indie game built by a very small team, Minecraft’s success isn’t down to massive resources or a carefully planned advertising strategy. So what explains its popularity with children?
          
          Minecraft has been described as a game with no rules. It doesn’t come with a set of instructions, or a stated objective – players can build and explore however they want. It’s often compared to virtual Lego.
          
          ‘Children can create their own adventures at any level of play’
          This means that Minecraft fans have a lot of flexibility in terms of how they play. Users can recreate an existing fantasy world or build a new one from scratch, they can fight villains and seek adventure, and they can play alone or with friends. It can also be played at any level. In a lot of popular games, you need a certain amount of skill to move on to the next challenge. This can be frustrating for young kids who don’t always have the abilities or unrestricted time required to make real progress in a game. In Minecraft, children can create their own adventures at any level of play.
          
          What are the age restrictions? 
          Minecraft guidelines say that players under 13 need to obtain parental permission. This minimum age is down to American privacy legislation, which states that websites collecting information from children must get permission from their parents. 
          
          Minecraft console and handheld games range from PEGI7 to PEGI 12. (Read an explanation of PEGI ratings here.)
          
          Is Minecraft helping my child learn anything?
          Minecraft’s focus on creatively building and exploring could help children build their problem solving, planning and organisation skills. And kids who play with their friends might find it improves their ability to work as a team. Some parents of children with autism have credited the game with improving their children’s social skills and communication abilities – there is even a Minecraft server specifically for young people with autism and ADHD.
          
          Minecraft is catching on in schools as well. Students at Stackpole VC School, for instance, used Minecraft to build an accurate scale model of their school. It’s also been used to teach kids about programming, ICT and maths. And minecraftedu.com exists to provide teachers with a version of the game for use in lessons.
          
          `
        },
        {
          title: "Fortnite",
          content: `Fortnite is still one of the most popular - and hotly-discusseed - video games for tweens and up. Here's our guide to the basics, and tips for encouraging children to play safely and in moderation.

          What is Fortnite and how do you play it?
          
          In Fortnite, players collaborate to survive in an open-world environment, by battling other characters who are controlled either by the game itself, or by other players. Violence is cartoonish, but some characters and scenes might disturb younger players.
          
          The single-player or co-operative mode (played with friends) involves fighting off zombie-like creatures. But Fortnite’s most popular mode is its standalone free-to-play multiplayer platform, Fortnite Battle Royale, in which up to 100 players enter an online game, competing individually or as part of squads of up to four, to be the last player standing within a ever-decreasing battle arena.
          
          To play, players to create an account by providing an email address, which they'll have to verify, and creating a username. There's no age-verification process.`
        }
      ])
      .then(blogPosts => {
        // console.log(blogPosts)
        process.exit()
      })
  })