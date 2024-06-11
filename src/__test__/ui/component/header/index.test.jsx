import { Header } from '@/ui/components/header'
import { render, screen } from '@testing-library/react'

describe('Header', () => {
  it('should render the header', () => {
    render(<Header />)
    expect(screen.getByText('Inicia Sesión')).toBeInTheDocument()
  })
})
