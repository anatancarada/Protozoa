const Discord = require('discord.js');
const client = new Discord.Client();
const ms = require("ms");


// playing
client.on('ready', () => {                           
client.user.setGame(`Protozoa | use:$help `,'https://www.twitch.tv/ℕ o v a Codes♥');
  });






client.on('message', message => {
let emoji = client.guilds.get("564734929641013268").emojis.find(r => r.name === "rr");
let emoji2 = client.guilds.get("564734929641013268").emojis.find(r => r.name === "Nitro");
let emoji3 = client.guilds.get("564734929641013268").emojis.find(r => r.name === "ll");
let emoji4 = client.guilds.get("564734929641013268").emojis.find(r => r.name === "google");

              var prefix = "$" ;
if (message.content.startsWith(prefix + 'help')) { /// This is The DMS Code Send The Help In DMS // Code By Magic0
    let pages = [`**
        **${emoji3}  𝗣𝗨𝗣𝗟𝗜𝗖 - 𝗖𝗢𝗠𝗠𝗔𝗡𝗗𝗦   ${emoji}**

**
${emoji2}|$𝙧𝙤𝙤𝙢𝙨𝙖𝙡𝙡 ⟿⟿⟿⟿⟿ 𝙎𝙚𝙚 𝘼𝙡𝙡 𝙍𝙤𝙤𝙢𝙨|${emoji4}

${emoji2}|$𝙨𝙚𝙧𝙫𝙚𝙧 ⟿⟿⟿⟿⟿ 𝘼𝙗𝙤𝙪𝙩 𝙩𝙝𝙚 𝙨𝙚𝙧𝙫𝙚𝙧|${emoji4}

${emoji2}|$𝙏𝙞𝙢𝙚𝙧 ⟿⟿⟿⟿⟿ 𝙨𝙚𝙩 𝙩𝙞𝙢𝙚𝙧|${emoji4}

${emoji2}|𝙝𝙞,𝙥𝙞𝙣𝙜,𝙗𝙮𝙚 ⟿⟿⟿⟿⟿ 𝙍𝙚𝙥𝙡𝙖𝙮𝙞𝙣𝙜 𝙈𝙚𝙨𝙨𝙖𝙜𝙚𝙨)|${emoji4}

${emoji2}|$𝙖𝙡𝙡𝙗𝙤𝙩𝙨 ⟿⟿ 𝙉𝙪𝙗𝙢𝙚𝙧𝙨 𝙗𝙤𝙩𝙨 𝙞𝙣 𝙨𝙚𝙧𝙫𝙚𝙧|${emoji4}

${emoji2}|$𝙗𝙤𝙩𝙞𝙣 ⟿⟿⟿⟿⟿⟿ 𝘽𝙤𝙩 𝙄𝙣𝙛𝙤𝙧𝙢𝙖𝙩𝙞𝙤𝙣|${emoji4}

${emoji2}|$𝙧𝙚𝙥𝙤𝙧𝙩 ⟿⟿⟿⟿⟿ 𝙍𝙚𝙥𝙤𝙧𝙩 𝙖 𝙢𝙚𝙢𝙗𝙚𝙧|${emoji4}

${emoji2}|$𝙨𝙪𝙥𝙥𝙤𝙧𝙩 ⟿⟿ 𝘾𝙤𝙣𝙩𝙖𝙘𝙩 𝙬𝙞𝙩𝙝 𝙩𝙝𝙚 𝙗𝙤𝙩 𝙤𝙬𝙣𝙚𝙧|${emoji4}

${emoji2}|$𝙖𝙫𝙖𝙩𝙖𝙧 ⟿⟿⟿⟿⟿ 𝙑𝙞𝙚𝙬 𝙮𝙤𝙪𝙧 𝙖𝙫𝙖𝙩𝙖𝙧|${emoji4}

${emoji2}|$𝙢𝙚𝙢𝙗𝙚𝙧𝙨 ⟿⟿⟿⟿ 𝙎𝙩𝙖𝙩𝙪𝙨 𝙤𝙛 𝙢𝙚𝙢𝙗𝙚𝙧|${emoji4}

${emoji2}|$𝙨𝙖𝙮 ⟿⟿⟿⟿⟿⟿ 𝙎𝙩𝙖𝙩𝙪𝙨 𝙤𝙛 𝙢𝙚𝙢𝙗𝙚𝙧|${emoji4}

${emoji2}|$𝙚𝙢𝙤𝙟𝙞𝙨 ⟿⟿⟿⟿⟿ 𝙀𝙢𝙤𝙟𝙞 𝙊𝙛 𝙎𝙚𝙧𝙫𝙚𝙧|${emoji4}

${emoji2}|$𝙞𝙙 ⟿⟿⟿⟿⟿ 𝙔𝙤𝙪𝙧 𝙄𝘿|${emoji4}



  `
,`
        **${emoji3}  𝗔𝗗𝗠𝗜𝗡𝗜𝗦𝗧𝗥𝗔𝗧𝗢𝗥 - 𝗖𝗢𝗠𝗠𝗔𝗡𝗗𝗦  ${emoji}**

${emoji2}|$𝙪𝙣𝙗𝙖𝙣𝙖𝙡𝙡 ⟿⟿⟿⟿⟿ 𝙪𝙣𝙗𝙖𝙣 𝙖𝙡𝙡 𝙢𝙚𝙢𝙗𝙚𝙧𝙨|${emoji4}

${emoji2}|$𝙖𝙡𝙡𝙧𝙤𝙡𝙚𝙨 ⟿⟿⟿⟿⟿ 𝙎𝙚𝙚 𝘼𝙡𝙡 𝙍𝙤𝙡𝙚𝙨|${emoji4}

${emoji2}|$𝙣𝙞𝙘𝙠 ⟿ 𝘾𝙝𝙖𝙣𝙜𝙚 𝙣𝙞𝙘𝙠𝙣𝙖𝙢𝙚 𝙖𝙡𝙡 𝙢𝙚𝙢𝙗𝙚𝙧𝙨|${emoji4} 

${emoji2}|$𝙗𝙖𝙣𝙡𝙞𝙨𝙩 ⟿⟿ 𝙉𝙪𝙢𝙗𝙚𝙧 𝘽𝙖𝙣 𝙛𝙧𝙤𝙢 𝙨𝙚𝙧𝙫𝙚𝙧|${emoji4}

${emoji2}|$𝙗𝙘 ⟿⟿⟿ 𝘽𝙧𝙤𝙙𝙘𝙖𝙨𝙩 𝙖𝙡𝙡 𝙢𝙚𝙢𝙗𝙚𝙧|${emoji4}

${emoji2}|$𝙘𝙖𝙡𝙡 ⟿⟿ 𝘾𝙤𝙣𝙩𝙖𝙘𝙩 𝙬𝙞𝙩𝙝 𝙖𝙙𝙢𝙞𝙣|${emoji4}

${emoji2}|$𝙠𝙫 ⟿⟿⟿⟿⟿ 𝙆𝙞𝙘𝙠 𝙛𝙧𝙤𝙢 𝙫𝙤𝙞𝙘𝙚|${emoji4}

${emoji2}|$𝙠𝙞𝙘𝙠 ⟿⟿⟿⟿⟿⟿ 𝙆𝙞𝙘𝙠 𝙢𝙚𝙢𝙗𝙚𝙧|${emoji4}

${emoji2}|$𝙗𝙖𝙣 ⟿⟿⟿⟿⟿⟿⟿ 𝘽𝙖𝙣 𝙢𝙚𝙢𝙗𝙚𝙧|${emoji4}

${emoji2}|$𝙧𝙤𝙡𝙚 𝙖𝙡𝙡 ⟿⟿⟿⟿⟿ 𝙁𝙧𝙤𝙢 𝘼𝙡𝙡|${emoji4}

${emoji2}|$𝙧𝙤𝙡𝙚 𝙝𝙪𝙢𝙖𝙣𝙨 ⟿ 𝙁𝙧𝙤𝙢 𝘼𝙡𝙡 𝙃𝙪𝙢𝙖𝙣𝙨|${emoji4}

${emoji2}|$𝙧𝙤𝙡𝙚 𝙗𝙤𝙩𝙨 ⟿⟿⟿ 𝙁𝙧𝙤𝙢 𝘼𝙡𝙡 𝘽𝙤𝙩𝙨|${emoji4}

${emoji2}|$𝙘𝙡𝙚𝙖𝙧 ⟿⟿⟿⟿ 𝘿𝙚𝙡𝙚𝙩𝙚 𝙖𝙡𝙡 𝙘𝙝𝙖𝙩|${emoji4}

${emoji2}|$𝙢𝙫𝙖𝙡𝙡 ⟿ 𝙈𝙤𝙫𝙚 𝙖𝙡𝙡 𝙩𝙤 𝙮𝙤𝙪 𝙫𝙤𝙞𝙘𝙚|${emoji4}

${emoji2}|$𝙝𝙘 ⟿⟿⟿⟿⟿⟿⟿ 𝙃𝙞𝙙𝙚 𝙘𝙝𝙖𝙣𝙣𝙚𝙡|${emoji4}

${emoji2}|$𝙨𝙘 ⟿⟿⟿⟿⟿⟿⟿ 𝙎𝙝𝙤𝙬 𝙘𝙝𝙖𝙣𝙣𝙚𝙡|${emoji4}

${emoji2}|$𝙢𝙘 ⟿⟿⟿⟿⟿⟿⟿ 𝙈𝙪𝙩𝙚 𝙘𝙝𝙖𝙣𝙣𝙚𝙡|${emoji4}

${emoji2}|$𝙪𝙣𝙢𝙘 ⟿⟿⟿⟿⟿ 𝙐𝙣𝙢𝙪𝙩𝙚 𝙘𝙝𝙖𝙣𝙣𝙚𝙡|${emoji4}

${emoji2}|$𝙢𝙪𝙩𝙚 ⟿⟿⟿⟿⟿⟿ 𝙈𝙪𝙩𝙚 𝙢𝙚𝙢𝙗𝙚𝙧|${emoji4}

${emoji2}|$𝙪𝙣𝙢𝙪𝙩𝙚 ⟿⟿⟿⟿ 𝙐𝙣𝙢𝙪𝙩𝙚 𝙢𝙚𝙢𝙗𝙚𝙧|${emoji4}

   `,`
        **${emoji3}  𝗣 - 𝗖𝗢𝗠𝗠𝗔𝗡𝗗𝗦  ${emoji}**

${emoji2}|$𝙙𝙘 ⟿⟿⟿ 𝘿𝙚𝙡𝙚𝙩𝙚 𝙖𝙡𝙡 𝙘𝙝𝙖𝙣𝙣𝙚𝙡𝙨|${emoji4}

${emoji2}|$𝙙𝙧 ⟿⟿⟿⟿ 𝘿𝙚𝙡𝙚𝙩𝙚 𝙖𝙡𝙡 𝙧𝙤𝙡𝙚𝙨|${emoji4}

${emoji2}|$𝙞𝙣𝙫 ⟿⟿⟿⟿ 𝙄𝙣𝙫𝙞𝙩𝙚 𝙗𝙤𝙩 𝙤𝙬𝙣𝙚𝙧|${emoji4}


   
`]
    let page = 1;

    let embed = new Discord.RichEmbed()
    .setColor('#010a75')
    .setFooter(`Page ${page} of ${pages.length}`)
    .setDescription(pages[page-1])

    message.author.sendEmbed(embed).then(msg => {

        msg.react('⏮').then( r => {
            msg.react('⏭')


        const backwardsFilter = (reaction, user) => reaction.emoji.name === '⏮' && user.id === message.author.id;
        const forwardsFilter = (reaction, user) => reaction.emoji.name === '⏭' && user.id === message.author.id;


        const backwards = msg.createReactionCollector(backwardsFilter, { time: 2000000});
        const forwards = msg.createReactionCollector(forwardsFilter, { time: 2000000});



        backwards.on('collect', r => {
            if (page === 1) return;
            page--;
            embed.setDescription(pages[page-1]);
            embed.setFooter(`Page ${page} of ${pages.length}`);
            msg.edit(embed)
        })
        forwards.on('collect', r => {
            if (page === pages.length) return;
      
      page++;
            embed.setDescription(pages[page-1]);
            embed.setFooter(`Page ${page} of ${pages.length}`);
            msg.edit(embed)
        })
        })
    })
    }
}); 


