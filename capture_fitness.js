const puppeteer = require('puppeteer');
const path = require('path');
const fs = require('fs');

async function capture() {
  const portfolioImgDir = '/Users/strange/remix-portfolio/assets/images';
  if (!fs.existsSync(portfolioImgDir)) {
    fs.mkdirSync(portfolioImgDir, { recursive: true });
  }

  console.log('Launching browser to capture Black Fitness mockups...');
  const browser = await puppeteer.launch({ 
    headless: "new",
    args: ['--no-sandbox', '--disable-setuid-sandbox'] 
  });
  
  const page = await browser.newPage();

  // --- 1. CAPTURE PC MOCKUPS (1440x900) ---
  console.log('--- Capturing PC Mockups ---');
  await page.setViewport({ width: 1440, height: 900 });
  
  console.log('Navigating to https://edmaemongkon.github.io/Black-Fitness/...');
  await page.goto('https://edmaemongkon.github.io/Black-Fitness/', { waitUntil: 'networkidle2', timeout: 30000 });
  await new Promise(resolve => setTimeout(resolve, 3000)); // Wait for particles/animations

  // Capture Hero Section (with announcement open, or we can capture it first)
  console.log('Capturing PC Hero area (with announcement)...');
  await page.screenshot({ path: path.join(portfolioImgDir, 'black-fitness-pc-home-announcement.png') });

  // Close the announcement modal
  console.log('Closing announcement modal...');
  try {
    await page.click('#announcementClose');
    await new Promise(resolve => setTimeout(resolve, 800)); // Wait for transition
  } catch (e) {
    console.log('Could not click close button, trying dismiss button:', e.message);
    try {
      await page.click('#announcementDismissBtn');
      await new Promise(resolve => setTimeout(resolve, 800));
    } catch (e2) {
      console.log('No announcement modal found or could not close:', e2.message);
    }
  }

  // Capture Hero Section (without announcement)
  console.log('Capturing PC Hero area...');
  await page.screenshot({ path: path.join(portfolioImgDir, 'black-fitness-pc-home.png') });

  // Scroll to Branches
  console.log('Scrolling to Branches section...');
  await page.evaluate(() => {
    document.getElementById('branches').scrollIntoView();
  });
  await new Promise(resolve => setTimeout(resolve, 1500));
  await page.screenshot({ path: path.join(portfolioImgDir, 'black-fitness-branches.png') });

  // Scroll to Pricing
  console.log('Scrolling to Pricing section...');
  await page.evaluate(() => {
    document.getElementById('pricing').scrollIntoView();
  });
  await new Promise(resolve => setTimeout(resolve, 1500));
  await page.screenshot({ path: path.join(portfolioImgDir, 'black-fitness-pricing.png') });


  // --- 2. CAPTURE MOBILE MOCKUPS (375x812 - iPhone X size) ---
  console.log('--- Capturing Mobile Mockups ---');
  await page.setViewport({ width: 375, height: 812, isMobile: true, hasTouch: true });
  
  console.log('Reloading page for mobile viewport...');
  await page.goto('https://edmaemongkon.github.io/Black-Fitness/', { waitUntil: 'networkidle2', timeout: 30000 });
  await new Promise(resolve => setTimeout(resolve, 3000));

  // Close the announcement modal on Mobile
  console.log('Closing announcement modal on Mobile...');
  try {
    await page.click('#announcementClose');
    await new Promise(resolve => setTimeout(resolve, 800));
  } catch (e) {
    try {
      await page.click('#announcementDismissBtn');
      await new Promise(resolve => setTimeout(resolve, 800));
    } catch (e2) {
      console.log('Could not close modal on mobile:', e2.message);
    }
  }

  // Capture Mobile Hero
  console.log('Capturing Mobile Hero...');
  await page.screenshot({ path: path.join(portfolioImgDir, 'black-fitness-mobile.png') });

  await browser.close();
  console.log('All mockups captured successfully! Saved in remix-portfolio/assets/images/');
}

capture().catch(err => {
  console.error('Error in capture script:', err);
  process.exit(1);
});
