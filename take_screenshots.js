const { chromium } = require("playwright");

async function run() {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
  await page.goto("http://localhost:3005/", { waitUntil: "domcontentloaded" });
  await page.waitForTimeout(1000);

  // Screenshot navbar
  await page.screenshot({
    path: "C:/Users/Meet/.gemini/antigravity/brain/73d4106a-abe4-433d-a627-92101d9af116/logo_navbar_desktop.png",
    clip: { x: 0, y: 0, width: 1440, height: 110 },
  });

  // Screenshot footer
  await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
  await page.waitForTimeout(600);
  await page.screenshot({
    path: "C:/Users/Meet/.gemini/antigravity/brain/73d4106a-abe4-433d-a627-92101d9af116/logo_footer_desktop.png",
    clip: { x: 40, y: 800, width: 450, height: 180 },
  });

  // Mobile navbar
  await page.setViewportSize({ width: 393, height: 852 });
  await page.goto("http://localhost:3005/", { waitUntil: "domcontentloaded" });
  await page.waitForTimeout(1000);
  await page.screenshot({
    path: "C:/Users/Meet/.gemini/antigravity/brain/73d4106a-abe4-433d-a627-92101d9af116/logo_navbar_mobile.png",
    clip: { x: 0, y: 0, width: 393, height: 90 },
  });

  await browser.close();
  console.log("Screenshots captured!");
}

run().catch((e) => {
  console.error(e);
  process.exit(1);
});