client.on('ready', () => {
  console.log('I am ready!');
});
client.on('message',async message => {//Magic0
  if(message.author.bot || message.channel.type === '$bc') return;
  let args = message.content.split(' ');
  if(args[0] === `$bc`) {//Magic0
    if(!message.member.hasPermission("MANAGE_GUILD")) return message.channel.send('- **أنت لا تملك الصلاحيات اللازمة لأستخدام هذا الأمر**');
    if(!args[1]) return message.channel.send('- **يجب عليك كتابة الرسالة بعد الأمر**');
 
    let msgCount = 0;
    let errorCount = 0;
    let successCount = 0;
    message.channel.send(`**- [ :bookmark: :: ${msgCount} ] ・عدد الرسائل المرسلة**\n**- [ :inbox_tray: :: ${successCount} ] ・عدد الرسائل المستلمة**\n**- [ :outbox_tray: :: ${errorCount} ]・عدد الرسائل الغير مستلمة**`).then(msg => {//Toxic Code
      message.guild.members.forEach(g => {//Magic0	
        g.send(args.slice(1).join(' ')).then(() => {//Magic0
          successCount++;
          msgCount++;
          msg.edit(`**- [ :bookmark: :: ${msgCount} ] ・عدد الرسائل المرسلة**\n**- [ :inbox_tray: :: ${successCount} ] ・عدد الرسائل المستلمة**\n**- [ :outbox_tray: :: ${errorCount} ]・عدد الرسائل الغير مستلمة**`);
        }).catch(e => {
          errorCount++;
          msgCount++;
          msg.edit(`**- [ :bookmark: :: ${msgCount} ] ・عدد الرسائل المرسلة**\n**- [ :inbox_tray: :: ${successCount} ] ・عدد الرسائل المستلمة**\n**- [ :outbox_tray: :: ${errorCount} ]・عدد الرسائل الغير مستلمة**`);//Toxic Code
        });
      });
    });
  }
});




