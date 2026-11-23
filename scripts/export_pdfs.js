import { chromium } from 'playwright';
import path from 'path';

async function generatePDFs() {
  const browser = await chromium.launch();
  
  // 1. Screenshots 3-Page Proof PDF
  console.log('Generating The_Daily_Brew_Homepage_Screenshots_3_Pages.pdf...');
  const page1 = await browser.newPage();
  const screenshotsHtmlPath = 'file://' + path.resolve('THE_DAILY_BREW_SCREENSHOTS_3_PAGE_PROOF.html');
  await page1.goto(screenshotsHtmlPath, { waitUntil: 'networkidle' });
  await page1.waitForTimeout(1000);
  await page1.pdf({
    path: 'The_Daily_Brew_Homepage_Screenshots_3_Pages.pdf',
    format: 'A4',
    printBackground: true,
    preferCSSPageSize: true,
    margin: { top: '0mm', right: '0mm', bottom: '0mm', left: '0mm' }
  });

  // 2. Prompt PDF
  console.log('Generating The_Daily_Brew_Detailed_Prompt.pdf...');
  const page2 = await browser.newPage();
  const promptHtmlPath = 'file://' + path.resolve('THE_DAILY_BREW_PROMPT_ONLY.html');
  await page2.goto(promptHtmlPath, { waitUntil: 'networkidle' });
  await page2.waitForTimeout(1000);
  await page2.pdf({
    path: 'The_Daily_Brew_Detailed_Prompt.pdf',
    format: 'A4',
    printBackground: true,
    margin: { top: '15mm', right: '15mm', bottom: '15mm', left: '15mm' }
  });

  await browser.close();
  console.log('PDFs generated successfully!');
}

generatePDFs().catch((err) => {
  console.error('Error generating PDFs:', err);
  process.exit(1);
});
