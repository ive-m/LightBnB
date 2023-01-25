const properties = require('./json/properties.json');
const users = require('./json/users.json');

const { Pool } = require('pg');

const pool = new Pool({
  user: 'labber',
  password: '123',
  host: 'localhost',
  database: 'lightbnb'
});

//pool.query(`SELECT title FROM properties LIMIT 10;`).then(response => {});

const getAllProperties = (options, limit = 10) => {

  const queryParams = [];
  let queryString = `SELECT properties.*, avg(property_reviews.rating) as average_rating
  FROM properties
  JOIN property_reviews ON properties.id = property_id `;
console.log('OPTIONS',options);
  if (options.owner_id) {
    queryParams.push(`${options.owner_id}`);
        queryString += `WHERE owner_id = $${queryParams.length} `;}
  
  if (options.city) {
    queryParams.push(`%${options.city}%`);
    queryString += `WHERE city LIKE $${queryParams.length} `;}


  if (options.minimum_price_per_night && options.maximum_price_per_night) {
        queryParams.push(`${options.minimum_price_per_night}`);
        
        queryString += `AND $${queryParams.length}<= cost_per_night `;

        queryParams.push(`${options.maximum_price_per_night}`);
        queryString +=`AND
        $${queryParams.length}>= cost_per_night  `;
      
    
    }

  if (options.minimum_rating) {
          queryParams.push(`${options.minimum_rating}`);
          queryString += `AND property_reviews.rating>=$${queryParams.length}`;}

    queryParams.push(limit);
    queryString += `
    GROUP BY properties.id
    ORDER BY cost_per_night
    LIMIT $${queryParams.length};
    `;
    console.log('Query',queryString )
    console.log('Parametros', queryParams)
    

  return pool
    .query(queryString,
      queryParams)

    .then((result) => {
      return result.rows;
    })
    .catch((err) => {
      console.log(err.message);
    });
};

 
const getUserWithEmail = function (email) {

  return pool
  .query(
    `SELECT * FROM users WHERE email= $1;`,
    [email])
  .then((result) => {
    return result.rows[0];
    //console.log(result.rows);
  })
  .catch((err) => {
    console.log(err.message);
  });
};
  
 
  
const getUserWithId = function (id) {
  return pool
  .query(
    `SELECT * FROM users WHERE id= $1;`,
    [id])
  .then((result) => {
    //console.log(result.rows);
     return result.rows[0];
   
  })
  .catch((err) => {
    console.log(err.message);
  });
};


const addUser = function (user) {
  return pool
  .query(
    `INSERT INTO users (name, email, password) VALUES($1,$2,$3) RETURNING *;`,
    [user.name, user.email, user.password])
  .then((result) => {
    console.log('Object with id',result.rows);
    return result.rows;
   
  })
  .catch((err) => {
    console.log(err.message);
  });
};







 const getAllReservations = function(guest_id, limit = 10) {
  return pool
  .query(
    `SELECT reservations.*, properties.*, avg(rating) as average_rating
    FROM reservations
    JOIN properties ON reservations.property_id = properties.id
    JOIN property_reviews ON properties.id = property_reviews.property_id
    WHERE reservations.guest_id = $2
    GROUP BY properties.id, reservations.id
    ORDER BY reservations.start_date
    LIMIT $1;`,
    [limit,guest_id])
  .then((result) => {
    return result.rows;
   // console.log(result.rows);
  })
  .catch((err) => {
    console.log(err.message);
  });
};

const addProperty = function (property) {
  return pool
  .query(
    `INSERT INTO properties (title,description,thumbnail_photo_url,cover_photo_url,cost_per_night,street,city,province,post_code,country,parking_spaces,number_of_bathrooms,number_of_bedrooms) VALUES($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13) RETURNING *;`,
    [
      property.title,
      property.description,
      property.thumbnail_photo_url,
      property.cover_photo_url,
      property.cost_per_night,
      property.street,
      property.city,
      property.province,
      property.post_code,
      property.country,
      property.parking_spaces,
      property.number_of_bathrooms,
      property.number_of_bedrooms])
  .then((result) => {
 
    return result.rows;
   
  })
  .catch((err) => {
    console.log(err.message);
  });
};

exports.getUserWithEmail = getUserWithEmail;
exports.getAllProperties = getAllProperties;
exports.getUserWithId = getUserWithId;
exports.addUser = addUser;
exports.getAllReservations = getAllReservations;
exports.addProperty = addProperty;



// /**
//  * Add a property to the database
//  * @param {{}} property An object containing all of the property details.
//  * @return {Promise<{}>} A promise to the property.
//  */
// const addProperty = function(property) {
//   const propertyId = Object.keys(properties).length + 1;
//   property.id = propertyId;
//   properties[propertyId] = property;
//   return Promise.resolve(property);
// }
// exports.addProperty = addProperty;
