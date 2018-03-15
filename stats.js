//> db.photos.find({id: 9999000}).explain('executionStats')
{
  "queryPlanner" : {
    "plannerVersion" : 1,
    "namespace" : "wegot.photos",
    "indexFilterSet" : false,
    "parsedQuery" : {
      "id" : {
        "$eq" : 9999000
      }
    },
    "winningPlan" : {
      "stage" : "COLLSCAN",
      "filter" : {
        "id" : {
          "$eq" : 9999000
        }
      },
      "direction" : "forward"
    },
    "rejectedPlans" : [ ]
  },
  "executionStats" : {
    "executionSuccess" : true,
    "nReturned" : 1,
    "executionTimeMillis" : 169472,
    "totalKeysExamined" : 0,
    "totalDocsExamined" : 10000000,
    "executionStages" : {
      "stage" : "COLLSCAN",
      "filter" : {
        "id" : {
          "$eq" : 9999000
        }
      },
      "nReturned" : 1,
      "executionTimeMillisEstimate" : 167375,
      "works" : 10000002,
      "advanced" : 1,
      "needTime" : 10000000,
      "needYield" : 0,
      "saveState" : 80406,
      "restoreState" : 80406,
      "isEOF" : 1,
      "invalidates" : 0,
      "direction" : "forward",
      "docsExamined" : 10000000
    }
  },
  "serverInfo" : {
    "host" : "pokybook.local",
    "port" : 27017,
    "version" : "3.6.2",
    "gitVersion" : "489d177dbd0f0420a8ca04d39fd78d0a2c539420"
  },
  "ok" : 1
}
//after auto indexing
//> db.photos.find({id: 9999000}).explain('executionStats')
{
  "queryPlanner" : {
    "plannerVersion" : 1,
    "namespace" : "wegot.photos",
    "indexFilterSet" : false,
    "parsedQuery" : {
      "id" : {
        "$eq" : 9999000
      }
    },
    "winningPlan" : {
      "stage" : "FETCH",
      "inputStage" : {
        "stage" : "IXSCAN",
        "keyPattern" : {
          "id" : 1
        },
        "indexName" : "id_1",
        "isMultiKey" : false,
        "multiKeyPaths" : {
          "id" : [ ]
        },
        "isUnique" : true,
        "isSparse" : false,
        "isPartial" : false,
        "indexVersion" : 2,
        "direction" : "forward",
        "indexBounds" : {
          "id" : [
            "[9999000.0, 9999000.0]"
          ]
        }
      }
    },
    "rejectedPlans" : [ ]
  },
  "executionStats" : {
    "executionSuccess" : true,
    "nReturned" : 1,
    "executionTimeMillis" : 0,
    "totalKeysExamined" : 1,
    "totalDocsExamined" : 1,
    "executionStages" : {
      "stage" : "FETCH",
      "nReturned" : 1,
      "executionTimeMillisEstimate" : 0,
      "works" : 2,
      "advanced" : 1,
      "needTime" : 0,
      "needYield" : 0,
      "saveState" : 0,
      "restoreState" : 0,
      "isEOF" : 1,
      "invalidates" : 0,
      "docsExamined" : 1,
      "alreadyHasObj" : 0,
      "inputStage" : {
        "stage" : "IXSCAN",
        "nReturned" : 1,
        "executionTimeMillisEstimate" : 0,
        "works" : 2,
        "advanced" : 1,
        "needTime" : 0,
        "needYield" : 0,
        "saveState" : 0,
        "restoreState" : 0,
        "isEOF" : 1,
        "invalidates" : 0,
        "keyPattern" : {
          "id" : 1
        },
        "indexName" : "id_1",
        "isMultiKey" : false,
        "multiKeyPaths" : {
          "id" : [ ]
        },
        "isUnique" : true,
        "isSparse" : false,
        "isPartial" : false,
        "indexVersion" : 2,
        "direction" : "forward",
        "indexBounds" : {
          "id" : [
            "[9999000.0, 9999000.0]"
          ]
        },
        "keysExamined" : 1,
        "seeks" : 1,
        "dupsTested" : 0,
        "dupsDropped" : 0,
        "seenInvalidated" : 0
      }
    }
  },
  "serverInfo" : {
    "host" : "pokybook.local",
    "port" : 27017,
    "version" : "3.6.2",
    "gitVersion" : "489d177dbd0f0420a8ca04d39fd78d0a2c539420"
  },
  "ok" : 1
}