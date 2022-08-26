export type ChannelSnippetType = {
  title: string;
  thumbnails: any;
  description: string;
  country?: string;
  customUrl?: string;
  localized?: any;
  publishedAt?: any;
};

export type ChannelStatisticsType = {
  hiddenSubscriberCount: boolean;
  subscriberCount: string | number;
  videoCount: string;
  viewCount: string;
};

export type ChannelType = {
  id: string;
  snippet: ChannelSnippetType;
  statistics?: ChannelStatisticsType;
};
