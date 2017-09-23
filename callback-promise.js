
var CallbackPromise = function () {

  var self = this;
  self.jobs = [];
  self.res = [];
  self.complete = function () {};
  self.debug = false;

  self.setComplete = function ( f ) {
    self.complete = f;
  }

  self.setJobs = function ( j ) {
    for (var i = 0; i < j.length; i++) {
      self.jobs.push(j[i]);
    }
  }

  self.begin = function ( f ) {
    if (self.jobs.length > 0) {
      self.start( f, 0 );
    }
    else {
      self.complete( self.res );
    }
  }

  self.start = function (f, pos) {
    self.logger("Iniciando promise de ", self.jobs[pos]);
    f( self.jobs[pos] )
      .then(function (res) {
        self.logger("RES", res)
        self.logger("Finalizando promise de ", self.jobs[pos]);
        self.res.push(res);
        pos += 1;
        if (self.jobs[pos]) {
          self.logger("Ainda há job ", pos, self.jobs);
          self.start(f, pos);
        }
        else {
          self.logger("Trabalho completo ", self.res);
          complete( self.res );
        }
      })
      .catch(function (err) {
        self.logger("Ocorreu um erro");
      })
  }

  self.logger = function () {
    if (self.debug) {
      var arr = [];
      for (a in arguments) {
        arr.push(arguments[a])
      }
      console.log(Date().toLocaleString(), arr )
    }
  }

  return self;

}

module.exports = CallbackPromise ();