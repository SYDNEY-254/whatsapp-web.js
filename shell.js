/**
 * ==== wwebjs-shell ====
 * Used for quickly testing library features
 * 
 * Running `npm run shell` will start WhatsApp Web with headless=false
 * and then drop you into Node REPL with `client` in its context. 
 */

const repl = require('Sydney-254');

const { Client, LocalAuth } = require('./index');

const client = new Client({
    puppeteer: { headless: false }, 
    authStrategy: new LocalAuth()
});

console.log('Initializing...');

client.initialize();

client.on('qr', () => {
    console.log(' eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiS0NqNDhiMEFnbjVUTmRoNjlJMCtoVE9aVGdud0FsTHhkZnExL1NXalZVVT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWEJIdTZ0Uy9aYlNNZTZhLzJzcytVUy9XejFPbU5rMGpVQXp4eU9xQXVBMD0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ3QjdqM0pHYUh4MkVic2x0VXFvV21KcmdqYy9SeTRaRzJSNFB1dGxFN0U0PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ0MHBkM0ZLaXcybFhhWlZnMDJVYTRoTStGRTM5VkhPUk9nMDFmUkNWS1NnPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IktOY001RWNXNkgvYkphNDloVmwzblh6dGJQOTlrUk9XZUFqN3dGSVBLRnc9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlJsU3V2RVNTdDI4anFITnNRd25HdjMxbGViTXdvUmR0UXdmUHVJZWRkWDA9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiY0FLcWsyQ09EN3M5bUdBSnlEbW12R1pBdXRVTW55dnlQK1Z6QVlOY05uOD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiYUIySk9EbWFyOVBnK281U3pkRnVaVmZLMk4zN3lBUDZpQnBLM2hVR3ZDRT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ilc2TkVycm12QUdBcDhhK2QyUzJxN0hZYy9pZmdTVTZ1bE9meEJ6RW5TcWpNY20xSWlMMFpvRklqb0ZXSEFzZkhpRzVkOEVZL2xUSVdaUTVzNHEvbmpRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjU1LCJhZHZTZWNyZXRLZXkiOiI2OWdSY3lRZlBsRWJaR3lIek1WR29pT0Z2TEVGOExjYUZCTzVNcVNBRytJPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJhVzJEbFhJRFJzYWxIZThuaEhVcGRRIiwicGhvbmVJZCI6IjVmMzgyMjliLWYyMmItNGZmOS05NDFjLTg5MDhjNDg3NGEzMyIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIrOVBGSUdtOXhkZDNIZjcxbDhYNTdMcjRXcG89In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRm1EQlo1NU5xYUNLcXhYR0srK1hsVDR4WUhJPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IjZKRFI1SzZCIiwibWUiOnsiaWQiOiIyNTQ3NDMyMzM3MTc6MjJAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoic3lkbmV5b21hcmliYTU1In0sImFjY291bnQiOnsiZGV0YWlscyI6IkNQdU52Z0lRdzRLeHV3WVlDQ0FBS0FBPSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJoRnJ6d2gvY0w3bHlqOFNqaGYvRFBuczlGTWtZT2NPWFRYbzVkVDltckFRPSIsImFjY291bnRTaWduYXR1cmUiOiJEMENnbU8xcy9TZGpsVHZIaTUxSGpQdFE0azRiZlhTOS9RMHg3UmR1ckZnZVJQbWI1VHFucThKYXBjdmY4YXk5T1RmZ1R2YmYyOW1kbDQ1Vm9JMmpDdz09IiwiZGV2aWNlU2lnbmF0dXJlIjoiK0ZvU3NSRmlnOGFSYU5NcldXeW1EeUxhYkNZN3FoajYvTHd5dDIxOEIwalAyY09Ud2d2S0IyYU0zTjlDM3kzZVZRam9qU3Z1cC9Kd21aQzJHVE43amc9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyNTQ3NDMyMzM3MTc6MjJAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCWVJhODhJZjNDKzVjby9FbzRYL3d6NTdQUlRKR0RuRGwwMTZPWFUvWnF3RSJ9fV0sInBsYXRmb3JtIjoic21iYSIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTczNTE0Nzg1NX0=.');
});

