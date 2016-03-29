<?php
return [
    '@class' => 'Grav\\Common\\File\\CompiledYamlFile',
    'filename' => '/Users/krisa/dev/tmp/website/user/themes/temporary/blueprints/home.yaml',
    'modified' => 1458994365,
    'data' => [
        'title' => 'Home',
        'form' => [
            'fields' => [
                'tabs' => [
                    'type' => 'tabs',
                    'active' => 1,
                    'fields' => [
                        'gallery' => [
                            'type' => 'tab',
                            'title' => 'Obsah',
                            'fields' => [
                                'header.main_text' => [
                                    'type' => 'textarea',
                                    'size' => 'large',
                                    'label' => 'Main text'
                                ],
                                'header.help_nadpis' => [
                                    'type' => 'textarea',
                                    'label' => 'obsah help nadpis',
                                    'default' => 'help_nadpis'
                                ],
                                'header.help' => [
                                    'type' => 'textarea',
                                    'size' => 'large',
                                    'label' => 'help text',
                                    'default' => 'help'
                                ],
                                'header.themes_nadpis' => [
                                    'type' => 'textarea',
                                    'label' => 'nadpis temata',
                                    'default' => 'themes_nadpis'
                                ],
                                'header.themes' => [
                                    'type' => 'textarea',
                                    'size' => 'large',
                                    'label' => 'temata',
                                    'default' => 'themes'
                                ]
                            ]
                        ]
                    ]
                ]
            ]
        ]
    ]
];
