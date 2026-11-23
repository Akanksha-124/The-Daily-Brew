import { chromium } from 'playwright';
import fs from 'fs';
import path from 'path';

async function capture() {
  const outputDir = path.resolve('screenshots');
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  const browser = await chromium.launch();
  
  // 1. Desktop View (1440 x 900)
  console.log('Capturing Desktop view...');
  const desktopContext = await browser.newContext({
    viewport: { width: 1440, height: 900 },
    deviceScaleFactor: 2
  });
  const desktopPage = await desktopContext.newPage();
  await desktopPage.goto('http://localhost:5173/', { waitUntil: 'networkidle' });
  await desktopPage.waitForTimeout(1500);
  await desktopPage.screenshot({
    path: path.join(outputDir, 'desktop-view.png'),
    fullPage: false
  });

  // 2. Tablet View (768 x 1024 - iPad)
  console.log('Capturing Tablet view...');
  const tabletContext = await browser.newContext({
    viewport: { width: 768, height: 1024 },
    deviceScaleFactor: 2
  });
  const tabletPage = await tabletContext.newPage();
  await tabletPage.goto('http://localhost:5173/', { waitUntil: 'networkidle' });
  await tabletPage.waitForTimeout(1500);
  await tabletPage.screenshot({
    path: path.join(outputDir, 'tablet-view.png'),
    fullPage: false
  });

  // 3. Mobile View (375 x 812 - iPhone)
  console.log('Capturing Mobile view...');
  const mobileContext = await browser.newContext({
    viewport: { width: 375, height: 812 },
    deviceScaleFactor: 2,
    isMobile: true,
    hasTouch: true
  });
  const mobilePage = await mobileContext.newPage();
  await mobilePage.goto('http://localhost:5173/', { waitUntil: 'networkidle' });
  await mobilePage.waitForTimeout(1500);
  await mobilePage.screenshot({
    path: path.join(outputDir, 'mobile-view.png'),
    fullPage: false
  });

  await browser.close();
  console.log('All 3 screenshots captured successfully in /screenshots directory!');
}

capture().catch((err) => {
  console.error('Error capturing screenshots:', err);
  process.exit(1);
});
