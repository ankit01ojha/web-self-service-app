(function () {
    'use strict';

    angular.module('selfService')
        .controller('ViewReportsCtrl', ['$scope', '$rootScope', '$state','$location', ViewReportsCtrl]);

    function ViewReportsCtrl($scope, $rootScope, $state, $location) {
        var vm = this;
        vm.selected = [];
        vm.routeTo = routeTo;

        function routeTo(report) {
            $location.path('/run_report/' + report.reportName).search({reportId: report.id, type: report.reportType});
        }

        vm.reports = [
            {
                "id": 1,
                "reportName": "Client Listing",
                "reportType": "Table",
                "reportCategory": "Client",
                "description": "Individual Client Report\r\n\r\nLists the small number of defined fields on the client table.  Would expect to copy this \n\nreport and add any \u0027one to one\u0027 additional data for specific tenant needs.\r\n\r\nCan be run for any size MFI but you\u0027d expect it only to be run within a branch for \n\nlarger ones.  Depending on how many columns are displayed, there is probably is a limit of about 20/50k clients returned for html display (export to excel doesn\u0027t \n\nhave that client browser/memory impact).",
                "coreReport": true,
                "useReport": true,
                "reportParameters": [
                    {
                        "id": 1,
                        "parameterId": 5,
                        "parameterName": "OfficeIdSelectOne"
                    }
                ]
            },
            {
                "id": 2,
                "reportName": "Client Loans Listing",
                "reportType": "Table",
                "reportCategory": "Client",
                "description": "Individual Client Report\r\n\r\nPretty \n\nwide report that lists the basic details of client loans.  \r\n\r\nCan be run for any size MFI but you\u0027d expect it only to be run within a branch for larger ones.  \n\nThere is probably is a limit of about 20/50k clients returned for html display (export to excel doesn\u0027t have that client browser/memory impact).",
                "coreReport": true,
                "useReport": true,
                "reportParameters": [
                    {
                        "id": 2,
                        "parameterId": 5,
                        "parameterName": "OfficeIdSelectOne"
                    },
                    {
                        "id": 3,
                        "parameterId": 6,
                        "parameterName": "loanOfficerIdSelectAll"
                    },
                    {
                        "id": 4,
                        "parameterId": 10,
                        "parameterName": "currencyIdSelectAll"
                    },
                    {
                        "id": 5,
                        "parameterId": 20,
                        "parameterName": "fundIdSelectAll"
                    },
                    {
                        "id": 6,
                        "parameterId": 25,
                        "parameterName": "loanProductIdSelectAll"
                    },
                    {
                        "id": 7,
                        "parameterId": 26,
                        "parameterName": "loanPurposeIdSelectAll"
                    }
                ]
            },
            {
                "id": 5,
                "reportName": "Loans Awaiting Disbursal",
                "reportType": "Table",
                "reportCategory": "Loan",
                "description": "Individual Client Report",
                "coreReport": true,
                "useReport": true,
                "reportParameters": [
                    {
                        "id": 8,
                        "parameterId": 5,
                        "parameterName": "OfficeIdSelectOne"
                    },
                    {
                        "id": 9,
                        "parameterId": 6,
                        "parameterName": "loanOfficerIdSelectAll"
                    },
                    {
                        "id": 10,
                        "parameterId": 10,
                        "parameterName": "currencyIdSelectAll"
                    },
                    {
                        "id": 11,
                        "parameterId": 20,
                        "parameterName": "fundIdSelectAll"
                    },
                    {
                        "id": 12,
                        "parameterId": 25,
                        "parameterName": "loanProductIdSelectAll"
                    },
                    {
                        "id": 13,
                        "parameterId": 26,
                        "parameterName": "loanPurposeIdSelectAll"
                    }
                ]
            },
            {
                "id": 6,
                "reportName": "Loans Awaiting Disbursal Summary",
                "reportType": "Table",
                "reportCategory": "Loan",
                "description": "Individual Client Report",
                "coreReport": true,
                "useReport": true,
                "reportParameters": [
                    {
                        "id": 14,
                        "parameterId": 5,
                        "parameterName": "OfficeIdSelectOne"
                    },
                    {
                        "id": 15,
                        "parameterId": 6,
                        "parameterName": "loanOfficerIdSelectAll"
                    },
                    {
                        "id": 16,
                        "parameterId": 10,
                        "parameterName": "currencyIdSelectAll"
                    },
                    {
                        "id": 17,
                        "parameterId": 20,
                        "parameterName": "fundIdSelectAll"
                    },
                    {
                        "id": 18,
                        "parameterId": 25,
                        "parameterName": "loanProductIdSelectAll"
                    },
                    {
                        "id": 19,
                        "parameterId": 26,
                        "parameterName": "loanPurposeIdSelectAll"
                    }
                ]
            },
            {
                "id": 7,
                "reportName": "Loans Awaiting Disbursal Summary by Month",
                "reportType": "Table",
                "reportCategory": "Loan",
                "description": "Individual Client Report",
                "coreReport": true,
                "useReport": true,
                "reportParameters": [
                    {
                        "id": 20,
                        "parameterId": 5,
                        "parameterName": "OfficeIdSelectOne"
                    },
                    {
                        "id": 21,
                        "parameterId": 6,
                        "parameterName": "loanOfficerIdSelectAll"
                    },
                    {
                        "id": 22,
                        "parameterId": 10,
                        "parameterName": "currencyIdSelectAll"
                    },
                    {
                        "id": 23,
                        "parameterId": 20,
                        "parameterName": "fundIdSelectAll"
                    },
                    {
                        "id": 24,
                        "parameterId": 25,
                        "parameterName": "loanProductIdSelectAll"
                    },
                    {
                        "id": 25,
                        "parameterId": 26,
                        "parameterName": "loanPurposeIdSelectAll"
                    }
                ]
            },
            {
                "id": 8,
                "reportName": "Loans Pending Approval",
                "reportType": "Table",
                "reportCategory": "Loan",
                "description": "Individual Client Report",
                "coreReport": true,
                "useReport": true,
                "reportParameters": [
                    {
                        "id": 26,
                        "parameterId": 5,
                        "parameterName": "OfficeIdSelectOne"
                    },
                    {
                        "id": 27,
                        "parameterId": 6,
                        "parameterName": "loanOfficerIdSelectAll"
                    },
                    {
                        "id": 28,
                        "parameterId": 10,
                        "parameterName": "currencyIdSelectAll"
                    },
                    {
                        "id": 29,
                        "parameterId": 25,
                        "parameterName": "loanProductIdSelectAll"
                    },
                    {
                        "id": 30,
                        "parameterId": 26,
                        "parameterName": "loanPurposeIdSelectAll"
                    }
                ]
            },
            {
                "id": 11,
                "reportName": "Active Loans - Summary",
                "reportType": "Table",
                "reportCategory": "Loan",
                "coreReport": true,
                "useReport": true,
                "reportParameters": [
                    {
                        "id": 31,
                        "parameterId": 5,
                        "parameterName": "OfficeIdSelectOne"
                    },
                    {
                        "id": 32,
                        "parameterId": 6,
                        "parameterName": "loanOfficerIdSelectAll"
                    },
                    {
                        "id": 33,
                        "parameterId": 10,
                        "parameterName": "currencyIdSelectAll"
                    },
                    {
                        "id": 34,
                        "parameterId": 20,
                        "parameterName": "fundIdSelectAll"
                    },
                    {
                        "id": 35,
                        "parameterId": 25,
                        "parameterName": "loanProductIdSelectAll"
                    },
                    {
                        "id": 36,
                        "parameterId": 26,
                        "parameterName": "loanPurposeIdSelectAll"
                    },
                    {
                        "id": 37,
                        "parameterId": 100,
                        "parameterName": "parTypeSelect"
                    }
                ]
            },
            {
                "id": 12,
                "reportName": "Active Loans - Details",
                "reportType": "Table",
                "reportCategory": "Loan",
                "description": "Individual Client \n\nReport",
                "coreReport": true,
                "useReport": true,
                "reportParameters": [
                    {
                        "id": 38,
                        "parameterId": 5,
                        "parameterName": "OfficeIdSelectOne"
                    },
                    {
                        "id": 39,
                        "parameterId": 6,
                        "parameterName": "loanOfficerIdSelectAll"
                    },
                    {
                        "id": 40,
                        "parameterId": 10,
                        "parameterName": "currencyIdSelectAll"
                    },
                    {
                        "id": 41,
                        "parameterId": 20,
                        "parameterName": "fundIdSelectAll"
                    },
                    {
                        "id": 42,
                        "parameterId": 25,
                        "parameterName": "loanProductIdSelectAll"
                    },
                    {
                        "id": 43,
                        "parameterId": 26,
                        "parameterName": "loanPurposeIdSelectAll"
                    }
                ]
            },
            {
                "id": 13,
                "reportName": "Obligation Met Loans Details",
                "reportType": "Table",
                "reportCategory": "Loan",
                "description": "Individual Client \n\nReport",
                "coreReport": true,
                "useReport": true,
                "reportParameters": [
                    {
                        "id": 44,
                        "parameterId": 1,
                        "parameterName": "startDateSelect"
                    },
                    {
                        "id": 45,
                        "parameterId": 2,
                        "parameterName": "endDateSelect"
                    },
                    {
                        "id": 46,
                        "parameterId": 3,
                        "parameterName": "obligDateTypeSelect"
                    },
                    {
                        "id": 47,
                        "parameterId": 5,
                        "parameterName": "OfficeIdSelectOne"
                    },
                    {
                        "id": 48,
                        "parameterId": 6,
                        "parameterName": "loanOfficerIdSelectAll"
                    },
                    {
                        "id": 49,
                        "parameterId": 10,
                        "parameterName": "currencyIdSelectAll"
                    },
                    {
                        "id": 50,
                        "parameterId": 20,
                        "parameterName": "fundIdSelectAll"
                    },
                    {
                        "id": 51,
                        "parameterId": 25,
                        "parameterName": "loanProductIdSelectAll"
                    },
                    {
                        "id": 52,
                        "parameterId": 26,
                        "parameterName": "loanPurposeIdSelectAll"
                    }
                ]
            },
            {
                "id": 14,
                "reportName": "Obligation Met Loans Summary",
                "reportType": "Table",
                "reportCategory": "Loan",
                "description": "Individual Client \n\nReport",
                "coreReport": true,
                "useReport": true,
                "reportParameters": [
                    {
                        "id": 53,
                        "parameterId": 1,
                        "parameterName": "startDateSelect"
                    },
                    {
                        "id": 54,
                        "parameterId": 2,
                        "parameterName": "endDateSelect"
                    },
                    {
                        "id": 55,
                        "parameterId": 3,
                        "parameterName": "obligDateTypeSelect"
                    },
                    {
                        "id": 56,
                        "parameterId": 5,
                        "parameterName": "OfficeIdSelectOne"
                    },
                    {
                        "id": 57,
                        "parameterId": 6,
                        "parameterName": "loanOfficerIdSelectAll"
                    },
                    {
                        "id": 58,
                        "parameterId": 10,
                        "parameterName": "currencyIdSelectAll"
                    },
                    {
                        "id": 59,
                        "parameterId": 20,
                        "parameterName": "fundIdSelectAll"
                    },
                    {
                        "id": 60,
                        "parameterId": 25,
                        "parameterName": "loanProductIdSelectAll"
                    },
                    {
                        "id": 61,
                        "parameterId": 26,
                        "parameterName": "loanPurposeIdSelectAll"
                    }
                ]
            },
            {
                "id": 15,
                "reportName": "Portfolio at Risk",
                "reportType": "Table",
                "reportCategory": "Loan",
                "description": "Covers all loans.\r\n\r\nFor larger MFIs â€¦ we should add some derived fields on loan (or a 1:1 loan related table like mifos 2.x does)\r\nPrinciple, Interest, Fees, Penalties Outstanding and Overdue (possibly waived and written off too)",
                "coreReport": true,
                "useReport": true,
                "reportParameters": [
                    {
                        "id": 62,
                        "parameterId": 5,
                        "parameterName": "OfficeIdSelectOne"
                    },
                    {
                        "id": 63,
                        "parameterId": 6,
                        "parameterName": "loanOfficerIdSelectAll"
                    },
                    {
                        "id": 64,
                        "parameterId": 10,
                        "parameterName": "currencyIdSelectAll"
                    },
                    {
                        "id": 65,
                        "parameterId": 20,
                        "parameterName": "fundIdSelectAll"
                    },
                    {
                        "id": 66,
                        "parameterId": 25,
                        "parameterName": "loanProductIdSelectAll"
                    },
                    {
                        "id": 67,
                        "parameterId": 26,
                        "parameterName": "loanPurposeIdSelectAll"
                    },
                    {
                        "id": 68,
                        "parameterId": 100,
                        "parameterName": "parTypeSelect"
                    }
                ]
            },
            {
                "id": 16,
                "reportName": "Portfolio at Risk by Branch",
                "reportType": "Table",
                "reportCategory": "Loan",
                "description": "Covers all loans.\r\n\r\nFor larger MFIs â€¦ we should add some derived fields on loan (or a 1:1 loan related table like mifos 2.x does)\r\nPrinciple, Interest, Fees, Penalties Outstanding and Overdue (possibly waived and written off too)",
                "coreReport": true,
                "useReport": true,
                "reportParameters": [
                    {
                        "id": 69,
                        "parameterId": 5,
                        "parameterName": "OfficeIdSelectOne"
                    },
                    {
                        "id": 70,
                        "parameterId": 6,
                        "parameterName": "loanOfficerIdSelectAll"
                    },
                    {
                        "id": 71,
                        "parameterId": 10,
                        "parameterName": "currencyIdSelectAll"
                    },
                    {
                        "id": 72,
                        "parameterId": 20,
                        "parameterName": "fundIdSelectAll"
                    },
                    {
                        "id": 73,
                        "parameterId": 25,
                        "parameterName": "loanProductIdSelectAll"
                    },
                    {
                        "id": 74,
                        "parameterId": 26,
                        "parameterName": "loanPurposeIdSelectAll"
                    },
                    {
                        "id": 75,
                        "parameterId": 100,
                        "parameterName": "parTypeSelect"
                    }
                ]
            },
            {
                "id": 20,
                "reportName": "Funds Disbursed Between Dates Summary",
                "reportType": "Table",
                "reportCategory": "Fund",
                "coreReport": true,
                "useReport": true,
                "reportParameters": [
                    {
                        "id": 76,
                        "parameterId": 1,
                        "parameterName": "startDateSelect"
                    },
                    {
                        "id": 77,
                        "parameterId": 2,
                        "parameterName": "endDateSelect"
                    },
                    {
                        "id": 78,
                        "parameterId": 10,
                        "parameterName": "currencyIdSelectAll"
                    },
                    {
                        "id": 79,
                        "parameterId": 20,
                        "parameterName": "fundIdSelectAll"
                    }
                ]
            },
            {
                "id": 21,
                "reportName": "Funds Disbursed Between Dates Summary by Office",
                "reportType": "Table",
                "reportCategory": "Fund",
                "coreReport": true,
                "useReport": true,
                "reportParameters": [
                    {
                        "id": 80,
                        "parameterId": 1,
                        "parameterName": "startDateSelect"
                    },
                    {
                        "id": 81,
                        "parameterId": 2,
                        "parameterName": "endDateSelect"
                    },
                    {
                        "id": 82,
                        "parameterId": 5,
                        "parameterName": "OfficeIdSelectOne"
                    },
                    {
                        "id": 83,
                        "parameterId": 10,
                        "parameterName": "currencyIdSelectAll"
                    },
                    {
                        "id": 84,
                        "parameterId": 20,
                        "parameterName": "fundIdSelectAll"
                    }
                ]
            },
            {
                "id": 48,
                "reportName": "Balance Sheet",
                "reportType": "Pentaho",
                "reportCategory": "Accounting",
                "description": "Balance Sheet",
                "coreReport": true,
                "useReport": true,
                "reportParameters": [
                    {
                        "id": 86,
                        "parameterId": 2,
                        "parameterName": "endDateSelect",
                        "reportParameterName": "date"
                    },
                    {
                        "id": 85,
                        "parameterId": 5,
                        "parameterName": "OfficeIdSelectOne",
                        "reportParameterName": "branch"
                    }
                ]
            },
            {
                "id": 49,
                "reportName": "Income Statement",
                "reportType": "Pentaho",
                "reportCategory": "Accounting",
                "description": "Profit and Loss Statement",
                "coreReport": true,
                "useReport": true,
                "reportParameters": [
                    {
                        "id": 88,
                        "parameterId": 1,
                        "parameterName": "startDateSelect",
                        "reportParameterName": "fromDate"
                    },
                    {
                        "id": 89,
                        "parameterId": 2,
                        "parameterName": "endDateSelect",
                        "reportParameterName": "toDate"
                    },
                    {
                        "id": 87,
                        "parameterId": 5,
                        "parameterName": "OfficeIdSelectOne",
                        "reportParameterName": "branch"
                    }
                ]
            },
            {
                "id": 50,
                "reportName": "Trial Balance",
                "reportType": "Pentaho",
                "reportCategory": "Accounting",
                "description": "Trial Balance Report",
                "coreReport": true,
                "useReport": true,
                "reportParameters": [
                    {
                        "id": 91,
                        "parameterId": 1,
                        "parameterName": "startDateSelect",
                        "reportParameterName": "fromDate"
                    },
                    {
                        "id": 92,
                        "parameterId": 2,
                        "parameterName": "endDateSelect",
                        "reportParameterName": "toDate"
                    },
                    {
                        "id": 90,
                        "parameterId": 5,
                        "parameterName": "OfficeIdSelectOne",
                        "reportParameterName": "branch"
                    }
                ]
            },
            {
                "id": 51,
                "reportName": "Written-Off Loans",
                "reportType": "Table",
                "reportCategory": "Loan",
                "description": "Individual Lending Report. Written Off Loans",
                "coreReport": true,
                "useReport": true,
                "reportParameters": [
                    {
                        "id": 93,
                        "parameterId": 1,
                        "parameterName": "startDateSelect"
                    },
                    {
                        "id": 94,
                        "parameterId": 2,
                        "parameterName": "endDateSelect"
                    },
                    {
                        "id": 95,
                        "parameterId": 5,
                        "parameterName": "OfficeIdSelectOne"
                    },
                    {
                        "id": 96,
                        "parameterId": 10,
                        "parameterName": "currencyIdSelectAll"
                    },
                    {
                        "id": 97,
                        "parameterId": 25,
                        "parameterName": "loanProductIdSelectAll"
                    }
                ]
            },
            {
                "id": 52,
                "reportName": "Aging Detail",
                "reportType": "Table",
                "reportCategory": "Loan",
                "description": "Loan arrears aging (Weeks)",
                "coreReport": true,
                "useReport": true,
                "reportParameters": [
                    {
                        "id": 98,
                        "parameterId": 5,
                        "parameterName": "OfficeIdSelectOne"
                    }
                ]
            },
            {
                "id": 53,
                "reportName": "Aging Summary (Arrears in Weeks)",
                "reportType": "Table",
                "reportCategory": "Loan",
                "description": "Loan amount in arrears by branch",
                "coreReport": true,
                "useReport": true,
                "reportParameters": [
                    {
                        "id": 99,
                        "parameterId": 5,
                        "parameterName": "OfficeIdSelectOne"
                    },
                    {
                        "id": 100,
                        "parameterId": 10,
                        "parameterName": "currencyIdSelectAll"
                    }
                ]
            },
            {
                "id": 54,
                "reportName": "Rescheduled Loans",
                "reportType": "Table",
                "reportCategory": "Loan",
                "description": "Individual Lending Report. Rescheduled Loans.  The ability to reschedule (or mark that you have rescheduled the loan elsewhere) is a legacy of the older Mifos product.  Needed for migration.",
                "coreReport": true,
                "useReport": true,
                "reportParameters": [
                    {
                        "id": 101,
                        "parameterId": 1,
                        "parameterName": "startDateSelect"
                    },
                    {
                        "id": 102,
                        "parameterId": 2,
                        "parameterName": "endDateSelect"
                    },
                    {
                        "id": 103,
                        "parameterId": 5,
                        "parameterName": "OfficeIdSelectOne"
                    },
                    {
                        "id": 104,
                        "parameterId": 10,
                        "parameterName": "currencyIdSelectAll"
                    },
                    {
                        "id": 105,
                        "parameterId": 25,
                        "parameterName": "loanProductIdSelectAll"
                    }
                ]
            },
            {
                "id": 55,
                "reportName": "Active Loans Passed Final Maturity",
                "reportType": "Table",
                "reportCategory": "Loan",
                "description": "Individual Client \n\nReport",
                "coreReport": true,
                "useReport": true,
                "reportParameters": [
                    {
                        "id": 106,
                        "parameterId": 5,
                        "parameterName": "OfficeIdSelectOne"
                    },
                    {
                        "id": 107,
                        "parameterId": 6,
                        "parameterName": "loanOfficerIdSelectAll"
                    },
                    {
                        "id": 108,
                        "parameterId": 10,
                        "parameterName": "currencyIdSelectAll"
                    },
                    {
                        "id": 109,
                        "parameterId": 20,
                        "parameterName": "fundIdSelectAll"
                    },
                    {
                        "id": 110,
                        "parameterId": 25,
                        "parameterName": "loanProductIdSelectAll"
                    },
                    {
                        "id": 111,
                        "parameterId": 26,
                        "parameterName": "loanPurposeIdSelectAll"
                    }
                ]
            },
            {
                "id": 56,
                "reportName": "Active Loans Passed Final Maturity Summary",
                "reportType": "Table",
                "reportCategory": "Loan",
                "coreReport": true,
                "useReport": true,
                "reportParameters": [
                    {
                        "id": 112,
                        "parameterId": 5,
                        "parameterName": "OfficeIdSelectOne"
                    },
                    {
                        "id": 113,
                        "parameterId": 6,
                        "parameterName": "loanOfficerIdSelectAll"
                    },
                    {
                        "id": 114,
                        "parameterId": 10,
                        "parameterName": "currencyIdSelectAll"
                    },
                    {
                        "id": 115,
                        "parameterId": 20,
                        "parameterName": "fundIdSelectAll"
                    },
                    {
                        "id": 116,
                        "parameterId": 25,
                        "parameterName": "loanProductIdSelectAll"
                    },
                    {
                        "id": 117,
                        "parameterId": 26,
                        "parameterName": "loanPurposeIdSelectAll"
                    },
                    {
                        "id": 118,
                        "parameterId": 100,
                        "parameterName": "parTypeSelect"
                    }
                ]
            },
            {
                "id": 57,
                "reportName": "Active Loans in last installment",
                "reportType": "Table",
                "reportCategory": "Loan",
                "description": "Individual Client \n\nReport",
                "coreReport": true,
                "useReport": true,
                "reportParameters": [
                    {
                        "id": 119,
                        "parameterId": 5,
                        "parameterName": "OfficeIdSelectOne"
                    },
                    {
                        "id": 120,
                        "parameterId": 6,
                        "parameterName": "loanOfficerIdSelectAll"
                    },
                    {
                        "id": 121,
                        "parameterId": 10,
                        "parameterName": "currencyIdSelectAll"
                    },
                    {
                        "id": 122,
                        "parameterId": 20,
                        "parameterName": "fundIdSelectAll"
                    },
                    {
                        "id": 123,
                        "parameterId": 25,
                        "parameterName": "loanProductIdSelectAll"
                    },
                    {
                        "id": 124,
                        "parameterId": 26,
                        "parameterName": "loanPurposeIdSelectAll"
                    }
                ]
            },
            {
                "id": 58,
                "reportName": "Active Loans in last installment Summary",
                "reportType": "Table",
                "reportCategory": "Loan",
                "description": "Individual Client \n\nReport",
                "coreReport": true,
                "useReport": true,
                "reportParameters": [
                    {
                        "id": 125,
                        "parameterId": 5,
                        "parameterName": "OfficeIdSelectOne"
                    },
                    {
                        "id": 126,
                        "parameterId": 6,
                        "parameterName": "loanOfficerIdSelectAll"
                    },
                    {
                        "id": 127,
                        "parameterId": 10,
                        "parameterName": "currencyIdSelectAll"
                    },
                    {
                        "id": 128,
                        "parameterId": 20,
                        "parameterName": "fundIdSelectAll"
                    },
                    {
                        "id": 129,
                        "parameterId": 25,
                        "parameterName": "loanProductIdSelectAll"
                    },
                    {
                        "id": 130,
                        "parameterId": 26,
                        "parameterName": "loanPurposeIdSelectAll"
                    },
                    {
                        "id": 131,
                        "parameterId": 100,
                        "parameterName": "parTypeSelect"
                    }
                ]
            },
            {
                "id": 59,
                "reportName": "Active Loans by Disbursal Period",
                "reportType": "Table",
                "reportCategory": "Loan",
                "description": "Individual Client \n\nReport",
                "coreReport": true,
                "useReport": true,
                "reportParameters": [
                    {
                        "id": 132,
                        "parameterId": 1,
                        "parameterName": "startDateSelect"
                    },
                    {
                        "id": 133,
                        "parameterId": 2,
                        "parameterName": "endDateSelect"
                    },
                    {
                        "id": 134,
                        "parameterId": 5,
                        "parameterName": "OfficeIdSelectOne"
                    },
                    {
                        "id": 135,
                        "parameterId": 6,
                        "parameterName": "loanOfficerIdSelectAll"
                    },
                    {
                        "id": 136,
                        "parameterId": 10,
                        "parameterName": "currencyIdSelectAll"
                    },
                    {
                        "id": 137,
                        "parameterId": 20,
                        "parameterName": "fundIdSelectAll"
                    },
                    {
                        "id": 138,
                        "parameterId": 25,
                        "parameterName": "loanProductIdSelectAll"
                    },
                    {
                        "id": 139,
                        "parameterId": 26,
                        "parameterName": "loanPurposeIdSelectAll"
                    }
                ]
            },
            {
                "id": 61,
                "reportName": "Aging Summary (Arrears in Months)",
                "reportType": "Table",
                "reportCategory": "Loan",
                "description": "Loan amount in arrears by branch",
                "coreReport": true,
                "useReport": true,
                "reportParameters": [
                    {
                        "id": 140,
                        "parameterId": 5,
                        "parameterName": "OfficeIdSelectOne"
                    },
                    {
                        "id": 141,
                        "parameterId": 10,
                        "parameterName": "currencyIdSelectAll"
                    }
                ]
            },
            {
                "id": 91,
                "reportName": "Loan Account Schedule",
                "reportType": "Pentaho",
                "reportCategory": "Loan",
                "coreReport": true,
                "useReport": true
            },
            {
                "id": 92,
                "reportName": "Branch Expected Cash Flow",
                "reportType": "Pentaho",
                "reportCategory": "Loan",
                "coreReport": true,
                "useReport": true,
                "reportParameters": [
                    {
                        "id": 142,
                        "parameterId": 1,
                        "parameterName": "startDateSelect",
                        "reportParameterName": "fromDate"
                    },
                    {
                        "id": 144,
                        "parameterId": 2,
                        "parameterName": "endDateSelect",
                        "reportParameterName": "toDate"
                    },
                    {
                        "id": 143,
                        "parameterId": 5,
                        "parameterName": "OfficeIdSelectOne",
                        "reportParameterName": "selectOffice"
                    }
                ]
            },
            {
                "id": 93,
                "reportName": "Expected Payments By Date - Basic",
                "reportType": "Table",
                "reportCategory": "Loan",
                "description": "Test",
                "coreReport": true,
                "useReport": true,
                "reportParameters": [
                    {
                        "id": 145,
                        "parameterId": 1,
                        "parameterName": "startDateSelect"
                    },
                    {
                        "id": 146,
                        "parameterId": 2,
                        "parameterName": "endDateSelect"
                    },
                    {
                        "id": 147,
                        "parameterId": 5,
                        "parameterName": "OfficeIdSelectOne"
                    },
                    {
                        "id": 148,
                        "parameterId": 6,
                        "parameterName": "loanOfficerIdSelectAll"
                    }
                ]
            },
            {
                "id": 94,
                "reportName": "Expected Payments By Date - Formatted",
                "reportType": "Pentaho",
                "reportCategory": "Loan",
                "coreReport": true,
                "useReport": true,
                "reportParameters": [
                    {
                        "id": 152,
                        "parameterId": 1,
                        "parameterName": "startDateSelect",
                        "reportParameterName": "startDate"
                    },
                    {
                        "id": 149,
                        "parameterId": 2,
                        "parameterName": "endDateSelect",
                        "reportParameterName": "endDate"
                    },
                    {
                        "id": 151,
                        "parameterId": 5,
                        "parameterName": "OfficeIdSelectOne",
                        "reportParameterName": "officeId"
                    },
                    {
                        "id": 150,
                        "parameterId": 6,
                        "parameterName": "loanOfficerIdSelectAll",
                        "reportParameterName": "loanOfficerId"
                    }
                ]
            },
            {
                "id": 96,
                "reportName": "GroupSummaryCounts",
                "reportType": "Table",
                "description": "Utility query for getting group summary count details for a group_id",
                "coreReport": true,
                "useReport": false
            },
            {
                "id": 97,
                "reportName": "GroupSummaryAmounts",
                "reportType": "Table",
                "description": "Utility query for getting group summary currency amount details for a group_id",
                "coreReport": true,
                "useReport": true
            },
            {
                "id": 106,
                "reportName": "TxnRunningBalances",
                "reportType": "Table",
                "reportCategory": "Transaction",
                "description": "Running Balance Txn report for Individual Lending.\nSuitable for small MFI\u0027s.  Larger could use it using the branch or other parameters.\nBasically, suck it and see if its quick enough for you out-of-te box or whether it needs performance work in your situation.\n",
                "coreReport": false,
                "useReport": false,
                "reportParameters": [
                    {
                        "id": 259,
                        "parameterId": 1,
                        "parameterName": "startDateSelect"
                    },
                    {
                        "id": 256,
                        "parameterId": 2,
                        "parameterName": "endDateSelect"
                    },
                    {
                        "id": 258,
                        "parameterId": 5,
                        "parameterName": "OfficeIdSelectOne"
                    },
                    {
                        "id": 257,
                        "parameterId": 6,
                        "parameterName": "loanOfficerIdSelectAll"
                    }
                ]
            },
            {
                "id": 107,
                "reportName": "FieldAgentStats",
                "reportType": "Table",
                "reportCategory": "Quipo",
                "description": "Field Agent Statistics",
                "coreReport": false,
                "useReport": true
            },
            {
                "id": 108,
                "reportName": "FieldAgentPrograms",
                "reportType": "Table",
                "reportCategory": "Quipo",
                "description": "List of Field Agent Programs",
                "coreReport": false,
                "useReport": true
            },
            {
                "id": 109,
                "reportName": "ProgramDetails",
                "reportType": "Table",
                "reportCategory": "Quipo",
                "description": "List of Loans in a Program",
                "coreReport": false,
                "useReport": false
            },
            {
                "id": 110,
                "reportName": "ChildrenStaffList",
                "reportType": "Table",
                "reportCategory": "Quipo",
                "description": "Get Next Level Down Staff",
                "coreReport": false,
                "useReport": false
            },
            {
                "id": 111,
                "reportName": "CoordinatorStats",
                "reportType": "Table",
                "reportCategory": "Quipo",
                "description": "Coordinator Statistics",
                "coreReport": false,
                "useReport": false
            },
            {
                "id": 112,
                "reportName": "BranchManagerStats",
                "reportType": "Table",
                "reportCategory": "Quipo",
                "description": "Branch Manager Statistics",
                "coreReport": false,
                "useReport": true
            },
            {
                "id": 113,
                "reportName": "ProgramDirectorStats",
                "reportType": "Table",
                "reportCategory": "Quipo",
                "description": "Program DirectorStatistics",
                "coreReport": false,
                "useReport": false
            },
            {
                "id": 114,
                "reportName": "ProgramStats",
                "reportType": "Table",
                "reportCategory": "Quipo",
                "description": "Program Statistics",
                "coreReport": false,
                "useReport": false
            },
            {
                "id": 115,
                "reportName": "ClientSummary ",
                "reportType": "Table",
                "description": "Utility query for getting the client summary details",
                "coreReport": true,
                "useReport": true
            },
            {
                "id": 116,
                "reportName": "LoanCyclePerProduct",
                "reportType": "Table",
                "description": "Utility query for getting the client loan cycle details",
                "coreReport": true,
                "useReport": false
            },
            {
                "id": 117,
                "reportName": "GroupSavingSummary",
                "reportType": "Table",
                "description": "Utility query for getting group or center saving summary details for a group_id",
                "coreReport": true,
                "useReport": false
            },
            {
                "id": 118,
                "reportName": "Savings Transactions",
                "reportType": "Pentaho",
                "reportCategory": "savings",
                "coreReport": false,
                "useReport": true,
                "reportParameters": [
                    {
                        "id": 263,
                        "parameterId": 1,
                        "parameterName": "startDateSelect",
                        "reportParameterName": "fromDate"
                    },
                    {
                        "id": 264,
                        "parameterId": 2,
                        "parameterName": "endDateSelect",
                        "reportParameterName": "toDate"
                    },
                    {
                        "id": 265,
                        "parameterId": 1004,
                        "parameterName": "selectAccount",
                        "reportParameterName": "accountNo"
                    }
                ]
            },
            {
                "id": 119,
                "reportName": "Client Savings Summary",
                "reportType": "Pentaho",
                "coreReport": false,
                "useReport": true,
                "reportParameters": [
                    {
                        "id": 266,
                        "parameterId": 1,
                        "parameterName": "startDateSelect",
                        "reportParameterName": "startDate"
                    },
                    {
                        "id": 267,
                        "parameterId": 2,
                        "parameterName": "endDateSelect",
                        "reportParameterName": "endDate"
                    },
                    {
                        "id": 268,
                        "parameterId": 5,
                        "parameterName": "OfficeIdSelectOne",
                        "reportParameterName": "officeId"
                    }
                ]
            },
            {
                "id": 120,
                "reportName": "Active Loans - Details(Pentaho)",
                "reportType": "Pentaho",
                "reportCategory": "Loan",
                "description": "(NULL)",
                "coreReport": true,
                "useReport": true,
                "reportParameters": [
                    {
                        "id": 270,
                        "parameterId": 5,
                        "parameterName": "OfficeIdSelectOne",
                        "reportParameterName": "branch"
                    },
                    {
                        "id": 271,
                        "parameterId": 6,
                        "parameterName": "loanOfficerIdSelectAll",
                        "reportParameterName": "loanOfficer"
                    },
                    {
                        "id": 272,
                        "parameterId": 10,
                        "parameterName": "currencyIdSelectAll",
                        "reportParameterName": "currencyId"
                    },
                    {
                        "id": 273,
                        "parameterId": 20,
                        "parameterName": "fundIdSelectAll",
                        "reportParameterName": "fundId"
                    },
                    {
                        "id": 274,
                        "parameterId": 25,
                        "parameterName": "loanProductIdSelectAll",
                        "reportParameterName": "loanProductId"
                    },
                    {
                        "id": 275,
                        "parameterId": 26,
                        "parameterName": "loanPurposeIdSelectAll",
                        "reportParameterName": "loanPurposeId"
                    }
                ]
            },
            {
                "id": 121,
                "reportName": "Active Loans - Summary(Pentaho)",
                "reportType": "Pentaho",
                "reportCategory": "Loan",
                "description": "(NULL)",
                "coreReport": true,
                "useReport": true,
                "reportParameters": [
                    {
                        "id": 276,
                        "parameterId": 5,
                        "parameterName": "OfficeIdSelectOne",
                        "reportParameterName": "Branch"
                    },
                    {
                        "id": 277,
                        "parameterId": 6,
                        "parameterName": "loanOfficerIdSelectAll",
                        "reportParameterName": "loanOfficer"
                    },
                    {
                        "id": 278,
                        "parameterId": 10,
                        "parameterName": "currencyIdSelectAll",
                        "reportParameterName": "CurrencyId"
                    },
                    {
                        "id": 279,
                        "parameterId": 20,
                        "parameterName": "fundIdSelectAll",
                        "reportParameterName": "fundId"
                    },
                    {
                        "id": 280,
                        "parameterId": 25,
                        "parameterName": "loanProductIdSelectAll",
                        "reportParameterName": "loanProductId"
                    },
                    {
                        "id": 281,
                        "parameterId": 26,
                        "parameterName": "loanPurposeIdSelectAll",
                        "reportParameterName": "loanPurposeId"
                    },
                    {
                        "id": 282,
                        "parameterId": 100,
                        "parameterName": "parTypeSelect",
                        "reportParameterName": "parType"
                    }
                ]
            },
            {
                "id": 122,
                "reportName": "Active Loans by Disbursal Period(Pentaho)",
                "reportType": "Pentaho",
                "reportCategory": "Loan",
                "description": "(NULL)",
                "coreReport": true,
                "useReport": true,
                "reportParameters": [
                    {
                        "id": 289,
                        "parameterId": 1,
                        "parameterName": "startDateSelect",
                        "reportParameterName": "startDate"
                    },
                    {
                        "id": 290,
                        "parameterId": 2,
                        "parameterName": "endDateSelect",
                        "reportParameterName": "endDate"
                    },
                    {
                        "id": 283,
                        "parameterId": 5,
                        "parameterName": "OfficeIdSelectOne",
                        "reportParameterName": "Branch"
                    },
                    {
                        "id": 284,
                        "parameterId": 6,
                        "parameterName": "loanOfficerIdSelectAll",
                        "reportParameterName": "loanOfficer"
                    },
                    {
                        "id": 285,
                        "parameterId": 10,
                        "parameterName": "currencyIdSelectAll",
                        "reportParameterName": "CurrencyId"
                    },
                    {
                        "id": 286,
                        "parameterId": 20,
                        "parameterName": "fundIdSelectAll",
                        "reportParameterName": "fundId"
                    },
                    {
                        "id": 287,
                        "parameterId": 25,
                        "parameterName": "loanProductIdSelectAll",
                        "reportParameterName": "loanProductId"
                    },
                    {
                        "id": 288,
                        "parameterId": 26,
                        "parameterName": "loanPurposeIdSelectAll",
                        "reportParameterName": "loanPurposeId"
                    }
                ]
            },
            {
                "id": 123,
                "reportName": "Active Loans in last installment Summary(Pentaho)",
                "reportType": "Pentaho",
                "reportCategory": "Loan",
                "description": "(NULL)",
                "coreReport": true,
                "useReport": true,
                "reportParameters": [
                    {
                        "id": 291,
                        "parameterId": 5,
                        "parameterName": "OfficeIdSelectOne",
                        "reportParameterName": "Branch"
                    },
                    {
                        "id": 292,
                        "parameterId": 6,
                        "parameterName": "loanOfficerIdSelectAll",
                        "reportParameterName": "Loan Officer"
                    },
                    {
                        "id": 293,
                        "parameterId": 10,
                        "parameterName": "currencyIdSelectAll",
                        "reportParameterName": "CurrencyId"
                    },
                    {
                        "id": 294,
                        "parameterId": 20,
                        "parameterName": "fundIdSelectAll",
                        "reportParameterName": "fundId"
                    },
                    {
                        "id": 295,
                        "parameterId": 25,
                        "parameterName": "loanProductIdSelectAll",
                        "reportParameterName": "loanProductId"
                    },
                    {
                        "id": 296,
                        "parameterId": 26,
                        "parameterName": "loanPurposeIdSelectAll",
                        "reportParameterName": "loanPurposeId"
                    },
                    {
                        "id": 297,
                        "parameterId": 100,
                        "parameterName": "parTypeSelect",
                        "reportParameterName": "parType"
                    }
                ]
            },
            {
                "id": 124,
                "reportName": "Active Loans in last installment(Pentaho)",
                "reportType": "Pentaho",
                "reportCategory": "Loan",
                "description": "(NULL)",
                "coreReport": true,
                "useReport": true,
                "reportParameters": [
                    {
                        "id": 298,
                        "parameterId": 5,
                        "parameterName": "OfficeIdSelectOne",
                        "reportParameterName": "Branch"
                    },
                    {
                        "id": 299,
                        "parameterId": 6,
                        "parameterName": "loanOfficerIdSelectAll",
                        "reportParameterName": "Loan Officer"
                    },
                    {
                        "id": 300,
                        "parameterId": 10,
                        "parameterName": "currencyIdSelectAll",
                        "reportParameterName": "CurrencyId"
                    },
                    {
                        "id": 301,
                        "parameterId": 20,
                        "parameterName": "fundIdSelectAll",
                        "reportParameterName": "fundId"
                    },
                    {
                        "id": 302,
                        "parameterId": 25,
                        "parameterName": "loanProductIdSelectAll",
                        "reportParameterName": "loanProductId"
                    },
                    {
                        "id": 303,
                        "parameterId": 26,
                        "parameterName": "loanPurposeIdSelectAll",
                        "reportParameterName": "loanPurposeId"
                    }
                ]
            },
            {
                "id": 125,
                "reportName": "Active Loans Passed Final Maturity Summary(Pentaho)",
                "reportType": "Pentaho",
                "reportCategory": "Loan",
                "description": "(NULL)",
                "coreReport": true,
                "useReport": true,
                "reportParameters": [
                    {
                        "id": 304,
                        "parameterId": 5,
                        "parameterName": "OfficeIdSelectOne",
                        "reportParameterName": "Branch"
                    },
                    {
                        "id": 305,
                        "parameterId": 6,
                        "parameterName": "loanOfficerIdSelectAll",
                        "reportParameterName": "Loan Officer"
                    },
                    {
                        "id": 306,
                        "parameterId": 10,
                        "parameterName": "currencyIdSelectAll",
                        "reportParameterName": "CurrencyId"
                    },
                    {
                        "id": 307,
                        "parameterId": 20,
                        "parameterName": "fundIdSelectAll",
                        "reportParameterName": "fundId"
                    },
                    {
                        "id": 308,
                        "parameterId": 25,
                        "parameterName": "loanProductIdSelectAll",
                        "reportParameterName": "loanProductId"
                    },
                    {
                        "id": 309,
                        "parameterId": 26,
                        "parameterName": "loanPurposeIdSelectAll",
                        "reportParameterName": "loanPurposeId"
                    },
                    {
                        "id": 310,
                        "parameterId": 100,
                        "parameterName": "parTypeSelect",
                        "reportParameterName": "parType"
                    }
                ]
            },
            {
                "id": 126,
                "reportName": "Active Loans Passed Final Maturity(Pentaho)",
                "reportType": "Pentaho",
                "reportCategory": "Loan",
                "description": "(NULL)",
                "coreReport": true,
                "useReport": true,
                "reportParameters": [
                    {
                        "id": 311,
                        "parameterId": 5,
                        "parameterName": "OfficeIdSelectOne",
                        "reportParameterName": "Branch"
                    },
                    {
                        "id": 312,
                        "parameterId": 6,
                        "parameterName": "loanOfficerIdSelectAll",
                        "reportParameterName": "Loan Officer"
                    },
                    {
                        "id": 313,
                        "parameterId": 10,
                        "parameterName": "currencyIdSelectAll",
                        "reportParameterName": "CurrencyId"
                    },
                    {
                        "id": 314,
                        "parameterId": 20,
                        "parameterName": "fundIdSelectAll",
                        "reportParameterName": "fundId"
                    },
                    {
                        "id": 315,
                        "parameterId": 25,
                        "parameterName": "loanProductIdSelectAll",
                        "reportParameterName": "loanProductId"
                    },
                    {
                        "id": 316,
                        "parameterId": 26,
                        "parameterName": "loanPurposeIdSelectAll",
                        "reportParameterName": "loanPurposeId"
                    }
                ]
            },
            {
                "id": 127,
                "reportName": "Aging Detail(Pentaho)",
                "reportType": "Pentaho",
                "reportCategory": "Loan",
                "description": "(NULL)",
                "coreReport": true,
                "useReport": true,
                "reportParameters": [
                    {
                        "id": 317,
                        "parameterId": 5,
                        "parameterName": "OfficeIdSelectOne",
                        "reportParameterName": "Branch"
                    }
                ]
            },
            {
                "id": 128,
                "reportName": "Aging Summary (Arrears in Months)(Pentaho)",
                "reportType": "Pentaho",
                "reportCategory": "Loan",
                "description": "(NULL)",
                "coreReport": true,
                "useReport": true,
                "reportParameters": [
                    {
                        "id": 318,
                        "parameterId": 5,
                        "parameterName": "OfficeIdSelectOne",
                        "reportParameterName": "Branch"
                    },
                    {
                        "id": 319,
                        "parameterId": 10,
                        "parameterName": "currencyIdSelectAll",
                        "reportParameterName": "CurrencyId"
                    }
                ]
            },
            {
                "id": 129,
                "reportName": "Aging Summary (Arrears in Weeks)(Pentaho)",
                "reportType": "Pentaho",
                "reportCategory": "Loan",
                "description": "(NULL)",
                "coreReport": true,
                "useReport": true,
                "reportParameters": [
                    {
                        "id": 320,
                        "parameterId": 5,
                        "parameterName": "OfficeIdSelectOne",
                        "reportParameterName": "Branch"
                    },
                    {
                        "id": 321,
                        "parameterId": 10,
                        "parameterName": "currencyIdSelectAll",
                        "reportParameterName": "CurrencyId"
                    }
                ]
            },
            {
                "id": 130,
                "reportName": "Client Listing(Pentaho)",
                "reportType": "Pentaho",
                "reportCategory": "Client",
                "description": "(NULL)",
                "coreReport": true,
                "useReport": true,
                "reportParameters": [
                    {
                        "id": 322,
                        "parameterId": 5,
                        "parameterName": "OfficeIdSelectOne",
                        "reportParameterName": "selectOffice"
                    }
                ]
            },
            {
                "id": 131,
                "reportName": "Client Loans Listing(Pentaho)",
                "reportType": "Pentaho",
                "reportCategory": "Client",
                "description": "(NULL)",
                "coreReport": true,
                "useReport": true,
                "reportParameters": [
                    {
                        "id": 323,
                        "parameterId": 5,
                        "parameterName": "OfficeIdSelectOne",
                        "reportParameterName": "Branch"
                    },
                    {
                        "id": 324,
                        "parameterId": 6,
                        "parameterName": "loanOfficerIdSelectAll",
                        "reportParameterName": "Loan Officer"
                    },
                    {
                        "id": 325,
                        "parameterId": 10,
                        "parameterName": "currencyIdSelectAll",
                        "reportParameterName": "CurrencyId"
                    },
                    {
                        "id": 326,
                        "parameterId": 20,
                        "parameterName": "fundIdSelectAll",
                        "reportParameterName": "fundId"
                    },
                    {
                        "id": 327,
                        "parameterId": 25,
                        "parameterName": "loanProductIdSelectAll",
                        "reportParameterName": "loanProductId"
                    },
                    {
                        "id": 328,
                        "parameterId": 26,
                        "parameterName": "loanPurposeIdSelectAll",
                        "reportParameterName": "loanPurposeId"
                    }
                ]
            },
            {
                "id": 132,
                "reportName": "Expected Payments By Date - Basic(Pentaho)",
                "reportType": "Pentaho",
                "reportCategory": "Loan",
                "description": "(NULL)",
                "coreReport": true,
                "useReport": true,
                "reportParameters": [
                    {
                        "id": 331,
                        "parameterId": 1,
                        "parameterName": "startDateSelect",
                        "reportParameterName": "startDate"
                    },
                    {
                        "id": 332,
                        "parameterId": 2,
                        "parameterName": "endDateSelect",
                        "reportParameterName": "endDate"
                    },
                    {
                        "id": 329,
                        "parameterId": 5,
                        "parameterName": "OfficeIdSelectOne",
                        "reportParameterName": "Branch"
                    },
                    {
                        "id": 330,
                        "parameterId": 6,
                        "parameterName": "loanOfficerIdSelectAll",
                        "reportParameterName": "Loan Officer"
                    }
                ]
            },
            {
                "id": 133,
                "reportName": "Funds Disbursed Between Dates Summary by Office(Pentaho)",
                "reportType": "Pentaho",
                "reportCategory": "Fund",
                "description": "(NULL)",
                "coreReport": true,
                "useReport": true,
                "reportParameters": [
                    {
                        "id": 336,
                        "parameterId": 1,
                        "parameterName": "startDateSelect",
                        "reportParameterName": "startDate"
                    },
                    {
                        "id": 337,
                        "parameterId": 2,
                        "parameterName": "endDateSelect",
                        "reportParameterName": "endDate"
                    },
                    {
                        "id": 333,
                        "parameterId": 5,
                        "parameterName": "OfficeIdSelectOne",
                        "reportParameterName": "Branch"
                    },
                    {
                        "id": 334,
                        "parameterId": 10,
                        "parameterName": "currencyIdSelectAll",
                        "reportParameterName": "CurrencyId"
                    },
                    {
                        "id": 335,
                        "parameterId": 20,
                        "parameterName": "fundIdSelectAll",
                        "reportParameterName": "fundId"
                    }
                ]
            },
            {
                "id": 134,
                "reportName": "Funds Disbursed Between Dates Summary(Pentaho)",
                "reportType": "Pentaho",
                "reportCategory": "Fund",
                "description": "(NULL)",
                "coreReport": true,
                "useReport": true,
                "reportParameters": [
                    {
                        "id": 340,
                        "parameterId": 1,
                        "parameterName": "startDateSelect",
                        "reportParameterName": "startDate"
                    },
                    {
                        "id": 341,
                        "parameterId": 2,
                        "parameterName": "endDateSelect",
                        "reportParameterName": "endDate"
                    },
                    {
                        "id": 338,
                        "parameterId": 10,
                        "parameterName": "currencyIdSelectAll",
                        "reportParameterName": "CurrencyId"
                    },
                    {
                        "id": 339,
                        "parameterId": 20,
                        "parameterName": "fundIdSelectAll",
                        "reportParameterName": "fundId"
                    }
                ]
            },
            {
                "id": 135,
                "reportName": "Loans Awaiting Disbursal Summary by Month(Pentaho)",
                "reportType": "Pentaho",
                "reportCategory": "Loan",
                "description": "(NULL)",
                "coreReport": true,
                "useReport": true,
                "reportParameters": [
                    {
                        "id": 342,
                        "parameterId": 5,
                        "parameterName": "OfficeIdSelectOne",
                        "reportParameterName": "Branch"
                    },
                    {
                        "id": 343,
                        "parameterId": 6,
                        "parameterName": "loanOfficerIdSelectAll",
                        "reportParameterName": "Loan Officer"
                    },
                    {
                        "id": 344,
                        "parameterId": 10,
                        "parameterName": "currencyIdSelectAll",
                        "reportParameterName": "CurrencyId"
                    },
                    {
                        "id": 345,
                        "parameterId": 20,
                        "parameterName": "fundIdSelectAll",
                        "reportParameterName": "fundId"
                    },
                    {
                        "id": 346,
                        "parameterId": 25,
                        "parameterName": "loanProductIdSelectAll",
                        "reportParameterName": "loanProductId"
                    },
                    {
                        "id": 347,
                        "parameterId": 26,
                        "parameterName": "loanPurposeIdSelectAll",
                        "reportParameterName": "loanPurposeId"
                    }
                ]
            },
            {
                "id": 136,
                "reportName": "Loans Awaiting Disbursal Summary(Pentaho)",
                "reportType": "Pentaho",
                "reportCategory": "Loan",
                "description": "(NULL)",
                "coreReport": true,
                "useReport": true,
                "reportParameters": [
                    {
                        "id": 348,
                        "parameterId": 5,
                        "parameterName": "OfficeIdSelectOne",
                        "reportParameterName": "Branch"
                    },
                    {
                        "id": 349,
                        "parameterId": 6,
                        "parameterName": "loanOfficerIdSelectAll",
                        "reportParameterName": "Loan Officer"
                    },
                    {
                        "id": 350,
                        "parameterId": 10,
                        "parameterName": "currencyIdSelectAll",
                        "reportParameterName": "CurrencyId"
                    },
                    {
                        "id": 351,
                        "parameterId": 20,
                        "parameterName": "fundIdSelectAll",
                        "reportParameterName": "fundId"
                    },
                    {
                        "id": 352,
                        "parameterId": 25,
                        "parameterName": "loanProductIdSelectAll",
                        "reportParameterName": "loanProductId"
                    },
                    {
                        "id": 353,
                        "parameterId": 26,
                        "parameterName": "loanPurposeIdSelectAll",
                        "reportParameterName": "loanPurposeId"
                    }
                ]
            },
            {
                "id": 137,
                "reportName": "Loans Awaiting Disbursal(Pentaho)",
                "reportType": "Pentaho",
                "reportCategory": "Loan",
                "description": "(NULL)",
                "coreReport": true,
                "useReport": true,
                "reportParameters": [
                    {
                        "id": 354,
                        "parameterId": 5,
                        "parameterName": "OfficeIdSelectOne",
                        "reportParameterName": "Branch"
                    },
                    {
                        "id": 355,
                        "parameterId": 6,
                        "parameterName": "loanOfficerIdSelectAll",
                        "reportParameterName": "Loan Officer"
                    },
                    {
                        "id": 356,
                        "parameterId": 10,
                        "parameterName": "currencyIdSelectAll",
                        "reportParameterName": "CurrencyId"
                    },
                    {
                        "id": 357,
                        "parameterId": 20,
                        "parameterName": "fundIdSelectAll",
                        "reportParameterName": "fundId"
                    },
                    {
                        "id": 358,
                        "parameterId": 25,
                        "parameterName": "loanProductIdSelectAll",
                        "reportParameterName": "loanProductId"
                    },
                    {
                        "id": 359,
                        "parameterId": 26,
                        "parameterName": "loanPurposeIdSelectAll",
                        "reportParameterName": "loanPurposeId"
                    }
                ]
            },
            {
                "id": 138,
                "reportName": "Loans Pending Approval(Pentaho)",
                "reportType": "Pentaho",
                "reportCategory": "Loan",
                "description": "(NULL)",
                "coreReport": true,
                "useReport": true,
                "reportParameters": [
                    {
                        "id": 360,
                        "parameterId": 5,
                        "parameterName": "OfficeIdSelectOne",
                        "reportParameterName": "Branch"
                    },
                    {
                        "id": 361,
                        "parameterId": 6,
                        "parameterName": "loanOfficerIdSelectAll",
                        "reportParameterName": "Loan Officer"
                    },
                    {
                        "id": 362,
                        "parameterId": 10,
                        "parameterName": "currencyIdSelectAll",
                        "reportParameterName": "CurrencyId"
                    },
                    {
                        "id": 363,
                        "parameterId": 20,
                        "parameterName": "fundIdSelectAll",
                        "reportParameterName": "fundId"
                    },
                    {
                        "id": 364,
                        "parameterId": 25,
                        "parameterName": "loanProductIdSelectAll",
                        "reportParameterName": "loanProductId"
                    },
                    {
                        "id": 365,
                        "parameterId": 26,
                        "parameterName": "loanPurposeIdSelectAll",
                        "reportParameterName": "loanPurposeId"
                    }
                ]
            },
            {
                "id": 139,
                "reportName": "Obligation Met Loans Details(Pentaho)",
                "reportType": "Pentaho",
                "reportCategory": "Loan",
                "description": "(NULL)",
                "coreReport": true,
                "useReport": true,
                "reportParameters": [
                    {
                        "id": 372,
                        "parameterId": 1,
                        "parameterName": "startDateSelect",
                        "reportParameterName": "startDate"
                    },
                    {
                        "id": 373,
                        "parameterId": 2,
                        "parameterName": "endDateSelect",
                        "reportParameterName": "endDate"
                    },
                    {
                        "id": 374,
                        "parameterId": 3,
                        "parameterName": "obligDateTypeSelect",
                        "reportParameterName": "obligDateType"
                    },
                    {
                        "id": 366,
                        "parameterId": 5,
                        "parameterName": "OfficeIdSelectOne",
                        "reportParameterName": "Branch"
                    },
                    {
                        "id": 367,
                        "parameterId": 6,
                        "parameterName": "loanOfficerIdSelectAll",
                        "reportParameterName": "Loan Officer"
                    },
                    {
                        "id": 368,
                        "parameterId": 10,
                        "parameterName": "currencyIdSelectAll",
                        "reportParameterName": "CurrencyId"
                    },
                    {
                        "id": 369,
                        "parameterId": 20,
                        "parameterName": "fundIdSelectAll",
                        "reportParameterName": "fundId"
                    },
                    {
                        "id": 370,
                        "parameterId": 25,
                        "parameterName": "loanProductIdSelectAll",
                        "reportParameterName": "loanProductId"
                    },
                    {
                        "id": 371,
                        "parameterId": 26,
                        "parameterName": "loanPurposeIdSelectAll",
                        "reportParameterName": "loanPurposeId"
                    }
                ]
            },
            {
                "id": 140,
                "reportName": "Obligation Met Loans Summary(Pentaho)",
                "reportType": "Pentaho",
                "reportCategory": "Loan",
                "description": "(NULL)",
                "coreReport": true,
                "useReport": true,
                "reportParameters": [
                    {
                        "id": 381,
                        "parameterId": 1,
                        "parameterName": "startDateSelect",
                        "reportParameterName": "Startdate"
                    },
                    {
                        "id": 382,
                        "parameterId": 2,
                        "parameterName": "endDateSelect",
                        "reportParameterName": "Enddate"
                    },
                    {
                        "id": 383,
                        "parameterId": 3,
                        "parameterName": "obligDateTypeSelect",
                        "reportParameterName": "obligDateType"
                    },
                    {
                        "id": 375,
                        "parameterId": 5,
                        "parameterName": "OfficeIdSelectOne",
                        "reportParameterName": "Branch"
                    },
                    {
                        "id": 376,
                        "parameterId": 6,
                        "parameterName": "loanOfficerIdSelectAll",
                        "reportParameterName": "Loan Officer"
                    },
                    {
                        "id": 377,
                        "parameterId": 10,
                        "parameterName": "currencyIdSelectAll",
                        "reportParameterName": "CurrencyId"
                    },
                    {
                        "id": 378,
                        "parameterId": 20,
                        "parameterName": "fundIdSelectAll",
                        "reportParameterName": "fundId"
                    },
                    {
                        "id": 379,
                        "parameterId": 25,
                        "parameterName": "loanProductIdSelectAll",
                        "reportParameterName": "loanProductId"
                    },
                    {
                        "id": 380,
                        "parameterId": 26,
                        "parameterName": "loanPurposeIdSelectAll",
                        "reportParameterName": "loanPurposeId"
                    }
                ]
            },
            {
                "id": 141,
                "reportName": "Portfolio at Risk by Branch(Pentaho)",
                "reportType": "Pentaho",
                "reportCategory": "Loan",
                "description": "(NULL)",
                "coreReport": true,
                "useReport": true,
                "reportParameters": [
                    {
                        "id": 384,
                        "parameterId": 5,
                        "parameterName": "OfficeIdSelectOne",
                        "reportParameterName": "Branch"
                    },
                    {
                        "id": 385,
                        "parameterId": 6,
                        "parameterName": "loanOfficerIdSelectAll",
                        "reportParameterName": "Loan Officer"
                    },
                    {
                        "id": 386,
                        "parameterId": 10,
                        "parameterName": "currencyIdSelectAll",
                        "reportParameterName": "CurrencyId"
                    },
                    {
                        "id": 387,
                        "parameterId": 20,
                        "parameterName": "fundIdSelectAll",
                        "reportParameterName": "fundId"
                    },
                    {
                        "id": 388,
                        "parameterId": 25,
                        "parameterName": "loanProductIdSelectAll",
                        "reportParameterName": "loanProductId"
                    },
                    {
                        "id": 389,
                        "parameterId": 26,
                        "parameterName": "loanPurposeIdSelectAll",
                        "reportParameterName": "loanPurposeId"
                    },
                    {
                        "id": 390,
                        "parameterId": 100,
                        "parameterName": "parTypeSelect",
                        "reportParameterName": "parType"
                    }
                ]
            },
            {
                "id": 142,
                "reportName": "Portfolio at Risk(Pentaho)",
                "reportType": "Pentaho",
                "reportCategory": "Loan",
                "description": "(NULL)",
                "coreReport": true,
                "useReport": true,
                "reportParameters": [
                    {
                        "id": 391,
                        "parameterId": 5,
                        "parameterName": "OfficeIdSelectOne",
                        "reportParameterName": "Branch"
                    },
                    {
                        "id": 392,
                        "parameterId": 6,
                        "parameterName": "loanOfficerIdSelectAll",
                        "reportParameterName": "loanOfficer"
                    },
                    {
                        "id": 393,
                        "parameterId": 10,
                        "parameterName": "currencyIdSelectAll",
                        "reportParameterName": "CurrencyId"
                    },
                    {
                        "id": 394,
                        "parameterId": 20,
                        "parameterName": "fundIdSelectAll",
                        "reportParameterName": "fundId"
                    },
                    {
                        "id": 395,
                        "parameterId": 25,
                        "parameterName": "loanProductIdSelectAll",
                        "reportParameterName": "loanProductId"
                    },
                    {
                        "id": 396,
                        "parameterId": 26,
                        "parameterName": "loanPurposeIdSelectAll",
                        "reportParameterName": "loanPurposeId"
                    },
                    {
                        "id": 397,
                        "parameterId": 100,
                        "parameterName": "parTypeSelect",
                        "reportParameterName": "parType"
                    }
                ]
            },
            {
                "id": 143,
                "reportName": "Rescheduled Loans(Pentaho)",
                "reportType": "Pentaho",
                "reportCategory": "Loan",
                "description": "(NULL)",
                "coreReport": true,
                "useReport": true,
                "reportParameters": [
                    {
                        "id": 401,
                        "parameterId": 1,
                        "parameterName": "startDateSelect",
                        "reportParameterName": "startDate"
                    },
                    {
                        "id": 402,
                        "parameterId": 2,
                        "parameterName": "endDateSelect",
                        "reportParameterName": "endDate"
                    },
                    {
                        "id": 398,
                        "parameterId": 5,
                        "parameterName": "OfficeIdSelectOne",
                        "reportParameterName": "Branch"
                    },
                    {
                        "id": 399,
                        "parameterId": 10,
                        "parameterName": "currencyIdSelectAll",
                        "reportParameterName": "CurrencyId"
                    },
                    {
                        "id": 400,
                        "parameterId": 25,
                        "parameterName": "loanProductIdSelectAll",
                        "reportParameterName": "loanProductId"
                    }
                ]
            },
            {
                "id": 144,
                "reportName": "TxnRunningBalances(Pentaho)",
                "reportType": "Pentaho",
                "reportCategory": "Transaction",
                "description": "(NULL)",
                "coreReport": true,
                "useReport": true,
                "reportParameters": [
                    {
                        "id": 405,
                        "parameterId": 1,
                        "parameterName": "startDateSelect",
                        "reportParameterName": "startDate"
                    },
                    {
                        "id": 406,
                        "parameterId": 2,
                        "parameterName": "endDateSelect",
                        "reportParameterName": "endDate"
                    },
                    {
                        "id": 403,
                        "parameterId": 5,
                        "parameterName": "OfficeIdSelectOne",
                        "reportParameterName": "Branch"
                    },
                    {
                        "id": 404,
                        "parameterId": 6,
                        "parameterName": "loanOfficerIdSelectAll",
                        "reportParameterName": "Loan Officer"
                    }
                ]
            },
            {
                "id": 145,
                "reportName": "Written-Off Loans(Pentaho)",
                "reportType": "Pentaho",
                "reportCategory": "Loan",
                "description": "(NULL)",
                "coreReport": true,
                "useReport": true,
                "reportParameters": [
                    {
                        "id": 410,
                        "parameterId": 1,
                        "parameterName": "startDateSelect",
                        "reportParameterName": "startDate"
                    },
                    {
                        "id": 411,
                        "parameterId": 2,
                        "parameterName": "endDateSelect",
                        "reportParameterName": "endDate"
                    },
                    {
                        "id": 407,
                        "parameterId": 5,
                        "parameterName": "OfficeIdSelectOne",
                        "reportParameterName": "Branch"
                    },
                    {
                        "id": 408,
                        "parameterId": 10,
                        "parameterName": "currencyIdSelectAll",
                        "reportParameterName": "CurrencyId"
                    },
                    {
                        "id": 409,
                        "parameterId": 25,
                        "parameterName": "loanProductIdSelectAll",
                        "reportParameterName": "loanProductId"
                    }
                ]
            },
            {
                "id": 146,
                "reportName": "Client Saving Transactions",
                "reportType": "Pentaho",
                "reportCategory": "Savings",
                "coreReport": false,
                "useReport": false,
                "reportParameters": [
                    {
                        "id": 412,
                        "parameterId": 1,
                        "parameterName": "startDateSelect",
                        "reportParameterName": "startDate"
                    },
                    {
                        "id": 413,
                        "parameterId": 2,
                        "parameterName": "endDateSelect",
                        "reportParameterName": "endDate"
                    },
                    {
                        "id": 414,
                        "parameterId": 1004,
                        "parameterName": "selectAccount",
                        "reportParameterName": "accountNo"
                    }
                ]
            },
            {
                "id": 147,
                "reportName": "Client Loan Account Schedule",
                "reportType": "Pentaho",
                "reportCategory": "Loans",
                "coreReport": false,
                "useReport": true,
                "reportParameters": [
                    {
                        "id": 415,
                        "parameterId": 1,
                        "parameterName": "startDateSelect",
                        "reportParameterName": "startDate"
                    },
                    {
                        "id": 416,
                        "parameterId": 2,
                        "parameterName": "endDateSelect",
                        "reportParameterName": "endDate"
                    },
                    {
                        "id": 417,
                        "parameterId": 1004,
                        "parameterName": "selectAccount",
                        "reportParameterName": "selectLoan"
                    }
                ]
            },
            {
                "id": 148,
                "reportName": "GroupNamesByStaff",
                "reportType": "Table",
                "reportSubType": "",
                "reportCategory": "",
                "description": "",
                "coreReport": true,
                "useReport": false
            },
            {
                "id": 149,
                "reportName": "ClientTrendsByDay",
                "reportType": "Table",
                "reportSubType": "",
                "reportCategory": "Client",
                "description": "Retrieves the number of clients joined in last 12 days",
                "coreReport": true,
                "useReport": false,
                "reportParameters": [
                    {
                        "id": 418,
                        "parameterId": 5,
                        "parameterName": "OfficeIdSelectOne",
                        "reportParameterName": ""
                    }
                ]
            },
            {
                "id": 150,
                "reportName": "ClientTrendsByWeek",
                "reportType": "Table",
                "reportSubType": "",
                "reportCategory": "Client",
                "description": "",
                "coreReport": true,
                "useReport": false,
                "reportParameters": [
                    {
                        "id": 419,
                        "parameterId": 5,
                        "parameterName": "OfficeIdSelectOne",
                        "reportParameterName": ""
                    }
                ]
            },
            {
                "id": 151,
                "reportName": "ClientTrendsByMonth",
                "reportType": "Table",
                "reportSubType": "",
                "reportCategory": "Client",
                "description": "",
                "coreReport": true,
                "useReport": false,
                "reportParameters": [
                    {
                        "id": 420,
                        "parameterId": 5,
                        "parameterName": "OfficeIdSelectOne",
                        "reportParameterName": ""
                    }
                ]
            },
            {
                "id": 152,
                "reportName": "LoanTrendsByDay",
                "reportType": "Table",
                "reportSubType": "",
                "reportCategory": "Loan",
                "description": "Retrieves Number of loans disbursed for last 12 days",
                "coreReport": true,
                "useReport": false,
                "reportParameters": [
                    {
                        "id": 421,
                        "parameterId": 5,
                        "parameterName": "OfficeIdSelectOne",
                        "reportParameterName": ""
                    }
                ]
            },
            {
                "id": 153,
                "reportName": "LoanTrendsByWeek",
                "reportType": "Table",
                "reportSubType": "",
                "reportCategory": "Loan",
                "description": "",
                "coreReport": true,
                "useReport": false,
                "reportParameters": [
                    {
                        "id": 422,
                        "parameterId": 5,
                        "parameterName": "OfficeIdSelectOne",
                        "reportParameterName": ""
                    }
                ]
            },
            {
                "id": 154,
                "reportName": "LoanTrendsByMonth",
                "reportType": "Table",
                "reportSubType": "",
                "reportCategory": "Loan",
                "description": "",
                "coreReport": true,
                "useReport": false,
                "reportParameters": [
                    {
                        "id": 423,
                        "parameterId": 5,
                        "parameterName": "OfficeIdSelectOne",
                        "reportParameterName": ""
                    }
                ]
            },
            {
                "id": 155,
                "reportName": "Demand_Vs_Collection",
                "reportType": "Table",
                "reportSubType": "",
                "reportCategory": "Loan",
                "description": "Demand Vs Collection",
                "coreReport": true,
                "useReport": true,
                "reportParameters": [
                    {
                        "id": 424,
                        "parameterId": 5,
                        "parameterName": "OfficeIdSelectOne",
                        "reportParameterName": ""
                    }
                ]
            },
            {
                "id": 156,
                "reportName": "Disbursal_Vs_Awaitingdisbursal",
                "reportType": "Table",
                "reportSubType": "",
                "reportCategory": "Loan",
                "description": "Disbursal_Vs_Awaitingdisbursal",
                "coreReport": true,
                "useReport": false,
                "reportParameters": [
                    {
                        "id": 425,
                        "parameterId": 5,
                        "parameterName": "OfficeIdSelectOne",
                        "reportParameterName": ""
                    }
                ]
            },
            {
                "id": 157,
                "reportName": "Savings Transaction Receipt",
                "reportType": "Pentaho",
                "coreReport": false,
                "useReport": true,
                "reportParameters": [
                    {
                        "id": 426,
                        "parameterId": 1006,
                        "parameterName": "transactionId",
                        "reportParameterName": "transactionId"
                    }
                ]
            },
            {
                "id": 158,
                "reportName": "Loan Transaction Receipt",
                "reportType": "Pentaho",
                "coreReport": false,
                "useReport": true,
                "reportParameters": [
                    {
                        "id": 427,
                        "parameterId": 1006,
                        "parameterName": "transactionId",
                        "reportParameterName": "transactionId"
                    }
                ]
            },
            {
                "id": 159,
                "reportName": "Staff Assignment History",
                "reportType": "Pentaho",
                "coreReport": false,
                "useReport": true,
                "reportParameters": [
                    {
                        "id": 428,
                        "parameterId": 1007,
                        "parameterName": "selectCenterId",
                        "reportParameterName": "centerId"
                    }
                ]
            },
            {
                "id": 160,
                "reportName": "GeneralLedgerReport",
                "reportType": "Pentaho",
                "reportCategory": "Accounting",
                "coreReport": false,
                "useReport": true,
                "reportParameters": [
                    {
                        "id": 430,
                        "parameterId": 1,
                        "parameterName": "startDateSelect",
                        "reportParameterName": "fromDate"
                    },
                    {
                        "id": 431,
                        "parameterId": 2,
                        "parameterName": "endDateSelect",
                        "reportParameterName": "toDate"
                    },
                    {
                        "id": 432,
                        "parameterId": 5,
                        "parameterName": "OfficeIdSelectOne",
                        "reportParameterName": "branch"
                    },
                    {
                        "id": 429,
                        "parameterId": 1008,
                        "parameterName": "SelectGLAccountNO",
                        "reportParameterName": "account"
                    }
                ]
            },
            {
                "id": 161,
                "reportName": "Active Loan Summary per Branch",
                "reportType": "Pentaho",
                "reportCategory": "Loans",
                "coreReport": false,
                "useReport": true
            },
            {
                "id": 162,
                "reportName": "Balance Outstanding",
                "reportType": "Pentaho",
                "reportCategory": "Loans",
                "coreReport": false,
                "useReport": true,
                "reportParameters": [
                    {
                        "id": 433,
                        "parameterId": 5,
                        "parameterName": "OfficeIdSelectOne",
                        "reportParameterName": "branch"
                    },
                    {
                        "id": 434,
                        "parameterId": 1009,
                        "parameterName": "asOnDate",
                        "reportParameterName": "ondate"
                    }
                ]
            },
            {
                "id": 163,
                "reportName": "Collection Report",
                "reportType": "Pentaho",
                "reportCategory": "Loans",
                "coreReport": false,
                "useReport": true,
                "reportParameters": [
                    {
                        "id": 436,
                        "parameterId": 1,
                        "parameterName": "startDateSelect",
                        "reportParameterName": "fromDate"
                    },
                    {
                        "id": 437,
                        "parameterId": 2,
                        "parameterName": "endDateSelect",
                        "reportParameterName": "toDate"
                    },
                    {
                        "id": 435,
                        "parameterId": 5,
                        "parameterName": "OfficeIdSelectOne",
                        "reportParameterName": "branch"
                    }
                ]
            },
            {
                "id": 164,
                "reportName": "Disbursal Report",
                "reportType": "Pentaho",
                "reportCategory": "Loans",
                "coreReport": false,
                "useReport": true,
                "reportParameters": [
                    {
                        "id": 439,
                        "parameterId": 1,
                        "parameterName": "startDateSelect",
                        "reportParameterName": "fromDate"
                    },
                    {
                        "id": 440,
                        "parameterId": 2,
                        "parameterName": "endDateSelect",
                        "reportParameterName": "toDate"
                    },
                    {
                        "id": 438,
                        "parameterId": 5,
                        "parameterName": "OfficeIdSelectOne",
                        "reportParameterName": "branch"
                    }
                ]
            },
            {
                "id": 165,
                "reportName": "Savings Accounts Dormancy Report",
                "reportType": "Table",
                "reportCategory": "Savings",
                "coreReport": true,
                "useReport": true,
                "reportParameters": [
                    {
                        "id": 442,
                        "parameterId": 5,
                        "parameterName": "OfficeIdSelectOne"
                    },
                    {
                        "id": 441,
                        "parameterId": 1010,
                        "parameterName": "SavingsAccountSubStatus"
                    }
                ]
            },
            {
                "id": 166,
                "reportName": "Daily Teller Cash Report (Pentaho)",
                "reportType": "Pentaho",
                "description": "Daily Teller Cash Report",
                "coreReport": true,
                "useReport": true,
                "reportParameters": [
                    {
                        "id": 443,
                        "parameterId": 5,
                        "parameterName": "OfficeIdSelectOne",
                        "reportParameterName": "officeId"
                    },
                    {
                        "id": 447,
                        "parameterId": 1009,
                        "parameterName": "asOnDate",
                        "reportParameterName": "asOnDate"
                    },
                    {
                        "id": 444,
                        "parameterId": 1011,
                        "parameterName": "tellerIdSelectOne",
                        "reportParameterName": "tellerId"
                    },
                    {
                        "id": 445,
                        "parameterId": 1012,
                        "parameterName": "cashierIdSelectOne",
                        "reportParameterName": "cashierId"
                    },
                    {
                        "id": 446,
                        "parameterId": 1013,
                        "parameterName": "currencyCodeSelectOne",
                        "reportParameterName": "currencyCode"
                    }
                ]
            },
            {
                "id": 167,
                "reportName": "testKB",
                "reportType": "Table",
                "reportCategory": "Loan",
                "coreReport": false,
                "useReport": false
            },
            {
                "id": 169,
                "reportName": "A-Client",
                "reportType": "Chart",
                "reportSubType": "Pie",
                "reportCategory": "Client",
                "description": "Client",
                "coreReport": false,
                "useReport": true
            },
            {
                "id": 170,
                "reportName": "Active Clients",
                "reportType": "Chart",
                "reportSubType": "Bar",
                "reportCategory": "Client",
                "description": "All clients with the status ‘Active’",
                "coreReport": false,
                "useReport": true,
                "reportParameters": [
                    {
                        "id": 448,
                        "parameterId": 5,
                        "parameterName": "OfficeIdSelectOne",
                        "reportParameterName": "officeId"
                    },
                    {
                        "id": 449,
                        "parameterId": 6,
                        "parameterName": "loanOfficerIdSelectAll",
                        "reportParameterName": "loanOfficerId"
                    },
                    {
                        "id": 570,
                        "parameterId": 1004,
                        "parameterName": "selectAccount",
                        "reportParameterName": "accountId"
                    }
                ]
            },
            {
                "id": 171,
                "reportName": "Prospective Clients",
                "reportType": "SMS",
                "reportSubType": "NonTriggered",
                "reportCategory": "Clients",
                "description": "All clients with the status ‘Active’ who have never had a loan before",
                "coreReport": false,
                "useReport": true,
                "reportParameters": [
                    {
                        "id": 450,
                        "parameterId": 5,
                        "parameterName": "OfficeIdSelectOne",
                        "reportParameterName": "officeId"
                    },
                    {
                        "id": 451,
                        "parameterId": 6,
                        "parameterName": "loanOfficerIdSelectAll",
                        "reportParameterName": "loanOfficerId"
                    }
                ]
            },
            {
                "id": 172,
                "reportName": "Active Loan Clients",
                "reportType": "SMS",
                "reportSubType": "NonTriggered",
                "reportCategory": "Clients",
                "description": "All clients with an outstanding loan between cycleX and cycleY days",
                "coreReport": false,
                "useReport": true,
                "reportParameters": [
                    {
                        "id": 452,
                        "parameterId": 5,
                        "parameterName": "OfficeIdSelectOne",
                        "reportParameterName": "officeId"
                    },
                    {
                        "id": 453,
                        "parameterId": 6,
                        "parameterName": "loanOfficerIdSelectAll",
                        "reportParameterName": "loanOfficerId"
                    },
                    {
                        "id": 454,
                        "parameterId": 1014,
                        "parameterName": "cycleXSelect",
                        "reportParameterName": "cycleX"
                    },
                    {
                        "id": 455,
                        "parameterId": 1015,
                        "parameterName": "cycleYSelect",
                        "reportParameterName": "cycleY"
                    }
                ]
            },
            {
                "id": 173,
                "reportName": "Loan in arrears",
                "reportType": "SMS",
                "reportSubType": "NonTriggered",
                "reportCategory": "Loan",
                "description": "All clients with an outstanding loan in arrears between fromX and toY days",
                "coreReport": false,
                "useReport": true,
                "reportParameters": [
                    {
                        "id": 456,
                        "parameterId": 5,
                        "parameterName": "OfficeIdSelectOne",
                        "reportParameterName": "officeId"
                    },
                    {
                        "id": 457,
                        "parameterId": 6,
                        "parameterName": "loanOfficerIdSelectAll",
                        "reportParameterName": "loanOfficerId"
                    },
                    {
                        "id": 458,
                        "parameterId": 1016,
                        "parameterName": "fromXSelect",
                        "reportParameterName": "fromX"
                    },
                    {
                        "id": 459,
                        "parameterId": 1017,
                        "parameterName": "toYSelect",
                        "reportParameterName": "toY"
                    }
                ]
            },
            {
                "id": 174,
                "reportName": "Loan payments due",
                "reportType": "SMS",
                "reportSubType": "NonTriggered",
                "reportCategory": "Loan",
                "description": "All clients with an unpaid installment due on their loan between fromX and toY days",
                "coreReport": false,
                "useReport": true,
                "reportParameters": [
                    {
                        "id": 460,
                        "parameterId": 5,
                        "parameterName": "OfficeIdSelectOne",
                        "reportParameterName": "officeId"
                    },
                    {
                        "id": 461,
                        "parameterId": 6,
                        "parameterName": "loanOfficerIdSelectAll",
                        "reportParameterName": "loanOfficerId"
                    },
                    {
                        "id": 462,
                        "parameterId": 1016,
                        "parameterName": "fromXSelect",
                        "reportParameterName": "fromX"
                    },
                    {
                        "id": 463,
                        "parameterId": 1017,
                        "parameterName": "toYSelect",
                        "reportParameterName": "toY"
                    }
                ]
            },
            {
                "id": 175,
                "reportName": "Dormant Prospects",
                "reportType": "SMS",
                "reportSubType": "NonTriggered",
                "reportCategory": "Clients",
                "description": "All individuals who have not yet received a loan but were also entered into the system more than 3 months",
                "coreReport": false,
                "useReport": true,
                "reportParameters": [
                    {
                        "id": 464,
                        "parameterId": 5,
                        "parameterName": "OfficeIdSelectOne",
                        "reportParameterName": "officeId"
                    },
                    {
                        "id": 465,
                        "parameterId": 6,
                        "parameterName": "loanOfficerIdSelectAll",
                        "reportParameterName": "loanOfficerId"
                    }
                ]
            },
            {
                "id": 176,
                "reportName": "Active group leaders",
                "reportType": "SMS",
                "reportSubType": "NonTriggered",
                "reportCategory": "Clients",
                "description": "All active group chairmen",
                "coreReport": false,
                "useReport": true,
                "reportParameters": [
                    {
                        "id": 466,
                        "parameterId": 5,
                        "parameterName": "OfficeIdSelectOne",
                        "reportParameterName": "officeId"
                    },
                    {
                        "id": 467,
                        "parameterId": 6,
                        "parameterName": "loanOfficerIdSelectAll",
                        "reportParameterName": "loanOfficerId"
                    }
                ]
            },
            {
                "id": 177,
                "reportName": "Loan payments due (Overdue Loans)",
                "reportType": "SMS",
                "reportSubType": "NonTriggered",
                "reportCategory": "Loan",
                "description": "Loan Payments Due between fromX to toY days for clients in arrears between overdueX and overdueY days",
                "coreReport": false,
                "useReport": true,
                "reportParameters": [
                    {
                        "id": 468,
                        "parameterId": 5,
                        "parameterName": "OfficeIdSelectOne",
                        "reportParameterName": "officeId"
                    },
                    {
                        "id": 469,
                        "parameterId": 6,
                        "parameterName": "loanOfficerIdSelectAll",
                        "reportParameterName": "loanOfficerId"
                    },
                    {
                        "id": 470,
                        "parameterId": 1016,
                        "parameterName": "fromXSelect",
                        "reportParameterName": "fromX"
                    },
                    {
                        "id": 471,
                        "parameterId": 1017,
                        "parameterName": "toYSelect",
                        "reportParameterName": "toY"
                    },
                    {
                        "id": 472,
                        "parameterId": 1018,
                        "parameterName": "overdueXSelect",
                        "reportParameterName": "overdueX"
                    },
                    {
                        "id": 473,
                        "parameterId": 1019,
                        "parameterName": "overdueYSelect",
                        "reportParameterName": "overdueY"
                    }
                ]
            },
            {
                "id": 178,
                "reportName": "Loan payments received (Active Loans)",
                "reportType": "SMS",
                "reportSubType": "NonTriggered",
                "reportCategory": "Loan",
                "description": "Payments received in the last fromX to toY days for any loan with the status Active (on-time)",
                "coreReport": false,
                "useReport": true,
                "reportParameters": [
                    {
                        "id": 474,
                        "parameterId": 5,
                        "parameterName": "OfficeIdSelectOne",
                        "reportParameterName": "officeId"
                    },
                    {
                        "id": 475,
                        "parameterId": 6,
                        "parameterName": "loanOfficerIdSelectAll",
                        "reportParameterName": "loanOfficerId"
                    },
                    {
                        "id": 476,
                        "parameterId": 1016,
                        "parameterName": "fromXSelect",
                        "reportParameterName": "fromX"
                    },
                    {
                        "id": 477,
                        "parameterId": 1017,
                        "parameterName": "toYSelect",
                        "reportParameterName": "toY"
                    }
                ]
            },
            {
                "id": 179,
                "reportName": "Loan payments received (Overdue Loans)",
                "reportType": "SMS",
                "reportSubType": "NonTriggered",
                "reportCategory": "Loan",
                "description": "Payments received in the last fromX to toY days for any loan with the status Overdue (arrears) between overdueX and overdueY days",
                "coreReport": false,
                "useReport": true,
                "reportParameters": [
                    {
                        "id": 478,
                        "parameterId": 5,
                        "parameterName": "OfficeIdSelectOne",
                        "reportParameterName": "officeId"
                    },
                    {
                        "id": 479,
                        "parameterId": 6,
                        "parameterName": "loanOfficerIdSelectAll",
                        "reportParameterName": "loanOfficerId"
                    },
                    {
                        "id": 480,
                        "parameterId": 1016,
                        "parameterName": "fromXSelect",
                        "reportParameterName": "fromX"
                    },
                    {
                        "id": 481,
                        "parameterId": 1017,
                        "parameterName": "toYSelect",
                        "reportParameterName": "toY"
                    },
                    {
                        "id": 482,
                        "parameterId": 1018,
                        "parameterName": "overdueXSelect",
                        "reportParameterName": "overdueX"
                    },
                    {
                        "id": 483,
                        "parameterId": 1019,
                        "parameterName": "overdueYSelect",
                        "reportParameterName": "overdueY"
                    }
                ]
            },
            {
                "id": 180,
                "reportName": "Happy Birthday",
                "reportType": "SMS",
                "reportSubType": "NonTriggered",
                "reportCategory": "Clients",
                "description": "This sends a message to all clients with the status Active on their Birthday",
                "coreReport": false,
                "useReport": true,
                "reportParameters": [
                    {
                        "id": 484,
                        "parameterId": 5,
                        "parameterName": "OfficeIdSelectOne",
                        "reportParameterName": "officeId"
                    },
                    {
                        "id": 485,
                        "parameterId": 6,
                        "parameterName": "loanOfficerIdSelectAll",
                        "reportParameterName": "loanOfficerId"
                    }
                ]
            },
            {
                "id": 181,
                "reportName": "Loan fully repaid",
                "reportType": "SMS",
                "reportSubType": "NonTriggered",
                "reportCategory": "Loan",
                "description": "All loans that have been fully repaid (Closed or Overpaid) in the last fromX to toY days",
                "coreReport": false,
                "useReport": true,
                "reportParameters": [
                    {
                        "id": 486,
                        "parameterId": 5,
                        "parameterName": "OfficeIdSelectOne",
                        "reportParameterName": "officeId"
                    },
                    {
                        "id": 487,
                        "parameterId": 6,
                        "parameterName": "loanOfficerIdSelectAll",
                        "reportParameterName": "loanOfficerId"
                    },
                    {
                        "id": 488,
                        "parameterId": 1016,
                        "parameterName": "fromXSelect",
                        "reportParameterName": "fromX"
                    },
                    {
                        "id": 489,
                        "parameterId": 1017,
                        "parameterName": "toYSelect",
                        "reportParameterName": "toY"
                    }
                ]
            },
            {
                "id": 182,
                "reportName": "Loan outstanding after final instalment date",
                "reportType": "SMS",
                "reportSubType": "NonTriggered",
                "reportCategory": "Loan",
                "description": "All active loans (with an outstanding balance) between fromX to toY days after the final instalment date on their loan schedule",
                "coreReport": false,
                "useReport": true,
                "reportParameters": [
                    {
                        "id": 490,
                        "parameterId": 5,
                        "parameterName": "OfficeIdSelectOne",
                        "reportParameterName": "officeId"
                    },
                    {
                        "id": 491,
                        "parameterId": 6,
                        "parameterName": "loanOfficerIdSelectAll",
                        "reportParameterName": "loanOfficerId"
                    },
                    {
                        "id": 492,
                        "parameterId": 1016,
                        "parameterName": "fromXSelect",
                        "reportParameterName": "fromX"
                    },
                    {
                        "id": 493,
                        "parameterId": 1017,
                        "parameterName": "toYSelect",
                        "reportParameterName": "toY"
                    }
                ]
            },
            {
                "id": 183,
                "reportName": "Loan Repayment",
                "reportType": "SMS",
                "reportSubType": "Triggered",
                "description": "Loan Repayment",
                "coreReport": false,
                "useReport": false,
                "reportParameters": [
                    {
                        "id": 496,
                        "parameterId": 5,
                        "parameterName": "OfficeIdSelectOne",
                        "reportParameterName": "officeId"
                    },
                    {
                        "id": 499,
                        "parameterId": 6,
                        "parameterName": "loanOfficerIdSelectAll",
                        "reportParameterName": "loanOfficerId"
                    },
                    {
                        "id": 508,
                        "parameterId": 1023,
                        "parameterName": "SelectLoanType",
                        "reportParameterName": "loanType"
                    }
                ]
            },
            {
                "id": 184,
                "reportName": "Loan Approved",
                "reportType": "SMS",
                "reportSubType": "Triggered",
                "description": "Loan and client data of approved loan",
                "coreReport": false,
                "useReport": false,
                "reportParameters": [
                    {
                        "id": 495,
                        "parameterId": 5,
                        "parameterName": "OfficeIdSelectOne",
                        "reportParameterName": "officeId"
                    },
                    {
                        "id": 498,
                        "parameterId": 6,
                        "parameterName": "loanOfficerIdSelectAll",
                        "reportParameterName": "loanOfficerId"
                    },
                    {
                        "id": 501,
                        "parameterId": 1020,
                        "parameterName": "DefaultLoan",
                        "reportParameterName": "loanId"
                    },
                    {
                        "id": 503,
                        "parameterId": 1021,
                        "parameterName": "DefaultClient",
                        "reportParameterName": "clientId"
                    },
                    {
                        "id": 505,
                        "parameterId": 1022,
                        "parameterName": "DefaultGroup",
                        "reportParameterName": "groupId"
                    },
                    {
                        "id": 507,
                        "parameterId": 1023,
                        "parameterName": "SelectLoanType",
                        "reportParameterName": "loanType"
                    }
                ]
            },
            {
                "id": 185,
                "reportName": "Loan Rejected",
                "reportType": "SMS",
                "reportSubType": "Triggered",
                "description": "Loan and client data of rejected loan",
                "coreReport": false,
                "useReport": false,
                "reportParameters": [
                    {
                        "id": 494,
                        "parameterId": 5,
                        "parameterName": "OfficeIdSelectOne",
                        "reportParameterName": "officeId"
                    },
                    {
                        "id": 497,
                        "parameterId": 6,
                        "parameterName": "loanOfficerIdSelectAll",
                        "reportParameterName": "loanOfficerId"
                    },
                    {
                        "id": 500,
                        "parameterId": 1020,
                        "parameterName": "DefaultLoan",
                        "reportParameterName": "loanId"
                    },
                    {
                        "id": 502,
                        "parameterId": 1021,
                        "parameterName": "DefaultClient",
                        "reportParameterName": "clientId"
                    },
                    {
                        "id": 504,
                        "parameterId": 1022,
                        "parameterName": "DefaultGroup",
                        "reportParameterName": "groupId"
                    },
                    {
                        "id": 506,
                        "parameterId": 1023,
                        "parameterName": "SelectLoanType",
                        "reportParameterName": "loanType"
                    }
                ]
            },
            {
                "id": 186,
                "reportName": "Client Rejected",
                "reportType": "Table",
                "reportCategory": "Client",
                "description": "Client Rejection",
                "coreReport": false,
                "useReport": true,
                "reportParameters": [
                    {
                        "id": 509,
                        "parameterId": 5,
                        "parameterName": "OfficeIdSelectOne",
                        "reportParameterName": "officeId"
                    },
                    {
                        "id": 511,
                        "parameterId": 6,
                        "parameterName": "loanOfficerIdSelectAll",
                        "reportParameterName": "loanOfficerId"
                    },
                    {
                        "id": 513,
                        "parameterId": 1021,
                        "parameterName": "DefaultClient",
                        "reportParameterName": "clientId"
                    }
                ]
            },
            {
                "id": 187,
                "reportName": "Client Activated",
                "reportType": "SMS",
                "reportSubType": "Triggered",
                "reportCategory": "Clients",
                "description": "Client Activation",
                "coreReport": false,
                "useReport": true,
                "reportParameters": [
                    {
                        "id": 510,
                        "parameterId": 5,
                        "parameterName": "OfficeIdSelectOne",
                        "reportParameterName": "officeId"
                    },
                    {
                        "id": 512,
                        "parameterId": 6,
                        "parameterName": "loanOfficerIdSelectAll",
                        "reportParameterName": "loanOfficerId"
                    },
                    {
                        "id": 514,
                        "parameterId": 1021,
                        "parameterName": "DefaultClient",
                        "reportParameterName": "clientId"
                    }
                ]
            },
            {
                "id": 188,
                "reportName": "Savings Rejected",
                "reportType": "SMS",
                "reportSubType": "Triggered",
                "reportCategory": "Savings",
                "description": "Savings Rejected",
                "coreReport": false,
                "useReport": true,
                "reportParameters": [
                    {
                        "id": 515,
                        "parameterId": 5,
                        "parameterName": "OfficeIdSelectOne",
                        "reportParameterName": "officeId"
                    },
                    {
                        "id": 516,
                        "parameterId": 6,
                        "parameterName": "loanOfficerIdSelectAll",
                        "reportParameterName": "loanOfficerId"
                    },
                    {
                        "id": 517,
                        "parameterId": 1024,
                        "parameterName": "DefaultSavings",
                        "reportParameterName": "savingsId"
                    }
                ]
            },
            {
                "id": 189,
                "reportName": "Savings Activated",
                "reportType": "SMS",
                "reportSubType": "Triggered",
                "reportCategory": "Savings",
                "description": "Savings Activation",
                "coreReport": false,
                "useReport": true,
                "reportParameters": [
                    {
                        "id": 518,
                        "parameterId": 5,
                        "parameterName": "OfficeIdSelectOne",
                        "reportParameterName": "officeId"
                    },
                    {
                        "id": 519,
                        "parameterId": 6,
                        "parameterName": "loanOfficerIdSelectAll",
                        "reportParameterName": "loanOfficerId"
                    },
                    {
                        "id": 520,
                        "parameterId": 1024,
                        "parameterName": "DefaultSavings",
                        "reportParameterName": "savingsId"
                    }
                ]
            },
            {
                "id": 190,
                "reportName": "Savings Deposit",
                "reportType": "SMS",
                "reportSubType": "Triggered",
                "description": "Savings Deposit",
                "coreReport": false,
                "useReport": true,
                "reportParameters": [
                    {
                        "id": 521,
                        "parameterId": 5,
                        "parameterName": "OfficeIdSelectOne",
                        "reportParameterName": "officeId"
                    },
                    {
                        "id": 522,
                        "parameterId": 6,
                        "parameterName": "loanOfficerIdSelectAll",
                        "reportParameterName": "loanOfficerId"
                    },
                    {
                        "id": 523,
                        "parameterId": 1025,
                        "parameterName": "DefaultSavingsTransactionId",
                        "reportParameterName": "savingsTransactionId"
                    }
                ]
            },
            {
                "id": 191,
                "reportName": "Savings Withdrawal",
                "reportType": "SMS",
                "reportSubType": "Triggered",
                "description": "Savings Withdrawal",
                "coreReport": false,
                "useReport": true,
                "reportParameters": [
                    {
                        "id": 524,
                        "parameterId": 5,
                        "parameterName": "OfficeIdSelectOne",
                        "reportParameterName": "officeId"
                    },
                    {
                        "id": 525,
                        "parameterId": 6,
                        "parameterName": "loanOfficerIdSelectAll",
                        "reportParameterName": "loanOfficerId"
                    },
                    {
                        "id": 526,
                        "parameterId": 1025,
                        "parameterName": "DefaultSavingsTransactionId",
                        "reportParameterName": "savingsTransactionId"
                    }
                ]
            },
            {
                "id": 192,
                "reportName": "yyyy",
                "reportType": "Chart",
                "reportSubType": "Bar",
                "coreReport": false,
                "useReport": true,
                "reportParameters": [
                    {
                        "id": 527,
                        "parameterId": 1,
                        "parameterName": "startDateSelect"
                    }
                ]
            },
            {
                "id": 194,
                "reportName": "Cashflow statement",
                "reportType": "Table",
                "reportSubType": "",
                "reportCategory": "Financial Statements",
                "coreReport": false,
                "useReport": true
            },
            {
                "id": 195,
                "reportName": "active loans of a client",
                "reportType": "Table",
                "reportCategory": "Loan",
                "description": "active loans of a client",
                "coreReport": false,
                "useReport": true,
                "reportParameters": [
                    {
                        "id": 528,
                        "parameterId": 1021,
                        "parameterName": "DefaultClient",
                        "reportParameterName": "client"
                    }
                ]
            },
            {
                "id": 196,
                "reportName": "aaa",
                "reportType": "Table",
                "coreReport": false,
                "useReport": true,
                "reportParameters": [
                    {
                        "id": 529,
                        "parameterId": 1,
                        "parameterName": "startDateSelect"
                    },
                    {
                        "id": 530,
                        "parameterId": 2,
                        "parameterName": "endDateSelect"
                    }
                ]
            },
            {
                "id": 197,
                "reportName": "asdasd",
                "reportType": "Chart",
                "reportSubType": "Bar",
                "reportCategory": "asdasd",
                "description": "asdasd",
                "coreReport": false,
                "useReport": false
            },
            {
                "id": 199,
                "reportName": "loan in arrears loan officer",
                "reportType": "Pentaho",
                "reportSubType": "",
                "reportCategory": "loans",
                "coreReport": false,
                "useReport": false,
                "reportParameters": [
                    {
                        "id": 533,
                        "parameterId": 5,
                        "parameterName": "OfficeIdSelectOne"
                    },
                    {
                        "id": 531,
                        "parameterId": 6,
                        "parameterName": "loanOfficerIdSelectAll"
                    },
                    {
                        "id": 532,
                        "parameterId": 20,
                        "parameterName": "fundIdSelectAll"
                    }
                ]
            },
            {
                "id": 201,
                "reportName": "ManyTest",
                "reportType": "Table",
                "reportCategory": "test",
                "coreReport": false,
                "useReport": true
            },
            {
                "id": 202,
                "reportName": "New Report 123123",
                "reportType": "Table",
                "reportSubType": "",
                "coreReport": false,
                "useReport": false
            },
            {
                "id": 203,
                "reportName": "pagare",
                "reportType": "Pentaho",
                "reportCategory": "Client",
                "coreReport": false,
                "useReport": true,
                "reportParameters": [
                    {
                        "id": 536,
                        "parameterId": 6,
                        "parameterName": "loanOfficerIdSelectAll"
                    },
                    {
                        "id": 534,
                        "parameterId": 25,
                        "parameterName": "loanProductIdSelectAll"
                    },
                    {
                        "id": 535,
                        "parameterId": 1021,
                        "parameterName": "DefaultClient"
                    }
                ]
            },
            {
                "id": 204,
                "reportName": "A test report",
                "reportType": "Table",
                "reportCategory": "Loan",
                "coreReport": false,
                "useReport": true
            },
            {
                "id": 205,
                "reportName": "REPORT",
                "reportType": "Table",
                "reportCategory": "ttest",
                "description": "test",
                "coreReport": false,
                "useReport": false
            },
            {
                "id": 206,
                "reportName": "aa",
                "reportType": "Table",
                "coreReport": false,
                "useReport": true
            },
            {
                "id": 207,
                "reportName": "Group details",
                "reportType": "Table",
                "reportCategory": "Group",
                "description": "group info",
                "coreReport": false,
                "useReport": true,
                "reportParameters": [
                    {
                        "id": 537,
                        "parameterId": 1,
                        "parameterName": "startDateSelect"
                    },
                    {
                        "id": 539,
                        "parameterId": 2,
                        "parameterName": "endDateSelect"
                    },
                    {
                        "id": 538,
                        "parameterId": 25,
                        "parameterName": "loanProductIdSelectAll"
                    }
                ]
            },
            {
                "id": 208,
                "reportName": "Lihat BPKB",
                "reportType": "Table",
                "reportCategory": "BPKB",
                "coreReport": false,
                "useReport": true
            },
            {
                "id": 209,
                "reportName": "Group Client Listing",
                "reportType": "Table",
                "reportCategory": "Clients",
                "description": "List the Clients Groupwise",
                "coreReport": false,
                "useReport": true
            },
            {
                "id": 210,
                "reportName": "Example",
                "reportType": "Table",
                "reportCategory": "Clients",
                "description": "Mifos Example Report",
                "coreReport": false,
                "useReport": true,
                "reportParameters": [
                    {
                        "id": 552,
                        "parameterId": 1,
                        "parameterName": "startDateSelect"
                    }
                ]
            },
            {
                "id": 211,
                "reportName": "MyDemo",
                "reportType": "Table",
                "reportCategory": "Loans",
                "description": "collection s",
                "coreReport": false,
                "useReport": true
            },
            {
                "id": 212,
                "reportName": "aaaaaaa",
                "reportType": "Table",
                "coreReport": false,
                "useReport": true
            },
            {
                "id": 214,
                "reportName": "Name",
                "reportType": "Pentaho",
                "reportSubType": "",
                "coreReport": false,
                "useReport": false,
                "reportParameters": [
                    {
                        "id": 555,
                        "parameterId": 3,
                        "parameterName": "obligDateTypeSelect"
                    },
                    {
                        "id": 556,
                        "parameterId": 5,
                        "parameterName": "OfficeIdSelectOne"
                    }
                ]
            },
            {
                "id": 216,
                "reportName": "my_test",
                "reportType": "Table",
                "reportCategory": "loans",
                "description": "repayments",
                "coreReport": false,
                "useReport": true
            },
            {
                "id": 218,
                "reportName": "RamTest",
                "reportType": "Table",
                "reportSubType": "",
                "coreReport": false,
                "useReport": true
            },
            {
                "id": 219,
                "reportName": "New Report",
                "reportType": "Table",
                "reportSubType": "",
                "coreReport": false,
                "useReport": false
            },
            {
                "id": 220,
                "reportName": "ClientReporrrt",
                "reportType": "Chart",
                "reportSubType": "Bar",
                "coreReport": false,
                "useReport": true,
                "reportParameters": [
                    {
                        "id": 645,
                        "parameterId": 5,
                        "parameterName": "OfficeIdSelectOne"
                    }
                ]
            },
            {
                "id": 221,
                "reportName": "my_accounts",
                "reportType": "Table",
                "reportCategory": "Clients",
                "description": "Custom list of clients",
                "coreReport": false,
                "useReport": false
            },
            {
                "id": 222,
                "reportName": "Chart of Accounts (View)",
                "reportType": "Table",
                "reportCategory": "Accounting",
                "description": "Detailed Transaction of GLs",
                "coreReport": false,
                "useReport": true
            },
            {
                "id": 223,
                "reportName": "Loan List (Test)",
                "reportType": "Table",
                "reportCategory": "Loan",
                "description": "Just a list",
                "coreReport": false,
                "useReport": true
            },
            {
                "id": 224,
                "reportName": "Tst Report",
                "reportType": "Table",
                "coreReport": false,
                "useReport": true
            },
            {
                "id": 225,
                "reportName": "Active loan",
                "reportType": "Table",
                "reportCategory": "Active",
                "coreReport": false,
                "useReport": true,
                "reportParameters": [
                    {
                        "id": 559,
                        "parameterId": 1,
                        "parameterName": "startDateSelect",
                        "reportParameterName": ""
                    },
                    {
                        "id": 558,
                        "parameterId": 2,
                        "parameterName": "endDateSelect"
                    }
                ]
            },
            {
                "id": 226,
                "reportName": "vv",
                "reportType": "Chart",
                "reportSubType": "Bar",
                "coreReport": false,
                "useReport": false
            },
            {
                "id": 227,
                "reportName": "New Clients",
                "reportType": "Pentaho",
                "reportSubType": "",
                "reportCategory": "Clients",
                "coreReport": false,
                "useReport": true
            },
            {
                "id": 228,
                "reportName": "res",
                "reportType": "Pentaho",
                "reportSubType": "",
                "reportCategory": "product",
                "coreReport": false,
                "useReport": true
            },
            {
                "id": 229,
                "reportName": "y",
                "reportType": "Table",
                "reportCategory": "Savings",
                "description": "Sav",
                "coreReport": false,
                "useReport": true,
                "reportParameters": [
                    {
                        "id": 561,
                        "parameterId": 1,
                        "parameterName": "startDateSelect",
                        "reportParameterName": "From d"
                    },
                    {
                        "id": 560,
                        "parameterId": 2,
                        "parameterName": "endDateSelect",
                        "reportParameterName": "end d"
                    }
                ]
            },
            {
                "id": 230,
                "reportName": "我的测试",
                "reportType": "Table",
                "reportSubType": "",
                "reportCategory": "Loan",
                "description": "Just\nAn\nExample",
                "coreReport": false,
                "useReport": false,
                "reportParameters": [
                    {
                        "id": 562,
                        "parameterId": 5,
                        "parameterName": "OfficeIdSelectOne",
                        "reportParameterName": ""
                    },
                    {
                        "id": 563,
                        "parameterId": 6,
                        "parameterName": "loanOfficerIdSelectAll",
                        "reportParameterName": ""
                    }
                ]
            },
            {
                "id": 231,
                "reportName": "TTT",
                "reportType": "Chart",
                "reportSubType": "Pie",
                "reportCategory": "TTT",
                "description": "TTT",
                "coreReport": false,
                "useReport": true
            },
            {
                "id": 232,
                "reportName": "portfolio james",
                "reportType": "Table",
                "reportCategory": "gl",
                "description": "gl reporting",
                "coreReport": false,
                "useReport": true,
                "reportParameters": [
                    {
                        "id": 566,
                        "parameterId": 1,
                        "parameterName": "startDateSelect"
                    },
                    {
                        "id": 565,
                        "parameterId": 2,
                        "parameterName": "endDateSelect"
                    },
                    {
                        "id": 564,
                        "parameterId": 1008,
                        "parameterName": "SelectGLAccountNO"
                    }
                ]
            },
            {
                "id": 233,
                "reportName": "LL Test",
                "reportType": "Table",
                "reportCategory": "Test",
                "coreReport": false,
                "useReport": true
            },
            {
                "id": 235,
                "reportName": "tes5",
                "reportType": "Pentaho",
                "reportCategory": "Loan",
                "coreReport": false,
                "useReport": true,
                "reportParameters": [
                    {
                        "id": 572,
                        "parameterId": 1,
                        "parameterName": "startDateSelect"
                    },
                    {
                        "id": 573,
                        "parameterId": 2,
                        "parameterName": "endDateSelect"
                    }
                ]
            },
            {
                "id": 236,
                "reportName": "BSQ_LMS_REPORT",
                "reportType": "Table",
                "reportCategory": "clients",
                "description": "agabsgibaoigbioabg",
                "coreReport": false,
                "useReport": true,
                "reportParameters": [
                    {
                        "id": 574,
                        "parameterId": 5,
                        "parameterName": "OfficeIdSelectOne"
                    }
                ]
            },
            {
                "id": 237,
                "reportName": "TestMisfos",
                "reportType": "Table",
                "reportSubType": "",
                "reportCategory": "User",
                "coreReport": false,
                "useReport": true
            },
            {
                "id": 238,
                "reportName": "TestMifos",
                "reportType": "Chart",
                "reportSubType": "Bar",
                "reportCategory": "Test",
                "coreReport": false,
                "useReport": false
            },
            {
                "id": 239,
                "reportName": "Prestamo Her",
                "reportType": "Pentaho",
                "reportSubType": "",
                "reportCategory": "Verificar Atrasos",
                "description": "Atrasos",
                "coreReport": false,
                "useReport": true,
                "reportParameters": [
                    {
                        "id": 575,
                        "parameterId": 5,
                        "parameterName": "OfficeIdSelectOne"
                    }
                ]
            },
            {
                "id": 240,
                "reportName": "list_of_products",
                "reportType": "Table",
                "reportCategory": "list_test",
                "description": "checking of general qurey working",
                "coreReport": false,
                "useReport": true
            },
            {
                "id": 241,
                "reportName": "list_of_products(params))",
                "reportType": "Table",
                "reportCategory": "asfdas",
                "description": "asfafas",
                "coreReport": false,
                "useReport": true
            },
            {
                "id": 242,
                "reportName": "sad_man",
                "reportType": "Table",
                "reportCategory": "asdsad",
                "description": "asdsadasd",
                "coreReport": false,
                "useReport": true,
                "reportParameters": [
                    {
                        "id": 576,
                        "parameterId": 1,
                        "parameterName": "startDateSelect"
                    },
                    {
                        "id": 577,
                        "parameterId": 2,
                        "parameterName": "endDateSelect"
                    }
                ]
            },
            {
                "id": 243,
                "reportName": "new pending report list",
                "reportType": "Table",
                "reportCategory": "sadsad",
                "description": "asdsadaf",
                "coreReport": false,
                "useReport": true
            },
            {
                "id": 244,
                "reportName": "test_chart",
                "reportType": "Table",
                "reportCategory": "asdasd",
                "description": "asdsada",
                "coreReport": false,
                "useReport": true
            },
            {
                "id": 245,
                "reportName": "CCC",
                "reportType": "Table",
                "coreReport": false,
                "useReport": true
            },
            {
                "id": 247,
                "reportName": "Cash Report",
                "reportType": "Pentaho",
                "reportCategory": "Teller Report",
                "description": "Daily Teller Transaction Report",
                "coreReport": false,
                "useReport": true,
                "reportParameters": [
                    {
                        "id": 590,
                        "parameterId": 5,
                        "parameterName": "OfficeIdSelectOne",
                        "reportParameterName": "Office"
                    },
                    {
                        "id": 589,
                        "parameterId": 10,
                        "parameterName": "currencyIdSelectAll",
                        "reportParameterName": "Currency"
                    },
                    {
                        "id": 588,
                        "parameterId": 1009,
                        "parameterName": "asOnDate",
                        "reportParameterName": "Report As On"
                    },
                    {
                        "id": 586,
                        "parameterId": 1011,
                        "parameterName": "tellerIdSelectOne",
                        "reportParameterName": "Teller"
                    },
                    {
                        "id": 587,
                        "parameterId": 1013,
                        "parameterName": "currencyCodeSelectOne",
                        "reportParameterName": "Transaction"
                    }
                ]
            },
            {
                "id": 248,
                "reportName": "Passboook",
                "reportType": "Pentaho",
                "reportCategory": "Savings Passbook",
                "description": "Savings Passbook",
                "coreReport": false,
                "useReport": true,
                "reportParameters": [
                    {
                        "id": 592,
                        "parameterId": 1,
                        "parameterName": "startDateSelect",
                        "reportParameterName": "From Date"
                    },
                    {
                        "id": 593,
                        "parameterId": 2,
                        "parameterName": "endDateSelect",
                        "reportParameterName": "To Date"
                    },
                    {
                        "id": 595,
                        "parameterId": 5,
                        "parameterName": "OfficeIdSelectOne",
                        "reportParameterName": "Office"
                    },
                    {
                        "id": 594,
                        "parameterId": 1004,
                        "parameterName": "selectAccount",
                        "reportParameterName": "Account Number"
                    }
                ]
            },
            {
                "id": 249,
                "reportName": "Transactions_Test",
                "reportType": "Table",
                "reportCategory": "Transactions",
                "description": "Loans",
                "coreReport": false,
                "useReport": true
            },
            {
                "id": 250,
                "reportName": "version",
                "reportType": "Table",
                "coreReport": false,
                "useReport": true
            },
            {
                "id": 251,
                "reportName": "count of client1",
                "reportType": "Table",
                "reportCategory": "client",
                "coreReport": false,
                "useReport": true
            },
            {
                "id": 252,
                "reportName": "Test Chart",
                "reportType": "Chart",
                "reportSubType": "Bar",
                "reportCategory": "Test Chart",
                "coreReport": false,
                "useReport": true
            },
            {
                "id": 255,
                "reportName": "asaving",
                "reportType": "Table",
                "coreReport": false,
                "useReport": true,
                "reportParameters": [
                    {
                        "id": 603,
                        "parameterId": 1,
                        "parameterName": "startDateSelect",
                        "reportParameterName": "startDate"
                    },
                    {
                        "id": 604,
                        "parameterId": 2,
                        "parameterName": "endDateSelect",
                        "reportParameterName": "endDate"
                    },
                    {
                        "id": 602,
                        "parameterId": 5,
                        "parameterName": "OfficeIdSelectOne",
                        "reportParameterName": "officeId"
                    }
                ]
            },
            {
                "id": 256,
                "reportName": "asaving1",
                "reportType": "Table",
                "coreReport": false,
                "useReport": true,
                "reportParameters": [
                    {
                        "id": 605,
                        "parameterId": 1,
                        "parameterName": "startDateSelect",
                        "reportParameterName": "startDate"
                    },
                    {
                        "id": 607,
                        "parameterId": 2,
                        "parameterName": "endDateSelect",
                        "reportParameterName": "endDate"
                    },
                    {
                        "id": 606,
                        "parameterId": 5,
                        "parameterName": "OfficeIdSelectOne",
                        "reportParameterName": "officeId"
                    }
                ]
            },
            {
                "id": 257,
                "reportName": "kirikou1",
                "reportType": "Table",
                "coreReport": false,
                "useReport": true
            },
            {
                "id": 258,
                "reportName": "Loan Repayment Schedule",
                "reportType": "Table",
                "reportCategory": "Loan",
                "description": "repayment schedules",
                "coreReport": false,
                "useReport": true,
                "reportParameters": [
                    {
                        "id": 609,
                        "parameterId": 1020,
                        "parameterName": "DefaultLoan",
                        "reportParameterName": "loanId"
                    }
                ]
            },
            {
                "id": 259,
                "reportName": "RELATÓRIOS NESPECRED",
                "reportType": "Chart",
                "reportSubType": "Bar",
                "reportCategory": "ESPECIAL",
                "description": "DOCUMENTOS",
                "coreReport": false,
                "useReport": true
            },
            {
                "id": 260,
                "reportName": "Clientes",
                "reportType": "Chart",
                "reportSubType": "Bar",
                "reportCategory": "Eejmplo de Jesus P.",
                "description": "Consulta tabla cliente",
                "coreReport": false,
                "useReport": true,
                "reportParameters": [
                    {
                        "id": 610,
                        "parameterId": 1,
                        "parameterName": "startDateSelect"
                    }
                ]
            },
            {
                "id": 261,
                "reportName": "adsf",
                "reportType": "Pentaho",
                "reportCategory": "adsf",
                "description": "asdfdsaf",
                "coreReport": false,
                "useReport": false
            },
            {
                "id": 262,
                "reportName": "General ledger listing",
                "reportType": "Table",
                "reportCategory": "Accounting",
                "coreReport": false,
                "useReport": true
            },
            {
                "id": 263,
                "reportName": "members listing",
                "reportType": "Table",
                "reportCategory": "client report",
                "coreReport": false,
                "useReport": true
            },
            {
                "id": 264,
                "reportName": "Balance sheet test",
                "reportType": "Table",
                "reportCategory": "Accounting",
                "coreReport": false,
                "useReport": true,
                "reportParameters": [
                    {
                        "id": 611,
                        "parameterId": 2,
                        "parameterName": "endDateSelect"
                    },
                    {
                        "id": 612,
                        "parameterId": 5,
                        "parameterName": "OfficeIdSelectOne"
                    }
                ]
            },
            {
                "id": 265,
                "reportName": "test50",
                "reportType": "Table",
                "coreReport": false,
                "useReport": true,
                "reportParameters": [
                    {
                        "id": 613,
                        "parameterId": 5,
                        "parameterName": "OfficeIdSelectOne"
                    }
                ]
            },
            {
                "id": 266,
                "reportName": "mmpesa",
                "reportType": "Table",
                "coreReport": false,
                "useReport": true
            },
            {
                "id": 267,
                "reportName": "Income Statement Test",
                "reportType": "Table",
                "reportCategory": "Accounting",
                "coreReport": false,
                "useReport": true,
                "reportParameters": [
                    {
                        "id": 616,
                        "parameterId": 1,
                        "parameterName": "startDateSelect"
                    },
                    {
                        "id": 615,
                        "parameterId": 2,
                        "parameterName": "endDateSelect"
                    },
                    {
                        "id": 614,
                        "parameterId": 5,
                        "parameterName": "OfficeIdSelectOne"
                    }
                ]
            },
            {
                "id": 268,
                "reportName": "Trial Balance Test",
                "reportType": "Table",
                "reportCategory": "Accounting",
                "coreReport": false,
                "useReport": true,
                "reportParameters": [
                    {
                        "id": 618,
                        "parameterId": 1,
                        "parameterName": "startDateSelect"
                    },
                    {
                        "id": 619,
                        "parameterId": 2,
                        "parameterName": "endDateSelect"
                    },
                    {
                        "id": 617,
                        "parameterId": 5,
                        "parameterName": "OfficeIdSelectOne"
                    }
                ]
            },
            {
                "id": 269,
                "reportName": "savings",
                "reportType": "Table",
                "coreReport": false,
                "useReport": true
            },
            {
                "id": 270,
                "reportName": "s_trial",
                "reportType": "Table",
                "coreReport": false,
                "useReport": true
            },
            {
                "id": 271,
                "reportName": "depositsR",
                "reportType": "Table",
                "coreReport": false,
                "useReport": true
            },
            {
                "id": 272,
                "reportName": "savins_act",
                "reportType": "Table",
                "coreReport": false,
                "useReport": true
            },
            {
                "id": 273,
                "reportName": "sv trial",
                "reportType": "Table",
                "coreReport": false,
                "useReport": true,
                "reportParameters": [
                    {
                        "id": 627,
                        "parameterId": 1,
                        "parameterName": "startDateSelect"
                    },
                    {
                        "id": 628,
                        "parameterId": 2,
                        "parameterName": "endDateSelect"
                    }
                ]
            },
            {
                "id": 274,
                "reportName": "svng",
                "reportType": "Table",
                "coreReport": false,
                "useReport": true,
                "reportParameters": [
                    {
                        "id": 623,
                        "parameterId": 1,
                        "parameterName": "startDateSelect"
                    },
                    {
                        "id": 624,
                        "parameterId": 2,
                        "parameterName": "endDateSelect"
                    }
                ]
            },
            {
                "id": 276,
                "reportName": "svuser",
                "reportType": "Table",
                "coreReport": false,
                "useReport": false,
                "reportParameters": [
                    {
                        "id": 625,
                        "parameterId": 1,
                        "parameterName": "startDateSelect"
                    },
                    {
                        "id": 626,
                        "parameterId": 2,
                        "parameterName": "endDateSelect"
                    }
                ]
            },
            {
                "id": 277,
                "reportName": "Products List",
                "reportType": "Table",
                "reportCategory": "Saving",
                "description": "تفاصيل وارصدة المنتجات",
                "coreReport": false,
                "useReport": true,
                "reportParameters": [
                    {
                        "id": 631,
                        "parameterId": 1,
                        "parameterName": "startDateSelect",
                        "reportParameterName": "fromDate"
                    },
                    {
                        "id": 629,
                        "parameterId": 2,
                        "parameterName": "endDateSelect",
                        "reportParameterName": "toDate"
                    },
                    {
                        "id": 630,
                        "parameterId": 5,
                        "parameterName": "OfficeIdSelectOne",
                        "reportParameterName": "selectOffice"
                    },
                    {
                        "id": 634,
                        "parameterId": 1005,
                        "parameterName": "savingsProductIdSelectAll",
                        "reportParameterName": "selectProduct"
                    }
                ]
            },
            {
                "id": 278,
                "reportName": "خلاصة المنتجات",
                "reportType": "Pentaho",
                "reportCategory": "saving",
                "coreReport": false,
                "useReport": true,
                "reportParameters": [
                    {
                        "id": 637,
                        "parameterId": 1,
                        "parameterName": "startDateSelect",
                        "reportParameterName": "fromDate"
                    },
                    {
                        "id": 638,
                        "parameterId": 2,
                        "parameterName": "endDateSelect",
                        "reportParameterName": "toDate"
                    },
                    {
                        "id": 635,
                        "parameterId": 5,
                        "parameterName": "OfficeIdSelectOne",
                        "reportParameterName": "selectOffice"
                    },
                    {
                        "id": 636,
                        "parameterId": 1005,
                        "parameterName": "savingsProductIdSelectAll",
                        "reportParameterName": "selectProduct"
                    }
                ]
            },
            {
                "id": 279,
                "reportName": "abdo",
                "reportType": "Pentaho",
                "coreReport": false,
                "useReport": true,
                "reportParameters": [
                    {
                        "id": 639,
                        "parameterId": 1,
                        "parameterName": "startDateSelect"
                    },
                    {
                        "id": 641,
                        "parameterId": 2,
                        "parameterName": "endDateSelect"
                    },
                    {
                        "id": 642,
                        "parameterId": 5,
                        "parameterName": "OfficeIdSelectOne"
                    },
                    {
                        "id": 640,
                        "parameterId": 1005,
                        "parameterName": "savingsProductIdSelectAll"
                    }
                ]
            },
            {
                "id": 280,
                "reportName": "rrrrr",
                "reportType": "Chart",
                "reportSubType": "Pie",
                "coreReport": false,
                "useReport": false,
                "reportParameters": [
                    {
                        "id": 643,
                        "parameterId": 3,
                        "parameterName": "obligDateTypeSelect",
                        "reportParameterName": "true"
                    },
                    {
                        "id": 644,
                        "parameterId": 10,
                        "parameterName": "currencyIdSelectAll",
                        "reportParameterName": "true"
                    }
                ]
            },
            {
                "id": 282,
                "reportName": "statement bybastit",
                "reportType": "Table",
                "reportCategory": "statement bybastit",
                "description": "statement generative",
                "coreReport": false,
                "useReport": true,
                "reportParameters": [
                    {
                        "id": 647,
                        "parameterId": 1004,
                        "parameterName": "selectAccount"
                    }
                ]
            },
            {
                "id": 287,
                "reportName": "testCustomer",
                "reportType": "Table",
                "coreReport": false,
                "useReport": true
            },
            {
                "id": 289,
                "reportName": "Saksham",
                "reportType": "Table",
                "reportSubType": "",
                "reportCategory": "Loan",
                "description": "Just\nAn\nExample",
                "coreReport": false,
                "useReport": false,
                "reportParameters": [
                    {
                        "id": 648,
                        "parameterId": 5,
                        "parameterName": "OfficeIdSelectOne",
                        "reportParameterName": ""
                    },
                    {
                        "id": 649,
                        "parameterId": 6,
                        "parameterName": "loanOfficerIdSelectAll",
                        "reportParameterName": ""
                    }
                ]
            },
            {
                "id": 295,
                "reportName": "Client Data",
                "reportType": "Table",
                "coreReport": false,
                "useReport": false
            },
            {
                "id": 297,
                "reportName": "Expected Payment By Date Plus",
                "reportType": "Table",
                "reportCategory": "Loan",
                "coreReport": false,
                "useReport": true,
                "reportParameters": [
                    {
                        "id": 656,
                        "parameterId": 1,
                        "parameterName": "startDateSelect"
                    },
                    {
                        "id": 655,
                        "parameterId": 2,
                        "parameterName": "endDateSelect"
                    },
                    {
                        "id": 657,
                        "parameterId": 5,
                        "parameterName": "OfficeIdSelectOne"
                    },
                    {
                        "id": 654,
                        "parameterId": 6,
                        "parameterName": "loanOfficerIdSelectAll"
                    }
                ]
            },
            {
                "id": 298,
                "reportName": "test11",
                "reportType": "Table",
                "coreReport": false,
                "useReport": true,
                "reportParameters": [
                    {
                        "id": 659,
                        "parameterId": 1,
                        "parameterName": "startDateSelect"
                    },
                    {
                        "id": 660,
                        "parameterId": 2,
                        "parameterName": "endDateSelect"
                    },
                    {
                        "id": 658,
                        "parameterId": 1004,
                        "parameterName": "selectAccount"
                    }
                ]
            },
            {
                "id": 299,
                "reportName": "test transaction",
                "reportType": "Table",
                "reportCategory": "Loans",
                "coreReport": false,
                "useReport": true,
                "reportParameters": [
                    {
                        "id": 663,
                        "parameterId": 1,
                        "parameterName": "startDateSelect"
                    },
                    {
                        "id": 662,
                        "parameterId": 2,
                        "parameterName": "endDateSelect"
                    },
                    {
                        "id": 661,
                        "parameterId": 1004,
                        "parameterName": "selectAccount"
                    }
                ]
            },
            {
                "id": 300,
                "reportName": "Testing new",
                "reportType": "Table",
                "reportCategory": "Loans",
                "coreReport": false,
                "useReport": true,
                "reportParameters": [
                    {
                        "id": 664,
                        "parameterId": 1,
                        "parameterName": "startDateSelect"
                    },
                    {
                        "id": 666,
                        "parameterId": 2,
                        "parameterName": "endDateSelect"
                    },
                    {
                        "id": 665,
                        "parameterId": 1004,
                        "parameterName": "selectAccount"
                    }
                ]
            },
            {
                "id": 301,
                "reportName": "Active query",
                "reportType": "Table",
                "coreReport": false,
                "useReport": true,
                "reportParameters": [
                    {
                        "id": 668,
                        "parameterId": 1,
                        "parameterName": "startDateSelect"
                    },
                    {
                        "id": 667,
                        "parameterId": 5,
                        "parameterName": "OfficeIdSelectOne"
                    }
                ]
            },
            {
                "id": 302,
                "reportName": "DaySheet Query",
                "reportType": "Table",
                "coreReport": false,
                "useReport": true,
                "reportParameters": [
                    {
                        "id": 670,
                        "parameterId": 1,
                        "parameterName": "startDateSelect"
                    },
                    {
                        "id": 669,
                        "parameterId": 5,
                        "parameterName": "OfficeIdSelectOne"
                    }
                ]
            },
            {
                "id": 303,
                "reportName": "Demand Sheet Query",
                "reportType": "Table",
                "coreReport": false,
                "useReport": true,
                "reportParameters": [
                    {
                        "id": 672,
                        "parameterId": 1,
                        "parameterName": "startDateSelect"
                    },
                    {
                        "id": 671,
                        "parameterId": 2,
                        "parameterName": "endDateSelect"
                    },
                    {
                        "id": 673,
                        "parameterId": 5,
                        "parameterName": "OfficeIdSelectOne"
                    }
                ]
            },
            {
                "id": 304,
                "reportName": "Completely New Report",
                "reportType": "Table",
                "reportSubType": "",
                "reportCategory": "Loan",
                "description": "Just\nAn\nExample",
                "coreReport": false,
                "useReport": false,
                "reportParameters": [
                    {
                        "id": 675,
                        "parameterId": 5,
                        "parameterName": "OfficeIdSelectOne",
                        "reportParameterName": ""
                    },
                    {
                        "id": 674,
                        "parameterId": 6,
                        "parameterName": "loanOfficerIdSelectAll",
                        "reportParameterName": ""
                    }
                ]
            },
            {
                "id": 305,
                "reportName": "testing  ac",
                "reportType": "Table",
                "coreReport": false,
                "useReport": true,
                "reportParameters": [
                    {
                        "id": 676,
                        "parameterId": 5,
                        "parameterName": "OfficeIdSelectOne"
                    }
                ]
            },
            {
                "id": 306,
                "reportName": "sample test",
                "reportType": "Table",
                "coreReport": false,
                "useReport": true,
                "reportParameters": [
                    {
                        "id": 679,
                        "parameterId": 1,
                        "parameterName": "startDateSelect"
                    },
                    {
                        "id": 678,
                        "parameterId": 5,
                        "parameterName": "OfficeIdSelectOne"
                    }
                ]
            },
            {
                "id": 307,
                "reportName": "daybook test",
                "reportType": "Table",
                "coreReport": false,
                "useReport": true,
                "reportParameters": [
                    {
                        "id": 683,
                        "parameterId": 1,
                        "parameterName": "startDateSelect"
                    },
                    {
                        "id": 681,
                        "parameterId": 5,
                        "parameterName": "OfficeIdSelectOne"
                    }
                ]
            }
        ]

    }

})();