import React, { useState } from 'react';

function SearchBar({ transactions, setTransactions }) {
    const [searchQuery, setSearchQuery] = useState('');

    const handleSearch = (e) => {
        const query = e.target.value.toLowerCase();
        setSearchQuery(query);
        const filteredTransactions = transactions.filter(transaction =>
            transaction.description.toLowerCase().includes(query) || transaction.category.toLowerCase().includes(query)
        );
        setTransactions(filteredTransactions);
    }

    return (
        <div className="search-bar">
            <input type="text" placeholder="Search transactions" value={searchQuery} onChange={handleSearch} />
        </div>
    );
}

export default SearchBar;
