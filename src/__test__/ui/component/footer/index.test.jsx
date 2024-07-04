import { Footer } from 'ui/components/footer'
import { render, screen } from '@testing-library/react'

describe('Footer', () => {
  it('should render the footer', () => {
    render(<Footer />)
    expect(screen.getByText('Ayacucho')).toBeInTheDocument()
  })

  it('should render the source code link', () => {
    render(<Footer />)
    expect(screen.getByText('Source Code')).toBeInTheDocument()
  })

  it('should render the contributors', () => {
    render(<Footer />)
    expect(screen.getByText('Contribuidores')).toBeInTheDocument()
  })
})
