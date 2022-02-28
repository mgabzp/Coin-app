import React from "react";

const CoinSearch = ({formValue, handleChange}) => {

  return (
    <div className="row mb-5">
      <div className="col col-md-6 offset-md-3">
        <form>
          <div className="form-group">
            <input
              type="text"
              placeholder="Search Crypto..."
              className="form-control"
              value={formValue}
              onChange={handleChange}
             
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default CoinSearch;
