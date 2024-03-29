﻿(function (global) {
    System.config({
        transpiler: 'ts',
        typescriptOptions: {
            tsconfig: true
        },
        meta: {
            'typescript': {
              "exports": "ts"
            },
            '*.css': { loader: 'css' }
        },
        paths: {
            // paths serve as alias
            'npm:': 'node_modules/'
        },
        // map tells the System loader where to look for things
        map: {
            'core-js': 'npm:core-js/client/shim.min.js',
            'zone': 'npm:zone.js/dist/zone.min.js',
            //'reflect-metadata': 'npm:reflect-metadata/Reflect.js',
            'rxjs': 'npm:rxjs/bundles/rxjs.umd.min.js',
            //'rxjs': 'npm:rxjs',
            //'rxjs/operators': 'npm:rxjs/operators',
            '@angular/core': 'npm:@angular/core/bundles/core.umd.min.js',
            '@angular/common': 'npm:@angular/common/bundles/common.umd.min.js',
            '@angular/compiler': 'npm:@angular/compiler/bundles/compiler.umd.min.js',
            '@angular/platform-browser': 'npm:@angular/platform-browser/bundles/platform-browser.umd.min.js',
            '@angular/platform-browser-dynamic': 'npm:@angular/platform-browser-dynamic/bundles/platform-browser-dynamic.umd.min.js',
            '@angular/http': 'npm:@angular/http/bundles/http.umd.min.js',
            '@angular/common/http': 'npm:@angular/common/bundles/common-http.umd.min.js',
            '@angular/router': 'npm:@angular/router/bundles/router.umd.min.js',
            '@angular/forms': 'npm:@angular/forms/bundles/forms.umd.min.js',

            '@grapecity/wijmo': 'npm:@grapecity/wijmo/index.js',
            '@grapecity/wijmo.input': 'npm:@grapecity/wijmo.input/index.js',
            '@grapecity/wijmo.styles': 'npm:@grapecity/wijmo.styles',
            '@grapecity/wijmo.cultures': 'npm:@grapecity/wijmo.cultures',
            '@grapecity/wijmo.chart': 'npm:@grapecity/wijmo.chart/index.js',
            '@grapecity/wijmo.chart.analytics': 'npm:@grapecity/wijmo.chart.analytics/index.js',
            '@grapecity/wijmo.chart.animation': 'npm:@grapecity/wijmo.chart.animation/index.js',
            '@grapecity/wijmo.chart.annotation': 'npm:@grapecity/wijmo.chart.annotation/index.js',
            '@grapecity/wijmo.chart.finance': 'npm:@grapecity/wijmo.chart.finance/index.js',
            '@grapecity/wijmo.chart.finance.analytics': 'npm:@grapecity/wijmo.chart.finance.analytics/index.js',
            '@grapecity/wijmo.chart.hierarchical': 'npm:@grapecity/wijmo.chart.hierarchical/index.js',
            '@grapecity/wijmo.chart.interaction': 'npm:@grapecity/wijmo.chart.interaction/index.js',
            '@grapecity/wijmo.chart.radar': 'npm:@grapecity/wijmo.chart.radar/index.js',
            '@grapecity/wijmo.chart.render': 'npm:@grapecity/wijmo.chart.render/index.js',
            '@grapecity/wijmo.gauge': 'npm:@grapecity/wijmo.gauge/index.js',
            '@grapecity/wijmo.grid': 'npm:@grapecity/wijmo.grid/index.js',
            '@grapecity/wijmo.grid.detail': 'npm:@grapecity/wijmo.grid.detail/index.js',
            '@grapecity/wijmo.grid.filter': 'npm:@grapecity/wijmo.grid.filter/index.js',
            '@grapecity/wijmo.grid.grouppanel': 'npm:@grapecity/wijmo.grid.grouppanel/index.js',
            '@grapecity/wijmo.grid.multirow': 'npm:@grapecity/wijmo.grid.multirow/index.js',
            '@grapecity/wijmo.grid.pdf': 'npm:@grapecity/wijmo.grid.pdf/index.js',
            '@grapecity/wijmo.grid.sheet': 'npm:@grapecity/wijmo.grid.sheet/index.js',
            '@grapecity/wijmo.grid.xlsx': 'npm:@grapecity/wijmo.grid.xlsx/index.js',
            '@grapecity/wijmo.nav': 'npm:@grapecity/wijmo.nav/index.js',
            '@grapecity/wijmo.odata': 'npm:@grapecity/wijmo.odata/index.js',
            '@grapecity/wijmo.olap': 'npm:@grapecity/wijmo.olap/index.js',
            '@grapecity/wijmo.pdf': 'npm:@grapecity/wijmo.pdf/index.js',
            '@grapecity/wijmo.viewer': 'npm:@grapecity/wijmo.viewer/index.js',
            '@grapecity/wijmo.xlsx': 'npm:@grapecity/wijmo.xlsx/index.js',
            '@grapecity/wijmo.undo': 'npm:@grapecity/wijmo.undo/index.js',
            "@grapecity/wijmo.angular2.chart.analytics": "npm:@grapecity/wijmo.angular2.chart.analytics/index.js",
            "@grapecity/wijmo.angular2.chart.animation": "npm:@grapecity/wijmo.angular2.chart.animation/index.js",
            "@grapecity/wijmo.angular2.chart.annotation": "npm:@grapecity/wijmo.angular2.chart.annotation/index.js",
            "@grapecity/wijmo.angular2.chart.finance.analytics": "npm:@grapecity/wijmo.angular2.chart.finance.analytics/index.js",
            "@grapecity/wijmo.angular2.chart.finance": "npm:@grapecity/wijmo.angular2.chart.finance/index.js",
            "@grapecity/wijmo.angular2.chart.hierarchical": "npm:@grapecity/wijmo.angular2.chart.hierarchical/index.js",
            "@grapecity/wijmo.angular2.chart.interaction": "npm:@grapecity/wijmo.angular2.chart.interaction/index.js",
            "@grapecity/wijmo.angular2.chart.radar": "npm:@grapecity/wijmo.angular2.chart.radar/index.js",
            "@grapecity/wijmo.angular2.chart": "npm:@grapecity/wijmo.angular2.chart/index.js",
            "@grapecity/wijmo.angular2.core": "npm:@grapecity/wijmo.angular2.core/index.js",
            "@grapecity/wijmo.angular2.gauge": "npm:@grapecity/wijmo.angular2.gauge/index.js",
            "@grapecity/wijmo.angular2.grid.detail": "npm:@grapecity/wijmo.angular2.grid.detail/index.js",
            "@grapecity/wijmo.angular2.grid.filter": "npm:@grapecity/wijmo.angular2.grid.filter/index.js",
            "@grapecity/wijmo.angular2.grid.grouppanel": "npm:@grapecity/wijmo.angular2.grid.grouppanel/index.js",
            "@grapecity/wijmo.angular2.grid.multirow": "npm:@grapecity/wijmo.angular2.grid.multirow/index.js",
            "@grapecity/wijmo.angular2.grid.sheet": "npm:@grapecity/wijmo.angular2.grid.sheet/index.js",
            "@grapecity/wijmo.angular2.grid": "npm:@grapecity/wijmo.angular2.grid/index.js",
            "@grapecity/wijmo.angular2.input": "npm:@grapecity/wijmo.angular2.input/index.js",
            "@grapecity/wijmo.angular2.olap": "npm:@grapecity/wijmo.angular2.olap/index.js",
            "@grapecity/wijmo.angular2.viewer": "npm:@grapecity/wijmo.angular2.viewer/index.js",
            "@grapecity/wijmo.angular2.nav": "npm:@grapecity/wijmo.angular2.nav/index.js",
            "@grapecity/wijmo.angular2.directivebase": "npm:@grapecity/wijmo.angular2.directivebase/index.js",
                    
            'bootstrap.css': 'npm:bootstrap/dist/css/bootstrap.min.css',
            'jszip': 'npm:jszip/dist/jszip.min.js',
            'typescript': 'npm:typescript/lib/typescript.js',
            //'typescript': 'https://unpkg.com/typescript@3.2.2',
            'ts': 'npm:plugin-typescript/lib/plugin.js',
            'css': 'npm:systemjs-plugin-css/css.js'
        },
        // packages tells the System loader how to load when no filename and/or no extension
        packages: {
            src: {
                defaultExtension: 'ts'
            },
            rxjs: {
                defaultExtension: 'js'
              },
            // 'rxjs': {main: 'index.js', defaultExtension: 'js' },
            // 'rxjs/ajax': {main: 'index.js', defaultExtension: 'js' },
            //'rxjs/operators': {main: 'index.js', defaultExtension: 'js' },
            // 'rxjs/testing': {main: 'index.js', defaultExtension: 'js' },
            // 'rxjs/webSocket': {main: 'index.js', defaultExtension: 'js' },
            "node_modules": {
                defaultExtension: 'js'
            },
            wijmo: {
                defaultExtension: 'js',
            }
        }
    });
})(this);
