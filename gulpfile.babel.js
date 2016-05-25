/**
 * @descriptions: gulp配置文件
 * @author: 法克
 * @email: 法克@126.cn
 * @date: 2016-5-25
 */

'use strict';

import gulp from 'gulp';
import gulpBabel from 'gulp-babel';

gulp.task('babel', () => {
    gulp.src('transformer/**/*.js')
        .pipe(gulpBabel({ presets: ['es2015'] }))
        .pipe(gulp.dest('src'));
});

gulp.task('dev', ['babel']);
