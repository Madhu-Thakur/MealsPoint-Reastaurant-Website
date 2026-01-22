import { Fragment } from 'react';

import MealsSummary from './MealsSummary';
import MealsMenu from './MealsMenu';


const Meals = () => {
  return (
    <Fragment>
      <MealsSummary />
      <MealsMenu />
    </Fragment>
  );
};

export default Meals;