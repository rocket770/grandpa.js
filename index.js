const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = '/';
client.on('ready', () => {
    console.log(`Logged in!`);
    client.user.setStatus('available')
    client.user.setPresence({
        game: {
            name: 'Grandma left me',
            type: "STREAMING",
            url: "well idk what to write here"

        }
    });
});
client.on('message', message => {
  if (!message.guild) return;
  if (message.content.startsWith('/kick')) {
    if (!message.member.roles.find("name", "Swearsie Police")){
      message.channel.send('You need the \`Swearsie Police\` role to use this command.');
          return;
    }
    const user = message.mentions.users.first();
    if (user) {
      const member = message.guild.member(user);
      if (member) {
        member.kick({
          reason: 'They were bad!',
        }).then(() => {
          message.reply(":wave: " + member.displayName + " has been successfully kicked :point_right: ");
        }).catch(err => {
          message.reply('I was unable to kick the member');
          console.error(err);
        });
      } else {
        message.reply('That user isn\'t in this guild!');
      }
    } else {
      message.reply('You didn\'t mention the user to kick!');
    }
  }
});
client.on('message', message => {
  if (!message.guild) return;
  if (message.content.startsWith('/ban')) {
    if (!message.member.roles.find("name", "Admin")){
      message.channel.send('You need the \`Admin\` role to use this command.');
          return;
    }
    const user = message.mentions.users.first();
    if (user) {
      const member = message.guild.member(user);
      if (member) {
        member.ban({
          reason: 'They were bad!',
        }).then(() => {
          message.reply(":wave: " + member.displayName + " has been successfully banned :point_right: ");
        }).catch(err => {
          message.reply('I was unable to ban the member');
          console.error(err);
        });
      } else {
        message.reply('That user isn\'t in this guild!');
      }
    } else {
      message.reply('You didn\'t mention the user to ban!');
    }
  }
});
client.on('message', message => {
  if (message.content == "Nigger"|| message.content == "nigger" || message.content == "negger") {
    message.reply("Dont say such a bad word! <@252670200317607937> Please add 1 Dollar to the swear jar!");
  }
  if (message.content == "/swearjar") {
    message.reply("You can add to the swear jar here: https://docs.google.com/document/d/1mb-lUMhhK7fgF7cEAP2pPOrVOJw0c6l0vC5ePa26ubU/edit")
  }
});
client.on('message', message => {
    let msg = message.content.toUpperCase();
    let sender = message.author; //
    let cont = message.content.slice(prefix.length).split(" ");
    let args = cont.slice(1);
if (msg.startsWith(prefix + 'PURGE')) {
    async function purge() {
        message.delete();
        if (!message.member.roles.find("name", "Swearsie Police")) {
            message.channel.send('You need the \`Swearsie Police\` role to use this command.');
            return;
        }
        if (isNaN(args[0])) {
            message.channel.send('Please use a number as your arguments. \n Usage: ' + prefix + 'purge <amount>');
            return;
        }
        const fetched = await message.channel.fetchMessages({limit: args[0]});
        console.log(fetched.size + ' messages found, deleting...');

        message.channel.bulkDelete(fetched)
            .catch(error => message.channel.send(`Error: ${error}`));
    }
    purge();
}
});


client.login('token_id');
