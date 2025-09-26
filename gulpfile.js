const gulp = require("gulp");
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');

gulp.task('concat-component-versions', () => {
  return gulp.src('./site/imported_json/component_versions/*.json')
    .pipe(concat('componentVersionPartial.txt', { newLine: ',' }))
    .pipe(gulp.dest('./site/array'));
});

gulp.task('concat-components', () => {
  return gulp.src('./site/imported_json/components/*.json')
    .pipe(concat('componentPartial.txt', { newLine: ',' }))
    .pipe(gulp.dest('./site/array'));
});

gulp.task('array-component-versions', () => {
  return gulp.src(['./site/array/start.txt', './site/array/componentVersionPartial.txt', './site/array/end.txt'], { allowEmpty: true })
    .pipe(concat('component-versions.json'))
    .pipe(gulp.dest('./site/_data'));
});

gulp.task('array-components', () => {
  return gulp.src(['./site/array/start.txt', './site/array/componentPartial.txt', './site/array/end.txt'], { allowEmpty: true })
    .pipe(concat('components.json'))
    .pipe(gulp.dest('./site/_data'));
});

gulp.task('json-copy', () => {
  return gulp.src(['./site/_data/*.json'])
    .pipe(gulp.dest('./site/data'));
});


gulp.task('javascript', () => {
  return gulp.src(['./site/scripts/clipboard.js', './site/scripts/codepen.js', './site/scripts/component.js'])
    .pipe(concat('main.js'))
    .pipe(uglify())
    .pipe(gulp.dest('./site/scripts'));
});

gulp.task('javascript_fixed', () => {
  return gulp.src(['./site/scripts/clipboard.js', './site/scripts/codepen.js', './site/scripts/component_fixed.js'])
    .pipe(concat('main_fixed.js'))
    .pipe(uglify())
    .pipe(gulp.dest('./site/scripts'));
});

gulp.task("default", gulp.series(["concat-component-versions", "array-component-versions", "concat-components", "array-components", "json-copy", "javascript", "javascript_fixed"]));