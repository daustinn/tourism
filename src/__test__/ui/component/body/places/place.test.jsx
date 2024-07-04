import React from 'react'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Place } from 'ui/components/body/places/place'

describe('Place Component', () => {
  const place = {
    id: 'abc123',
    thumbnail:
      'http://res.cloudinary.com/dqd27kzvn/image/upload/v1717457602/places/vqofs4ovtijwf5ucqft0.jpg',
    title: 'Beautiful Place',
    location: 'City, Country',
    rating: 4.5,
    images: [
      'https://placehold.it/800x600/1',
      'https://placehold.it/800x600/2',
      'https://placehold.it/800x600/3'
    ],
    description: 'A wonderful place to visit'
  }

  beforeEach(() => {
    render(<Place place={place} />)
  })

  it('renders place details correctly', () => {
    const titleElement = screen.getByText(place.title)
    const ratingElement = screen.getByText(place.rating.toString())
    const locationElement = screen.getByText(place.location)

    expect(titleElement).toBeInTheDocument()
    expect(ratingElement).toBeInTheDocument()
    expect(locationElement).toBeInTheDocument()
  })

  it('navigates to place details page on link click', () => {
    const linkElement = screen.getByRole('link')
    expect(linkElement).toBeInTheDocument()
    userEvent.click(linkElement)
  })

  it('renders gallery place component', () => {
    const galleryPlaceElement = screen.getByTestId('gallery-place')
    expect(galleryPlaceElement).toBeInTheDocument()
  })
})
