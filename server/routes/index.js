/* eslint import/no-cycle: [2, { maxDepth: 1 }] */

import LocationController from '../controllers/location';

export default (app) => {
  app.get('/api', (req, res) => res.status(200).send({
    message: 'Welcome to the PMS API!',
  }));

  app.post('/api/v1/location/population', LocationController.createLocationPopulation);
  app.get('/api/v1/location/population', LocationController.listLocationDetails);
  app.get('/api/v1/location/population/:locationId', LocationController.listALocationDetail);
  app.put('/api/v1/location/population/:locationId', LocationController.updateLocationDetails);
  app.delete('/api/v1/location/population/:locationId', LocationController.deleteLocationDetails);
};
