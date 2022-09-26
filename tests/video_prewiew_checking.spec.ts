import { test } from '@playwright/test';
import { VideoHeader } from '@pages/VideoHeader';
import { VideoSearchResult } from '@pages/VideoSearchResult';

const TODO_ITEMS = [
  'ураган'
];

test('Chack that video prewiew is displayed on video with number 1', async({page}) => {
    const videoSearchResult = new VideoSearchResult(page);
    const videoHeader = new VideoHeader(page);
    //given
    await videoSearchResult.goToURL();
    await videoSearchResult.waitForPageLoaded();
    //when
    await videoHeader.enterTextInputAndCheck(TODO_ITEMS[0]);
    await videoHeader.clickToSearchButton();
    await videoSearchResult.waitForContentLoaded();
    //than
    await videoSearchResult.checkThatPrewiewIsPlayingOnVideoWithNumber(1);
});

test('Chack that video prewiew is displayed on video with number 20', async({page}) => {
    const videoSearchResult = new VideoSearchResult(page);
    const videoHeader = new VideoHeader(page);
    //given
    await videoSearchResult.goToURL();
    await videoSearchResult.waitForPageLoaded();
    //when
    await videoHeader.enterTextInputAndCheck('ураган');
    await videoHeader.clickToSearchButton();
    await videoSearchResult.waitForContentLoaded();
    //than
    await videoSearchResult.checkThatPrewiewIsPlayingOnVideoWithNumber(20);
});