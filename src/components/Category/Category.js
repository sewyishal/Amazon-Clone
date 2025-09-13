import React from "react";
import { categoryInfo } from "./categoryinfo";
import CategoryCard from "./CategoryCard";
import classes from "./category.module.css";
function Category() {
  return (
    <div>
      <section className={classes.categoryContainer}>
        {categoryInfo.map((info) => (
          <CategoryCard data={info} />
        ))}
      </section>
    </div>
  );
}

export default Category;
