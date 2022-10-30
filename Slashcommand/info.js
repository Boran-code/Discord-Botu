const { SlashCommanBuilder, EmbedBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommanBuilder()
        .setname('info')
        .setDescription('info verir'),
    async execute(client, interaction) {

        let date = new date(interaction.member.joinedTimestamp)

        var embed = new EmbedBuilder()
            .setColor(0x0099FF)
            .setTitle('info')
            .setAuthor({ name: interaction.member.user.usarname, iconURL: 'https://i.imgur.com/AfFp7pu.png' })
            .setDescription('Information about server, member and bot')
            .setThumbnail('https://i.imgur.com/AfFp7pu.png')
            .addFields(
                { name: 'bot name:', value: client.user.usarname },
                { name: 'Version', value: '1.2.0' },
                { name: 'Creator', value: 'Gazanan ⍫#8648', },
                { name: 'Joined at:', value: date.toLocaleString() },
                { name: 'Members:', value: interaction.guild.membercount.toString() }
            )
            .setImage('https://i.imgur.com/AfFp7pu.png')
            .setTimestamp()
            .setFooter({ text: 'Some footer text here', iconURL: 'https://i.imgur.com/AfFp7pu.png' });

        await interaction.reply({ embeds: [embed] });

    },
};