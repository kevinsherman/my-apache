import puppeteer from 'puppeteer';

(async function run(){
   
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.setCacheEnabled(false);

    const urls = [
        'http://www3.wtu.local',
        'http://wtu.local',
    ];

    for (const url of urls) {
        const response = await page.goto(url);
        const chain = response.request().redirectChain();

        if (chain.length > 0) {
            for (const request of chain) {
                const msg = `${request.url()} ${request.response()?.status()} to: ${
                    request.response()?.headers()["location"]}`;
                console.log(msg);
            }
            console.log(`\t\t301 redirects in place, so the apache rewrite is enabled`);
            
        } else {
            console.log(`301 redirects not in place, so the apache rewrite is not enabled`);
        }
    }

    await browser.close();
})();