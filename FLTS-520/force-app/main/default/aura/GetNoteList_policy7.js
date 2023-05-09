const getNoteList = (policyID) => {
  return new Promise((resolve, reject) => {
    if (!policyID) {
      reject({ status: 404, message: 'Policy ID not provided' });
    } else {
      const query = `SELECT * FROM policy_notes WHERE policy_id = ${policyID};`;
      database.query(query, (err, result) => {
        if (err) {
          reject({ status: 500, message: 'Error occurred while fetching policy notes' });
        } else {
          // map database results to DTO objects using ModelMapper
          const noteListDTO = ModelMapper.map(result);
          resolve({ status: 200, data: noteListDTO });
        }
      });
    }
  });
};