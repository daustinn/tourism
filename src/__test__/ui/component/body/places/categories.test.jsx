import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import { Categories, categories } from '@/ui/components/body/categories'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'

jest.mock('next/navigation', () => ({
  usePathname: jest.fn(),
  useRouter: jest.fn(),
  useSearchParams: jest.fn()
}))

describe('Categories Component', () => {
  beforeEach(() => {
    usePathname.mockReturnValue('/places')
    useRouter.mockReturnValue({
      replace: jest.fn()
    })
    useSearchParams.mockReturnValue(new URLSearchParams(''))
  })

  it('renders categories correctly', () => {
    render(<Categories />)
    categories.forEach((category) => {
      const categoryButton = screen.getByRole('tab', {
        name: category.traduction
      })
      expect(categoryButton).toBeInTheDocument()
      expect(categoryButton).toHaveAttribute(
        'aria-selected',
        category.key === 'all' ? 'true' : 'false'
      )
    })
  })

  it('handles click events correctly', () => {
    render(<Categories />)
    const categoryToClick = categories[1]
    const categoryButton = screen.getByRole('tab', {
      name: categoryToClick.traduction
    })
    fireEvent.click(categoryButton)
    expect(useRouter().replace).toHaveBeenCalledTimes(1)
  })
})
