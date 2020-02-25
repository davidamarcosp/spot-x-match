import { useState } from "react";
export default initialVal => {
  const [singles, setSingles] = useState(initialVal);
  const handleSingleChange = (event, newValue) => {
    setSingles(newValue);
  };
  const resetSingles = () => {
    setSingles();
  };
  return [singles, handleSingleChange, resetSingles];
};