const Discord = require("discord.js");

const bot = new Discord.Client({disableEveryone: true});

bot.on("ready", () => {
	console.log(`Hi, ${bot.user.username} is now online`);

	bot.user.setPresence({
		status: "online",
		game: {
			name: "за твоей мамкой",
			type: "WATCHING"
		}
	});
});

bot.on("message", async message => {
	const prefix = "z!";

	if (message.author.bot) return;
	if (!message.guild) return;
	if (message.channel.type === "dm") return;
	if (!message.content.startsWith(prefix)) return;

	const args = message.content.slice(prefix.length).trim().split(/ +/g);
	const cmd = args.shift().toLowerCase();
	
	if (cmd === "sinfo"){
		
		let servicon = message.guild.iconURL;
		let serverembed = new Discord.RichEmbed()		
		
		.setDescription("Информация о сервере")
		.setColor("#00ffff")
		.setThumbnail(servicon)
		.addField("Название сервера", message.guild.name)
		.addField("Создан", message.guild.createdAt)
		.addField("Ты вступил", message.member.joinedAt)
		.addField("Всего пользователей", message.guild.memberCount);
		
		return message.channel.send(serverembed);
	}
	
	
	if (cmd === "botinfo"){
		let bicon = bot.user.displayAvatarURL;
		let botembed = new Discord.RichEmbed()
		.setDescription("Информация о боте")
		.setColor("#00ffff")
		.setThumbnail(bicon)
		.addField("Имя бота", bot.user.username)
		.addField("Создан", bot.user.createdAt);
		
		return message.channel.send(botembed);
	}
	
	if (cmd === "report"){
																		
		let rUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
		if(!rUser) return message.channel.send("Не выбран пользователь");
		let reason = args.join(" ").slice(22);
		let reportEmbed = new Discord.RichEmbed()
		.setDescription("Жалоба")
		.setColor("#00ffff")
		.addField("Жалоба на пользователя", `${rUser} with ID: ${rUser.id}`)
		.addField("Причина", reason)
		.addField("Жалоба от", `${message.author} with ID: ${message.author.id}`)
		.addField("Канал", message.channel)
		.addField("Время", message.createdAt);
		
		let reportsChannel = message.guild.channels.find(`name`, "reportochka");
		if(!reportsChannel) return message.channel.send("Не найден канал для репортов");
		
		message.delete().catch(O_o=>{});
		reportsChannel.send(reportEmbed);
		return;
	}

	if (cmd === "help") {
		message.delete();
		let helpEmbed = new Discord.RichEmbed()
			.addField("Комманды бота.", "z!ping - проверить пинг бота \n z!hello [user] - поприветствоать \n z!poke [user] - тыкнуть \n z!sad - грустить \n z!mccookie [user] - (под НГ) дать печеньки \n z!pat [user] - погладить \n z!cuddle [user] - прижаться \n z!hug [user] - обнять \n z!tease [user] - подразнить \n z!sulk - дуться \n z!punch - конкретно уебать \n z!bite - укусить \n z!slap - уебать по ебалу \n z!zpunch - ударить по залупе")
			.setColor("#00ffff");
		message.author.send(helpEmbed);
	}
		
	
	if (cmd === "agit") {
		var y = Math.floor(Math.random() * (400 - 1 + 1)) + 1;
		if ((1< y) && (y < 100)) {
			message.channel.send({files: ["1.jpg"]});
		}
			if ((101< y) && (y<170)) {
			message.channel.send({files: ["2.jpg"]});
		}
			if ((171< y)&& (y <300)) {
			message.channel.send({files: ["3.png"]});
		}
			if ((301< y) && (y <400)) {
			message.channel.send({files: ["4.png"]});
		}
	}

	if (cmd === "hello") {
		const user = message.mentions.users.first()
		if(!user) {
			message.reply('Не упомянут пользователь для приветствия');
		}
		const member = message.guild.member(user)
		if(member) {
			var x = Math.floor(Math.random() * (100 - 1 + 1)) + 1;
			if (x >= 35){
				let helloEmbed = new Discord.RichEmbed()
				.setImage("https://cdn.discordapp.com/attachments/598950244520165402/648079770508066816/w2.gif")
				.setFooter("z!hello [user]");
				message.channel.send(`${message.author} поприветствовал ${user}!`, helloEmbed);
			}
			else 
			{
				let helloEmbed = new Discord.RichEmbed()
				.setImage("https://cdn.discordapp.com/attachments/598950244520165402/648079829580906506/w1.gif")
				.setFooter("z!hello [user]");
				message.channel.send(`${message.author} поприветствовал ${user}!`, helloEmbed);
			}
		}
	}
	
	if (cmd === "poke") {
		const user = message.mentions.users.first()
		if(!user) {
			message.reply('Не упомянут пользователь для тыка');
		}
		const member = message.guild.member(user)
		if(member) {
			var x = Math.floor(Math.random() * (100 - 1 + 1)) + 1;
			if (x >= 35){
				let pokeEmbed = new Discord.RichEmbed()
				.setImage("https://cdn.discordapp.com/attachments/598950244520165402/648065852016427019/a1.gif")
				.setFooter("z!poke [user]");
				message.channel.send(`${message.author} тыкнул бля ${user}!`, pokeEmbed);
				//message.author.send(pokeEmbed);
			}
			else 
			{
				let pokeEmbed = new Discord.RichEmbed()
				.setImage("https://cdn.discordapp.com/attachments/598950244520165402/648066305009909760/a2.gif")
				.setFooter("z!poke [user]");
				message.channel.send(`${message.author} тыкнул бля ${user}!`, pokeEmbed);
			}
		}
	}

	if (cmd === "sad") {
		var x = Math.floor(Math.random() * (100 - 1 + 1)) + 1;
		if (x >= 35){
				let sadEmbed = new Discord.RichEmbed()
				.setImage("https://cdn.discordapp.com/attachments/598950244520165402/648067185754898433/q2.gif")
				.setFooter("z!sad");
			message.channel.send(`${message.author} грустит ;(`, sadEmbed);
		}
		else {
			let sadEmbed = new Discord.RichEmbed()
				.setImage("https://cdn.discordapp.com/attachments/598950244520165402/648066413470285824/q1.gif")
				.setFooter("z!sad");
			message.channel.send(`${message.author} грустит ;(`, sadEmbed);
		}
	}
	
	if (cmd === "mccookie") {
		const user = message.mentions.users.first()
		if(!user) {
			message.reply('Не упомянут пользователь для подарка');
		}
		const member = message.guild.member(user)
		if(member) {
			let cookieEmbed = new Discord.RichEmbed()
				.setImage("https://cdn.discordapp.com/attachments/598950244520165402/648064551329464321/11.jpeg")
				.setFooter("z!mccookie [user]");
			message.channel.send(`${message.author} дал печенки ${user}!`, cookieEmbed);
		}
	}
	
	if (cmd === "pat") {
		const user = message.mentions.users.first()
		if(!user) {
			message.reply('Не упомянут пользователь, что-бы погладить');
		}
		const member = message.guild.member(user)
		if(member) {
			var x = Math.floor(Math.random() * (100 - 1 + 1)) + 1;
			if (x >= 35){
			let patEmbed = new Discord.RichEmbed()
				.setImage("https://cdn.discordapp.com/attachments/598950244520165402/648065274762756126/f2.gif")
				.setFooter("z!pat [user]");
				message.channel.send(`${message.author} погладил(нахуя?) ${user}!`, patEmbed);
			}
			else 
			{
			let patEmbed = new Discord.RichEmbed()
				.setImage("https://cdn.discordapp.com/attachments/598950244520165402/648065650446565426/f1.gif")
				.setFooter("z!pat [user]");
				message.channel.send(`${message.author} погладил(нахуя?) ${user}!`, patEmbed);
			}
		}
	}

	if (cmd === "cuddle") {
		const user = message.mentions.users.first()
		if(!user) {
			message.reply('Не упомянут пользователь, что-бы прижаться');
		}
		const member = message.guild.member(user)
		if(member) {
			var x = Math.floor(Math.random() * (100 - 1 + 1)) + 1;
			if (x >= 35){
			let cuddleEmbed = new Discord.RichEmbed()
				.setImage("https://cdn.discordapp.com/attachments/598950244520165402/648068070971015188/g1.gif")
				.setFooter("z!cuddle [user]");
				message.channel.send(`${message.author} прижался к ${user}!`, cuddleEmbed);
			}
			else 
			{
			let cuddleEmbed = new Discord.RichEmbed()
				.setImage("https://cdn.discordapp.com/attachments/598950244520165402/648068509238296579/g2.gif")
				.setFooter("z!cuddle [user]");
				message.channel.send(`${message.author} прижался к ${user}!`, cuddleEmbed);
			}
		}
	}

	if (cmd === "hug") {
		const user = message.mentions.users.first()
		if(!user) {
			message.reply('Не упомянут пользователь, что-бы обнять');
		}
		const member = message.guild.member(user)
		if(member) {
			var x = Math.floor(Math.random() * (100 - 1 + 1)) + 1;
			if (x >= 35){
			let hugEmbed = new Discord.RichEmbed()
				.setImage("https://cdn.discordapp.com/attachments/598950244520165402/648068642122235904/h1.gif")
				.setFooter("z!hug [user]");
				message.channel.send(`${message.author} обнял ${user}!`, hugEmbed);
			}
			else 
			{
			let hugEmbed = new Discord.RichEmbed()
				.setImage("https://cdn.discordapp.com/attachments/598950244520165402/648068881826709524/h2.gif")
				.setFooter("z!hug [user]");
				message.channel.send(`${message.author} обнял ${user}!`, hugEmbed);
			}
		}
	}

	if (cmd === "tease") {
		const user = message.mentions.users.first()
		if(!user) {
			message.reply('Не упомянут пользователь для дразения');
		}
		const member = message.guild.member(user)
		if(member) {
			var x = Math.floor(Math.random() * (100 - 1 + 1)) + 1;
			if (x >= 35){
			let teaseEmbed = new Discord.RichEmbed()
				.setImage("https://cdn.discordapp.com/attachments/598950244520165402/648069409910423552/d1.gif")
				.setFooter("z!tease [user]");
				message.channel.send(`${message.author} подразнил ${user}!`, teaseEmbed);
			}
			else 
			{
			let teaseEmbed = new Discord.RichEmbed()
				.setImage("https://cdn.discordapp.com/attachments/598950244520165402/648069725171220482/d2.gif")
				.setFooter("z!tease [user]");
				message.channel.send(`${message.author} подразнил ${user}!`, teaseEmbed);
			}
		}
	}
	
	if (cmd === "sulk") {
			var x = Math.floor(Math.random() * (100 - 1 + 1)) + 1;
			if (x >= 35){
			let sulkEmbed = new Discord.RichEmbed()
				.setImage("https://cdn.discordapp.com/attachments/598950244520165402/648070684341436426/e1.gif")
				.setFooter("z!sulk");
				message.channel.send(`${message.author} дуется!`, sulkEmbed);
			}
			else 
			{
			let sulkEmbed = new Discord.RichEmbed()
				.setImage("https://cdn.discordapp.com/attachments/598950244520165402/648070702821277706/e22.gif")
				.setFooter("z!sulk");
				message.channel.send(`${message.author} дуется!`, sulkEmbed);
			}
	}
	
	if (cmd === "punch") {
		const user = message.mentions.users.first()
		if(!user) {
			message.reply('Не упомянут пользователь для конкретного уеба');
		}
		const member = message.guild.member(user)
		if(member) {
			var x = Math.floor(Math.random() * (100 - 1 + 1)) + 1;
			if (x >= 35){
			let punchEmbed = new Discord.RichEmbed()
				.setImage("https://cdn.discordapp.com/attachments/598950244520165402/648071006048616448/c1.gif")
				.setFooter("z!punch [user]");
				message.channel.send(`${message.author} конкретно уебал ${user}!`, punchEmbed);
			}
			else 
			{
			let punchEmbed = new Discord.RichEmbed()
				.setImage("https://cdn.discordapp.com/attachments/598950244520165402/648071028618166284/c2.gif")
				.setFooter("z!punch [user]");
				message.channel.send(`${message.author} конкретно уебал ${user}!`, punchEmbed);
			}
		}
	}		
	if (cmd === "bite") {
		const user = message.mentions.users.first()
		if(!user) {
			message.reply('Не упомянут пользователь для укуса');
		}
		const member = message.guild.member(user)
		if(member) {
			var x = Math.floor(Math.random() * (100 - 1 + 1)) + 1;
			if (x >= 35){
			let biteEmbed = new Discord.RichEmbed()
				.setImage("https://cdn.discordapp.com/attachments/598950244520165402/648071492763910144/b1.gif")
				.setFooter("z!bite [user]");
				message.channel.send(`${message.author} укусил нахуй ${user}!`, biteEmbed);
			}
			else 
			{
			let biteEmbed = new Discord.RichEmbed()
				.setImage("https://cdn.discordapp.com/attachments/598950244520165402/648071519263522818/b2.gif")
				.setFooter("z!bite [user]");
				message.channel.send(`${message.author} укусил нахуй ${user}!`, biteEmbed);
			}
		}
	}	
	
if (cmd === "slap") {
	var x = Math.floor(Math.random() * (100 - 1 + 1)) + 1;
	if (x >= 21){
		const user = message.mentions.users.first()
		if(!user) {
			message.reply('Не упомянут пользователь для удара');
		}
		
		const member = message.guild.member(user)
		if(member) {
			var x = Math.floor(Math.random() * (100 - 1 + 1)) + 1;
			if (x >= 35){
			let slapEmbed = new Discord.RichEmbed()
				.setImage("https://cdn.discordapp.com/attachments/598950244520165402/648072537959432192/as.gif")
				.setFooter("z!slap [user]");
				message.channel.send(`${user} получил по ебалу от ${message.author}!`, slapEmbed);
			}
			else 
			{
			let slapEmbed = new Discord.RichEmbed()
				.setImage("https://cdn.discordapp.com/attachments/598950244520165402/648072579801677845/tenor.gif")
				.setFooter("z!slap [user]");
				message.channel.send(`${user} получил по ебалу от ${message.author}!`, slapEmbed);
			}
		}
	}	
	else {
		const user = message.mentions.users.first()
		message.channel.send(`> ${user} тебе повезло и ты увернулся`);
	}
}
		
if (cmd === "zpunch") {
	var x = Math.floor(Math.random() * (100 - 1 + 1)) + 1;
	if (x >= 21){ 
		const user = message.mentions.users.first()
		if(!user) {
			message.reply('Не упомянут пользователь для удара');
		}
	
		const member = message.guild.member(user)
		if(member) {
			let zpunchEmbed = new Discord.RichEmbed()
				.setImage("https://cdn.discordapp.com/attachments/598950244520165402/648072821821669386/ass.jpg")
				.setFooter("z!zpunch [user]");
			message.channel.send(`${user} получил по залупе от ${message.author}!`,zpunchEmbed);
		}	else {
			const user = message.mentions.users.first()
			message.channel.send(`> ${user} тебе повезло и твоя залупа цела`);
		}
	
	}
}

	if (cmd === "ping") {
		const msg = await message.channel.send(`🏓 Pingping...`);

		msg.edit(`🏓 Pong\nLatency is ${Math.floor(msg.createdTimestamp - message.createdTimestamp)}\nAPI Latency ${Math.round(bot.ping)}ms`);
	}
	
	if (cmd === "say") {
		if (message.deletable) message.delete();
		
		if (args.length < 1) 
			return message.reply("Nothing to say?").then(m => m.delete(5000));
		
		const roleColor = message.guild.me.displayHexColor === "#000000" ? "#ffffff" : message.guild.me.displayHexColor;
		
	if (args[0].toLowerCase() === "embed") {
	
		let sayembed = new Discord.RichEmbed()
			.setColor(roleColor)
			.setDescription(args.slice(1).join(" "));
			
			return message.channel.send(sayembed);
		}
	}
	
	if (cmd === "ego") {
		message.react('😎');
	}
	
	if (cmd === "PM") {
		message.author.send("Zalupa");
	}
	
	if (cmd === "kick") {
		if (!message.member.roles.has("635548384052248597")){
			message.reply('Ты не модератор и не можешь кикать дюдей');
		}
		
		const user = message.mentions.users.first()
		if(!user) {
			message.reply('Не упомянут пользователь для кика');
		}
		
		const member = message.guild.member(user)
		if(member) {
			member.kick('Это сообщение будет показано в логах сервера').then(() => {
				message.reply(`${user.tag} был кикнут с сервера`)
			})
		}
		
	}
	
});

//bot.on('message', msg => {
//	
//	if(msg.member.roles.has("635548384052248597")) return;
//	
//	let wordArray = msg.content.split(" ")
//	console.log(wordArray);
//	
//	let filterWords = ['шах', 'Шах', 'ШАх', 'шАХ', 'ШаХ', 'шАх', 'ШАХ']
//	
//	for(var i = 0; i < filterWords.length; i++) {
//		if(wordArray.includes(filterWords[i])){
//			msg.delete()
//			msg.channel.send(`иди нахуй, ${msg.author.username}, дед ебучий`);
//			break;
//		}
//		
//	}
//});

bot.login('NjQxMjkzMjU5Njg3MTk4NzIw.Xc-ZZg.Rf-M3kSHjDGgxa3eWm-swnVhYss');
