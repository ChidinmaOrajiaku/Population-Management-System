import models from '../models';
import helpers from '../middlewares/helpers';

const Location = models.LocationDetails;

class LocationController {
  /**
   * Create a location
   * @param {object} req
   * @param {object} res
   */
  static createLocationPopulation(req, res) {
    const {
      malePopulation,
      femalePopulation,
    } = req.body;
    const totalPopulation = helpers.getTotalPopulation(malePopulation, femalePopulation);
    return Location
      .create({
        location: helpers.locationFirstLetterToUpperCase(req.body.location.trim()),
        malePopulation: req.body.malePopulation.trim(),
        femalePopulation: req.body.femalePopulation.trim(),
        totalPopulation,
      })
      .then(locationDetails => res.status(201).send({
        message: 'Location population has been successfully created',
        locationDetails,
      }))
      .catch((error) => {
        const errorMessage = error.errors.map(value => value.message);
        return res.status(400).send(errorMessage);
      });
  }

  /**
   * List all locations
   * @param {object} req
   * @param {object} res
   */
  static listLocationDetails(req, res) {
    return Location.all()
      .then(locationDetails => res.status(200).send(locationDetails))
      .catch(error => res.status(500).send({
        message: 'An error occured and book cannot be returned',
        error,
      }));
  }

  /**
   * List a single location
   * @param {object} req
   * @param {object} res
   */
  static listALocationDetail(req, res) {
    return Location.findById(req.params.locationId)
      .then((locationDetails) => {
        if (!locationDetails) {
          return res.status(404).send({
            message: 'Location was not found',
          });
        }
        res.status(200).send(locationDetails);
      })
      .catch(error => res.status(500).send({
        message: 'An error occured and book cannot be returned',
        error,
      }));
  }

  /**
   * Update a location
   * @param {object} req
   * @param {object} res
   */
  static updateLocationDetails(req, res) {
    const {
      malePopulation,
      femalePopulation,
    } = req.body;
    const totalPopulation = helpers.getTotalPopulation(malePopulation, femalePopulation);
    if (isNaN(parseInt(req.params.locationId))) {
      return res.status(400).send({
        message: 'Please use a valid id',
      });
    }
    return Location.findById(req.params.locationId)
      .then((locationDetails) => {
        if (!locationDetails) {
          return res.status(404).send({
            message: 'Location was not found',
          });
        }
        locationDetails.update({
          location: helpers.locationFirstLetterToUpperCase(req.body.location.trim()),
          malePopulation: req.body.malePopulation.trim(),
          femalePopulation: req.body.femalePopulation.trim(),
          totalPopulation,
        })
          .then(() => res.status(200).send(locationDetails))
          .catch((error) => {
            const errorMessage = error.errors.map(value => value.message);
            return res.status(400).send(errorMessage);
          });
      })
      .catch(error => res.status(500).send({
        message: 'An error occured and location cannot be updated',
        error,
      }));
  }

  /**
   * Delete a location
   * @param {object} req
   * @param {object} res
   */
  static deleteLocationDetails(req, res) {
    if (isNaN(parseInt(req.params.locationId))) {
      return res.status(400).send({
        message: 'Please use a valid id',
      });
    }
    return Location.findById(req.params.locationId)
      .then((locationDetails) => {
        if (!locationDetails) {
          return res.status(404).send({
            message: 'Location was not found',
          });
        }
        locationDetails.destroy()
          .then(() => res.status(200).send({
            message: 'Location has been succesfully deleted',
            locationDetails,
          }))
          .catch(error => res.status(400).send({
            message: 'Location could not be deleted',
            error,
          }));
      })
      .catch(error => res.status(500).send({
        message: 'An error occured and location cannot be deleted',
        error,
      }));
  }
}

export default LocationController;
