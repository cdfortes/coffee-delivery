import { Coffee, Package, ShoppingCart, Timer } from '@phosphor-icons/react'
import { useTheme } from 'styled-components'
import { useState } from 'react'

import { Card } from '../../components/Card'

import { coffees } from '../../../data.json'
import { CoffeeList, Heading, Hero, HeroContent, Info, SearchBar } from './styles'

export function Home() {
  const theme = useTheme()
  const [searchTerm, setSearchTerm] = useState('')


  const filteredCoffees = coffees.filter((coffee) =>
    coffee.title.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <div>
      <Hero>
        <HeroContent>
          <div>
            <Heading>
              <h1>Encontre o café perfeito para qualquer hora do dia</h1>

              <span>
                Com o Coffee Delivery você recebe seu café onde estiver, a
                qualquer hora
              </span>
            </Heading>

            <Info>
              <div>
                <ShoppingCart
                  size={32}
                  weight="fill"
                  color={theme.colors.background}
                  style={{ backgroundColor: theme.colors['yellow-dark'] }}
                />
                <span>Compra simples e segura</span>
              </div>

              <div>
                <Package
                  size={32}
                  weight="fill"
                  color={theme.colors.background}
                  style={{ backgroundColor: theme.colors['base-text'] }}
                />
                <span>Embalagem mantém o café intacto</span>
              </div>

              <div>
                <Timer
                  size={32}
                  weight="fill"
                  color={theme.colors.background}
                  style={{ backgroundColor: theme.colors.yellow }}
                />
                <span>Entrega rápida e rastreada</span>
              </div>

              <div>
                <Coffee
                  size={32}
                  weight="fill"
                  color={theme.colors.background}
                  style={{ backgroundColor: theme.colors.purple }}
                />
                <span>O café chega fresquinho até você</span>
              </div>
            </Info>
          </div>

          <img src="/images/hero.svg" alt="Café do Coffee Delivery" />
        </HeroContent>

        <img src="/images/hero-bg.svg" id="hero-bg" alt="" />
      </Hero>




      <CoffeeList>
        <div className='wrapper'>
          <h2>Nossos cafés</h2>
          <SearchBar>
            <input
              type="text"
              placeholder="Pesquisar cafés..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </SearchBar>

        </div>


        <div>
          {filteredCoffees.length > 0 ? (
            filteredCoffees.map((coffee) => (
              <Card key={coffee.id} coffee={coffee} />
            ))
          ) : (
            <p>Nenhum café encontrado.</p>
          )}
        </div>
      </CoffeeList>
    </div>
  )
}
