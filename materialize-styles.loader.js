module.exports = function(content) {
    this.cacheable(true);
    var start =
        "$roboto-font-path: \"~materialize-css/fonts/roboto/\";\n"
        + "@import \"~materialize-css/sass/ghpages-materialize.scss\";\n"
        + "@import \"./materialize.config.scss\";\n";
    return start;
};
