const https = require('https');

// reduce to just what is needed
function filterUserDetails(data){
  return {
    profile_name: `@${data.profile_name}`,
    no_of_badges: data.badges.length,
    js_point: data.points.JavaScript,
    avatar_url: data.gravatar_url
  }
}

module.exports = function(app) {
  app.get('/profile/:user', (req, res) => {
    let url = `https://teamtreehouse.com/${req.params.user}.json`;
    let body = '';
    
    https.get(url, (response) => {
      // store response
      response.on('data', chunck => body += chunck);
      response.on('end', () => {
        // render view with the data 
        const user = filterUserDetails(JSON.parse(body));
        res.render('profile',{user});
      });
    });
  });
}
