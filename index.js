
var createInjectorPreprocessor = function(logger, basePath, config) {
  config = typeof config === 'object' ? config : {
    injection: ''
  };

  config.injection = config.injection || '';

  var log = logger.create('preprocessor.injector');

  return function(content, file, done) {
    log.debug('Processing "%s".', file.originalPath);
console.log(done);
    done(injection + content);
  };
};

createInjectorPreprocessor.$inject = ['logger', 'config.basePath', 'config.injectorPreprocessor'];

module.exports = createInjectorPreprocessor;
