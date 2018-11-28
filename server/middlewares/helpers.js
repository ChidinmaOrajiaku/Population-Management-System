
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
   * Change the location name to capital letters.
   * @param {string} state
   */
  locationFirstLetterToUpperCase: state => state.toUpperCase(),
};


export default helpers;
