import { chromium } from "playwright";

const browser = await chromium.launch({ headless: true });

const page = await browser.newPage();

await page.goto("https://www.example.com");
