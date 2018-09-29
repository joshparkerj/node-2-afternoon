module.exports = {
  create: (req,res,next) => {
    const db = req.app.get('db');
    db.create_product([
      req.body.name,
      req.body.description,
      req.body.price,
      req.body.image_url
    ])
      .then(r => {
        res.status(200).send();
        console.log(r);
      })
      .catch(err => {
        res.status(500).send('create failed');
        console.log(err);
      })
  },
  getOne: (req,res,next) => {
    const db = req.app.get('db');
    db.read_product([
      req.params.id
    ])
      .then(r => {
        res.status(200).send(r);
        console.log(r);
      })
      .catch(err => {
        res.status(500).send('get one failed');
        console.log(err);
      })
  },
  getAll: (req,res,next) => {
    const db = req.app.get('db');
    db.read_products()
      .then(r => {
        res.status(200).send(r);
        console.log(r);
      })
      .catch(err => {
        res.status(500).send('get all failed');
        console.log(err);
      })
  },
  update: (req,res,next) => {
    const db = req.app.get('db');
    db.update_product([
      req.params.id,
      req.query.desc
    ])
      .then(r => {
        res.status(200).send();
        console.log(r);
      })
      .catch(err => {
        res.status(500).send('update failed');
        console.log(err);
      })
  },
  delete: (req,res,next) => {
    const db = req.app.get('db');
    db.delete_product([
      req.params.id
    ])
      .then(r => {
        res.status(200).send();
        console.log(r);
      })
      .catch(err => {
        res.status(500).send('update failed');
        console.log(err);
      })
  }
};