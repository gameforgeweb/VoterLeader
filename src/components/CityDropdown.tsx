import { useState, useEffect, useRef } from 'react';

const cities = [
  'Andhra Pradesh',
  'Achanta',
  'Addanki',
  'Adoni',
  'Allagadda',
  'Alur',
  'Bapatla',
  'Kalyandurg',
  'Ongole',
  'Palacole'
].sort();

const CityDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedCity, setSelectedCity] = useState('Andhra Pradesh');
  const [searchTerm, setSearchTerm] = useState('');
  const dropdownRef = useRef<HTMLDivElement>(null);
  const searchInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
        setSearchTerm('');
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {
    // Toggle blur effect on other content
    const content = document.querySelectorAll('.stats-grid, .charts-grid, .nav-bar');
    content.forEach(element => {
      element.classList.toggle('content-blur', isOpen);
      element.classList.toggle('active', isOpen);
    });

    // Focus search input when dropdown opens
    if (isOpen && searchInputRef.current) {
      searchInputRef.current.focus();
    }
  }, [isOpen]);

  const getFilteredCities = () => {
    if (!searchTerm) return cities;
    
    const term = searchTerm.toLowerCase();
    const startsWithMatches: string[] = [];
    const containsMatches: string[] = [];

    cities.forEach(city => {
      const lowerCity = city.toLowerCase();
      if (lowerCity.startsWith(term)) {
        startsWithMatches.push(city);
      } else if (lowerCity.includes(term)) {
        containsMatches.push(city);
      }
    });

    return [...startsWithMatches, ...containsMatches];
  };

  const filteredCities = getFilteredCities();

  return (
    <div className="dropdown-container" ref={dropdownRef}>
      <button 
        className="city-dropdown"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
      >
        {selectedCity}
        <svg 
          className={`dropdown-arrow ${isOpen ? 'open' : ''}`}
          viewBox="0 0 24 24"
          fill="none" 
          stroke="currentColor"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth={2} 
            d="M19 9l-7 7-7-7" 
          />
        </svg>
      </button>
      
      <div className={`dropdown-list ${isOpen ? 'open' : ''}`}>
        <div className="dropdown-search">
          <input
            ref={searchInputRef}
            type="text"
            placeholder="Search cities..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="dropdown-search-input"
          />
        </div>
        <div className="dropdown-items">
          {filteredCities.map((city) => (
            <button
              key={city}
              className="dropdown-item"
              onClick={() => {
                setSelectedCity(city);
                setIsOpen(false);
                setSearchTerm('');
              }}
            >
              {city}
            </button>
          ))}
          {filteredCities.length === 0 && (
            <div className="no-results">No cities found</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CityDropdown; 