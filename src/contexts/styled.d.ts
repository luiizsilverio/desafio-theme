import 'styled-components'
import { ThemeColors } from '../contexts/useTheme'

/*
type ThemeColors = {
  backgroundHeader: string
  backgroundColor: string
  backgroundInput: string
  backgroundTask: string
  backgroundButton: string
  colorTitle: string
  colorCircle: string
  colorTask: string
  colorInput: string
  colorHeader: string
} */

// Sobrescreve to theme padrão
declare module 'styled-components' {
  export interface DefaultTheme extends ThemeColors {}
}