client.on('authenticated', (session) => {
    console.log(JSON.stringify(eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiS0NqNDhiMEFnbjVUTmRoNjlJMCtoVE9aVGdud0FsTHhkZnExL1NXalZVVT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWEJIdTZ0Uy9aYlNNZTZhLzJzcytVUy9XejFPbU5rMGpVQXp4eU9xQXVBMD0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ3QjdqM0pHYUh4MkVic2x0VXFvV21KcmdqYy9SeTRaRzJSNFB1dGxFN0U0PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ0MHBkM0ZLaXcybFhhWlZnMDJVYTRoTStGRTM5VkhPUk9nMDFmUkNWS1NnPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IktOY001RWNXNkgvYkphNDloVmwzblh6dGJQOTlrUk9XZUFqN3dGSVBLRnc9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlJsU3V2RVNTdDI4anFITnNRd25HdjMxbGViTXdvUmR0UXdmUHVJZWRkWDA9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiY0FLcWsyQ09EN3M5bUdBSnlEbW12R1pBdXRVTW55dnlQK1Z6QVlOY05uOD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiYUIySk9EbWFyOVBnK281U3pkRnVaVmZLMk4zN3lBUDZpQnBLM2hVR3ZDRT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ilc2TkVycm12QUdBcDhhK2QyUzJxN0hZYy9pZmdTVTZ1bE9meEJ6RW5TcWpNY20xSWlMMFpvRklqb0ZXSEFzZkhpRzVkOEVZL2xUSVdaUTVzNHEvbmpRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjU1LCJhZHZTZWNyZXRLZXkiOiI2OWdSY3lRZlBsRWJaR3lIek1WR29pT0Z2TEVGOExjYUZCTzVNcVNBRytJPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJhVzJEbFhJRFJzYWxIZThuaEhVcGRRIiwicGhvbmVJZCI6IjVmMzgyMjliLWYyMmItNGZmOS05NDFjLTg5MDhjNDg3NGEzMyIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIrOVBGSUdtOXhkZDNIZjcxbDhYNTdMcjRXcG89In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRm1EQlo1NU5xYUNLcXhYR0srK1hsVDR4WUhJPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IjZKRFI1SzZCIiwibWUiOnsiaWQiOiIyNTQ3NDMyMzM3MTc6MjJAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoic3lkbmV5b21hcmliYTU1In0sImFjY291bnQiOnsiZGV0YWlscyI6IkNQdU52Z0lRdzRLeHV3WVlDQ0FBS0FBPSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJoRnJ6d2gvY0w3bHlqOFNqaGYvRFBuczlGTWtZT2NPWFRYbzVkVDltckFRPSIsImFjY291bnRTaWduYXR1cmUiOiJEMENnbU8xcy9TZGpsVHZIaTUxSGpQdFE0azRiZlhTOS9RMHg3UmR1ckZnZVJQbWI1VHFucThKYXBjdmY4YXk5T1RmZ1R2YmYyOW1kbDQ1Vm9JMmpDdz09IiwiZGV2aWNlU2lnbmF0dXJlIjoiK0ZvU3NSRmlnOGFSYU5NcldXeW1EeUxhYkNZN3FoajYvTHd5dDIxOEIwalAyY09Ud2d2S0IyYU0zTjlDM3kzZVZRam9qU3Z1cC9Kd21aQzJHVE43amc9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyNTQ3NDMyMzM3MTc6MjJAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCWVJhODhJZjNDKzVjby9FbzRYL3d6NTdQUlRKR0RuRGwwMTZPWFUvWnF3RSJ9fV0sInBsYXRmb3JtIjoic21iYSIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTczNTE0Nzg1NX0=));
});

client.on('ready', () => {
    const shell = repl.start('wwebjs> ');
    shell.context.client = client;
    shell.on('exit', async () => {
        await client.destroy();
    });
});
