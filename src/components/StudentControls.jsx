import React from 'react';

// M4: App'ten gelen state ve setter'ları al
function StudentControls({
  filterBy,
  setFilterBy,
  searchQuery,
  setSearchQuery,
  sortBy,
  setSortBy,
}) {
  const handleSortToggle = () => {
    // M4 GÖREVİ: Sıralamayı 'high-low' ve 'low-high' arasında değiştir [cite: 114]
    setSortBy((prevSort) => (prevSort === 'high-low' ? 'low-high' : 'high-low'));
  };

  return (
    <div className="controls"> [cite: 107]
      {/* M4: Filtre butonları [cite: 108] */}
      <div className="filters">
        {/* M4 GÖREVİ: 'active' class'ını 'filterBy' state'ine göre koşullu ekle [cite: 109] */}
        <button
          onClick={() => setFilterBy('all')}
          className={`filter-btn ${filterBy === 'all' ? 'active' : ''}`}
        >
          All
        </button>
        <button
          onClick={() => setFilterBy('pass')}
          className={`filter-btn ${filterBy === 'pass' ? 'active' : ''}`}
        >
          Pass
        </button>
        <button
          onClick={() => setFilterBy('fail')}
          className={`filter-btn ${filterBy === 'fail' ? 'active' : ''}`}
        >
          Fail
        </button>
      </div>

      {/* M4: Arama girişi (kontrollü bileşen) [cite: 111] */}
      <input
        type="text"
        placeholder="Search by name"
        className="input search"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />

      {/* M4: Sıralama butonu [cite: 114] */}
      <button className="btn sort-btn" onClick={handleSortToggle}>
        {/* M4 GÖREVİ: Buton metnini 'sortBy' state'ine göre koşullu ayarla */}
        {sortBy === 'high-low' ? 'Sort: High-Low' : 'Sort: Low-High'}
      </button>
    </div>
  );
}

export default StudentControls;