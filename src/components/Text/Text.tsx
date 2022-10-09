import { FC, ReactNode } from 'react'

import styled from 'styled-components'

import {
  space,
  layout,
  typography,
  color,
  variant,
  position,
  SpaceProps,
  LayoutProps,
  TypographyProps,
  ColorProps,
  PositionProps
} from 'styled-system'

interface TextVariants {
  big: 'big'
  medium: 'medium'
  regular: 'regular'
  small: 'small'
  tiny: 'tiny'
}

interface TextProps extends SpaceProps, LayoutProps, TypographyProps, ColorProps, PositionProps {
  variant?: keyof TextVariants
  children: ReactNode
}

const TextComponent: FC<TextProps> = styled.p(
  variant({
    variants: {
      big: {
        fontSize: 24,
        lineHeight: '29px'
      },
      medium: {
        fontSize: 20,
        lineHeight: '24px'
      },
      regular: {
        fontSize: 16,
        lineHeight: '25px'
      },
      small: {
        fontSize: 14,
        lineHeight: '17px'
      },
      tiny: {
        fontSize: 12,
        lineHeight: '17px'
      }
    }
  }),
  space,
  layout,
  typography,
  color,
  position
)

export default TextComponent
