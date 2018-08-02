(function () {
    'use strict';

    angular.module('selfService')
        .controller('RunReportCtrl', ['$http', '$scope', '$rootScope', '$stateParams', '$resource', '$location', 'dateFilter', 'BASE_URL', '$sce', 'RunReportService', RunReportCtrl]);
    
    function RunReportCtrl($http, $scope, $rootScope, $stateParams, $resource, $location, dateFilter, BASE_URL, $sce, RunReportService) {
        var vm = this;

        vm.isCollapsed = false;
        vm.hideTable = true;
        vm.hidePentahoReport = true;
        vm.hideChart = true;
        vm.piechart = false;
        vm.barchart = false;
        vm.formData = {};
        vm.reportParams = new Array();
        vm.reportDateParams = new Array();
        vm.reqFields = new Array();
        vm.reportTextParams = new Array();
        vm.reportData = {};
        vm.reportData.columnHeaders = [];
        vm.reportData.data = [];
        vm.baseUrl = "";
        vm.csvData = [];
        vm.row = [];
        vm.reportName = $stateParams.name;
        vm.reportType = $stateParams.type;
        vm.reportId = $stateParams.reportId;
        vm.pentahoReportParameters = [];
        vm.type = "pie";


        vm.getSuccuessFunction = getSuccuessFunction;
        vm.getDependencies = getDependencies;
        vm.checkStatus = checkStatus;
        vm.runReport = runReport;
        vm.isDecimal = isDecimal;

        if (vm.reportType == 'Pentaho') {
            vm.formData.outputType = 'HTML';
        }

            RunReportService.reports().getReport({
                reportSource: 'FullParameterList',
                parameterType: true,
                R_reportListing: "'" + $stateParams.name + "'"
            }).$promise().then(function(data) {
                for (var i in data.data) {
                    var temp = {
                        name: data.data[i].row[0],
                        variable: data.data[i].row[1],
                        label: data.data[i].row[2],
                        displayType: data.data[i].row[3],
                        formatType: data.data[i].row[4],
                        defaultVal: data.data[i].row[5],
                        selectOne: data.data[i].row[6],
                        selectAll: data.data[i].row[7],
                        parentParameterName: data.data[i].row[8],
                        inputName: "R_" + data.data[i].row[1] //model name
                    };
                    vm.reqFields.push(temp);
                    if (temp.displayType == 'select' && temp.parentParameterName == null) {
                        intializeParams(temp, {});
                    } else if (temp.displayType == 'date') {
                        vm.reportDateParams.push(temp);
                    } else if (temp.displayType == 'text') {
                        vm.reportTextParams.push(temp);
                    }
                }

            });


        if (vm.reportType == 'Pentaho') {
            RunReportService.reports().get({id: vm.reportId, fields: 'reportParameters'}, function (data) {
                vm.pentahoReportParameters = data.reportParameters || [];
            });
        }

        function getSuccuessFunction(paramData) {
            var tempDataObj = new Object();
            var successFunction = function (data) {
                var selectData = [];
                var isExistedRecord = false;
                for (var i in data.data) {
                    selectData.push({id: data.data[i].row[0], name: data.data[i].row[1]});
                }
                for (var j in vm.reportParams) {
                    if (vm.reportParams[j].name == paramData.name) {
                        vm.reportParams[j].selectOptions = selectData;
                        isExistedRecord = true;
                    }
                }
                if (!isExistedRecord) {
                    if (paramData.selectAll == 'Y') {
                        selectData.push({id: "-1", name: "All"});
                    }
                    paramData.selectOptions = selectData;
                    vm.reportParams.push(paramData);
                }
            };
            return successFunction;
        }

        function intializeParams(paramData, params) {
            vm.errorStatus = undefined;
            vm.errorDetails = [];
            params.reportSource = paramData.name;
            params.parameterType = true;
            var successFunction = getSuccuessFunction(paramData);
            RunReportService.reports().getReport(params, successFunction);
        }

        function getDependencies(paramData) {
            for (var i = 0; i < vm.reqFields.length; i++) {
                var temp = vm.reqFields[i];
                if (temp.parentParameterName == paramData.name) {
                    if (temp.displayType == 'select') {
                        var parentParamValue = this.formData[paramData.inputName];
                        if (parentParamValue != undefined) {
                            eval("var params={};params." + paramData.inputName + "='" + parentParamValue + "';");
                            intializeParams(temp, params);
                        }
                    } else if (temp.displayType == 'date') {
                        vm.reportDateParams.push(temp);
                    }
                }
            }
        }

        function checkStatus() {
            var collapsed = false;
            if (vm.isCollapsed) {
                collapsed = true;
            }
            return collapsed;
        }

        function invalidDate(checkDate) {
            // validates for yyyy-mm-dd returns true if invalid, false is valid
            var dateformat = /^\d{4}(\-|\/|\.)\d{1,2}\1\d{1,2}$/;

            if (!(dateformat.test(checkDate))) {
                return true;
            } else {
                var dyear = checkDate.substring(0, 4);
                var dmonth = checkDate.substring(5, 7) - 1;
                var dday = checkDate.substring(8);

                var newDate = new Date(dyear, dmonth, dday);
                return !((dday == newDate.getDate()) && (dmonth == newDate.getMonth()) && (dyear == newDate.getFullYear()));
            }
        }

        function removeErrors() {
            var $inputs = $(':input');
            $inputs.each(function () {
                $(this).removeClass("validationerror");
            });
        }

        function parameterValidationErrors() {
            var tmpStartDate = "";
            var tmpEndDate = "";
            vm.errorDetails = [];
            for (var i in vm.reqFields) {
                var paramDetails = vm.reqFields[i];
                switch (paramDetails.displayType) {
                    case "select":
                        var selectedVal = vm.formData[paramDetails.inputName];
                        if (selectedVal == undefined || selectedVal == 0) {
                            var fieldId = '#' + paramDetails.inputName;
                            $(fieldId).addClass("validationerror");
                            var errorObj = new Object();
                            errorObj.field = paramDetails.inputName;
                            errorObj.code = 'error.message.report.parameter.required';
                            errorObj.args = {params: []};
                            errorObj.args.params.push({value: paramDetails.label});
                            vm.errorDetails.push(errorObj);
                        }
                        break;
                    case "date":
                        var tmpDate = vm.formData[paramDetails.inputName];
                        if (tmpDate == undefined || !(tmpDate > "")) {
                            fieldId = '#' + paramDetails.inputName;
                            $(fieldId).addClass("validationerror");
                            errorObj = new Object();
                            errorObj.field = paramDetails.inputName;
                            errorObj.code = 'error.message.report.parameter.required';
                            errorObj.args = {params: []};
                            errorObj.args.params.push({value: paramDetails.label});
                            vm.errorDetails.push(errorObj);
                        }
                        if (tmpDate && invalidDate(tmpDate) == true) {
                            fieldId = '#' + paramDetails.inputName;
                            $(fieldId).addClass("validationerror");
                            errorObj = new Object();
                            errorObj.field = paramDetails.inputName;
                            errorObj.code = 'error.message.report.invalid.value.for.parameter';
                            errorObj.args = {params: []};
                            errorObj.args.params.push({value: paramDetails.label});
                            vm.errorDetails.push(errorObj);
                        }

                        if (paramDetails.variable == "startDate") tmpStartDate = tmpDate;
                        if (paramDetails.variable == "endDate") tmpEndDate = tmpDate;
                        break;
                    case "text":
                        selectedVal = vm.formData[paramDetails.inputName];
                        if (selectedVal == undefined || selectedVal == 0) {
                            fieldId = '#' + paramDetails.inputName;
                            $(fieldId).addClass("validationerror");
                            errorObj = new Object();
                            errorObj.field = paramDetails.inputName;
                            errorObj.code = 'error.message.report.parameter.required';
                            errorObj.args = {params: []};
                            errorObj.args.params.push({value: paramDetails.label});
                            vm.errorDetails.push(errorObj);
                        }
                        break;
                    default:
                        errorObj = new Object();
                        errorObj.field = paramDetails.inputName;
                        errorObj.code = 'error.message.report.parameter.invalid';
                        errorObj.args = {params: []};
                        errorObj.args.params.push({value: paramDetails.label});
                        vm.errorDetails.push(errorObj);
                        break;
                }
            }
            if (tmpStartDate > "" && tmpEndDate > "") {
                if (tmpStartDate > tmpEndDate) {
                    errorObj = new Object();
                    errorObj.field = paramDetails.inputName;
                    errorObj.code = 'error.message.report.incorrect.values.for.date.fields';
                    errorObj.args = {params: []};
                    errorObj.args.params.push({value: paramDetails.label});
                    vm.errorDetails.push(errorObj);
                }
            }


        }

        function buildReportParms() {
            var paramCount = 1;
            var reportParams = "";
            for (var i = 0; i < vm.reqFields.length; i++) {
                var reqField = vm.reqFields[i];
                for (var j = 0; j < vm.pentahoReportParameters.length; j++) {
                    var tempParam = vm.pentahoReportParameters[j];
                    if (reqField.name == tempParam.parameterName) {
                        var paramName = "R_" + tempParam.reportParameterName;
                        if (paramCount > 1) reportParams += "&"
                        reportParams += encodeURIComponent(paramName) + "=" + encodeURIComponent(vm.formData[vm.reqFields[i].inputName]);
                        paramCount = paramCount + 1;
                    }
                }
            }
            return reportParams;
        }

        function isDecimal(index) {
            if(vm.reportData.columnHeaders && vm.reportData.columnHeaders.length > 0){
                for(var i=0; i<vm.reportData.columnHeaders.length; i++){
                    if(vm.reportData.columnHeaders[index].columnType == 'DECIMAL'){
                        return true;
                    }
                }
            }
            return false;
        }

        function runReport() {
            //clear the previous errors
            vm.errorDetails = [];
            removeErrors();

            //update date fields with proper dateformat
            for (var i in vm.reportDateParams) {
                if (vm.formData[vm.reportDateParams[i].inputName]) {
                    vm.formData[vm.reportDateParams[i].inputName] = dateFilter(vm.formData[vm.reportDateParams[i].inputName], 'yyyy-MM-dd');
                }
            }

            //Custom validation for report parameters
            parameterValidationErrors();

            if (vm.errorDetails.length == 0) {
                vm.isCollapsed = true;
                switch (vm.reportType) {
                    case "Table":
                    case "SMS":
                        vm.hideTable = false;
                        vm.hidePentahoReport = true;
                        vm.hideChart = true;
                        vm.formData.reportSource = vm.reportName;
                        RunReportService.reports().getReport(vm.formData, function (data) {
                            //clear the csvData array for each request
                            vm.csvData = [];
                            vm.reportData.columnHeaders = data.columnHeaders;
                            vm.reportData.data = data.data;
                            for (var i in data.columnHeaders) {
                                vm.row.push(data.columnHeaders[i].columnName);
                            }
                            vm.csvData.push(vm.row);
                            for (var k in data.data) {
                                vm.csvData.push(data.data[k].row);
                            }
                        });
                        break;

                    case "Pentaho":
                        vm.hideTable = true;
                        vm.hidePentahoReport = false;
                        vm.hideChart = true;

                        var reportURL = $rootScope.hostUrl + BASE_URL + "/runreports/" + encodeURIComponent(vm.reportName);
                        reportURL += "?output-type=" + encodeURIComponent(vm.formData.outputType) + "&tenantIdentifier=" + $rootScope.tenantIdentifier + "&locale=" + vm.optlang.code + "&dateFormat=" + vm.df;

                        var inQueryParameters = buildReportParms();
                        if (inQueryParameters > "") reportURL += "&" + inQueryParameters;

                        // Allow untrusted urls for the ajax request.
                        // http://docs.angularjs.org/error/$sce/insecurl
                        reportURL = $sce.trustAsResourceUrl(reportURL);
                        reportURL = $sce.valueOf(reportURL);
                        $http.get(reportURL, {responseType: 'arraybuffer'}).
                        success(function(data, status, headers, config) {
                            var contentType = headers('Content-Type');
                            var file = new Blob([data], {type: contentType});
                            var fileContent = URL.createObjectURL(file);

                            // Pass the form data to the iframe as a data url.
                            vm.baseURL = $sce.trustAsResourceUrl(fileContent);
                        });
                        break;
                    case "Chart":
                        vm.hideTable = true;
                        vm.hidePentahoReport = true;
                        vm.hideChart = false;
                        vm.formData.reportSource = vm.reportName;
                        RunReportService.reports().getReport(vm.formData, function (data) {
                            vm.reportData.columnHeaders = data.columnHeaders;
                            vm.reportData.data = data.data;
                            vm.chartData = [];
                            vm.barData = [];
                            var l = data.data.length;
                            for (var i = 0; i < l; i++) {
                                vm.row = {};
                                vm.row.key = data.data[i].row[0];
                                vm.row.values = data.data[i].row[1];
                                vm.chartData.push(vm.row);
                            }
                            var x = {};
                            x.key = "summary";
                            x.values = [];
                            for (var m = 0; m < l; m++) {
                                var inner = [data.data[m].row[0], data.data[m].row[1]];
                                x.values.push(inner);
                            }
                            vm.barData.push(x);
                        });
                        break;
                    default:
                        var errorObj = new Object();
                        errorObj.field = vm.reportType;
                        errorObj.code = 'error.message.report.type.is.invalid';
                        errorObj.args = {params: []};
                        errorObj.args.params.push({value: vm.reportType});
                        vm.errorDetails.push(errorObj);
                        break;
                }
            }
        }
    }

})();