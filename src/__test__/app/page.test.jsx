import PlaceSlug from 'app/places/[slug]/loading'
import { render } from '@testing-library/react'

describe('Home Page', () => {
  it('should render the Home Page', () => {
    const { container } = render(<PlaceSlug />)
    expect(container).toMatchSnapshot()
  })
})
