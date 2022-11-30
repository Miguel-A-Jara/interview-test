interface Props {
  title: string;
  value: string;
}

const PokemonInformationSlot = ({ title, value }: Props) => {
  return (
    <div className='flex justify-between px-4'>
      <h2 className='text-xl font-bold'>{ title }: </h2>      
      <span className='block font-light text-lg'>{ value }</span>
    </div>
  )
}

export default PokemonInformationSlot