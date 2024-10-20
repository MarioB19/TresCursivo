const Logo = () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-24 h-24 mx-auto text-green-300 mb-6">
      {/* Main grid */}
      <path d="M4 4h16v16H4z" strokeWidth="1.5" />
      <path d="M4 12h16M12 4v16" strokeWidth="1.5" />
      
      {/* Inner grids */}
      <path d="M6 6h4v4H6zM14 6h4v4h-4zM6 14h4v4H6zM14 14h4v4h-4z" strokeWidth="0.75" />
      
      {/* X and O symbols */}
      <path d="M7 7l2 2M9 7l-2 2" strokeWidth="0.75" />
      <circle cx="16" cy="16" r="1.5" strokeWidth="0.75" fill="none" />
    </svg>
  );
  
  export default Logo;
  