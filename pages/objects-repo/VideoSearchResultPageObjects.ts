export class VideoSearchResultPageObjects {
    protected static VIDEO_PREVIEW_ELEMENT = '//div[contains(@class, "serp-item__preview")]';
    protected static VIDEO_PREVIEW_PLAYING = '//div[contains(@class, "thumb-preview__target thumb-preview__target_playing")]'
    protected static VIDEO_FIRST_TITLE = '(//a[contains(@class, "link serp-item__title i-bem")])[1]';
    protected static VIDEO_FIRST_DESCRIPTION = '(//div[contains(@class, "serp-item__text_visibleText_always")])[1]';
    protected static SEARCH_RESULT_PAGE_SPINNER = '//div[contains(@class, "spin2_progress_yes")]';
}