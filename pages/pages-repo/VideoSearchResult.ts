import { VideoSearchResultPageObjects } from "@objects/VideoSearchResultPageObjects";
import { WebActions } from "@lib/WebActions";
import type { Locator, Page } from '@playwright/test';
import { TestData } from "@test-data";

let webActions: WebActions;
const DEFAULT_ELEMENT_TIMEOUT = TestData.waitForElement * 2;
const DEFAULT_ELEMENT_POLL = 100;

export class VideoSearchResult extends VideoSearchResultPageObjects {
    readonly page: Page;

    constructor(page: Page) {
        super();
        this.page = page;
        webActions = new WebActions(this.page);
    }

    async goToURL(): Promise<void> {
        webActions.goToURL('video/');
    }

    async waitForPageLoaded(): Promise<void> {
        await webActions.waitForPageNavigation('domcontentloaded');
    }

    async waitForContentLoaded(): Promise<void> {
        await webActions.waitForPageNavigation('load');
    }

    async waitForSearchResultContentWithNameIsLoaded(name: string): Promise<void> {
        let flag = false;
        let timeout = 0;
        while (!flag && timeout < DEFAULT_ELEMENT_TIMEOUT) {
            const nameLower = name.toLowerCase();
            const textTitle = (await this.page.locator(VideoSearchResultPageObjects.VIDEO_FIRST_TITLE).innerText()).valueOf().toLowerCase();
            const textDescription = (await this.page.locator(VideoSearchResultPageObjects.VIDEO_FIRST_DESCRIPTION).innerText()).valueOf().toLowerCase();
            if (textTitle.includes(nameLower) || textDescription.includes(nameLower)) flag = true;
            
            timeout += DEFAULT_ELEMENT_POLL;
            await this.page.waitForTimeout(DEFAULT_ELEMENT_POLL);
        }
    }

    async checkThatVideoWithNumberHavePreview(elementNumber: number): Promise<void> {
        const rows = this.page.locator(VideoSearchResultPageObjects.VIDEO_PREVIEW_ELEMENT);
        let element: Locator;
        for (let i = 0; i < await rows.count(); ++i) {
            if (i == elementNumber) {
                element = rows.nth(i);
            }
        }
        if (element == null) throw new Error('Video element with number ' + elementNumber + ' is not found');
        await element.isVisible();
        await element.hover();
        const videoElement = element.locator('video');
        videoElement.getAttribute('src').catch(() => { throw new Error('Preview video is not found'); });
    }

    async checkThatPreviewIsPlayingOnVideoWithNumber(elementNumber: number): Promise<void> {
        const rows = this.page.locator(VideoSearchResultPageObjects.VIDEO_PREVIEW_ELEMENT);
        let element: Locator;
        for (let i = 0; i < await rows.count(); ++i) {
            if ((i + 1) == elementNumber) {
                element = rows.nth(i);
            }
        }
        if (element == null) throw new Error('Video element with number ' + elementNumber + ' is not found');
        await element.isVisible();
        await element.hover();
        await webActions.verifyElementIsDisplayed(VideoSearchResultPageObjects.VIDEO_PREVIEW_PLAYING)
    }
}

