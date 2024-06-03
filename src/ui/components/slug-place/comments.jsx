import { Star } from 'lucide-react'
import React from 'react'

export const Comments = () => {
  const comments = [
    {
      id: 1,
      user: 'Juan Perez',
      comment:
        'Me encantó el lugar, la atención es muy buena y los precios son accesibles',
      rating: 5,
      profile: 'https://xsgames.co/randomusers/avatar.php?g=male',
      date: 'Hace 3 días'
    },
    // generate 4 more comments
    {
      id: 2,
      user: 'Maria Lopez',
      comment: 'El lugar es hermoso, definitivamente lo recomiendo',
      rating: 4,
      profile: 'https://xsgames.co/randomusers/avatar.php?g=female',
      date: 'Hace 5 días'
    },
    {
      id: 3,
      user: 'John Smith',
      comment: 'Great place to visit, had an amazing experience',
      rating: 5,
      profile: 'https://xsgames.co/randomusers/avatar.php?g=male',
      date: '1 week ago'
    },
    {
      id: 4,
      user: 'Emily Johnson',
      comment: 'The service was excellent, I would love to come back',
      rating: 4,
      profile: 'https://xsgames.co/randomusers/avatar.php?g=female',
      date: '2 weeks ago'
    },
    {
      id: 5,
      user: 'David Lee',
      comment: 'Not impressed with the place, could be better',
      rating: 2,
      profile: 'https://xsgames.co/randomusers/avatar.php?g=male',
      date: '3 weeks ago'
    }
  ]
  return (
    <div className="mt-5 font-sans">
      <div className="rounded-xl py-4">
        <h2 className="text-2xl tracking-tight pb-6">
          Lo que las personas están diciendo
        </h2>
        <div className="p-2 grid grid-cols-2 max-md:grid-cols-1 gap-5">
          {comments.map((comment) => (
            <div key={comment.id} className="flex items-start gap-4">
              <div className="rounded-full overflow-hidden aspect-square w-[50px] min-w-[50px]">
                <img
                  src={comment.profile}
                  alt="profile"
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="space-y-1">
                <div className="flex flex-col">
                  <h3 className="font-semibold">{comment.user}</h3>
                  <span className="text-sm opacity-70">{comment.date}</span>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center">
                    <Star size={10} fill="black" />
                    <Star size={10} fill="black" />
                    <Star size={10} fill="black" />
                    <Star size={10} fill="black" />
                    <Star size={10} fill="black" />
                  </div>
                  <p className="text-sm">{comment.comment}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
