export interface Artist {
  name: string
}

export interface RateFormat {
  size?: string
  androidSize?: string
  fileType?: string
  androidFileType?: string
  url: string
  androidUrl: string
}

export interface CommandOptions {
  lyric?: boolean
  path?: string
  number: string
  kugou?: boolean
  kuwo?: boolean
  wangyi?: boolean
  migu?: boolean
  songListId: string
  service: 'migu' | 'kuwo' | 'wangyi' | 'kugou'
}

export interface SearchSongInfo {
  id?: string
  contentId?: string
  copyrightId?: string
  url: string
  size: number
  name: string
  songName: string
  lyricUrl?: string
  DC_TARGETID?: string
  NAME: string
  disabled?: boolean
  hash?: string
  filename: string
  fileSize: number
  ARTIST: string
  artist: string
  artists: Artist[]
  singers: Artist[]
  newRateFormats?: RateFormat[]
  rateFormats?: RateFormat[]
}

export interface SearchProps {
  text: string
  pageNum: string
  songListId?: string
}

export interface NamesProps {
  song: SearchSongInfo
  index: number
  options: CommandOptions
}

export interface SongInfo {
  songName: string
  songDownloadUrl: string
  lyricDownloadUrl: string
  songSize: number
  options: CommandOptions
  searchSongs: SearchSongInfo[]
  text: string
}
