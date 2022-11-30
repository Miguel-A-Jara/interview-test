import Image from 'next/image';

import IPokemon from '../../types/IPokemon';
import SkeletonWrapper from '../loading/SkeletonWrapper';

interface Props {
  pokemon: IPokemon | undefined;
}

const PokemonCard = ({ pokemon }: Props) => {

  return (
    <div className='dark:bg-dark-700/70 bg-light-300/70 backdrop-blur-sm rounded-md p-4 flex flex-col gap-2 transition-colors duration-300'>
      <div className='dark:bg-dark-800/70 bg-light-600/70 w-72 h-64 rounded-lg relative transition-colors duration-300'>
        { pokemon ?
          <Image 
            src={ pokemon.sprites.front_default }
            alt={ pokemon.name }
            fill
            className='object-cover'
          />
          : <SkeletonWrapper className='h-full' />
        }
      </div>

        <h2 className='uppercase font-bold text-3xl dark:text-dark-400 text-light-800 transition-colors duration-300'>
          { pokemon?.name || <SkeletonWrapper /> }
        </h2>

        <div className='bg-'>

        </div>

    </div>
  )
}

export default PokemonCard;