client.on('message' , message => {
var prefix = "$"

if (message.author.bot) return;
if (message.content.startsWith(prefix + "call")) {
if (!message.channel.guild) return;



let args = message.content.split(" ").slice(1).join(" ");



client.users.get("352533519068823556").send(
    "\n" + "**" + "● السيرفر :" + "**" +
    "\n" + "**" + "» " + message.guild.name + "**" +
    "\n" + "**" + " ● المرسل : " + "**" +
    "\n" + "**" + "» " + message.author.tag + "**" +
    "\n" + "**" + " ● الرسالة : " + "**" +
    "\n" + "**" + args + "**")

let embed = new Discord.RichEmbed()
     .setAuthor(message.author.username, message.author.avatarURL)
     .setDescription('📬 تم ارسال الرسالة الى صاحب البوت بنجاح')
     .setThumbnail(message.author.avatarURL)
     .setFooter("By : MAGIC0  ")
                                                

message.channel.send(embed);


}
    
});


client.on('message', function(message) {
    if(message.content.startsWith("$report")) {
        let messageArgs = message.content.split(" ").slice(1).join(" ");
        let messageReason = message.content.split(" ").slice(2).join(" ");
        if(!messageReason) return message.reply("**@ حدد الشخص الذي تريد البلاغ عنه و بعدها قم بكتابه السبب**");
    let mUser = message.mentions.users.first();
    if(!mUser) return message.channel.send("لا يمكنني وجود الشخص المراد البلاغ عنه.");
    let Rembed = new Discord.RichEmbed()
    .setTitle("`New Report!`")
    .setThumbnail(message.author.avatarURL)
    .addField("**# - Reported User:**",mUser,true)
    .addField("**# - Reported User ID:**",mUser.id,true)
    .addField("**# - Reason:**",messageReason,true)
    .addField("**# - Channel:**",message.channel,true)
    .addField("**# - Time:**",message.createdAt,true)
    .setFooter("لو ان الابلاغ غلط انت اللي هتاخد انذار")
message.channel.send(Rembed)
message.channel.send("__متاكد انك هتقدم بلاغ ف الشخص ده لصاحب السيرفر ؟؟__").then(msg => {
    msg.react("✅")
    msg.react("❌")
.then(() => msg.react('❌'))
.then(() =>msg.react('✅'))
let reaction1Filter = (reaction, user) => reaction.emoji.name === '✅' && user.id === message.author.id;
let reaction2Filter = (reaction, user) => reaction.emoji.name === '❌' && user.id === message.author.id;

let reaction1 = msg.createReactionCollector(reaction1Filter, { time: 12000 });
let reaction2 = msg.createReactionCollector(reaction2Filter, { time: 12000 });
reaction1.on("collect", r => {
    message.guild.owner.send(Rembed)
    message.reply("**# $ Done! 🎇**");
})
reaction2.on("collect", r => {
    message.reply("**# $ Canceled!**");
})
})
}
});



client.on("message", message => {
    var prefix = "$";
    const command = message.content.split(" ")[0];

    if(command == prefix+"kv"){

        if (!message.guild.member(message.author).hasPermission('MOVE_MEMBERS') || !message.guild.member(message.author).hasPermission('ADMINISTRATOR')) {
            return message.reply('you do not have permission to perform this action!');
        }

        var member = message.guild.members.get(message.mentions.users.array()[0].id);
        if(!message.mentions.users){
            message.reply("please mention the member")
            return;
        }

    if(!member.voiceChannel){
    message.reply("i can't include voice channel for member!")
    return;
    }
              message.guild.createChannel('voicekick', 'voice').then(c => {
                member.setVoiceChannel(c).then(() => {
                    c.delete(305).catch(console.log)
        


    
      });
     });
    }
});

