import { test } from '@playwright/test';
import { VideoHeader } from '@pages/VideoHeader';
import { VideoSearchResult } from '@pages/VideoSearchResult';

const TODO_ITEMS = [
  'ураган'
];

test('Check that video preview is displayed on video with number 1', async({page}) => {
    const videoSearchResult = new VideoSearchResult(page);
    const videoHeader = new VideoHeader(page);
    //given
    await videoSearchResult.goToURL();
    await videoSearchResult.waitForPageLoaded();
    //when
    await videoHeader.enterTextInInput(TODO_ITEMS[0]);
    await videoHeader.clickToSearchButton();
    await videoSearchResult.waitForContentLoaded();
    //then
    await videoSearchResult.checkThatPreviewIsPlayingOnVideoWithNumber(1);
});

test('Check that video preview is displayed on video with number 20', async({page}) => {
    const videoSearchResult = new VideoSearchResult(page);
    const videoHeader = new VideoHeader(page);
    //given
    await videoSearchResult.goToURL();
    await videoSearchResult.waitForPageLoaded();
    //when
    await videoHeader.enterTextInInput(TODO_ITEMS[0]);
    await videoHeader.clickToSearchButton();
    await videoSearchResult.waitForContentLoaded();
    //then
    await videoSearchResult.checkThatPreviewIsPlayingOnVideoWithNumber(20);
});