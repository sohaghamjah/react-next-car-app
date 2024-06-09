"use client";

import { useState } from "react";
import SearchManuFacture from "./SearchManuFacture";

export default function SearchBar() {
    const [menuFacturer, setManuFacturer] = useState();
    const handleSearch = () => {

    }
    return (
        <form className="searchbar" onSubmit={handleSearch}>
            <div className="searchbar__item">
                <SearchManuFacture 
                    manuFecturer={menuFacturer}
                    setManuFacturer={setManuFacturer}
                />
            </div>
        </form>
    )
}