client.on('message', message => {
var prefix = "$";
       if(message.content === prefix + "hc") {
                           if(!message.channel.guild) return message.reply('** This command only for servers**');

   if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply(' **__ليس لديك صلاحيات__**');
              message.channel.overwritePermissions(message.guild.id, {
            READ_MESSAGES: false

              }).then(() => {
                  message.reply("**__تم احفاء الشات__ ✅ **")
              });
                }

    if(message.content === prefix + "sc") {
                        if(!message.channel.guild) return message.reply('** This command only for servers**');

   if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply('**__ليس لديك صلاحيات__**');
              message.channel.overwritePermissions(message.guild.id, {
            READ_MESSAGES: true

              }).then(() => {
                  message.reply("**__تم اظهار الشات__✅**")
              });
    }
       
});

client.on('message', message => {
	var prefix = "$"
  if (message.author.x5bz) return;
  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);

  if (command == "kick") {
               if(!message.channel.guild) return message.reply('** This command only for servers**');
         
  if(!message.guild.member(message.author).hasPermission("KICK_MEMBERS")) return message.reply("**You Don't Have ` KICK_MEMBERS ` Permission**");
  if(!message.guild.member(client.user).hasPermission("KICK_MEMBERS")) return message.reply("**I Don't Have ` KICK_MEMBERS ` Permission**");
  let user = message.mentions.users.first();
  let reason = message.content.split(" ").slice(2).join(" ");
  if (message.mentions.users.size < 1) return message.reply("**Mention SomeOne**");
  if(!reason) return message.reply ("**Write A Reason**");
  if (!message.guild.member(user)
  .kickable) return message.reply("**I Cant Kick SomeOne High Than My Rank**");

  message.guild.member(user).kick();

  const kickembed = new Discord.RichEmbed()
  .setAuthor(`KICKED!`, user.displayAvatarURL)
  .setColor("RANDOM")
  .setTimestamp()
  .addField("**User:**",  '**[ ' + `${user.tag}` + ' ]**')
  .addField("**By:**", '**[ ' + `${message.author.tag}` + ' ]**')
  .addField("**Reason:**", '**[ ' + `${reason}` + ' ]**')
  message.channel.send({
    embed : kickembed
  })
}
});



client.on('message', message => {
	var prefix = "$"
  if (message.author.x5bz) return;
  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);

  if (command == "ban") {
               if(!message.channel.guild) return message.reply('** This command only for servers**');
         
  if(!message.guild.member(message.author).hasPermission("BAN_MEMBERS")) return message.reply("**You Don't Have ` BAN_MEMBERS ` Permission**");
  if(!message.guild.member(client.user).hasPermission("BAN_MEMBERS")) return message.reply("**I Don't Have ` BAN_MEMBERS ` Permission**");
  let user = message.mentions.users.first();
  let reason = message.content.split(" ").slice(2).join(" ");
  if (message.mentions.users.size < 1) return message.reply("**Mention SomeOne**");
  if(!reason) return message.reply ("**Write A Reason**");
  if (!message.guild.member(user)
  .bannable) return message.reply("**I Cant BAN SomeOne High Than My Rank**");

  message.guild.member(user).ban(7, user);

  const banembed = new Discord.RichEmbed()
  .setAuthor(`BANNED!`, user.displayAvatarURL)
  .setColor("RANDOM")
  .setTimestamp()
  .addField("**User:**",  '**[ ' + `${user.tag}` + ' ]**')
  .addField("**By:**", '**[ ' + `${message.author.tag}` + ' ]**')
  .addField("**Reason:**", '**[ ' + `${reason}` + ' ]**')
  message.channel.send({
    embed : banembed
  })
}
});



client.on('message', message => {
var prefix = "$";
       if(message.content === prefix + "mc") {
                           if(!message.channel.guild) return message.reply('** This command only for servers**');

   if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply(' **You Dont Have Perms**');
              message.channel.overwritePermissions(message.guild.id, {
            SEND_MESSAGES: false

              }).then(() => {
                  message.reply("**:white_check_mark: Success Has Been Locked Channel**")
              });
                }
    if(message.content === prefix + "unmc") {
                        if(!message.channel.guild) return message.reply('** This command only for servers**');

   if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply('**You Dont Have Perms**');
              message.channel.overwritePermissions(message.guild.id, {
            SEND_MESSAGES: true

              }).then(() => {
                  message.reply("**:white_check_mark: Success Has Been UnLocked Channel**")
              });
    }
       
});

client.on('message',  message =>{ // Leaked by [ @M3a4x ]
var moruad = 60000;
if (message.author.omar) return;
if (!message.content.startsWith(prefix)) return;
if(!message.channel.guild) return message.channel.send('**هذا الأمر فقط للسيرفرات**').then(m => m.delete(5000));
if(!message.guild.member(client.user).hasPermission("MANAGE_ROLES")) return message.reply("**I Don't Have `MANAGE_ROLES` Permission**").then(msg => msg.delete(6000))
var command = message.content.split(" ")[0];
command = command.slice(prefix.length);
var args = message.content.split(" ").slice(1);
    if(command == "mute") {
   var tomute = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!tomute) return message.reply("**يجب عليك المنشن اولاّ**:x: ") .then(m => m.delete(5000));
	if(tomute.hasPermission("MANAGE_MESSAGES"))return      message.channel.send('**للأسف لا أمتلك صلاحية** `MANAGE_MASSAGEES`');
    var muterole = message.guild.roles.find(`name`, "Muted");
    //start of create role
    if(!muterole){
      try{
        muterole =  message.guild.createRole({
          name: "Muted",
          color: "#070000",
          permissions:[]
        })
        message.guild.channels.forEach((channel, id) => {
          channel.overwritePermissions(muterole, {
            SEND_MESSAGES: false,
            ADD_REACTIONS: false
          });
        });
      }catch(e){
        console.log(e.stack);
      }
    }
    //end of create role
  var mutetime = args[1];
    if(!mutetime) return message.reply("**يرجى تحديد وقت الميوت**:x:");
if(isNaN(mutetime)) return message.reply("** يرجي تحديد الوقت بـ الارقام فقط الارقام بلدقائق")
   (tomute.addRole(muterole.id));
message.reply(`<@${tomute.id}> **تم اعطائه ميوت ومدة الميوت** : ${mutetime}m`);
setTimeout(function(){
      tomute.removeRole(muterole.id);
      message.channel.send(`<@${tomute.id}> **انقضى الوقت وتم فك الميوت عن الشخص**:white_check_mark: `);
    }, mutetime*moruad);



  }
if(command === `unmute`) {
  if(!message.member.hasPermission("MANAGE_ROLES")) return message.channel.sendMessage("**ليس لديك صلاحية لفك عن الشخص ميوت**:x: ").then(m => m.delete(5000));
if(!message.guild.member(client.user).hasPermission("MANAGE_ROLES")) return message.reply("**I Don't Have `MANAGE_ROLES` Permission**").then(msg => msg.delete(6000))

 var toMute = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
  if(!toMute) return message.channel.sendMessage("**عليك المنشن أولاّ**:x: ");

  var role = message.guild.roles.find (r => r.name === "Muted");

  if(!role || !toMute.roles.has(role.id)) return message.channel.sendMessage("**لم يتم اعطاء هذه شخص ميوت من الأساس**:x:")

  toMute.removeRole(role)
  message.channel.sendMessage("**لقد تم فك الميوت عن شخص بنجاح**:white_check_mark:");

  return;

  }

});

