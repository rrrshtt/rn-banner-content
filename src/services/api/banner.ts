import {TWebContent} from '../../shared/types/webContent';

const endpoint =
  'http://click-safety.com/test_task/test_do_not_run.php?id=lover';

interface BannerContentResponse {
  getBannerContent: boolean;
  urlToDisplay?: string;
}

const initialState = {
  isContentReady: false,
  url: undefined,
};

const fetchContent = async (): Promise<TWebContent> => {
  try {
    const response = await fetch(endpoint);
    const banner: BannerContentResponse = await response.json();
    return banner.getBannerContent
      ? {isContentReady: banner.getBannerContent, url: banner.urlToDisplay}
      : initialState;
  } catch (error) {
    console.error(error);
    return initialState;
  }
};

export const getBannerContent = {
  initialState,
  fetchContent,
};
