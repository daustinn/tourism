// generate test facke

import PlaceSlug from 'app/places/[slug]/loading'
import { render } from '@testing-library/react'

describe('Places Slug', () => {
  it('should render the slug', () => {
    const { container } = render(<PlaceSlug />)
    expect(container).toMatchSnapshot()
  })
})