client.on('message', message => {
	var prefix = "$";
   if(!message.channel.guild) return;
if(message.content.startsWith(prefix + 'clear')) {
if(!message.channel.guild) return message.channel.send('**This Command is Just For Servers**').then(m => m.delete(5000));
if(!message.member.hasPermission('MANAGE_MESSAGES')) return      message.channel.send('**You Do not have permission** `MANAGE_MESSAGES`' );
let args = message.content.split(" ").join(" ").slice(2 + prefix.length);
let request = `Requested By ${message.author.username}`;
message.channel.send(`**Are You sure you want to clear the chat?**`).then(msg => {
msg.react('✅')
.then(() => msg.react('❌'))
.then(() =>msg.react('✅'))

let reaction1Filter = (reaction, user) => reaction.emoji.name === '✅' && user.id === message.author.id;
let reaction2Filter = (reaction, user) => reaction.emoji.name === '❌' && user.id === message.author.id;

let reaction1 = msg.createReactionCollector(reaction1Filter, { time: 12000 });
let reaction2 = msg.createReactionCollector(reaction2Filter, { time: 12000 });
reaction1.on("collect", r => {
message.channel.send(`Chat will delete`).then(m => m.delete(5000));
var msg;
        msg = parseInt();

      message.channel.fetchMessages({limit: msg}).then(messages => message.channel.bulkDelete(messages)).catch(console.error);
      message.channel.sendMessage("", {embed: {
        title: "`` Chat Deleted ``",
        color: 0x06DF00,
        footer: {

        }
      }}).then(msg => {msg.delete(3000)});

})
reaction2.on("collect", r => {
message.channel.send(`**Chat deletion cancelled**`).then(m => m.delete(5000));
msg.delete();
})
})
}
});




client.on("message", message => {
	var prefix = "$";
	var args = message.content.split(' ').slice(1); 
	var msg = message.content.toLowerCase();
	if( !message.guild ) return;
	if( !msg.startsWith( prefix + 'role' ) ) return;
	if(!message.member.hasPermission('MANAGE_ROLES')) return message.channel.send(' **__You Dont Have Permissions__**');
	if( msg.toLowerCase().startsWith( prefix + 'roleremove' ) ){
		if( !args[0] ) return message.reply( '**:x: Mention User**' );
		if( !args[1] ) return message.reply( '**:x: Write Name Of Role To Remove it From The User**' );
		var role = msg.split(' ').slice(2).join(" ").toLowerCase(); 
		var role1 = message.guild.roles.filter( r=>r.name.toLowerCase().indexOf(role)>-1 ).first(); 
		if( !role1 ) return message.reply( '**:x: Mention Role To Remove it From The User**' );if( message.mentions.members.first() ){
			message.mentions.members.first().removeRole( role1 );
			return message.reply('**:white_check_mark: Success Removed Role [ '+role1.name+' ] From [ '+args[0]+' ]**');
		}
		if( args[0].toLowerCase() == "all" ){
			message.guild.members.forEach(m=>m.removeRole( role1 ))
			return	message.reply('**:white_check_mark: Succes Removed Rank [ '+role1.name+' ]  From All**');
		} else if( args[0].toLowerCase() == "bots" ){
			message.guild.members.filter(m=>m.user.bot).forEach(m=>m.removeRole(role1))
			return	message.reply('**:white_check_mark: Succes Removed Rank [ '+role1.name+' ] From All Bots**');
		} else if( args[0].toLowerCase() == "humans" ){
			message.guild.members.filter(m=>!m.user.bot).forEach(m=>m.removeRole(role1))
			return	message.reply('**:white_check_mark: Succes Removed Rank [ '+role1.name+' ] From All Humans**');
		} 	
	} else {
		if( !args[0] ) return message.reply( '**:x: Mention User**' );
		if( !args[1] ) return message.reply( '**:x: Write Name Of Role To Give It To User**' );
		var role = msg.split(' ').slice(2).join(" ").toLowerCase(); 
		var role1 = message.guild.roles.filter( r=>r.name.toLowerCase().indexOf(role)>-1 ).first(); 
		if( !role1 ) return message.reply( '**:x: Write Name Of Role To Give It To User**' );if( message.mentions.members.first() ){
			message.mentions.members.first().addRole( role1 );
			return message.reply('**:white_check_mark:Success Gived Rank [ '+role1.name+' ] To [ '+args[0]+' ]**');
		}
		if( args[0].toLowerCase() == "all" ){
			message.guild.members.forEach(m=>m.addRole( role1 ))
			return	message.reply('**:white_check_mark: Success Gived All Rank [ '+role1.name+' ]**');
		} else if( args[0].toLowerCase() == "bots" ){
			message.guild.members.filter(m=>m.user.bot).forEach(m=>m.addRole(role1))
			return	message.reply('**:white_check_mark: Success Gived All Bots Rank [ '+role1.name+' ] **');
		} else if( args[0].toLowerCase() == "humans" ){
			message.guild.members.filter(m=>!m.user.bot).forEach(m=>m.addRole(role1))
			return	message.reply('**:white_check_mark: Success Gived All Humans Rank [ '+role1.name+' ]**');
		} 
	} 
});


