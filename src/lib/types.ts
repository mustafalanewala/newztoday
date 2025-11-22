export type NewsItem = {
  Active_Flag: boolean
  categrory_Name: string
  Image: string
  Insert_Date: string // ISO date string
  News_Content: string
  News_Source: string
  News_Title: string
  News_Id: string | number
  Slug: string
}

export type VideoItem = {
  VideoDetail_id: number
  VideoTitle: string
  Image: string
  FileName: string // YouTube embed URL
  Insert_Date: string // ISO date string
}