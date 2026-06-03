import { scrollToId } from "../../utils/scroll";

export function SearchBar() {
  const go = (id) => scrollToId(id);

  return (
    <div className="search-bar-wrapper">
      <div className="container">
        <div className="search-bar">
          <div className="search-field">
            <label>Location</label>
            <select>
              <option>All Bangalore</option>
              <option>Sarjapur Road</option>
              <option>Whitefield</option>
              <option>Electronic City</option>
              <option>Bannerghatta Road</option>
              <option>Hennur</option>
              <option>North Bangalore</option>
              <option>Devanahalli</option>
            </select>
          </div>
          <div className="search-field">
            <label>Property Type</label>
            <select>
              <option>All Types</option>
              <option>Apartment</option>
              <option>Villa</option>
              <option>Plot</option>
            </select>
          </div>
          <div className="search-field">
            <label>BHK Type</label>
            <select>
              <option>Any BHK</option>
              <option>1 BHK</option>
              <option>2 BHK</option>
              <option>3 BHK</option>
              <option>4 BHK</option>
              <option>5+ BHK</option>
            </select>
          </div>
          <div className="search-field">
            <label>Budget</label>
            <select>
              <option>Any Budget</option>
              <option>Under ₹1 Cr</option>
              <option>₹1–1.5 Cr</option>
              <option>₹1.5–2 Cr</option>
              <option>Above ₹2 Cr</option>
            </select>
          </div>
          <button className="search-btn" onClick={() => go("properties")}>
            Search
          </button>
        </div>
      </div>
    </div>
  );
}