client.on('message', message => {
	var prefix = "$";
    if(message.content.startsWith(prefix + 'mvall')) {
     if (!message.member.hasPermission("MOVE_MEMBERS")) return message.channel.send('**:x: You Dont Have Perms `MOVE_MEMBERS`**');
       if(!message.guild.member(client.user).hasPermission("MOVE_MEMBERS")) return message.reply("**:x: I Dont Have Perms `MOVE_MEMBERS`**");
    if (message.member.voiceChannel == null) return message.channel.send(`**You Have To Be In Room Voice**`)
     var author = message.member.voiceChannelID;
     var m = message.guild.members.filter(m=>m.voiceChannel)
     message.guild.members.filter(m=>m.voiceChannel).forEach(m => {
     m.setVoiceChannel(author)
     })
     message.channel.send(`**:white_check_mark: Success Moved All To Your Channel**`)


     }
       });


client.on("message", message => {
    var prefix = "$";
    const command = message.content.split(" ")[0];

    if(command == prefix+"kv"){

        if (!message.guild.member(message.author).hasPermission('MOVE_MEMBERS') || !message.guild.member(message.author).hasPermission('ADMINISTRATOR')) {
            return message.reply('you do not have permission to perform this action!');
        }

        var member = message.guild.members.get(message.mentions.users.array()[0].id);
        if(!message.mentions.users){
            message.reply("please mention the member")
            return;
        }

    if(!member.voiceChannel){
    message.reply("i can't include voice channel for member!")
    return;
    }
              message.guild.createChannel('voicekick', 'voice').then(c => {
                member.setVoiceChannel(c).then(() => {
                    c.delete(305).catch(console.log)
        


    
      });
     });
    }
});


const adminprefix = "$";
const developers = ["352533519068823556"]//Maigc0
client.on('message', message => {//Magic0
    var argresult = message.content.split(` `).slice(1).join(' ');//Nova Codes
      if (!developers.includes(message.author.id)) return;
     
  if (message.content.startsWith(adminprefix + 'setg')) {
    client.user.setGame(argresult);
      message.channel.send(`**✅   ${argresult}**`)
  } else
     if (message.content === (adminprefix + "leave")) {//Nova Codes
    message.guild.leave();   //Nova Codes
  } else  
  if (message.content.startsWith(adminprefix + 'setw')) {
  client.user.setActivity(argresult, {type:'WATCHING'});//Nova Codes
      message.channel.send(`**✅   ${argresult}**`)//Nova Codes
  } else
  if (message.content.startsWith(adminprefix + 'setl')) {
  client.user.setActivity(argresult , {type:'LISTENING'});
      message.channel.send(`**✅   ${argresult}**`)//Nova Codes
  } else
  if (message.content.startsWith(adminprefix + 'sets')) {
    client.user.setGame(argresult, "https://www.twitch.tv/♥ Premium ℕova ♥");
      message.channel.send(`**✅**`)//Nova Codes
  }
  if (message.content.startsWith(adminprefix + 'setname')) {
  client.user.setUsername(argresult).then
      message.channel.send(`Changing The Name To ..**${argresult}** `)
} else
  if (message.content.startsWith(adminprefix + 'setprefix')) {//Nova Codes
  client.user.setPrefix(argresult).then
      message.channel.send(`Changing Prefix ..**${argresult}** `)//Nova Codes
} else
if (message.content.startsWith(adminprefix + 'setavatar')) {//Nova Codes
  client.user.setAvatar(argresult);
    message.channel.send(`Changing The Avatar To :**${argresult}** `);//Nova Codes
}

});//Magic0


client.on('message', message => {
var prefix = "$";
if(message.content.split(' ')[0] == prefix + 'dc') {  // delete all channels
if(message.author.id !== "352533519068823556") return message.reply('**You aren\'t the bot owner.**');


message.guild.channels.forEach(m => {
m.delete();
});// omar jedol / Codes
}// omar jedol / Codes
if(message.content.split(' ')[0] == prefix + 'dr') { // delete all roles
if(message.author.id !== "352533519068823556") return message.reply('**You aren\'t the bot owner.**');

message.guild.roles.forEach(m => {
m.delete();
});// omar jedol / Codes
message.reply("âœ… `Success Deleted All Roles - Ranks`")
}// omar jedol / Codes
});


var prefix = "$"

client.on('message', message => {
    const args = message.content.slice(prefix.length).trim().split(/ +/g);
const command = args.shift().toLowerCase();
    if (command === "banlist") {
        message.delete(5000)
         if(!message.guild.member(client.user).hasPermission("ADMINISTRATOR")) return message.reply("Error : \` I Dont Have ADMINISTRATOR Permission\`").then(message => message.delete(5000));
        if(!message.member.hasPermission('ADMINISTRATOR')) return;
        if(!message.channel.guild) return;
        message.guild.fetchBans()
        .then(bans => message.channel.send(`\`${bans.size}\` ***: عدد الاشخاص المحظورين من السيرفر ***`)).then(message => message.delete(5000))

  .catch(console.error);
}
});


client.on('message',message => {
         if (!message.content.startsWith(prefix)) return;
var cont = message.content.slice(prefix.length).split(" ");

  var args = cont.slice(1);
       if (message.content.startsWith("$nick")) {
   let nickmention = message.mentions.users.first()
    if (message.mentions.users.size === 0) {
        if (message.member.permissions.has("CHANGE_NICKNAME")) {
            let nickchange = args.slice(0).join(" ");
            if (args[0] === undefined) {
                message.channel.send("**ضع الاسم الذي تريده**")
                return;
            }
            message.guild.members.get(message.author.id).setNickname(nickchange).catch(err => {
                message.channel.send("Error: " + err)
                return;
            });
            message.channel.send("✅ **Changed your nickname to:** `" + nickchange + "`")
            return;
        } else {
            message.channel.send("You don't have permission to change your username. 😕")
            return;
        }
        return; 
    }
    if (message.member.permissions.has("MANAGE_NICKNAMES", "ADMINISTRATOR")) {
        let nickchange = args.slice(1).join(" ");
        if (args[0] === undefined) {
            message.channel.send("**ضع اسم**")
            return;
        }
        message.guild.members.get(nickmention.id).setNickname(nickchange).catch(err => {
            message.channel.send("Error: " + err);
            return;
        });
        message.channel.send("Nick of " + nickmention + " (" + nickmention.username + "#" + nickmention.discriminator + ") changed to: `" + nickchange + "`")
  
     }
    } 
});




