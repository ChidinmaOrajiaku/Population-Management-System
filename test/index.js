import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../app';

const should = chai.should();

chai.use(chaiHttp);

const validLocation = {
  location: 'FCT',
  malePopulation: '50',
  femalePopulation: '50',
  totalPopulation: '100',
};

const secondValidLocation = {
  location: 'abia',
  malePopulation: '50',
  femalePopulation: '50',
  totalPopulation: '100',
};

const invalidLocation = {
  location: 'Kubwa',
  malePopulation: '50',
  femalePopulation: '50',
  totalPopulation: '100',
};

describe('Location', () => {
  it('should create location', (done) => {
    chai.request(app)
      .post('/api/v1/location/population')
      .send(validLocation)
      .end((err, res) => {
        res.should.have.status(201);
        res.should.be.json;
        res.body.message.should.be.equal('Location population has been successfully created');
        res.body.locationDetails.location.should.be.equal('FCT');
        if (err) return expect(err.message);
        done();
      });
  });
  it('should not create location twice', (done) => {
    chai.request(app)
      .post('/api/v1/location/population')
      .send(validLocation)
      .end((err, res) => {
        res.should.have.status(400);
        res.should.be.json;
        if (err) return expect(err.message);
        done();
      });
  });
  it('should not create location outside Nigerian states', (done) => {
    chai.request(app)
      .post('/api/v1/location/population')
      .send(invalidLocation)
      .end((err, res) => {
        res.should.have.status(400);
        res.should.be.json;
        if (err) return expect(err.message);
        done();
      });
  });
  it('should get all locations', (done) => {
    chai.request(app)
      .get('/api/v1/location/population')
      .end((err, res) => {
        res.should.have.status(200);
        res.body[0].location.should.be.equal('FCT');
        if (err) return expect(err.message);
        done();
      });
  });
  it('should get a single location', (done) => {
    chai.request(app)
      .get('/api/v1/location/population/1')
      .end((err, res) => {
        res.should.have.status(200);
        res.body.location.should.be.equal('FCT');
        if (err) return expect(err.message);
        done();
      });
  });
  it('should update a single location', (done) => {
    chai.request(app)
      .put('/api/v1/location/population/1')
      .send(secondValidLocation)
      .end((err, res) => {
        res.should.have.status(200);
        res.body.location.should.be.equal('Abia');
        if (err) return expect(err.message);
        done();
      });
  });
  it('should not update an invalid id location', (done) => {
    chai.request(app)
      .put('/api/v1/location/population/3')
      .send(secondValidLocation)
      .end((err, res) => {
        res.should.have.status(404);
        res.body.message.should.be.equal('Location was not found');
        if (err) return expect(err.message);
        done();
      });
  });
  it('should delete a location', (done) => {
    chai.request(app)
      .delete('/api/v1/location/population/1')
      .end((err, res) => {
        res.should.have.status(200);
        res.body.message.should.be.equal('Location has been succesfully deleted');
        if (err) return expect(err.message);
        done();
      });
  });
});
