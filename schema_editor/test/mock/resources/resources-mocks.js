
(function () {
    'use strict';

    function ResourcesMock () {
        var GeographyResponse = {
            'count': 1,
            'next': null,
            'previous': null,
            'results': [{
                'uuid': '80c10057-2cfc-4a32-8e3c-0573e8bf853f',
                'label': 'some_geo',
                'color': 'fuschia',
                'display_field': 'ballparks',
                'data_fields': ['ballparks'],
                'errors': null,
                'created': '2015-05-13T00:22:50.465802Z',
                'modified': '2015-05-13T00:23:28.041375Z',
                'status': 'COMPLETE',
                'source_file': 'http://localhost:7000/media/boundaries/2015/05/13/phila-city_limits_shp_IbasPjb.zip'
            }]
        };

        var BoundaryNoGeomResponse = {
            'count': 1,
            'next': null,
            'previous': null,
            'results': [{
                'uuid': '7c2acfe7-ccf0-4245-9799-f4fa7d80bd9d',
                'data': {
                    'PROVINCE': '',
                    'REGION': 'R2',
                    'REG_DESC': 'CAGAYAN VALLEY REGION'
                },
                'bbox': [
                    {
                        'lat': 19.949404944931022,
                        'lon': 122.1424120222916
                    },
                    {
                        'lat': 19.967709174247037,
                        'lon': 122.16365427955863
                    }
                ],
                'created': '2015-10-02T13:59:15.210040Z',
                'modified': '2015-10-02T13:59:15.210084Z',
                'boundary': '80c10057-2cfc-4a32-8e3c-0573e8bf853f'
            }]
        };

        var RecordSchemaResponse = {
            'count': 1,
            'next': null,
            'previous': null,
            'results': [
                {
                    'uuid': '80c10057-2cfc-4a32-8e3c-0573e8bf8f3f',
                    'schema': {
                        // Note: the format of this is still in flux and will change a bit
                        'description': '',
                        'title': '',
                        'plural_title': '',
                        'definitions': {
                            'Accident Details': {
                                'description': 'Details of accident',
                                'title': 'Accident Details',
                                'plural_title': 'Accident Details',
                                'definitions': {},
                                'type': 'object',
                                'properties': {
                                    'Description': {
                                        'fieldType': 'text',
                                        'format': 'textarea',
                                        'isSearchable': true,
                                        'propertyOrder': 0,
                                        'type': 'string'
                                    }
                                },
                                'details': true
                            },
                            'Firearm': {
                                'description': 'Guns and other projectiles.',
                                'title': 'Firearm',
                                'plural_title': 'Firearms',
                                'definitions': {},
                                'type': 'object',
                                'properties': {}
                            }
                        },
                        'type': 'object',
                        'properties': {
                            'Accident Details': {
                                '$ref': '#/definitions/Accident Details'
                            },
                            'Firearm': {
                                '$ref': '#/definitions/Firearm'
                            }
                        }
                    },
                    'created': '2015-05-13T21:44:28.324760Z',
                    'modified': '2015-05-13T21:44:28.324819Z',
                    'version': 2,
                    'next_version': null,
                    'record_type': '15460346-65d7-4f4d-944d-27324e224691'
                }
            ]
        };

        var RecordTypeResponse = {
            'count': 2,
            'next': null,
            'previous': null,
            'results': [
                {
                    'uuid':'15460346-65d7-4f4d-944d-27324e224691',
                    'current_schema':'80c10057-2cfc-4a32-8e3c-0573e8bf8f3f',
                    'created':'2015-05-13T21:43:29.227598Z',
                    'modified':'2015-05-13T21:43:29.227639Z',
                    'label':'Accident',
                    'plural_label':'Accidents',
                    'description':'An accident.',
                    'active':true
                },
                {
                    'uuid':'1a8232f4-2fe8-4df0-9c78-786f666b3551',
                    'current_schema':'311791af-409e-40ac-8209-fe9785469479',
                    'created':'2015-05-13T21:43:45.242844Z',
                    'modified':'2015-05-13T21:43:45.242894Z',
                    'label':'Bird Sighting',
                    'plural_label':'Bird Sightings',
                    'description':'Birds and their environments.',
                    'active':true
                }
            ]
        };

        var RecordType = RecordTypeResponse.results[0];
        var RecordSchemaRequest = angular.extend({}, RecordType, {
            definitions: {
                'Accident Details': {
                    type: 'object',
                    title: 'Accident Details',
                    plural_title: 'Accident Details',
                    description: 'Details for Accident',
                    multiple: false,
                    propertyOrder: 0,
                    details: true
                }
            }
        });

        var module = {
            GeographyResponse: GeographyResponse,
            BoundaryNoGeomResponse: BoundaryNoGeomResponse,
            RecordSchema: RecordSchemaResponse.results[0],
            RecordSchemaResponse: RecordSchemaResponse,
            RecordSchemaRequest: RecordSchemaRequest,
            RecordType: RecordType,
            RecordTypeResponse: RecordTypeResponse
        };
        return module;
    }

    angular.module('ase.mock.resources', [])
    .factory('ResourcesMock', ResourcesMock);

})();