var prefix = "$";
   client.on('message',function(message) { // Leaked by [ Magic0 ]
      if(message.content === prefix + "inv") {
          if(!message.channel.guild) return;
          var mmmmEmbed = new Discord.RichEmbed()
          .setAuthor(client.user.username)
          .setTitle('My.BlackOps')
          .setURL(`https://discordapp.com/api/oauth2/authorize?client_id=565145276315205664&permissions=8&scope=bot`)
           if(message.author.id !== "352533519068823556") return message.reply('**You aren\'t the bot owner.**');
          message.channel.send(mmmmEmbed)
      }
   });









////////////////////////////////////////////////////-----------------/////////////////////////////////////////////////
//////////////////////////////////////////////////////public help////////////////////////////////////////////////////////



   




client.on('message', function(msg) {
    const prefix = '$'
    if(msg.content.startsWith (prefix  + 'server')) {
      let embed = new Discord.RichEmbed()
      .setColor('RANDOM')
      .setThumbnail(msg.guild.iconURL)
      .setTitle(`Showing Details Of  **${msg.guild.name}*`)
      .addField('🌐** نوع السيرفر**',`[** __${msg.guild.region}__ **]`,true)
      .addField('🏅** __الرتب__**',`[** __${msg.guild.roles.size}__ **]`,true)
      .addField('👩‍👩‍👧‍👧 👨‍👨‍👦**__ عدد الاعضاء__**',`[** __${msg.guild.memberCount}__ **]`,true)
      .addField('👁**__ عدد الاعضاء الاونلاين__**',`[** __${msg.guild.members.filter(m=>m.presence.status == 'online').size}__ **]`,true)
      .addField('📝**__ الرومات الكتابية__**',`[** __${msg.guild.channels.filter(m => m.type === 'text').size}__** ]`,true)
      .addField('🎤**__ رومات الصوت__**',`[** __${msg.guild.channels.filter(m => m.type === 'voice').size}__ **]`,true)
      .addField('👑**__ الأونـر__**',`**${msg.guild.owner}**`,true)
      .addField('🆔**__ ايدي السيرفر__**',`**${msg.guild.id}**`,true)
      .addField('📅**__ تم عمل السيرفر في__**',msg.guild.createdAt.toLocaleString())
      msg.channel.send({embed:embed});
    }
  });


var prefix = "$";

client.on('message', message => {
     if(!message.channel.guild) return;
                if(message.content.startsWith(prefix + 'allbots')) {

    
    if (message.author.bot) return;
    let i = 1;
        const botssize = message.guild.members.filter(m=>m.user.bot).map(m=>`${i++} - <@${m.id}>`);
          const embed = new Discord.RichEmbed()
          .setAuthor(message.author.tag, message.author.avatarURL)
          .setDescription(`**Found ${message.guild.members.filter(m=>m.user.bot).size} bots in this Server**
${botssize.join('\n')}`)
.setFooter(client.user.username, client.user.avatarURL)
.setTimestamp();
message.channel.send(embed)

}


});


client.on('message',async message => {
    var p = "$"
  function timeCon(time) {
  let days = Math.floor(time % 31536000 / 86400)
  let hours = Math.floor(time % 31536000 % 86400 / 3600)
  let minutes = Math.floor(time % 31536000 % 86400 % 3600 / 60)
  let seconds = Math.round(time % 31536000 % 86400 % 3600 % 60)
  days = days > 9 ? days : '0' + days
  hours = hours > 9 ? hours : '0' + hours
  minutes = minutes > 9 ? minutes : '0' + minutes
  seconds = seconds > 9 ? seconds : '0' + seconds
  return `${days > 0 ? `${days}:` : ''}${(hours || days) > 0 ? `${hours}:` : ''}${minutes}:${seconds}`
  };
  if(message.content.startsWith( p + "botin")) {
    const millis = new Date().getTime() - client.user.createdAt.getTime();
    const noww = new Date();
    dateFormat(noww, 'dddd, mmmm dS, yyyy, h:MM:ss TT');
    const createdAT = millis / 1000 / 60 / 60 / 24;
    var star = new Discord.RichEmbed() 
    .setTitle(`${client.user.username} معلومات عن بوت`)
    .setColor('#36393e')
    .addField('💓 امر البوت', prefix, true)
    .addField('🖥️ الرامات المستخدمة', `${(process.memoryUsage().rss / 1048576).toFixed()} ميجا بايت`,true)
    .addField('🏍️ سرعة البوت', `${Math.round(client.ping)} ملي سكند`,true)
    .addField('⏲️ تم تشغيل البوت منذ', `${timeCon(process.uptime())}`, true)
    .addField('💚 السيرفرات', client.guilds.size,true)
    .addField('💙 المستخدمين', client.users.size,true)
    message.channel.send(star);
  }
});


client.on("message", message => {
 if (message.content === "$support") {
  const embed = new Discord.RichEmbed()
      .setTitle('Click here')
      .setURL(' https://discord.gg/EemBs7d ')
      .setColor("RANDOM")
      .setFooter('♥Protozoa♥ جميع الحقوق محفوظة 2019 لبوت')  
      .addField('سيرفر الدعم الفني', ` https://discord.gg/EemBs7d  `)
  message.author.send({embed});

 }
});


client.on('message', message => {
    if (message.content.startsWith("$avatar")) {
        var mentionned = message.mentions.users.first();
    var x5bzm;
      if(mentionned){
          var x5bzm = mentionned;
      } else {
          var x5bzm = message.author;
          
      }
        const embed = new Discord.RichEmbed()
        .setColor("RANDOM")
        .setImage(`${x5bzm.avatarURL}`)
      message.channel.sendEmbed(embed);
    }
});

