interface Props {
  text: string;
  icon: string;
  disabled: boolean;
  onClick: () => void;
}

const PaginationButton = ({ text, icon, onClick, disabled }: Props) => {

  return (
    <button 
      className='dark:bg-dark-300 bg-light-200 dark:text-dark-700 text-light-600 p-2 rounded-md 
      transition-colors duration-300 disabled:opacity-60' 
      onClick={onClick}
      disabled={ disabled }
    >
      <i className={ icon }/> 
      <span className='font-bold'>{ text }</span>
    </button>
  )
}

export default PaginationButton