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

    async enterTextInputAndCheck(text: string): Promise<void> {
        webActions.enterElementText(VideoHeaderPageObject.SEARCH_INPUT, text);
    }

    async clickToSearchButton(): Promise<void> {
        webActions.clickElement(VideoHeaderPageObject.SEARCH_BUTTON);
    }

}