client.on('message', message => {
              if (!message.channel.guild) return;
      if(message.content =='$members')
      var kayan = new Discord.RichEmbed()
      .setThumbnail(message.author.avatarURL)
      .setFooter(message.author.username, message.author.avatarURL) 
      .setTitle('🙆| معلومات الأعضاء')
      .addBlankField(true)
      .addField('🐸| متصل بالانترنت',
      `${message.guild.members.filter(m=>m.presence.status == 'online').size}`)
      .addField('😡| مشغول',`${message.guild.members.filter(m=>m.presence.status == 'dnd').size}`)
      .addField('🐨| وضع الخمول',`${message.guild.members.filter(m=>m.presence.status == 'idle').size}`)
      .addField('😴|غير متصل على الانترنت',`${message.guild.members.filter(m=>m.presence.status == 'offline').size}`)
      .addField('👨‍👨‍👧‍👧| اعضاء السيرفر',`${message.guild.memberCount}`)
      message.channel.send(kayan);
    
    });



client.on('message', message => { 
let prefix = '$'
    if (message.content.startsWith(prefix + 'emojis')) {

        const List = message.guild.emojis.map(e => e.toString()).join(" ");

        const EmojiList = new Discord.RichEmbed()
            .setTitle('➡ Emojis') 
            .setAuthor(message.guild.name, message.guild.iconURL) 
            .setColor('RANDOM') 
            .setDescription(List) 
            .setFooter(message.guild.name) 
        message.channel.send(EmojiList) 
    }
});

client.on('message',function(message) {
	let prefix = "$";
let args = message.content.split(" ").slice(1).join(" ");
if(message.content.startsWith(prefix + "say")) {
if(!args) return;
message.channel.send(`** ${args}**`); 
}
});

client.on("ready", () => { //Magic0 is here :) Rainbow Code  by: Mag.
  function lol() {
    client.guilds.get('564734929641013268').roles.find("name", "Protozoa").setColor("RANDOM");
  };
  setInterval(lol, 2000);
});

client.on('message', msg => {
  if (msg.content === 'hi') {
    msg.reply('hi!');
  }
});

client.on('message', msg => {
  if (msg.content === 'bye') {
    msg.reply('bye!');
  }
});

client.on('message', msg => {
  if (msg.content === 'Ping') {
    msg.reply('[Pong!');
  }
});


client.on('message',async message => {
  if(message.content === '$unbanall') {
    var user = message.mentions.users.first();
    if(!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send('❌|**`ADMINISTRATOR`لا توجد لديك صلاحية `**');
    if(!message.guild.member(client.user).hasPermission("BAN_MEMBERS")) return message.reply("**I Don't Have ` BAN_MEMBERS ` Permission**");
    const guild = message.guild;

  message.guild.fetchBans().then(ba => {
  ba.forEach(ns => {
  message.guild.unban(ns);
  const embed= new Discord.RichEmbed()
        .setColor("RANDOM")
        .setDescription(`**✅ Has Been Unban For All**`)
    .setFooter('Requested by '+message.author.username, message.author.avatarURL)
  message.channel.sendEmbed(embed);
  guild.owner.send(`سيرفر : ${guild.name}
  **تم فك الباند عن الجميع بواسطة** : <@${message.author.id}>`) 
  });
  });
  }
  });

client.on('message', message => {
        var prefix = "$" ;
   if(message.content.startsWith(prefix + 'timer')) {
         let args = message.content.split(' ').slice(1);
  let Timer = args[0];

  if(!args[0]){
    return message.channel.send("❌ " + "| Please Enter a time period followed by \"s or m or h\"");
  }

  if(args[0] <= 0){
    return message.channel.send("❌ " + "| Please Enter a time period followed by \"s or m or h\"");
  }

  message.channel.send("✅ " + "| Timer Started for: " + `${ms(ms(Timer), {long: true})}`)

  setTimeout(function(){
    message.channel.send(message.author.toString() + `  The Timer Has FINISHED!, it lasted: ${ms(ms(Timer), {long: true})}`)

  }, ms(Timer));

    }
});

client.on('message', message => {
   if (message.content === "$id") {
   let embed = new Discord.RichEmbed()
  .setColor("RANDOM")
  .setThumbnail(message.author.avatarURL)
  .addField("Name:",`${message.author.username}`, true)
  .addField('Discrim:',"#" + `${message.author.discriminator}`, true)
  .addField("ID:", `${message.author.id}`, true)
  .addField("Create At:", `${message.author.createdAt}`, true)
  message.channel.sendEmbed(embed);
    }
});


client.on('message', message => { //Magic0
     var prefix = "$" ;
if(message.content === prefix + "roomsall"){
        if (message.author.bot) return
                      if (!message.guild) return;

        var channels = message.guild.channels.map(channels => `${channels.name}, `).join(' ')
        const embed = new Discord.RichEmbed()
        .setColor('RANDOM')
        .addField(`${message.guild.name}`,`**Rooms:white_check_mark:**`)
        .addField('⬇ عدد الرومات. ✔',`** ${message.guild.channels.size}**`)

.addField('⬇اسماء الرومات. ✔:',`**[${channels}]**`)
        message.channel.sendEmbed(embed);
    }
});

client.on ("guildMemberAdd", member => {
  
   var role = member.guild.roles.find ("name", "Protozoa");
   member.addRole (role);
  
})

client.on ("guildMemberRemove", member => {
   
})

client.on("message", msg => {//Toixc Codes
var prefix = '$';//البرفكس
if(msg.content.startsWith(prefix + "allroles")){//Toixc Codes
var embed = new Discord.RichEmbed()//Toixc Codes
.setAuthor(msg.author.username, msg.author.avatarURL)
.setThumbnail(msg.guild.iconURL)
.setColor("RANDOM")
.setTitle(msg.guild.name)
.addField("Names",msg.guild.roles.array())
.addField("Number",msg.guild.roles.size)
.setFooter(msg.guild.name, msg.guild.iconURL, true)
msg.channel.send(embed);
}
});//Toixc Codes

client.login(process.env.BOT_TOKEN);
