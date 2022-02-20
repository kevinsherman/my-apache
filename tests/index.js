import puppeteer from 'puppeteer';

(async function run(){
   
    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    const urls = [
        'http://www.wtu.local',
        'http://www3.wtu.local',
        'http://wtu.local',
    ];

    for (const url of urls) {
        const response = await page.goto(url);
        const chain = response.request().redirectChain();

        if (chain.length > 0) {
            for (const request of chain) {
                `${request.url()} ${request.response()?.status()} to: ${
                    request.response()?.headers()["location"]
                  }`
            }
        }
    }

    await browser.close();
})();