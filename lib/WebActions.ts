import type { ElementHandle, Locator, Page } from '@playwright/test';
import { BrowserContext, expect } from '@playwright/test';
import { TestData } from '@test-data';

const waitForElement = TestData.waitForElement;
const baseURL = TestData.baseURL;

export class WebActions {
    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async goToURL(url: string) {
        this.page.goto(url);
    }

    async waitForPageNavigation(event: string): Promise<void> {
        switch (event.toLowerCase()) {
            case 'networkidle':
                await this.page.waitForNavigation({ waitUntil: 'networkidle', timeout: waitForElement });
                break;
            case 'load':
                await this.page.waitForNavigation({ waitUntil: 'load', timeout: waitForElement });
                break;
            case 'domcontentloaded':
                await this.page.waitForNavigation({ waitUntil: 'domcontentloaded', timeout: waitForElement });
        }
    }

    async clickElement(locator: string): Promise<void> {
        await this.page.click(locator);
    }

    async hoverToElement(locator: string): Promise<void> {
        await this.page.hover(locator);
    }

    async enterElementText(locator: string, text: string): Promise<void> {
        await this.page.fill(locator, text);
    }

    async verifyElementIsDisplayed(locator: string): Promise<void> {
        await this.page.waitForSelector(locator, { state: 'visible', timeout: waitForElement })
            .catch(() => { throw new Error('element ' + locator + ' not found'); });
    }

}