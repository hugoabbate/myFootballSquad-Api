define({ "api": [
  {
    "type": "put",
    "url": "/api/courts",
    "title": "Create Courts",
    "name": "create",
    "group": "Court",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Date",
            "optional": false,
            "field": "created",
            "description": "<p>creation date</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": false,
            "field": "updated",
            "description": "<p>update date</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "courtName",
            "description": "<p>name of the court</p>"
          },
          {
            "group": "Parameter",
            "type": "Number[]",
            "optional": false,
            "field": "courtSize",
            "description": "<p>diferent size of courts</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n  \"courtName\": \"Texas Futbol\",\n  \"courtSize\" : [5, 7]\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n    {\"data\": {\n       \"courtSize\": [\n           5,\n           7\n           ],\n       \"_id\": \"5d1e9d7973d44266a5caa6fc\",\n       \"courtName\": \"Texas Futbol\",\n       \"created\": \"2019-07-05T00:44:41.740Z\",\n       \"updated\": \"2019-07-05T00:44:41.740Z\",\n       \"__v\": 0\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "ok",
            "description": ""
          }
        ]
      }
    },
    "version": "1.0.0",
    "filename": "routes/courts.js",
    "groupTitle": "Court"
  },
  {
    "type": "delete",
    "url": "/api/courts/:id",
    "title": "Delete Court",
    "name": "delete",
    "group": "Court",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Date",
            "optional": false,
            "field": "created",
            "description": "<p>creation date</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": false,
            "field": "updated",
            "description": "<p>update date</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "courtName",
            "description": "<p>name of the court</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "courtSize",
            "description": "<p>diferent size of courts</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n {\n   \"data\": {\n             \"success\": true\n           }\n }",
          "type": "json"
        }
      ],
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "ok",
            "description": ""
          }
        ]
      }
    },
    "version": "1.0.0",
    "filename": "routes/courts.js",
    "groupTitle": "Court"
  },
  {
    "type": "get",
    "url": "/api/courts/:id",
    "title": "Get Courts By ID",
    "name": "get",
    "group": "Court",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Date",
            "optional": false,
            "field": "created",
            "description": "<p>creation date</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": false,
            "field": "updated",
            "description": "<p>update date</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "courtName",
            "description": "<p>name of the court</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "courtSize",
            "description": "<p>diferent size of courts</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\"data\": {\n   \"courtSize\": [\n       5,\n       7\n       ],\n   \"_id\": \"5d1e9d7973d44266a5caa6fc\",\n   \"courtName\": \"Texas Futbol\",\n   \"created\": \"2019-07-05T00:44:41.740Z\",\n   \"updated\": \"2019-07-05T00:44:41.740Z\",\n   \"__v\": 0\n }",
          "type": "json"
        }
      ],
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "ok",
            "description": ""
          }
        ]
      }
    },
    "version": "1.0.0",
    "filename": "routes/courts.js",
    "groupTitle": "Court"
  },
  {
    "type": "patch",
    "url": "/api/courts/:id",
    "title": "Update Court",
    "name": "get",
    "group": "Court",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Date",
            "optional": false,
            "field": "created",
            "description": "<p>creation date</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": false,
            "field": "updated",
            "description": "<p>update date</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "courtName",
            "description": "<p>name of the court</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "courtSize",
            "description": "<p>diferent size of courts</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n  \t\"courtName\": \"Texass-Futbol\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n {\n   \"data\": {\n             \"success\": true\n           }\n }",
          "type": "json"
        }
      ],
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "ok",
            "description": ""
          }
        ]
      }
    },
    "version": "1.0.0",
    "filename": "routes/courts.js",
    "groupTitle": "Court"
  },
  {
    "type": "get",
    "url": "/api/courts",
    "title": "Get Courts",
    "name": "get",
    "group": "Court",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Date",
            "optional": false,
            "field": "created",
            "description": "<p>creation date</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": false,
            "field": "updated",
            "description": "<p>update date</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "courtName",
            "description": "<p>name of the court</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "courtSize",
            "description": "<p>diferent size of courts</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\"data\": {\n   \"courtSize\": [\n       5,\n       7\n       ],\n   \"_id\": \"5d1e9d7973d44266a5caa6fc\",\n   \"courtName\": \"Texas Futbol\",\n   \"created\": \"2019-07-05T00:44:41.740Z\",\n   \"updated\": \"2019-07-05T00:44:41.740Z\",\n   \"__v\": 0\n }",
          "type": "json"
        }
      ],
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "ok",
            "description": ""
          }
        ]
      }
    },
    "version": "1.0.0",
    "filename": "routes/courts.js",
    "groupTitle": "Court"
  },
  {
    "type": "put",
    "url": "/api/matches/",
    "title": "Create Match",
    "name": "create",
    "group": "Match",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Date",
            "optional": false,
            "field": "created",
            "description": "<p>creation date</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": false,
            "field": "updated",
            "description": "<p>update date</p>"
          },
          {
            "group": "Parameter",
            "type": "ObjectId",
            "optional": false,
            "field": "courtName",
            "description": "<p>name of the court</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "courtSize",
            "description": "<p>size of the court</p>"
          },
          {
            "group": "Parameter",
            "type": "ObjectId",
            "optional": false,
            "field": "team",
            "description": "<p>squad that set up the match</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": false,
            "field": "matchDate",
            "description": "<p>date of the match</p>"
          },
          {
            "group": "Parameter",
            "type": "ObjectId[]",
            "optional": false,
            "field": "assistList",
            "description": "<p>list of players that will assist</p>"
          },
          {
            "group": "Parameter",
            "type": "ObjectId[]",
            "optional": false,
            "field": "playersA",
            "description": "<p>players of one team</p>"
          },
          {
            "group": "Parameter",
            "type": "ObjectId[]",
            "optional": false,
            "field": "playersB",
            "description": "<p>players of another team</p>"
          },
          {
            "group": "Parameter",
            "type": "ObjectId[]",
            "optional": false,
            "field": "subPlayerA",
            "description": "<p>subtitution players for playersA</p>"
          },
          {
            "group": "Parameter",
            "type": "ObjectId[]",
            "optional": false,
            "field": "subPlayerB",
            "description": "<p>subtitution players for playersB</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "result",
            "description": "<p>score of the game</p>"
          },
          {
            "group": "Parameter",
            "type": "ObjectID",
            "optional": false,
            "field": "playerOfTheMatch",
            "description": "<p>Best player of the match</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "price",
            "description": "<p>cost of the court rent</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n   \"courtName\": \"5ce6d6628cb61b38141c7088\",\n   \"courtSize\": \"5\",\n   \"team\": \"5ce6d7ce8cb61b38141c708c\",\n   \"matchDate\": \"2019-06-04T18:00:00.0000\",\n   \"price\": \"1245\"\n }",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n \"data\": {\n     \"assistList\": [],\n     \"playersA\": [],\n     \"playersB\": [],\n     \"subPlayersA\": [],\n     \"subPlayersB\": [],\n     \"_id\": \"5d1ea8db7b0dd00c27f1c3f0\",\n     \"courtName\": \"5ce6d6628cb61b38141c7088\",\n     \"courtSize\": 5,\n    \"team\": \"5ce6d7ce8cb61b38141c708c\",\n      \"matchDate\": \"2019-06-04T21:00:00.000Z\",\n     \"price\": 1245,\n     \"created\": \"2019-07-05T01:33:15.769Z\",\n     \"updated\": \"2019-07-05T01:33:15.769Z\",\n     \"__v\": 0\n }\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "ok",
            "description": ""
          }
        ]
      }
    },
    "version": "1.0.0",
    "filename": "routes/matches.js",
    "groupTitle": "Match"
  },
  {
    "type": "delete",
    "url": "/api/matches/",
    "title": "Delete Match By Court And Date",
    "name": "delete",
    "group": "Match",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Date",
            "optional": false,
            "field": "created",
            "description": "<p>creation date</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": false,
            "field": "updated",
            "description": "<p>update date</p>"
          },
          {
            "group": "Parameter",
            "type": "ObjectId",
            "optional": false,
            "field": "courtName",
            "description": "<p>name of the court</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "courtSize",
            "description": "<p>size of the court</p>"
          },
          {
            "group": "Parameter",
            "type": "ObjectId",
            "optional": false,
            "field": "team",
            "description": "<p>squad that set up the match</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": false,
            "field": "matchDate",
            "description": "<p>date of the match</p>"
          },
          {
            "group": "Parameter",
            "type": "ObjectId[]",
            "optional": false,
            "field": "assistList",
            "description": "<p>list of players that will assist</p>"
          },
          {
            "group": "Parameter",
            "type": "ObjectId[]",
            "optional": false,
            "field": "playersA",
            "description": "<p>players of one team</p>"
          },
          {
            "group": "Parameter",
            "type": "ObjectId[]",
            "optional": false,
            "field": "playersB",
            "description": "<p>players of another team</p>"
          },
          {
            "group": "Parameter",
            "type": "ObjectId[]",
            "optional": false,
            "field": "subPlayerA",
            "description": "<p>subtitution players for playersA</p>"
          },
          {
            "group": "Parameter",
            "type": "ObjectId[]",
            "optional": false,
            "field": "subPlayerB",
            "description": "<p>subtitution players for playersB</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "result",
            "description": "<p>score of the game</p>"
          },
          {
            "group": "Parameter",
            "type": "ObjectID",
            "optional": false,
            "field": "playerOfTheMatch",
            "description": "<p>Best player of the match</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "price",
            "description": "<p>cost of the court rent</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n  \"courtName\": \"5ce6d6628cb61b38141c7088\",\n  \"matchDate\": \"2019-06-02T21:00:00.000Z\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n  \"data\": {\n           \"success\": true\n          }\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "ok",
            "description": ""
          }
        ]
      }
    },
    "version": "1.0.0",
    "filename": "routes/matches.js",
    "groupTitle": "Match"
  },
  {
    "type": "delete",
    "url": "/api/matches/:id",
    "title": "Delete Match",
    "name": "delete",
    "group": "Match",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Date",
            "optional": false,
            "field": "created",
            "description": "<p>creation date</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": false,
            "field": "updated",
            "description": "<p>update date</p>"
          },
          {
            "group": "Parameter",
            "type": "ObjectId",
            "optional": false,
            "field": "courtName",
            "description": "<p>name of the court</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "courtSize",
            "description": "<p>size of the court</p>"
          },
          {
            "group": "Parameter",
            "type": "ObjectId",
            "optional": false,
            "field": "team",
            "description": "<p>squad that set up the match</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": false,
            "field": "matchDate",
            "description": "<p>date of the match</p>"
          },
          {
            "group": "Parameter",
            "type": "ObjectId[]",
            "optional": false,
            "field": "assistList",
            "description": "<p>list of players that will assist</p>"
          },
          {
            "group": "Parameter",
            "type": "ObjectId[]",
            "optional": false,
            "field": "playersA",
            "description": "<p>players of one team</p>"
          },
          {
            "group": "Parameter",
            "type": "ObjectId[]",
            "optional": false,
            "field": "playersB",
            "description": "<p>players of another team</p>"
          },
          {
            "group": "Parameter",
            "type": "ObjectId[]",
            "optional": false,
            "field": "subPlayerA",
            "description": "<p>subtitution players for playersA</p>"
          },
          {
            "group": "Parameter",
            "type": "ObjectId[]",
            "optional": false,
            "field": "subPlayerB",
            "description": "<p>subtitution players for playersB</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "result",
            "description": "<p>score of the game</p>"
          },
          {
            "group": "Parameter",
            "type": "ObjectID",
            "optional": false,
            "field": "playerOfTheMatch",
            "description": "<p>Best player of the match</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "price",
            "description": "<p>cost of the court rent</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n  \"data\": {\n           \"success\": true\n          }\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "ok",
            "description": ""
          }
        ]
      }
    },
    "version": "1.0.0",
    "filename": "routes/matches.js",
    "groupTitle": "Match"
  },
  {
    "type": "get",
    "url": "/api/matches/",
    "title": "Get Matches",
    "name": "get",
    "group": "Match",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Date",
            "optional": false,
            "field": "created",
            "description": "<p>creation date</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": false,
            "field": "updated",
            "description": "<p>update date</p>"
          },
          {
            "group": "Parameter",
            "type": "ObjectId",
            "optional": false,
            "field": "courtName",
            "description": "<p>name of the court</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "courtSize",
            "description": "<p>size of the court</p>"
          },
          {
            "group": "Parameter",
            "type": "ObjectId",
            "optional": false,
            "field": "team",
            "description": "<p>squad that set up the match</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": false,
            "field": "matchDate",
            "description": "<p>date of the match</p>"
          },
          {
            "group": "Parameter",
            "type": "ObjectId[]",
            "optional": false,
            "field": "assistList",
            "description": "<p>list of players that will assist</p>"
          },
          {
            "group": "Parameter",
            "type": "ObjectId[]",
            "optional": false,
            "field": "playersA",
            "description": "<p>players of one team</p>"
          },
          {
            "group": "Parameter",
            "type": "ObjectId[]",
            "optional": false,
            "field": "playersB",
            "description": "<p>players of another team</p>"
          },
          {
            "group": "Parameter",
            "type": "ObjectId[]",
            "optional": false,
            "field": "subPlayerA",
            "description": "<p>subtitution players for playersA</p>"
          },
          {
            "group": "Parameter",
            "type": "ObjectId[]",
            "optional": false,
            "field": "subPlayerB",
            "description": "<p>subtitution players for playersB</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "result",
            "description": "<p>score of the game</p>"
          },
          {
            "group": "Parameter",
            "type": "ObjectID",
            "optional": false,
            "field": "playerOfTheMatch",
            "description": "<p>Best player of the match</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "price",
            "description": "<p>cost of the court rent</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n \"data\": {\n     \"assistList\": [],\n     \"playersA\": [],\n     \"playersB\": [],\n     \"subPlayersA\": [],\n     \"subPlayersB\": [],\n     \"_id\": \"5d1ea8db7b0dd00c27f1c3f0\",\n     \"courtName\": \"5ce6d6628cb61b38141c7088\",\n     \"courtSize\": 5,\n    \"team\": \"5ce6d7ce8cb61b38141c708c\",\n      \"matchDate\": \"2019-06-04T21:00:00.000Z\",\n     \"price\": 1245,\n     \"created\": \"2019-07-05T01:33:15.769Z\",\n     \"updated\": \"2019-07-05T01:33:15.769Z\",\n     \"__v\": 0\n }\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "ok",
            "description": ""
          }
        ]
      }
    },
    "version": "1.0.0",
    "filename": "routes/matches.js",
    "groupTitle": "Match"
  },
  {
    "type": "get",
    "url": "/api/matches/Squad/:id",
    "title": "Get Match By Squad",
    "name": "get",
    "group": "Match",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Date",
            "optional": false,
            "field": "created",
            "description": "<p>creation date</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": false,
            "field": "updated",
            "description": "<p>update date</p>"
          },
          {
            "group": "Parameter",
            "type": "ObjectId",
            "optional": false,
            "field": "courtName",
            "description": "<p>name of the court</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "courtSize",
            "description": "<p>size of the court</p>"
          },
          {
            "group": "Parameter",
            "type": "ObjectId",
            "optional": false,
            "field": "team",
            "description": "<p>squad that set up the match</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": false,
            "field": "matchDate",
            "description": "<p>date of the match</p>"
          },
          {
            "group": "Parameter",
            "type": "ObjectId[]",
            "optional": false,
            "field": "assistList",
            "description": "<p>list of players that will assist</p>"
          },
          {
            "group": "Parameter",
            "type": "ObjectId[]",
            "optional": false,
            "field": "playersA",
            "description": "<p>players of one team</p>"
          },
          {
            "group": "Parameter",
            "type": "ObjectId[]",
            "optional": false,
            "field": "playersB",
            "description": "<p>players of another team</p>"
          },
          {
            "group": "Parameter",
            "type": "ObjectId[]",
            "optional": false,
            "field": "subPlayerA",
            "description": "<p>subtitution players for playersA</p>"
          },
          {
            "group": "Parameter",
            "type": "ObjectId[]",
            "optional": false,
            "field": "subPlayerB",
            "description": "<p>subtitution players for playersB</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "result",
            "description": "<p>score of the game</p>"
          },
          {
            "group": "Parameter",
            "type": "ObjectID",
            "optional": false,
            "field": "playerOfTheMatch",
            "description": "<p>Best player of the match</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "price",
            "description": "<p>cost of the court rent</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n \"data\": {\n     \"assistList\": [],\n     \"playersA\": [],\n     \"playersB\": [],\n     \"subPlayersA\": [],\n     \"subPlayersB\": [],\n     \"_id\": \"5d1ea8db7b0dd00c27f1c3f0\",\n     \"courtName\": \"5ce6d6628cb61b38141c7088\",\n     \"courtSize\": 5,\n    \"team\": \"5ce6d7ce8cb61b38141c708c\",\n      \"matchDate\": \"2019-06-04T21:00:00.000Z\",\n     \"price\": 1245,\n     \"created\": \"2019-07-05T01:33:15.769Z\",\n     \"updated\": \"2019-07-05T01:33:15.769Z\",\n     \"__v\": 0\n }\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "ok",
            "description": ""
          }
        ]
      }
    },
    "version": "1.0.0",
    "filename": "routes/matches.js",
    "groupTitle": "Match"
  },
  {
    "type": "get",
    "url": "/api/matches/Court/:id",
    "title": "Get Match By Court",
    "name": "get",
    "group": "Match",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Date",
            "optional": false,
            "field": "created",
            "description": "<p>creation date</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": false,
            "field": "updated",
            "description": "<p>update date</p>"
          },
          {
            "group": "Parameter",
            "type": "ObjectId",
            "optional": false,
            "field": "courtName",
            "description": "<p>name of the court</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "courtSize",
            "description": "<p>size of the court</p>"
          },
          {
            "group": "Parameter",
            "type": "ObjectId",
            "optional": false,
            "field": "team",
            "description": "<p>squad that set up the match</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": false,
            "field": "matchDate",
            "description": "<p>date of the match</p>"
          },
          {
            "group": "Parameter",
            "type": "ObjectId[]",
            "optional": false,
            "field": "assistList",
            "description": "<p>list of players that will assist</p>"
          },
          {
            "group": "Parameter",
            "type": "ObjectId[]",
            "optional": false,
            "field": "playersA",
            "description": "<p>players of one team</p>"
          },
          {
            "group": "Parameter",
            "type": "ObjectId[]",
            "optional": false,
            "field": "playersB",
            "description": "<p>players of another team</p>"
          },
          {
            "group": "Parameter",
            "type": "ObjectId[]",
            "optional": false,
            "field": "subPlayerA",
            "description": "<p>subtitution players for playersA</p>"
          },
          {
            "group": "Parameter",
            "type": "ObjectId[]",
            "optional": false,
            "field": "subPlayerB",
            "description": "<p>subtitution players for playersB</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "result",
            "description": "<p>score of the game</p>"
          },
          {
            "group": "Parameter",
            "type": "ObjectID",
            "optional": false,
            "field": "playerOfTheMatch",
            "description": "<p>Best player of the match</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "price",
            "description": "<p>cost of the court rent</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n \"data\": {\n     \"assistList\": [],\n     \"playersA\": [],\n     \"playersB\": [],\n     \"subPlayersA\": [],\n     \"subPlayersB\": [],\n     \"_id\": \"5d1ea8db7b0dd00c27f1c3f0\",\n     \"courtName\": \"5ce6d6628cb61b38141c7088\",\n     \"courtSize\": 5,\n    \"team\": \"5ce6d7ce8cb61b38141c708c\",\n      \"matchDate\": \"2019-06-04T21:00:00.000Z\",\n     \"price\": 1245,\n     \"created\": \"2019-07-05T01:33:15.769Z\",\n     \"updated\": \"2019-07-05T01:33:15.769Z\",\n     \"__v\": 0\n }\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "ok",
            "description": ""
          }
        ]
      }
    },
    "version": "1.0.0",
    "filename": "routes/matches.js",
    "groupTitle": "Match"
  },
  {
    "type": "get",
    "url": "/api/matches/Date/a",
    "title": "Get Match By Date",
    "name": "get",
    "group": "Match",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Date",
            "optional": false,
            "field": "created",
            "description": "<p>creation date</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": false,
            "field": "updated",
            "description": "<p>update date</p>"
          },
          {
            "group": "Parameter",
            "type": "ObjectId",
            "optional": false,
            "field": "courtName",
            "description": "<p>name of the court</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "courtSize",
            "description": "<p>size of the court</p>"
          },
          {
            "group": "Parameter",
            "type": "ObjectId",
            "optional": false,
            "field": "team",
            "description": "<p>squad that set up the match</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": false,
            "field": "matchDate",
            "description": "<p>date of the match</p>"
          },
          {
            "group": "Parameter",
            "type": "ObjectId[]",
            "optional": false,
            "field": "assistList",
            "description": "<p>list of players that will assist</p>"
          },
          {
            "group": "Parameter",
            "type": "ObjectId[]",
            "optional": false,
            "field": "playersA",
            "description": "<p>players of one team</p>"
          },
          {
            "group": "Parameter",
            "type": "ObjectId[]",
            "optional": false,
            "field": "playersB",
            "description": "<p>players of another team</p>"
          },
          {
            "group": "Parameter",
            "type": "ObjectId[]",
            "optional": false,
            "field": "subPlayerA",
            "description": "<p>subtitution players for playersA</p>"
          },
          {
            "group": "Parameter",
            "type": "ObjectId[]",
            "optional": false,
            "field": "subPlayerB",
            "description": "<p>subtitution players for playersB</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "result",
            "description": "<p>score of the game</p>"
          },
          {
            "group": "Parameter",
            "type": "ObjectID",
            "optional": false,
            "field": "playerOfTheMatch",
            "description": "<p>Best player of the match</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "price",
            "description": "<p>cost of the court rent</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n  \"matchDate\": \"2019-06-04T21:00:00.000Z\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n \"data\": {\n     \"assistList\": [],\n     \"playersA\": [],\n     \"playersB\": [],\n     \"subPlayersA\": [],\n     \"subPlayersB\": [],\n     \"_id\": \"5d1ea8db7b0dd00c27f1c3f0\",\n     \"courtName\": \"5ce6d6628cb61b38141c7088\",\n     \"courtSize\": 5,\n    \"team\": \"5ce6d7ce8cb61b38141c708c\",\n      \"matchDate\": \"2019-06-04T21:00:00.000Z\",\n     \"price\": 1245,\n     \"created\": \"2019-07-05T01:33:15.769Z\",\n     \"updated\": \"2019-07-05T01:33:15.769Z\",\n     \"__v\": 0\n }\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "ok",
            "description": ""
          }
        ]
      }
    },
    "version": "1.0.0",
    "filename": "routes/matches.js",
    "groupTitle": "Match"
  },
  {
    "type": "get",
    "url": "/api/matches/:id",
    "title": "Get Match",
    "name": "get",
    "group": "Match",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Date",
            "optional": false,
            "field": "created",
            "description": "<p>creation date</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": false,
            "field": "updated",
            "description": "<p>update date</p>"
          },
          {
            "group": "Parameter",
            "type": "ObjectId",
            "optional": false,
            "field": "courtName",
            "description": "<p>name of the court</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "courtSize",
            "description": "<p>size of the court</p>"
          },
          {
            "group": "Parameter",
            "type": "ObjectId",
            "optional": false,
            "field": "team",
            "description": "<p>squad that set up the match</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": false,
            "field": "matchDate",
            "description": "<p>date of the match</p>"
          },
          {
            "group": "Parameter",
            "type": "ObjectId[]",
            "optional": false,
            "field": "assistList",
            "description": "<p>list of players that will assist</p>"
          },
          {
            "group": "Parameter",
            "type": "ObjectId[]",
            "optional": false,
            "field": "playersA",
            "description": "<p>players of one team</p>"
          },
          {
            "group": "Parameter",
            "type": "ObjectId[]",
            "optional": false,
            "field": "playersB",
            "description": "<p>players of another team</p>"
          },
          {
            "group": "Parameter",
            "type": "ObjectId[]",
            "optional": false,
            "field": "subPlayerA",
            "description": "<p>subtitution players for playersA</p>"
          },
          {
            "group": "Parameter",
            "type": "ObjectId[]",
            "optional": false,
            "field": "subPlayerB",
            "description": "<p>subtitution players for playersB</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "result",
            "description": "<p>score of the game</p>"
          },
          {
            "group": "Parameter",
            "type": "ObjectID",
            "optional": false,
            "field": "playerOfTheMatch",
            "description": "<p>Best player of the match</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "price",
            "description": "<p>cost of the court rent</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n \"data\": {\n     \"assistList\": [],\n     \"playersA\": [],\n     \"playersB\": [],\n     \"subPlayersA\": [],\n     \"subPlayersB\": [],\n     \"_id\": \"5d1ea8db7b0dd00c27f1c3f0\",\n     \"courtName\": \"5ce6d6628cb61b38141c7088\",\n     \"courtSize\": 5,\n    \"team\": \"5ce6d7ce8cb61b38141c708c\",\n      \"matchDate\": \"2019-06-04T21:00:00.000Z\",\n     \"price\": 1245,\n     \"created\": \"2019-07-05T01:33:15.769Z\",\n     \"updated\": \"2019-07-05T01:33:15.769Z\",\n     \"__v\": 0\n }\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "ok",
            "description": ""
          }
        ]
      }
    },
    "version": "1.0.0",
    "filename": "routes/matches.js",
    "groupTitle": "Match"
  },
  {
    "type": "post",
    "url": "/api/matches/:id/createRandomTeams",
    "title": "Create Random Teams",
    "name": "post",
    "group": "Match",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Date",
            "optional": false,
            "field": "created",
            "description": "<p>creation date</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": false,
            "field": "updated",
            "description": "<p>update date</p>"
          },
          {
            "group": "Parameter",
            "type": "ObjectId",
            "optional": false,
            "field": "courtName",
            "description": "<p>name of the court</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "courtSize",
            "description": "<p>size of the court</p>"
          },
          {
            "group": "Parameter",
            "type": "ObjectId",
            "optional": false,
            "field": "team",
            "description": "<p>squad that set up the match</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": false,
            "field": "matchDate",
            "description": "<p>date of the match</p>"
          },
          {
            "group": "Parameter",
            "type": "ObjectId[]",
            "optional": false,
            "field": "assistList",
            "description": "<p>list of players that will assist</p>"
          },
          {
            "group": "Parameter",
            "type": "ObjectId[]",
            "optional": false,
            "field": "playersA",
            "description": "<p>players of one team</p>"
          },
          {
            "group": "Parameter",
            "type": "ObjectId[]",
            "optional": false,
            "field": "playersB",
            "description": "<p>players of another team</p>"
          },
          {
            "group": "Parameter",
            "type": "ObjectId[]",
            "optional": false,
            "field": "subPlayerA",
            "description": "<p>subtitution players for playersA</p>"
          },
          {
            "group": "Parameter",
            "type": "ObjectId[]",
            "optional": false,
            "field": "subPlayerB",
            "description": "<p>subtitution players for playersB</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "result",
            "description": "<p>score of the game</p>"
          },
          {
            "group": "Parameter",
            "type": "ObjectID",
            "optional": false,
            "field": "playerOfTheMatch",
            "description": "<p>Best player of the match</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "price",
            "description": "<p>cost of the court rent</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "     {\n       \"data\": {\n           \"assistList\": [\n                           \"5ce55b832201ad1a2b38c94b\",\n                           \"5ce55bd4dac9c81a9e4e759f\",\n                           \"5ce55c11dac9c81a9e4e75a0\",\n                           \"5ce55c20dac9c81a9e4e75a1\",\n                           \"5ce55c48dac9c81a9e4e75a3\",\n                           \"5ce55ecefb4de31b5d06bcb3\",\n                           \"5ce6cde58cb61b38141c7070\",\n                           \"5ce6ce1f8cb61b38141c7071\",\n                           \"5ce6ce338cb61b38141c7072\",\n                           \"5ce6ce9c8cb61b38141c7077\"\n                       ],\n       \"playersA\": [\n                       \"5ce55c20dac9c81a9e4e75a1\",\n                       \"5ce55bd4dac9c81a9e4e759f\",\n                       \"5ce55c48dac9c81a9e4e75a3\",\n                       \"5ce55ecefb4de31b5d06bcb3\",\n                       \"5ce6ce9c8cb61b38141c7077\"\n                   ],\n       \"playersB\": [\n                       \"5ce6cde58cb61b38141c7070\",\n                       \"5ce6ce1f8cb61b38141c7071\",\n                       \"5ce55c11dac9c81a9e4e75a0\",\n                       \"5ce6ce338cb61b38141c7072\",\n                       \"5ce55b832201ad1a2b38c94b\"\n                   ],\n       \"subPlayersA\": [],\n       \"subPlayersB\": [],\n       \"_id\": \"5d16e850e183c225276086be\",\n       \"courtName\": \"5ce6d6598cb61b38141c7087\",\n       \"courtSize\": 5,\n       \"team\": \"5ce6d6b38cb61b38141c708b\",\n       \"matchDate\": \"2019-06-01T21:00:00.000Z\",\n       \"price\": 1245,\n       \"created\": \"2019-06-29T04:25:52.213Z\",\n       \"updated\": \"2019-06-29T04:25:52.213Z\",\n       \"__v\": 14\n   }\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "ok",
            "description": ""
          }
        ]
      }
    },
    "version": "1.0.0",
    "filename": "routes/matches.js",
    "groupTitle": "Match"
  },
  {
    "type": "patch",
    "url": "/api/matches/:id/assistance",
    "title": "Add User to Assist List",
    "name": "update",
    "group": "Match",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Date",
            "optional": false,
            "field": "created",
            "description": "<p>creation date</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": false,
            "field": "updated",
            "description": "<p>update date</p>"
          },
          {
            "group": "Parameter",
            "type": "ObjectId",
            "optional": false,
            "field": "courtName",
            "description": "<p>name of the court</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "courtSize",
            "description": "<p>size of the court</p>"
          },
          {
            "group": "Parameter",
            "type": "ObjectId",
            "optional": false,
            "field": "team",
            "description": "<p>squad that set up the match</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": false,
            "field": "matchDate",
            "description": "<p>date of the match</p>"
          },
          {
            "group": "Parameter",
            "type": "ObjectId[]",
            "optional": false,
            "field": "assistList",
            "description": "<p>list of players that will assist</p>"
          },
          {
            "group": "Parameter",
            "type": "ObjectId[]",
            "optional": false,
            "field": "playersA",
            "description": "<p>players of one team</p>"
          },
          {
            "group": "Parameter",
            "type": "ObjectId[]",
            "optional": false,
            "field": "playersB",
            "description": "<p>players of another team</p>"
          },
          {
            "group": "Parameter",
            "type": "ObjectId[]",
            "optional": false,
            "field": "subPlayerA",
            "description": "<p>subtitution players for playersA</p>"
          },
          {
            "group": "Parameter",
            "type": "ObjectId[]",
            "optional": false,
            "field": "subPlayerB",
            "description": "<p>subtitution players for playersB</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "result",
            "description": "<p>score of the game</p>"
          },
          {
            "group": "Parameter",
            "type": "ObjectID",
            "optional": false,
            "field": "playerOfTheMatch",
            "description": "<p>Best player of the match</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "price",
            "description": "<p>cost of the court rent</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n   \"user\" : \"5ce55c2fdac9c81a9e4e75a2\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n  \"data\": {\n           \"success\": true\n          }\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "ok",
            "description": ""
          }
        ]
      }
    },
    "version": "1.0.0",
    "filename": "routes/matches.js",
    "groupTitle": "Match"
  },
  {
    "type": "patch",
    "url": "/api/matches/:id/pullUser",
    "title": "Pull Out User of Match",
    "name": "update",
    "group": "Match",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Date",
            "optional": false,
            "field": "created",
            "description": "<p>creation date</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": false,
            "field": "updated",
            "description": "<p>update date</p>"
          },
          {
            "group": "Parameter",
            "type": "ObjectId",
            "optional": false,
            "field": "courtName",
            "description": "<p>name of the court</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "courtSize",
            "description": "<p>size of the court</p>"
          },
          {
            "group": "Parameter",
            "type": "ObjectId",
            "optional": false,
            "field": "team",
            "description": "<p>squad that set up the match</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": false,
            "field": "matchDate",
            "description": "<p>date of the match</p>"
          },
          {
            "group": "Parameter",
            "type": "ObjectId[]",
            "optional": false,
            "field": "assistList",
            "description": "<p>list of players that will assist</p>"
          },
          {
            "group": "Parameter",
            "type": "ObjectId[]",
            "optional": false,
            "field": "playersA",
            "description": "<p>players of one team</p>"
          },
          {
            "group": "Parameter",
            "type": "ObjectId[]",
            "optional": false,
            "field": "playersB",
            "description": "<p>players of another team</p>"
          },
          {
            "group": "Parameter",
            "type": "ObjectId[]",
            "optional": false,
            "field": "subPlayerA",
            "description": "<p>subtitution players for playersA</p>"
          },
          {
            "group": "Parameter",
            "type": "ObjectId[]",
            "optional": false,
            "field": "subPlayerB",
            "description": "<p>subtitution players for playersB</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "result",
            "description": "<p>score of the game</p>"
          },
          {
            "group": "Parameter",
            "type": "ObjectID",
            "optional": false,
            "field": "playerOfTheMatch",
            "description": "<p>Best player of the match</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "price",
            "description": "<p>cost of the court rent</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n   \"user\" : \"5ce55c2fdac9c81a9e4e75a2\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n     {\n         \"data\": \"Success\"\n     }\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "ok",
            "description": ""
          }
        ]
      }
    },
    "version": "1.0.0",
    "filename": "routes/matches.js",
    "groupTitle": "Match"
  },
  {
    "type": "patch",
    "url": "/api/matches/:id",
    "title": "Update Match",
    "name": "update",
    "group": "Match",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Date",
            "optional": false,
            "field": "created",
            "description": "<p>creation date</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": false,
            "field": "updated",
            "description": "<p>update date</p>"
          },
          {
            "group": "Parameter",
            "type": "ObjectId",
            "optional": false,
            "field": "courtName",
            "description": "<p>name of the court</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "courtSize",
            "description": "<p>size of the court</p>"
          },
          {
            "group": "Parameter",
            "type": "ObjectId",
            "optional": false,
            "field": "team",
            "description": "<p>squad that set up the match</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": false,
            "field": "matchDate",
            "description": "<p>date of the match</p>"
          },
          {
            "group": "Parameter",
            "type": "ObjectId[]",
            "optional": false,
            "field": "assistList",
            "description": "<p>list of players that will assist</p>"
          },
          {
            "group": "Parameter",
            "type": "ObjectId[]",
            "optional": false,
            "field": "playersA",
            "description": "<p>players of one team</p>"
          },
          {
            "group": "Parameter",
            "type": "ObjectId[]",
            "optional": false,
            "field": "playersB",
            "description": "<p>players of another team</p>"
          },
          {
            "group": "Parameter",
            "type": "ObjectId[]",
            "optional": false,
            "field": "subPlayerA",
            "description": "<p>subtitution players for playersA</p>"
          },
          {
            "group": "Parameter",
            "type": "ObjectId[]",
            "optional": false,
            "field": "subPlayerB",
            "description": "<p>subtitution players for playersB</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "result",
            "description": "<p>score of the game</p>"
          },
          {
            "group": "Parameter",
            "type": "ObjectID",
            "optional": false,
            "field": "playerOfTheMatch",
            "description": "<p>Best player of the match</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "price",
            "description": "<p>cost of the court rent</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n     \"courtName\": \"5ce55d5ffb4de31b5d06bcaf\",\n     \"courtSize\": 5,\n     \"team\": \"5ce55d5ffb4de31b5d06bcaf\",\n     \"matchDate\": \"2019-06-01T18:00:00.0000\",\n     \"price\": \"1245\"\n }",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n  \"data\": {\n           \"success\": true\n          }\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "ok",
            "description": ""
          }
        ]
      }
    },
    "version": "1.0.0",
    "filename": "routes/matches.js",
    "groupTitle": "Match"
  },
  {
    "type": "put",
    "url": "/api/squads",
    "title": "Create Squad",
    "name": "create",
    "group": "Squad",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Date",
            "optional": false,
            "field": "created",
            "description": "<p>creation date</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": false,
            "field": "updated",
            "description": "<p>update date</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "imageUrl",
            "description": "<p>url of Squad avatar</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "squadName",
            "description": "<p>name of the squad</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>Password</p>"
          },
          {
            "group": "Parameter",
            "type": "ObjectId",
            "optional": false,
            "field": "courtName",
            "description": "<p>default court for the squad</p>"
          },
          {
            "group": "Parameter",
            "type": "ObjectId[]",
            "optional": false,
            "field": "users",
            "description": "<p>users in the squad</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n   \"squadName\": \"The Demons\",\n   \"password\": \"clave123\",\n   \"courtName\": \"5ce6d66c8cb61b38141c7089\",\n   \"users\" : [\"5ce6cef58cb61b38141c7079\",\n             \"5ce6cf318cb61b38141c707b\",\n             \"5ce6cf458cb61b38141c707c\",\n             \"5ce6cf518cb61b38141c707d\",\n             \"5ce6d19a8cb61b38141c707e\",\n             \"5ce6d1ad8cb61b38141c707f\",\n             \"5ce6d1fc8cb61b38141c7080\",\n             \"5ce6d2228cb61b38141c7081\",\n             \"5ce6d2418cb61b38141c7082\",\n             \"5ce6d24f8cb61b38141c7083\",\n             \"5ce6d2a78cb61b38141c7085\",\n             \"5ce6d2b68cb61b38141c7086\"]\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\"data\": {\n           \"users\" : [\"5ce6cef58cb61b38141c7079\",\n                      \"5ce6cf318cb61b38141c707b\",\n                      \"5ce6cf458cb61b38141c707c\",\n                      \"5ce6cf518cb61b38141c707d\",\n                      \"5ce6d19a8cb61b38141c707e\",\n                      \"5ce6d1ad8cb61b38141c707f\",\n                      \"5ce6d1fc8cb61b38141c7080\",\n                      \"5ce6d2228cb61b38141c7081\",\n                      \"5ce6d2418cb61b38141c7082\",\n                      \"5ce6d24f8cb61b38141c7083\",\n                      \"5ce6d2a78cb61b38141c7085\",\n                      \"5ce6d2b68cb61b38141c7086\"]\n           \"_id\": \"5d1eca81252c4d1d44fc9745\",\n           \"squadName\": \"The Demons\",\n           \"password\": \"$2b$10$ve.8VEuO1JuK74.eeBoTXeDJzCQhOYLtwvtwHU9OhHjXDSwWGUFoy\",\n           \"courtName\": \"5ce6d66c8cb61b38141c7089\",\n           \"created\": \"2019-07-05T03:56:49.447Z\",\n           \"updated\": \"2019-07-05T03:56:49.448Z\",\n           \"__v\": 0\n          }\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "ok",
            "description": ""
          }
        ]
      }
    },
    "version": "1.0.0",
    "filename": "routes/squads.js",
    "groupTitle": "Squad"
  },
  {
    "type": "delete",
    "url": "/api/squads/:id/deleteUser",
    "title": "Delete User In Squads",
    "name": "delete",
    "group": "Squad",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Date",
            "optional": false,
            "field": "created",
            "description": "<p>creation date</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": false,
            "field": "updated",
            "description": "<p>update date</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "imageUrl",
            "description": "<p>url of Squad avatar</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "squadName",
            "description": "<p>name of the squad</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>Password</p>"
          },
          {
            "group": "Parameter",
            "type": "ObjectId",
            "optional": false,
            "field": "courtName",
            "description": "<p>default court for the squad</p>"
          },
          {
            "group": "Parameter",
            "type": "ObjectId[]",
            "optional": false,
            "field": "users",
            "description": "<p>users in the squad</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n\t\"user\": \"5ce6ce338cb61b38141c7072\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n   {\n       \"data\": \"Success\"\n   }\n }",
          "type": "json"
        }
      ],
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "ok",
            "description": ""
          }
        ]
      }
    },
    "version": "1.0.0",
    "filename": "routes/squads.js",
    "groupTitle": "Squad"
  },
  {
    "type": "delete",
    "url": "/api/squads/:id",
    "title": "Delete Squads By Id",
    "name": "delete",
    "group": "Squad",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Date",
            "optional": false,
            "field": "created",
            "description": "<p>creation date</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": false,
            "field": "updated",
            "description": "<p>update date</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "imageUrl",
            "description": "<p>url of Squad avatar</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "squadName",
            "description": "<p>name of the squad</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>Password</p>"
          },
          {
            "group": "Parameter",
            "type": "ObjectId",
            "optional": false,
            "field": "courtName",
            "description": "<p>default court for the squad</p>"
          },
          {
            "group": "Parameter",
            "type": "ObjectId[]",
            "optional": false,
            "field": "users",
            "description": "<p>users in the squad</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " HTTP/1.1 200 OK\n {\n  \"data\":\n    {\n  \"success\": true\n    }\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "ok",
            "description": ""
          }
        ]
      }
    },
    "version": "1.0.0",
    "filename": "routes/squads.js",
    "groupTitle": "Squad"
  },
  {
    "type": "delete",
    "url": "/api/squads/userInSquad/:id",
    "title": "Delete User In Squads",
    "name": "delete",
    "group": "Squad",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Date",
            "optional": false,
            "field": "created",
            "description": "<p>creation date</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": false,
            "field": "updated",
            "description": "<p>update date</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "imageUrl",
            "description": "<p>url of Squad avatar</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "squadName",
            "description": "<p>name of the squad</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>Password</p>"
          },
          {
            "group": "Parameter",
            "type": "ObjectId",
            "optional": false,
            "field": "courtName",
            "description": "<p>default court for the squad</p>"
          },
          {
            "group": "Parameter",
            "type": "ObjectId[]",
            "optional": false,
            "field": "users",
            "description": "<p>users in the squad</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " HTTP/1.1 200 OK\n {\n  {\n      \"data\": {\n          \"n\": 4,\n          \"nModified\": 3,\n          \"opTime\": {\n              \"ts\": \"6710032453127372803\",\n              \"t\": 5\n          },\n          \"electionId\": \"7fffffff0000000000000005\",\n          \"ok\": 1,\n          \"operationTime\": \"6710032453127372803\",\n          \"$clusterTime\": {\n              \"clusterTime\": \"6710032453127372803\",\n              \"signature\": {\n                  \"hash\": \"6eBBXwEmfetPNmboGPwbhbT8t60=\",\n                  \"keyId\": \"6662588762612039681\"\n              }\n          }\n      }\n  }\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "ok",
            "description": ""
          }
        ]
      }
    },
    "version": "1.0.0",
    "filename": "routes/squads.js",
    "groupTitle": "Squad"
  },
  {
    "type": "get",
    "url": "/api/squads/byUser/:id",
    "title": "Get Squad By UserId",
    "name": "get",
    "group": "Squad",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Date",
            "optional": false,
            "field": "created",
            "description": "<p>creation date</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": false,
            "field": "updated",
            "description": "<p>update date</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "imageUrl",
            "description": "<p>url of Squad avatar</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "squadName",
            "description": "<p>name of the squad</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>Password</p>"
          },
          {
            "group": "Parameter",
            "type": "ObjectId",
            "optional": false,
            "field": "courtName",
            "description": "<p>default court for the squad</p>"
          },
          {
            "group": "Parameter",
            "type": "ObjectId[]",
            "optional": false,
            "field": "users",
            "description": "<p>users in the squad</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n\"data\": [\n          {\n              \"users\": [\n                  {\n                      \"_id\": \"5ce55bd4dac9c81a9e4e759f\",\n                      \"username\": \"hughabbate\"\n                  },\n                  {\n                      \"_id\": \"5ce55c11dac9c81a9e4e75a0\",\n                      \"username\": \"matu_vdp\"\n                  },\n                  {\n                      \"_id\": \"5ce55c20dac9c81a9e4e75a1\",\n                      \"username\": \"eze_rasche\"\n                  },\n                  {\n                      \"_id\": \"5ce55c2fdac9c81a9e4e75a2\",\n                      \"username\": \"choborra_gabi\"\n                  },\n                  {\n                      \"_id\": \"5ce55c48dac9c81a9e4e75a3\",\n                      \"username\": \"cuervode3ojos\"\n                  },\n                  {\n                      \"_id\": \"5ce55ecefb4de31b5d06bcb3\",\n                      \"username\": \"fpalat\"\n                  },\n                  {\n                      \"_id\": \"5ce6cde58cb61b38141c7070\",\n                      \"username\": \"christian_mata\"\n                  },\n                  {\n                      \"_id\": \"5ce6ce1f8cb61b38141c7071\",\n                      \"username\": \"niko_varela10\"\n                  },\n                  {\n                      \"_id\": \"5ce6ce338cb61b38141c7072\",\n                      \"username\": \"gpinto\"\n                  },\n                  {\n                      \"_id\": \"5ce6ce468cb61b38141c7073\",\n                      \"username\": \"Ez3_Ligorria\"\n                  },\n                  {\n                      \"_id\": \"5ce6ce5e8cb61b38141c7074\",\n                      \"username\": \"adriligorria\"\n                  },\n                  {\n                      \"_id\": \"5ce6ce7a8cb61b38141c7075\",\n                      \"username\": \"Pericl3s\"\n                  },\n                  {\n                      \"_id\": \"5ce6ce8b8cb61b38141c7076\",\n                      \"username\": \"MauMajul\"\n                  },\n                  {\n                      \"_id\": \"5ce6ce9c8cb61b38141c7077\",\n                      \"username\": \"DiegaMurua\"\n                  }\n              ],\n              \"_id\": \"5ce6d6b38cb61b38141c708b\",\n              \"squadName\": \"A Lo Profundo\",\n              \"password\": \"$2b$10$ocLCE53knmYjqyzTSVNZsuIYiied6D.Uy4HWpnyKBfoTkU4slr1uG\",\n              \"courtName\": {\n                  \"_id\": \"5ce6d6598cb61b38141c7087\",\n                  \"courtName\": \"Comunicaciones\"\n              },\n              \"created\": \"2019-05-23T17:21:55.988Z\",\n              \"updated\": \"2019-07-01T23:26:16.615Z\",\n              \"__v\": 1\n          }\n      ]\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "ok",
            "description": ""
          }
        ]
      }
    },
    "version": "1.0.0",
    "filename": "routes/squads.js",
    "groupTitle": "Squad"
  },
  {
    "type": "get",
    "url": "/api/squads/:id",
    "title": "Get Squads By Id",
    "name": "get",
    "group": "Squad",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Date",
            "optional": false,
            "field": "created",
            "description": "<p>creation date</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": false,
            "field": "updated",
            "description": "<p>update date</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "imageUrl",
            "description": "<p>url of Squad avatar</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "squadName",
            "description": "<p>name of the squad</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>Password</p>"
          },
          {
            "group": "Parameter",
            "type": "ObjectId",
            "optional": false,
            "field": "courtName",
            "description": "<p>default court for the squad</p>"
          },
          {
            "group": "Parameter",
            "type": "ObjectId[]",
            "optional": false,
            "field": "users",
            "description": "<p>users in the squad</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n  \"password\": \"clave123\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " HTTP/1.1 200 OK\n {\n  \"data\":\n    {\n        \"users\": [\n            {\n                \"_id\": \"5ce6cef58cb61b38141c7079\",\n                \"username\": \"Nicolas.Maillo\"\n            },\n            {\n                \"_id\": \"5ce6cf318cb61b38141c707b\",\n                \"username\": \"mati_leyes\"\n            },\n            {\n                \"_id\": \"5ce6cf458cb61b38141c707c\",\n                \"username\": \"Gaston_Abbate\"\n            },\n            {\n                \"_id\": \"5ce6cf518cb61b38141c707d\",\n                \"username\": \"Axx\"\n            },\n            {\n                \"_id\": \"5ce6d19a8cb61b38141c707e\",\n                \"username\": \"P4li\"\n            },\n            {\n                \"_id\": \"5ce6d1ad8cb61b38141c707f\",\n                \"username\": \"LeoQ\"\n            },\n            {\n                \"_id\": \"5ce6d1fc8cb61b38141c7080\",\n                \"username\": \"Fr4nc0\"\n            },\n            {\n                \"_id\": \"5ce6d2228cb61b38141c7081\",\n                \"username\": \"Ale1431\"\n            },\n            {\n                \"_id\": \"5ce6d2418cb61b38141c7082\",\n                \"username\": \"MauroOrell\"\n            },\n            {\n                \"_id\": \"5ce6d24f8cb61b38141c7083\",\n                \"username\": \"Pipa_Gomez\"\n            },\n            {\n                \"_id\": \"5ce6d2a78cb61b38141c7085\",\n                \"username\": \"NahueLinera\"\n            },\n            {\n                \"_id\": \"5ce6d2b68cb61b38141c7086\",\n                \"username\": \"User30\"\n            }\n        ],\n        \"_id\": \"5d1eca81252c4d1d44fc9745\",\n        \"squadName\": \"The Demons\",\n        \"password\": \"$2b$10$ve.8VEuO1JuK74.eeBoTXeDJzCQhOYLtwvtwHU9OhHjXDSwWGUFoy\",\n        \"courtName\": {\n            \"_id\": \"5ce6d66c8cb61b38141c7089\",\n            \"courtName\": \"Solanas\"\n        },\n        \"created\": \"2019-07-05T03:56:49.447Z\",\n        \"updated\": \"2019-07-05T03:56:49.448Z\",\n        \"__v\": 0\n  }\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "ok",
            "description": ""
          }
        ]
      }
    },
    "version": "1.0.0",
    "filename": "routes/squads.js",
    "groupTitle": "Squad"
  },
  {
    "type": "get",
    "url": "/api/squads",
    "title": "Get Squads",
    "name": "get",
    "group": "Squad",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Date",
            "optional": false,
            "field": "created",
            "description": "<p>creation date</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": false,
            "field": "updated",
            "description": "<p>update date</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "imageUrl",
            "description": "<p>url of Squad avatar</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "squadName",
            "description": "<p>name of the squad</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>Password</p>"
          },
          {
            "group": "Parameter",
            "type": "ObjectId",
            "optional": false,
            "field": "courtName",
            "description": "<p>default court for the squad</p>"
          },
          {
            "group": "Parameter",
            "type": "ObjectId[]",
            "optional": false,
            "field": "users",
            "description": "<p>users in the squad</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " HTTP/1.1 200 OK\n {\n  \"data\":\n     {\n        \"users\": [\n            {\n                \"_id\": \"5ce6cef58cb61b38141c7079\",\n                \"username\": \"Nicolas.Maillo\"\n            },\n            {\n                \"_id\": \"5ce6cf088cb61b38141c707a\",\n                \"username\": \"mbotana\"\n            },\n            {\n                \"_id\": \"5ce6cf318cb61b38141c707b\",\n                \"username\": \"mati_leyes\"\n            },\n            {\n                \"_id\": \"5ce6cf458cb61b38141c707c\",\n                \"username\": \"Gaston_Abbate\"\n            },\n            {\n                \"_id\": \"5ce6cf518cb61b38141c707d\",\n                \"username\": \"Axx\"\n            },\n            {\n                \"_id\": \"5ce6d19a8cb61b38141c707e\",\n                \"username\": \"P4li\"\n            },\n            {\n                \"_id\": \"5ce6d1ad8cb61b38141c707f\",\n                \"username\": \"LeoQ\"\n            },\n            {\n                \"_id\": \"5ce6d1fc8cb61b38141c7080\",\n                \"username\": \"Fr4nc0\"\n            },\n            {\n                \"_id\": \"5ce6d2228cb61b38141c7081\",\n                \"username\": \"Ale1431\"\n            },\n            {\n                \"_id\": \"5ce6d2418cb61b38141c7082\",\n                \"username\": \"MauroOrell\"\n            },\n            {\n                \"_id\": \"5ce6d24f8cb61b38141c7083\",\n                \"username\": \"Pipa_Gomez\"\n            },\n            {\n                \"_id\": \"5ce6d2a78cb61b38141c7085\",\n                \"username\": \"NahueLinera\"\n            },\n            {\n                \"_id\": \"5ce6d2b68cb61b38141c7086\",\n                \"username\": \"User30\"\n            }\n        ],\n        \"_id\": \"5d1928eee852db15339a782b\",\n        \"squadName\": \"The Vaquers\",\n        \"password\": \"$2b$10$UeBLnEvprXmkQfwTfPm0zeRixUIHzFS6uMWes5zd2aOyPNHA3tHRK\",\n        \"courtName\": {\n            \"_id\": \"5ce6d66c8cb61b38141c7089\",\n            \"courtName\": \"Solanas\"\n        },\n        \"created\": \"2019-06-30T21:26:06.347Z\",\n        \"updated\": \"2019-06-30T21:26:06.347Z\",\n        \"__v\": 0\n    },\n    {\n        \"users\": [\n            {\n                \"_id\": \"5ce6cef58cb61b38141c7079\",\n                \"username\": \"Nicolas.Maillo\"\n            },\n            {\n                \"_id\": \"5ce6cf318cb61b38141c707b\",\n                \"username\": \"mati_leyes\"\n            },\n            {\n                \"_id\": \"5ce6cf458cb61b38141c707c\",\n                \"username\": \"Gaston_Abbate\"\n            },\n            {\n                \"_id\": \"5ce6cf518cb61b38141c707d\",\n                \"username\": \"Axx\"\n            },\n            {\n                \"_id\": \"5ce6d19a8cb61b38141c707e\",\n                \"username\": \"P4li\"\n            },\n            {\n                \"_id\": \"5ce6d1ad8cb61b38141c707f\",\n                \"username\": \"LeoQ\"\n            },\n            {\n                \"_id\": \"5ce6d1fc8cb61b38141c7080\",\n                \"username\": \"Fr4nc0\"\n            },\n            {\n                \"_id\": \"5ce6d2228cb61b38141c7081\",\n                \"username\": \"Ale1431\"\n            },\n            {\n                \"_id\": \"5ce6d2418cb61b38141c7082\",\n                \"username\": \"MauroOrell\"\n            },\n            {\n                \"_id\": \"5ce6d24f8cb61b38141c7083\",\n                \"username\": \"Pipa_Gomez\"\n            },\n            {\n                \"_id\": \"5ce6d2a78cb61b38141c7085\",\n                \"username\": \"NahueLinera\"\n            },\n            {\n                \"_id\": \"5ce6d2b68cb61b38141c7086\",\n                \"username\": \"User30\"\n            }\n        ],\n        \"_id\": \"5d1eca81252c4d1d44fc9745\",\n        \"squadName\": \"The Demons\",\n        \"password\": \"$2b$10$ve.8VEuO1JuK74.eeBoTXeDJzCQhOYLtwvtwHU9OhHjXDSwWGUFoy\",\n        \"courtName\": {\n            \"_id\": \"5ce6d66c8cb61b38141c7089\",\n            \"courtName\": \"Solanas\"\n        },\n        \"created\": \"2019-07-05T03:56:49.447Z\",\n        \"updated\": \"2019-07-05T03:56:49.448Z\",\n        \"__v\": 0\n  }\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "ok",
            "description": ""
          }
        ]
      }
    },
    "version": "1.0.0",
    "filename": "routes/squads.js",
    "groupTitle": "Squad"
  },
  {
    "type": "patch",
    "url": "/api/squads/:id",
    "title": "Update Squad",
    "name": "patch",
    "group": "Squad",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Date",
            "optional": false,
            "field": "created",
            "description": "<p>creation date</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": false,
            "field": "updated",
            "description": "<p>update date</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "imageUrl",
            "description": "<p>url of Squad avatar</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "squadName",
            "description": "<p>name of the squad</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>Password</p>"
          },
          {
            "group": "Parameter",
            "type": "ObjectId",
            "optional": false,
            "field": "courtName",
            "description": "<p>default court for the squad</p>"
          },
          {
            "group": "Parameter",
            "type": "ObjectId[]",
            "optional": false,
            "field": "users",
            "description": "<p>users in the squad</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n  \"squadName\": \"C.A. River Plate\",\n  \"courtName\": \"5ce55d30fb4de31b5d06bcad\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n  \"data\": {\n            \"success\": true\n          }\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "ok",
            "description": ""
          }
        ]
      }
    },
    "version": "1.0.0",
    "filename": "routes/squads.js",
    "groupTitle": "Squad"
  },
  {
    "type": "patch",
    "url": "/api/squads/addUser/:id",
    "title": "Add User in A Squad",
    "name": "patch",
    "group": "Squad",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Date",
            "optional": false,
            "field": "created",
            "description": "<p>creation date</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": false,
            "field": "updated",
            "description": "<p>update date</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "imageUrl",
            "description": "<p>url of Squad avatar</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "squadName",
            "description": "<p>name of the squad</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>Password</p>"
          },
          {
            "group": "Parameter",
            "type": "ObjectId",
            "optional": false,
            "field": "courtName",
            "description": "<p>default court for the squad</p>"
          },
          {
            "group": "Parameter",
            "type": "ObjectId[]",
            "optional": false,
            "field": "users",
            "description": "<p>users in the squad</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n\t\"users\" : [\"5ce55c11dac9c81a9e4e75a0\"]\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n  \"data\": {\n            \"success\": true\n          }\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "ok",
            "description": ""
          }
        ]
      }
    },
    "version": "1.0.0",
    "filename": "routes/squads.js",
    "groupTitle": "Squad"
  },
  {
    "type": "get",
    "url": "/api/users",
    "title": "Get Users",
    "name": "get",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Date",
            "optional": false,
            "field": "created",
            "description": "<p>creation date</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": false,
            "field": "updated",
            "description": "<p>update date</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "imageUrl",
            "description": "<p>url of Squad avatar</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "squadName",
            "description": "<p>name of the squad</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>Password</p>"
          },
          {
            "group": "Parameter",
            "type": "ObjectId",
            "optional": false,
            "field": "courtName",
            "description": "<p>default court for the squad</p>"
          },
          {
            "group": "Parameter",
            "type": "ObjectId[]",
            "optional": false,
            "field": "users",
            "description": "<p>users in the squad</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n   {\n     \"data\": [\n               {\n                   \"_id\": \"5ce6ce1f8cb61b38141c7071\",\n                   \"email\": \"nicolas.varela@outlook.com\",\n                   \"username\": \"niko_varela10\",\n                   \"password\": \"$2b$10$KI7Myxq3u.l5fddvg9rniuVkQtIFy98oyor/4jzsK5jn2cWSzxq8C\",\n                   \"created\": \"2019-05-23T16:45:19.905Z\",\n                   \"updated\": \"2019-05-23T16:45:19.905Z\",\n                   \"__v\": 0\n               },\n               {\n                   \"_id\": \"5ce55bd4dac9c81a9e4e759f\",\n                   \"email\": \"hugoabbate@gmail.com\",\n                   \"username\": \"hughabbate\",\n                   \"password\": \"$2b$10$Kgk3gMNMeGS5Ns8PKOZr0OJ2ic4zzqMIlXb8P3BP/FXc7/Js.fYYW\",\n                   \"created\": \"2019-05-22T14:25:24.116Z\",\n                   \"updated\": \"2019-05-22T14:25:24.117Z\",\n                   \"__v\": 0\n               }\n             ]\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "ok",
            "description": ""
          }
        ]
      }
    },
    "version": "1.0.0",
    "filename": "routes/users.js",
    "groupTitle": "User"
  },
  {
    "type": "get",
    "url": "/api/users/:id",
    "title": "Get Users by Id",
    "name": "get",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Date",
            "optional": false,
            "field": "created",
            "description": "<p>creation date</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": false,
            "field": "updated",
            "description": "<p>update date</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "imageUrl",
            "description": "<p>url of Squad avatar</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "squadName",
            "description": "<p>name of the squad</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>Password</p>"
          },
          {
            "group": "Parameter",
            "type": "ObjectId",
            "optional": false,
            "field": "courtName",
            "description": "<p>default court for the squad</p>"
          },
          {
            "group": "Parameter",
            "type": "ObjectId[]",
            "optional": false,
            "field": "users",
            "description": "<p>users in the squad</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n {\n     \"data\": {\n         \"_id\": \"5d1ed626f03ae2373cbc723a\",\n         \"email\": \"user32@outlook.com\",\n         \"username\": \"User32\",\n         \"password\": \"$2b$10$Axuy7TJEoZlRov2IApGCAeQr2cFdCvUD6UDnW2JawrB0K811Pck66\",\n         \"created\": \"2019-07-05T04:46:30.089Z\",\n         \"updated\": \"2019-07-05T04:46:30.090Z\",\n         \"__v\": 0\n     }\n }",
          "type": "json"
        }
      ],
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "ok",
            "description": ""
          }
        ]
      }
    },
    "version": "1.0.0",
    "filename": "routes/users.js",
    "groupTitle": "User"
  },
  {
    "type": "post",
    "url": "/api/users/:id",
    "title": "User LogIn",
    "name": "post",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Date",
            "optional": false,
            "field": "created",
            "description": "<p>creation date</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": false,
            "field": "updated",
            "description": "<p>update date</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "imageUrl",
            "description": "<p>url of Squad avatar</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "squadName",
            "description": "<p>name of the squad</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>Password</p>"
          },
          {
            "group": "Parameter",
            "type": "ObjectId",
            "optional": false,
            "field": "courtName",
            "description": "<p>default court for the squad</p>"
          },
          {
            "group": "Parameter",
            "type": "ObjectId[]",
            "optional": false,
            "field": "users",
            "description": "<p>users in the squad</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n  \"username\": \"User32\",\n  \"password\": \"clave123\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n {\n   {\n       \"data\": \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVkMWVkNjI2ZjAzYWUyMzczY2JjNzIzYSIsImlhdCI6MTU2MjMwMjE3MywiZXhwIjoxNTYyMzA5MzczfQ.35zK68gzZnaDV7Owvv35T4WgXOphowZn6bVQLm7H5Ek\"\n   }\n }",
          "type": "json"
        }
      ],
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "ok",
            "description": ""
          }
        ]
      }
    },
    "version": "1.0.0",
    "filename": "routes/users.js",
    "groupTitle": "User"
  },
  {
    "type": "put",
    "url": "/api/users/:id",
    "title": "User SingUp",
    "name": "put",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Date",
            "optional": false,
            "field": "created",
            "description": "<p>creation date</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": false,
            "field": "updated",
            "description": "<p>update date</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "imageUrl",
            "description": "<p>url of Squad avatar</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "squadName",
            "description": "<p>name of the squad</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>Password</p>"
          },
          {
            "group": "Parameter",
            "type": "ObjectId",
            "optional": false,
            "field": "courtName",
            "description": "<p>default court for the squad</p>"
          },
          {
            "group": "Parameter",
            "type": "ObjectId[]",
            "optional": false,
            "field": "users",
            "description": "<p>users in the squad</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n  \"email\": \"user32@outlook.com\",\n  \"username\": \"User32\",\n  \"password\": \"clave123\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n {\n     \"data\": {\n         \"_id\": \"5d1ed626f03ae2373cbc723a\",\n         \"email\": \"user32@outlook.com\",\n         \"username\": \"User32\",\n         \"password\": \"$2b$10$Axuy7TJEoZlRov2IApGCAeQr2cFdCvUD6UDnW2JawrB0K811Pck66\",\n         \"created\": \"2019-07-05T04:46:30.089Z\",\n         \"updated\": \"2019-07-05T04:46:30.090Z\",\n         \"__v\": 0\n     }\n }",
          "type": "json"
        }
      ],
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "ok",
            "description": ""
          }
        ]
      }
    },
    "version": "1.0.0",
    "filename": "routes/users.js",
    "groupTitle": "User"
  }
] });
