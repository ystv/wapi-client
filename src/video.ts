import Preset from "./encodePreset";

export interface Meta {
  id: number;
  seriesID: number;
  name: string;
  url: string;
  duration: number;
  views: number;
  tags: string[];
  status: string;
  preset?: Preset;
  broadcastDate: Date;
  createdAt: Date;
}

export interface Video extends Meta {
  description: string;
  thumbnail: string;
  createdByID: number;
  createdByNick: string;
  updatedByID?: number;
  updatedByNick?: string;
  deletedByID?: number;
  deletedByNick?: string;
  files: File[];
}

export interface File {
  id: number;
  uri: string;
  encodeFormat: string;
  status: string;
  size: number;
  mimeType: string;
}

export interface NewVideo {
  fileID: string;
  seriesID: number;
  name: string;
  urlName: string;
  description: string;
  tags: string[];
  presetID: number;
  publishType: string;
  broadcastDate: Date;
}

export interface VideoCalendarItem {
  id: number;
  name: string;
  status: string;
  broadcastDate: Date;
}

export const CreatorVideo = {
    getVideos: (): Promise<VideoMeta> => reqs.get("/v1/internal/creator/video"),
}