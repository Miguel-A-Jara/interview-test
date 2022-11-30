import Image from 'next/image';
import { motion } from 'framer-motion';

import IPokemon from '../../types/IPokemon';
import SkeletonWrapper from '../loading/SkeletonWrapper';
import PokemonInformation from './PokemonInformation';

interface Props {
  pokemon: IPokemon | undefined;
  idx    : number;
}

const PokemonCard = ({ pokemon, idx }: Props) => {

  return (
    <motion.div 
      initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} 
      viewport={{ margin: '50%' }} transition={{ duration: 0.5, delay: idx * 0.1 }}
      className='dark:bg-dark-700/70 bg-light-300/70 rounded-md p-4 flex flex-col gap-2 transition-colors duration-300'
    >
      <div className='dark:bg-dark-800/70 bg-light-600/70 w-72 h-64 rounded-lg relative transition-colors duration-300'>
        { pokemon ?
          <Image 
            fill
            alt={ pokemon.name }
            src={ pokemon.sprites.front_default }
            className='object-cover'
            sizes='(max-width: 768px) 100vw,
                   (max-width: 1024px) 50vw,
                   (max-width: 1280px) 33vw
                   25vw'       
          />
          : <SkeletonWrapper className='h-full' />
        }
      </div>

        <h2 className='uppercase font-bold text-3xl dark:text-dark-400 text-light-800 transition-colors duration-300'>
          { pokemon?.name || <SkeletonWrapper /> }
        </h2>

        <div className='dark:bg-dark-800/70 bg-light-600/70 dark:text-dark-400 text-light-800 
        p-2 rounded-lg transition-colors duration-300'>
          {
            pokemon 
              ? <PokemonInformation pokemon={pokemon} />
              : <SkeletonWrapper count={4} />
          }
        </div>

    </motion.div>
  )
}

export default PokemonCard;