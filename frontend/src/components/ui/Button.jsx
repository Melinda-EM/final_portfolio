export const WindowsButton = ({ 
  children, 
  className = "", 
  fullWidth = false,
  ...props 
}) => (
  <button
    {...props}
    className={`
      cursor-hand
      px-4 py-1 
      bg-gray-200 
      border-t-2 border-l-2 border-r-2 border-b-2 
      border-t-white border-l-white 
      border-r-gray-800 border-b-gray-800 
      active:border-t-gray-800 active:border-l-gray-800 
      active:border-r-white active:border-b-white 
      hover:bg-gray-300  
      font-consolas 
      flex items-center gap-2
      ${fullWidth ? 'w-full' : ''}
      ${className}
    `.replace(/\s+/g, ' ').trim()}
  >
    {children}
  </button>
);

export const WindowsLink = ({ 
  children, 
  className = "",
  fullWidth = false,
  ...props 
}) => (
  <a
    {...props}
    className={`
      cursor-hand
      px-4 py-1 
      bg-gray-200 
      border-t-2 border-l-2 border-r-2 border-b-2 
      border-t-white border-l-white 
      border-r-gray-800 border-b-gray-800 
      active:border-t-gray-800 active:border-l-gray-800 
      active:border-r-white active:border-b-white 
      hover:bg-gray-300 
      font-consolas 
      inline-flex items-center gap-2
      ${fullWidth ? 'w-full' : ''}
      ${className}
    `.replace(/\s+/g, ' ').trim()}
  >
    {children}
  </a>
);