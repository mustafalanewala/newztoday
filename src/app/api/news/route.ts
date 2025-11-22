import { NextResponse } from 'next/server';
import type { NewsItem } from '@/lib/types';

export async function GET() {
  try {
    const response = await fetch('https://newsapi.timesmed.com/WebAPI/getnewslist?siteId=1&language=English', {
      headers: {
        'User-Agent': 'Mozilla/5.0 (compatible; NewsApp/1.0)',
      },
    });

    if (!response.ok) {
      throw new Error(`API responded with status: ${response.status}`);
    }

    const data = await response.json();

    if (!data.success || !data.data?.news) {
      throw new Error('Invalid API response structure');
    }

    // Transform the API response to match our NewsItem type
    const news: NewsItem[] = data.data.news.map((item: any) => ({
      News_Id: item.news_Id,
      News_Title: item.news_Title,
      News_Content: item.news_Content || '',
      News_Source: item.news_Source || '',
      categrory_Name: item.categrory_Name || 'General',
      Image: item.image || '',
      Insert_Date: item.insert_Date || new Date().toISOString(),
      Slug: item.slug || item.news_Title?.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '') || '',
      Active_Flag: item.active_Flag !== false,
    }));

    return NextResponse.json(news);
  } catch (error) {
    console.error('Error fetching news:', error);
    return NextResponse.json(
      { error: 'Failed to fetch news' },
      { status: 500 }
    );
  }
}