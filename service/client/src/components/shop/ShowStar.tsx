import { Star, HalfStar } from '@package/ui'

export interface ShowStarProps {
  rating: string
}

export const ShowStar = ({ rating }: ShowStarProps) => {
  return (
    <div className="flex">
      {Array.from({ length: Math.floor(Number(rating)) }, (v, i) => i).map((_, idx) => (
        <Star size={16} className="text-yellow500" key={`full-star-${idx}`} />
      ))}
      {Math.floor(Number(rating)) !== Number(rating) && (
        <HalfStar size={16} className="text-yellow500" key={`half-star`} />
      )}
      {Array.from({ length: Math.floor(5 - Number(rating)) }, (v, i) => i).map((_, idx) => (
        <Star size={16} className="text-gray200" key={`empty-star-${idx}`} />
      ))}
    </div>
  )
}
