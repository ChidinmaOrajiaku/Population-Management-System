
const helpers = {
  /**
   * Get total population
   * @param {string} malePopulation
   * @param {string} femalePopulation
   */
  getTotalPopulation: (malePopulation, femalePopulation) => {
    const totalPopulation = parseInt(malePopulation, 10) + parseInt(femalePopulation, 10);
    return totalPopulation;
  },

  /**
   * Change the first letter of the location name to capital letter.
   * @param {string} state
   */
  locationFirstLetterToUpperCase: state => state.charAt(0).toUpperCase() + state.slice(1),
};


export default helpers;
