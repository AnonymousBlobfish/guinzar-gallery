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
// mongo
All virtual users finished
Summary report @ 14:51:28(-0700) 2018-03-19
  Scenarios launched:  3600
  Scenarios completed: 3600
  Requests completed:  720000
  RPS sent: 3071.02
  Request latency:
    min: 0.3
    max: 1446.1
    median: 91.3
    p95: 204.7
    p99: 950.3
  Scenario counts:
    0: 3600 (100%)
  Codes:
    200: 720000
//
All virtual users finished
Summary report @ 17:12:35(-0700) 2018-03-19
  Scenarios launched:  3600
  Scenarios completed: 3600
  Requests completed:  720000
  RPS sent: 2921.84
  Request latency:
    min: 0.3
    max: 1476.6
    median: 94.4
    p95: 227
    p99: 1014.4
  Scenario counts:
    0: 3600 (100%)
  Codes:
    200: 720000
// sql
All virtual users finished
Summary report @ 20:17:00(-0700) 2018-03-19
  Scenarios launched:  3600
  Scenarios completed: 3600
  Requests completed:  720000
  RPS sent: 2967.24
  Request latency:
    min: 1
    max: 1550.1
    median: 100.8
    p95: 222.8
    p99: 1058.7
  Scenario counts:
    0: 3600 (100%)
  Codes:
    200: 720000
//
All virtual users finished
Summary report @ 20:20:43(-0700) 2018-03-19
  Scenarios launched:  3600
  Scenarios completed: 2666
  Requests completed:  592878
  RPS sent: 2852.81
  Request latency:
    min: 0.4
    max: 1773.7
    median: 188.9
    p95: 424.1
    p99: 1191.1
  Scenario counts:
    0: 3600 (100%)
  Codes:
    200: 592878
  Errors:
    ECONNRESET: 607
    ECONNREFUSED: 327

// mongo final?
All virtual users finished
Summary report @ 17:39:15(-0700) 2018-03-21
  Scenarios launched:  600
  Scenarios completed: 600
  Requests completed:  60000
  RPS sent: 987.82
  Request latency:
    min: 1.4
    max: 223.9
    median: 11.8
    p95: 22.5
    p99: 37.7
  Scenario counts:
    0: 600 (100%)
  Codes:
    200: 60000
// sql final
All virtual users finished
Summary report @ 17:44:24(-0700) 2018-03-21
  Scenarios launched:  600
  Scenarios completed: 600
  Requests completed:  60000
  RPS sent: 768.05
  Request latency:
    min: 1.8
    max: 468.4
    median: 172.1
    p95: 318.8
    p99: 361.8
  Scenario counts:
    0: 600 (100%)
  Codes:
    200: 60000
//
 ❯ go run vegeta_breaker.go                                                                                                       [10:30:55]
✨  Success at 20 req/sec (latency 7.201088ms)
✨  Success at 40 req/sec (latency 7.260908ms)
✨  Success at 80 req/sec (latency 4.977856ms)
✨  Success at 160 req/sec (latency 3.312203ms)
✨  Success at 320 req/sec (latency 2.291224ms)
✨  Success at 640 req/sec (latency 1.296726ms)
✨  Success at 1280 req/sec (latency 1.195063ms)
💥  Failed at 2560 req/sec (latency 2.057167699s)
✨  Success at 1920 req/sec (latency 10.502962ms)
✨  Success at 2240 req/sec (latency 15.498833ms)
✨  Success at 2400 req/sec (latency 34.14567ms)
✨  Success at 2480 req/sec (latency 291.903863ms)
✨  Success at 2520 req/sec (latency 29.810979ms)
💥  Failed at 2540 req/sec (latency 2.200569897s)
💥  Failed at 2530 req/sec (latency 10.132817415s)
💥  Failed at 2525 req/sec (latency 2.161846524s)
✨  Success at 2522 req/sec (latency 61.525851ms)
💥  Failed at 2523 req/sec (latency 2.150809859s)
➡️  Maximum Working Rate: 2522 req/sec
//