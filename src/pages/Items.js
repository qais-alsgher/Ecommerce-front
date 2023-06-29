import { React, useEffect } from "react";
import FilterSidebar from "../components/items/filterItems/FilterSidebar";
import { useDispatch } from "react-redux";
import { getItems } from "../store/actions/itemAction";
import ItemsCards from "../components/items/cardItem/ItemsCards";
import { useParams } from "react-router-dom";

function Items() {
  const dispatch = useDispatch();
  const { category } = useParams();

  useEffect(() => {
    if (category) {
      getItems(dispatch, { category: category, price: 1000, page: 1 });
    } else {
      getItems(dispatch, { price: 1000, page: 1 });
    }
  }, [dispatch, category]);

  return (
    <>
      <FilterSidebar>
        <ItemsCards />
      </FilterSidebar>
    </>
  );
}

export default Items;
