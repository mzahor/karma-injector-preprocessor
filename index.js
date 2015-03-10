var createInjectorPreprocessor = function(logger, config) {
	config = typeof config === 'object' ? config : {
        injection: ''
    };

    config.injection = config.injection || '';

    var log = logger.create('preprocessor.injector');

    return function(content, file, done) {
        log.debug('Processing "%s".', file.originalPath);
        done(config.injection + content);
    };
};

createInjectorPreprocessor.$inject = ['logger', 'config.injectorPreprocessor'];

// PUBLISH DI MODULE
module.exports = {
    'preprocessor:injector': ['factory', createInjectorPreprocessor]
};
