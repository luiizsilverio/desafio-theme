import React from 'react'
import { createContext, ReactNode, useContext, useState } from 'react'

const 
  LightBlue    = "0",
  PinkDracula  = "1",
  DeepOcean    = "2",
  SkylineMoon  = "3",
  HotCapuccino = "4"

export type ThemeColors = {
  id: number
  name: string
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
}

export const allThemes: ThemeColors[] = [  
  {
    id: 0,
    name: 'Light Blue',
    backgroundHeader: '#273FAD',
    backgroundColor: '#fff',
    backgroundInput: '#F5F4F8',
    backgroundTask: 'rgb(232,236,252)',
    backgroundButton: '#3FAD27',
    colorTitle: '#3D3D4D',
    colorCircle: '#273FAD',
    colorTask: '#A09CB1',    
    colorInput: '#A09CB1',
    colorHeader: '#fff'    
  },
  {
    id: 1,
    name: 'Pink Dracula',
    backgroundHeader: '#483C67',
    backgroundColor: '#1F1F1F',
    backgroundInput: '#34313D',
    backgroundTask: 'rgb(48,32,51)',
    backgroundButton: '#988BC7',
    colorTitle: '#FF79C6',
    colorCircle: '#FF79C6',
    colorTask: '#E1E1E6',    
    colorInput: '#A09CB1',
    colorHeader: '#E1E1E6',    
  },
  {
    id: 2,
    name: 'Deep Ocean',
    backgroundHeader: '#191932',
    backgroundColor: '#10101E',
    backgroundInput: '#212136',
    backgroundTask: '#212136',
    backgroundButton: '#565BFF',
    colorTitle: '#565BFF',
    colorCircle: '#565BFF',
    colorTask: '#E1E1E6',    
    colorInput: '#E1E1E6',
    colorHeader: '#E1E1E6',    
  },
  {
    id: 3,
    name: 'Skyline Moon',
    backgroundHeader: '#282B5A',
    backgroundColor: '#191D3A',
    backgroundInput: '#413A6F',
    backgroundTask: '#413A6F',
    backgroundButton: '#9347CA',
    colorTitle: '#E1E1E6',
    colorCircle: '#9347CA',
    colorTask: '#E1E1E6',    
    colorInput: '#E1E1E6',
    colorHeader: '#E1E1E6',
  },
  {
    id: 4,
    name: 'Hot Capuccino',
    backgroundHeader: '#3E3E3E',
    backgroundColor: '#262626',
    backgroundInput: '#303030',
    backgroundTask: '#353535',
    backgroundButton: '#181818',
    colorTitle: '#BF4AD4',
    colorCircle: '#12A952',
    colorTask: '#E1E1E6',    
    colorInput: '#E1E1E6',
    colorHeader: '#E1E1E6',
  }
]

type Id = String | number

type ThemeContextData = {
  idTheme: Id,
  theme: ThemeColors,
  changeTheme: (id: Id) => void
}

// cria o contexto CartContext
const ThemeContext = createContext<ThemeContextData>({} as ThemeContextData)

type ThemeProviderProps =  {
  children: ReactNode;
}

// exporta o Provider do contexto
export function TemaAtualProvider({ children }: ThemeProviderProps) {
  const [idTheme, setIdTheme] = useState<Id>(LightBlue)
  const [theme, setTheme] = useState<ThemeColors>(allThemes[0])

  function changeTheme(id: Id) {    
    const idTema = allThemes.findIndex(theme => theme.id == id)    
    let tema

    if (!idTema || idTema < 0) {
      setIdTheme(LightBlue)
      tema = allThemes[0]
    } 
    else {
      setIdTheme(id)
      tema = allThemes[idTema]
    }    
    setTheme({...tema})
  }
  
	return (
		<ThemeContext.Provider value={{ idTheme, theme, changeTheme }}>
      { children }
    </ThemeContext.Provider>
  )
}

// cria um hook que retorna o tema atual
export function useTheme() {
  const temaAtual = useContext(ThemeContext)
  return temaAtual
}
