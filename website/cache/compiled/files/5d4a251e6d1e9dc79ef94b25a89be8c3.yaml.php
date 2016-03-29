<?php
return [
    '@class' => 'Grav\\Common\\File\\CompiledYamlFile',
    'filename' => '/Users/krisa/dev/tmp/website/user/themes/temporary/blueprints.yaml',
    'modified' => 1458574020,
    'data' => [
        'name' => 'temporary',
        'version' => '1.8.0',
        'description' => 'Temporary theme for grav',
        'icon' => 'empire',
        'author' => [
            'name' => 'temporary.zone',
            'email' => 'mail@temporary.zone',
            'url' => 'http://getgrav.org'
        ],
        'homepage' => 'https://github.com/getgrav/grav-theme-antimatter',
        'demo' => 'http://demo.getgrav.org/blog-skeleton',
        'keywords' => 'antimatter, theme, core, modern, fast, responsive, html5, css3',
        'bugs' => 'https://github.com/getgrav/grav-theme-antimatter/issues',
        'license' => 'MIT',
        'form' => [
            'validation' => 'loose',
            'fields' => [
                'default_lang' => [
                    'type' => 'text',
                    'size' => 'x-small',
                    'label' => 'Default lang',
                    'default' => 'en',
                    'validate' => [
                        'type' => 'text'
                    ]
                ],
                'dropdown.enabled' => [
                    'type' => 'toggle',
                    'label' => 'Dropdown in navbar',
                    'highlight' => 1,
                    'default' => 1,
                    'options' => [
                        1 => 'Enabled',
                        0 => 'Disabled'
                    ],
                    'validate' => [
                        'type' => 'bool'
                    ]
                ]
            ]
        ]
    ]
];
