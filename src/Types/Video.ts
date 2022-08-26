export type VideoIDType = {
  videoId?: string;
  channelId?: string;
};

export type VideoSnippetType = {
  channelId: string;
  thumbnails: any;
  title: string;
  description: string;
  channelTitle: string;
};

export type VideoStatisticsType = {
  hiddenSubscriberCount: boolean;
  subscriberCount?: string | number;
  viewCount: string | number;
  videoCount: string | number;
  likeCount?: string | number;
};

export type VideoType = {
  id: VideoIDType;
  snippet: VideoSnippetType;
  statistics?: VideoStatisticsType;
};
