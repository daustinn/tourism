import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import { GalleryPlace } from 'ui/components/body/places/gallery'

describe('GalleryPlace Component', () => {
  const place = {
    thumbnail:
      'http://res.cloudinary.com/dqd27kzvn/image/upload/v1717457602/places/vqofs4ovtijwf5ucqft0.jpg',
    images: [
      'http://res.cloudinary.com/dqd27kzvn/image/upload/v1717457602/places/xmfa6quqm2vprx9ftlkf.jpg',
      'http://res.cloudinary.com/dqd27kzvn/image/upload/v1717457602/places/twlb14cxwcc3jlkpurbw.jpg',
      'http://res.cloudinary.com/dqd27kzvn/image/upload/v1717457602/places/di9uqorvl0hretkbmffp.jpg',
      'http://res.cloudinary.com/dqd27kzvn/image/upload/v1717457602/places/ogiwwvuzi3vcvjkejjnr.jpg'
    ],
    title: 'Title',
    description: 'Description'
  }

  beforeEach(() => {
    render(<GalleryPlace place={place} />)
  })

  it('renders the correct number of navigation buttons', () => {
    const navButtons = screen.getAllByRole('tab')
    expect(navButtons).toHaveLength(2)
  })

  it('displays the correct initial image', () => {
    const imgElement = screen.getByAltText(`${place.title}${place.description}`)
    expect(imgElement).toBeInTheDocument()
    expect(imgElement).toHaveAttribute('src', place.thumbnail)
  })

  it('changes the image on navigation button click', () => {
    const navButtons = screen.getAllByRole('tab')
    fireEvent.click(navButtons[1])
    const imgElement = screen.getByAltText(`${place.title}${place.description}`)

    expect(imgElement).toHaveAttribute('src', place.images[0])
  })
})
