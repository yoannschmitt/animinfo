const http = require('http');

const server = http.createServer();

var mysql = require('mysql');

var pool  = mysql.createPool({
  connectionLimit : 10,
  host            : 'localhost',
  user            : 'root',
  password        : '',
  database        : 'devclient_animinfo',
});


server.on('request', (request, response) => {
  let full_url = request.url;
	let response_url = full_url.match('^/([0-9]+)/(plus|moins|sur|fois|modulo)/([0-9]+)$');
	
	if(request.method == 'POST'){
    var data='';

    request.on('data', s => data += s)

    request.on('end', () => {
      data = JSON.parse(data);
        if(request.url == '/add'){
          pool.query('SELECT * FROM favorites WHERE mal_id ='+data.mal_id,  function (error, results, fields){
            if(results.length == 0){
              pool.query('INSERT INTO favorites (mal_id, name) VALUES (?,?)', [data.mal_id, data.name],  function (error, results, fields){
                if(error){
                    response.writeHead(500, 'Internal Server Error');
                    response.end();
                }
                else{
                    response.writeHead(200, {'Content-Type' : 'application/json'})
                    response.write(JSON.stringify(results.insertId));
                    response.end();
                }
              });
            }
          })
        }
        else if(request.url == '/delete'){
          pool.query('DELETE FROM favorites WHERE mal_id ='+data.mal_id,  function (error, results, fields){
            if(error){
              response.writeHead(500, 'Internal Server Error');
              response.end();
            }
            else{
                response.writeHead(200, {'Content-Type' : 'application/json'})
                response.write(JSON.stringify(results.affectedRows == 1));
                response.end();
            }
          })
        }
        return;
    })
  }
  else if(request.method == 'GET' && request.url == '/favorites'){
    pool.query('SELECT * FROM favorites',  function (error, results, fields){
      response.writeHead(200, {'Content-Type' : 'application/json'})
      response.write(JSON.stringify(results));
      response.end();
    })
  }
	else{
		response.writeHead(404, {"Content-Type": "text/plain"});
		response.write('404 Error not found');
    response.end();
	}
});

server.listen(23200);