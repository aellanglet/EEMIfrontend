report({
  "testSuite": "BackstopJS",
  "tests": [
    {
      "pair": {
        "reference": "../bitmaps_reference/backstop_default_EEMIfrontend_Cards_List_Page_0_document_0_phone.png",
        "test": "../bitmaps_test/20210131-214133/backstop_default_EEMIfrontend_Cards_List_Page_0_document_0_phone.png",
        "selector": "document",
        "fileName": "backstop_default_EEMIfrontend_Cards_List_Page_0_document_0_phone.png",
        "label": "EEMIfrontend Cards List Page",
        "requireSameDimensions": true,
        "misMatchThreshold": 0.1,
        "url": "http://localhost:3000/cards",
        "referenceUrl": "",
        "expect": 0,
        "viewportLabel": "phone",
        "diff": {
          "isSameDimensions": true,
          "dimensionDifference": {
            "width": 0,
            "height": 0
          },
          "misMatchPercentage": "15.36",
          "analysisTime": 191
        },
        "diffImage": "../bitmaps_test/20210131-214133/failed_diff_backstop_default_EEMIfrontend_Cards_List_Page_0_document_0_phone.png"
      },
      "status": "fail"
    },
    {
      "pair": {
        "reference": "../bitmaps_reference/backstop_default_EEMIfrontend_Cards_List_Page_0_document_1_tablet.png",
        "test": "../bitmaps_test/20210131-214133/backstop_default_EEMIfrontend_Cards_List_Page_0_document_1_tablet.png",
        "selector": "document",
        "fileName": "backstop_default_EEMIfrontend_Cards_List_Page_0_document_1_tablet.png",
        "label": "EEMIfrontend Cards List Page",
        "requireSameDimensions": true,
        "misMatchThreshold": 0.1,
        "url": "http://localhost:3000/cards",
        "referenceUrl": "",
        "expect": 0,
        "viewportLabel": "tablet",
        "diff": {
          "isSameDimensions": false,
          "dimensionDifference": {
            "width": 0,
            "height": 1
          },
          "misMatchPercentage": "0.44",
          "analysisTime": 467
        },
        "diffImage": "../bitmaps_test/20210131-214133/failed_diff_backstop_default_EEMIfrontend_Cards_List_Page_0_document_1_tablet.png"
      },
      "status": "fail"
    }
  ],
  "id": "backstop_default"
});