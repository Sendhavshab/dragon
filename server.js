import {Telegraf} from 'telegraf';


const bot= new Telegraf(process.env.BOT_TOKEN);

bot.start(async(ctx)=> {

    console.log('ctx', ctx);

    console.log('Welocme to socialllbot,Its working!')

});

bot.launch();


// Enable graceful stop

process.once('SIGINT', () => bot.stop('SIGINT'));
process.once('SIGTERM', () => bot.stop('SIGTERM'));
