import { NextResponse } from 'next/server';

// Live Google reviews for the homepage Reviews section.
// Needs two env vars in Vercel: GOOGLE_PLACES_API_KEY and GOOGLE_PLACE_ID.
// If either is missing (or Google errors), this returns an empty list and the
// site keeps showing the hand-picked reviews built into GoogleReviews.tsx.
// Only 5 star reviews are ever returned. Google is asked at most once a day.

export const revalidate = 86400;

type PlacesReview = {
  rating?: number;
  text?: { text?: string };
  originalText?: { text?: string; languageCode?: string };
  authorAttribution?: { displayName?: string };
  relativePublishTimeDescription?: string;
};

export async function GET() {
  const key = process.env.GOOGLE_PLACES_API_KEY;
  const placeId = process.env.GOOGLE_PLACE_ID;
  if (!key || !placeId) return NextResponse.json({ reviews: [], source: 'fallback' });

  try {
    const res = await fetch(`https://places.googleapis.com/v1/places/${encodeURIComponent(placeId)}?languageCode=en`, {
      headers: {
        'X-Goog-Api-Key': key,
        'X-Goog-FieldMask': 'reviews,rating,userRatingCount',
      },
      next: { revalidate: 86400 },
    });
    if (!res.ok) return NextResponse.json({ reviews: [], source: 'fallback' });
    const data = await res.json();
    const reviews = ((data.reviews || []) as PlacesReview[])
      .filter((r) => r.rating === 5 && (r.text?.text || '').trim().length > 20)
      .map((r) => {
        const full = (r.authorAttribution?.displayName || 'Google user').trim();
        const parts = full.split(/\s+/);
        const name = parts.length > 1 ? `${parts[0]} ${parts[parts.length - 1][0]}.` : parts[0];
        const translated = r.originalText?.languageCode && r.originalText.languageCode !== 'en';
        return {
          name,
          text: (r.text?.text || '').trim(),
          where: translated ? 'Google review, translated from Spanish' : 'Google review',
        };
      });
    return NextResponse.json({ reviews, rating: data.rating, count: data.userRatingCount, source: 'google' });
  } catch {
    return NextResponse.json({ reviews: [], source: 'fallback' });
  }
}
