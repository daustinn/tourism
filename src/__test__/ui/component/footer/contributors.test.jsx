import React from 'react'
import { render, screen } from '@testing-library/react'
import { Contributors, contributors } from '@/ui/components/footer/contributors'

describe('Contributors Component', () => {
  beforeEach(() => {
    render(<Contributors />)
  })

  it('renders a list of contributors', () => {
    contributors.forEach((contributor) => {
      const contributorElement = screen.getByText(contributor.name)
      expect(contributorElement).toBeInTheDocument()
      expect(contributorElement.tagName).toBe('A')
      expect(contributorElement).toHaveAttribute('href', contributor.href)
      expect(contributorElement).toHaveAttribute('target', '_blank')
      expect(contributorElement).toHaveAttribute('rel', 'noopener noreferrer')
    })
  })
})
