import IPokemon from '../../types/IPokemon';
import PokemonInformationSlot from './PokemonInformationSlot';

interface Props {
  pokemon: IPokemon;
}

const PokemonInformation = ({ pokemon }: Props) => {
  return (
    <>
      <PokemonInformationSlot title='ID' value={`${pokemon.id}`} />
      <PokemonInformationSlot title='Height' value={`${pokemon.height}dm`} />
      <PokemonInformationSlot title='Weight' value={`${pokemon.weight}dm`} />
      <PokemonInformationSlot title='XP' value={`${pokemon.base_experience}xp`} />
    </>
  )
}

export default PokemonInformation;