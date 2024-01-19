import React from "react";
import WishlistProvider from "./WishlistContext";
import SearchProvider from "./SearchContext";
import BasketProvider from "./BasketContext";

const MainProvider = ({ children }) => {
  return (
    <>
      <WishlistProvider>
        <SearchProvider>
          <BasketProvider>{children}</BasketProvider>
        </SearchProvider>
      </WishlistProvider>
    </>
  );
};

export default MainProvider;
