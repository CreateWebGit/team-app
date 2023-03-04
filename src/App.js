import { useState } from 'react';
import Header from './components/Header';
import Search from './components/Search';
import Cardslist from './components/Cardslist';

import './App.css';

function App() {
	const [listView, setListView] = useState(false);
	const [sortDescending, setSortDescending] = useState(false);
	const [searchTerm, setSearchTerm] = useState('');

	return (
		<div className="teamAppContainer">
			<Header />
			<Search
				onListView={setListView}
				onSortDescending={setSortDescending}
				onSearchTerm={setSearchTerm}
				searchTerm={searchTerm}
			/>
			<Cardslist
				listView={listView}
				sortDescending={sortDescending}
				mysearchTerm={searchTerm}
			/>
		</div>
	);
}

export default App;
