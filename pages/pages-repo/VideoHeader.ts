import { VideoHeaderPageObject } from "@objects/VideoHeaderPageObject";
import { WebActions } from "@lib/WebActions";
import type { Page } from '@playwright/test';

let webActions: WebActions;

export class VideoHeader extends VideoHeaderPageObject {
    readonly page: Page;

    constructor(page: Page) {
        super();
        this.page = page;
        webActions = new WebActions(this.page);
    }

    async enterTextInInput(text: string): Promise<void> {
        await webActions.enterElementText(VideoHeaderPageObject.SEARCH_INPUT, text);
    }

    async clickToSearchButton(): Promise<void> {
        await webActions.clickElement(VideoHeaderPageObject.SEARCH_BUTTON);
    }

}
