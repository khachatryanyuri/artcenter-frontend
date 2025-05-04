interface IVideo {
  etag: string;
  id: string;
  kind: string;
  snippet: {
    channelId: string;
    channelTitle: string;
    description: string;
    playlistId: string;
    position: number;
    publishedAt: string;
    resourceId: {
      kind: string;
      videoId: string;
    };
    thumbnails: {
      default: { url: string };
      medium: { url: string };
      high: { url: string };
      standard: { url: string };
      maxres: { url: string };
    };
    title: string;
    videoOwnerChannelId: string;
    videoOwnerChannelTitle: string;
  };
}

interface IDetailedVideo {
  kind: string;
  etag: string;
  id: string;
  contentDetails: {
    duration: string;
    dimension: string;
    definition: string;
    caption: string;
    licensedContent: boolean;
  };
}

interface ILatestVideoComponentProps {
  matchesMin: boolean;
  video: IVideo;
  logo: string;
}

interface IVideoComponentProps {
  index: number;
  matchesMid: boolean;
  matchesMin: boolean;
  video: IVideo;
  logo: string;
  videoDurations: { [videoId: string]: string };
  handleClickOpen: (video: IVideo) => void;
}

interface IVideoPlayer {
  open: boolean;
  setOpen: (open: boolean) => void;
  selectedVideo: IVideo | null;
}

export type { IVideo, IDetailedVideo, ILatestVideoComponentProps, IVideoComponentProps, IVideoPlayer };
