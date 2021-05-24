(window.webpackJsonp=window.webpackJsonp||[]).push([[142],{562:function(e,t,a){"use strict";a.r(t);var r=a(44),n=Object(r.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"configparams"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#configparams"}},[e._v("#")]),e._v(" ConfigParams "),a("Badge",{attrs:{text:"Interface"}})],1),e._v(" "),a("h2",{attrs:{id:"license"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#license"}},[e._v("#")]),e._v(" License")]),e._v(" "),a("h3",{attrs:{id:"licensekey"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#licensekey"}},[e._v("#")]),e._v(" licenseKey")]),e._v(" "),a("p",[e._v("• "),a("strong",[e._v("licenseKey")]),e._v(": "),a("em",[e._v("string")])]),e._v(" "),a("p",[a("em",[e._v("Defined in "),a("a",{attrs:{href:"https://github.com/handsontable/hyperformula/blob/aa6e13c/src/Config.ts#L138",target:"_blank",rel:"noopener noreferrer"}},[e._v("src/Config.ts:138"),a("OutboundLink")],1)])]),e._v(" "),a("p",[e._v("A license key of HyperFormula accepts the following values:")]),e._v(" "),a("ul",[a("li",[a("code",[e._v("agpl-v3")]),e._v(" string if you want to use the software on AGPL v3 license terms,")]),e._v(" "),a("li",[a("code",[e._v("non-commercial-and-evaluation")]),e._v(" string if you want to use our limited versions,")]),e._v(" "),a("li",[e._v("a valid license key string, if you bought the commercial license.")])]),e._v(" "),a("p",[e._v("For more details visit "),a("RouterLink",{attrs:{to:"/guide/license-key.html"}},[e._v("this guide")])],1),e._v(" "),a("p",[a("strong",[a("code",[e._v("default")])]),e._v(" undefined")]),e._v(" "),a("hr"),e._v(" "),a("h2",{attrs:{id:"engine"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#engine"}},[e._v("#")]),e._v(" Engine")]),e._v(" "),a("h3",{attrs:{id:"binarysearchthreshold"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#binarysearchthreshold"}},[e._v("#")]),e._v(" binarySearchThreshold")]),e._v(" "),a("p",[e._v("• "),a("strong",[e._v("binarySearchThreshold")]),e._v(": "),a("em",[e._v("number")])]),e._v(" "),a("p",[a("em",[e._v("Defined in "),a("a",{attrs:{href:"https://github.com/handsontable/hyperformula/blob/aa6e13c/src/Config.ts#L321",target:"_blank",rel:"noopener noreferrer"}},[e._v("src/Config.ts:321"),a("OutboundLink")],1)])]),e._v(" "),a("p",[e._v("Determines minimum number of elements a range must have in order to use binary search.\nShorter ranges will be searched naively.\nUsed by VLOOKUP, HLOOKUP and MATCH functions.")]),e._v(" "),a("p",[a("strong",[a("code",[e._v("default")])]),e._v(" 20")]),e._v(" "),a("hr"),e._v(" "),a("h3",{attrs:{id:"chooseaddressmappingpolicy"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#chooseaddressmappingpolicy"}},[e._v("#")]),e._v(" chooseAddressMappingPolicy")]),e._v(" "),a("p",[e._v("• "),a("strong",[e._v("chooseAddressMappingPolicy")]),e._v(": "),a("em",[e._v("ChooseAddressMapping")])]),e._v(" "),a("p",[a("em",[e._v("Defined in "),a("a",{attrs:{href:"https://github.com/handsontable/hyperformula/blob/aa6e13c/src/Config.ts#L68",target:"_blank",rel:"noopener noreferrer"}},[e._v("src/Config.ts:68"),a("OutboundLink")],1)])]),e._v(" "),a("p",[e._v("Determines which address mapping policy will be used. Built in implementations:")]),e._v(" "),a("ul",[a("li",[e._v("DenseSparseChooseBasedOnThreshold - will choose address mapping for each sheet separately based on fill ratio.")]),e._v(" "),a("li",[e._v("AlwaysDense - will use DenseStrategy for all sheets.")]),e._v(" "),a("li",[e._v("AlwaysSparse - will use SparseStrategy for all sheets.")])]),e._v(" "),a("p",[a("strong",[a("code",[e._v("default")])]),e._v(" AlwaysDense")]),e._v(" "),a("hr"),e._v(" "),a("h3",{attrs:{id:"evaluatenulltozero"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#evaluatenulltozero"}},[e._v("#")]),e._v(" evaluateNullToZero")]),e._v(" "),a("p",[e._v("• "),a("strong",[e._v("evaluateNullToZero")]),e._v(": "),a("em",[e._v("boolean")])]),e._v(" "),a("p",[a("em",[e._v("Defined in "),a("a",{attrs:{href:"https://github.com/handsontable/hyperformula/blob/aa6e13c/src/Config.ts#L227",target:"_blank",rel:"noopener noreferrer"}},[e._v("src/Config.ts:227"),a("OutboundLink")],1)])]),e._v(" "),a("p",[e._v("Sets the compatibility mode for behaviour of null value.\nIf set, formula evaluating to null evaluates to 0 instead.")]),e._v(" "),a("p",[a("strong",[a("code",[e._v("default")])]),e._v(" false")]),e._v(" "),a("hr"),e._v(" "),a("h3",{attrs:{id:"gpumode"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#gpumode"}},[e._v("#")]),e._v(" gpuMode")]),e._v(" "),a("p",[e._v("• "),a("strong",[e._v("gpuMode")]),e._v(": "),a("em",[a("RouterLink",{attrs:{to:"/api/globals.html#gpumode"}},[e._v("GPUMode")])],1)]),e._v(" "),a("p",[a("em",[e._v("Defined in "),a("a",{attrs:{href:"https://github.com/handsontable/hyperformula/blob/aa6e13c/src/Config.ts#L174",target:"_blank",rel:"noopener noreferrer"}},[e._v("src/Config.ts:174"),a("OutboundLink")],1)])]),e._v(" "),a("p",[e._v("Allows to set GPU or CPU for use in matrix calculations.\nWhen set to 'gpu' it will try to use GPU for matrix calculations. Setting it to 'cpu' will force CPU usage.\nOther values should be used for debugging purposes only. More info can be found in GPU.js documentation.")]),e._v(" "),a("p",[a("strong",[a("code",[e._v("default")])]),e._v(" 'gpu'")]),e._v(" "),a("hr"),e._v(" "),a("h3",{attrs:{id:"gpujs"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#gpujs"}},[e._v("#")]),e._v(" gpujs "),a("Badge",{attrs:{text:"Optional",vertical:"middle"}})],1),e._v(" "),a("p",[e._v("• "),a("strong",[e._v("gpujs")]),e._v("? : "),a("em",[e._v("typeof GPU")])]),e._v(" "),a("p",[a("em",[e._v("Defined in "),a("a",{attrs:{href:"https://github.com/handsontable/hyperformula/blob/aa6e13c/src/Config.ts#L164",target:"_blank",rel:"noopener noreferrer"}},[e._v("src/Config.ts:164"),a("OutboundLink")],1)])]),e._v(" "),a("p",[e._v("A GPU.js constructor used by matrix functions. When not provided, plain cpu implementation will be used.")]),e._v(" "),a("p",[a("strong",[a("code",[e._v("default")])]),e._v(" undefined")]),e._v(" "),a("hr"),e._v(" "),a("h3",{attrs:{id:"matrixdetection"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#matrixdetection"}},[e._v("#")]),e._v(" matrixDetection")]),e._v(" "),a("p",[e._v("• "),a("strong",[e._v("matrixDetection")]),e._v(": "),a("em",[e._v("boolean")])]),e._v(" "),a("p",[a("em",[e._v("Defined in "),a("a",{attrs:{href:"https://github.com/handsontable/hyperformula/blob/aa6e13c/src/Config.ts#L210",target:"_blank",rel:"noopener noreferrer"}},[e._v("src/Config.ts:210"),a("OutboundLink")],1)])]),e._v(" "),a("p",[e._v("Enables numeric matrix detection feature when set to 'true'.\nDuring build phase each rectangular area of numbers will be treated as one matrix vertex in order to optimize further calculations.\nSome CRUD operations may break numeric matrices into individual vertices if needed.")]),e._v(" "),a("p",[a("strong",[a("code",[e._v("default")])]),e._v(" true")]),e._v(" "),a("hr"),e._v(" "),a("h3",{attrs:{id:"matrixdetectionthreshold"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#matrixdetectionthreshold"}},[e._v("#")]),e._v(" matrixDetectionThreshold")]),e._v(" "),a("p",[e._v("• "),a("strong",[e._v("matrixDetectionThreshold")]),e._v(": "),a("em",[e._v("number")])]),e._v(" "),a("p",[a("em",[e._v("Defined in "),a("a",{attrs:{href:"https://github.com/handsontable/hyperformula/blob/aa6e13c/src/Config.ts#L218",target:"_blank",rel:"noopener noreferrer"}},[e._v("src/Config.ts:218"),a("OutboundLink")],1)])]),e._v(" "),a("p",[e._v("Specifies how many cells an area must have in order to be treated as a matrix. Relevant only if "),a("RouterLink",{attrs:{to:"/api/interfaces/configparams.html#matrixdetection"}},[e._v("matrixDetection")]),e._v(" is set to "),a("code",[e._v("true")]),e._v(".")],1),e._v(" "),a("p",[a("strong",[a("code",[e._v("default")])]),e._v(" 100")]),e._v(" "),a("hr"),e._v(" "),a("h3",{attrs:{id:"maxcolumns"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#maxcolumns"}},[e._v("#")]),e._v(" maxColumns")]),e._v(" "),a("p",[e._v("• "),a("strong",[e._v("maxColumns")]),e._v(": "),a("em",[e._v("number")])]),e._v(" "),a("p",[a("em",[e._v("Defined in "),a("a",{attrs:{href:"https://github.com/handsontable/hyperformula/blob/aa6e13c/src/Config.ts#L375",target:"_blank",rel:"noopener noreferrer"}},[e._v("src/Config.ts:375"),a("OutboundLink")],1)])]),e._v(" "),a("p",[e._v("Maximum number of columns")]),e._v(" "),a("p",[a("strong",[a("code",[e._v("default")])]),e._v(" 18,278")]),e._v(" "),a("hr"),e._v(" "),a("h3",{attrs:{id:"maxrows"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#maxrows"}},[e._v("#")]),e._v(" maxRows")]),e._v(" "),a("p",[e._v("• "),a("strong",[e._v("maxRows")]),e._v(": "),a("em",[e._v("number")])]),e._v(" "),a("p",[a("em",[e._v("Defined in "),a("a",{attrs:{href:"https://github.com/handsontable/hyperformula/blob/aa6e13c/src/Config.ts#L367",target:"_blank",rel:"noopener noreferrer"}},[e._v("src/Config.ts:367"),a("OutboundLink")],1)])]),e._v(" "),a("p",[e._v("Maximum number of rows")]),e._v(" "),a("p",[a("strong",[a("code",[e._v("default")])]),e._v(" 40,000")]),e._v(" "),a("hr"),e._v(" "),a("h3",{attrs:{id:"usecolumnindex"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#usecolumnindex"}},[e._v("#")]),e._v(" useColumnIndex")]),e._v(" "),a("p",[e._v("• "),a("strong",[e._v("useColumnIndex")]),e._v(": "),a("em",[e._v("boolean")])]),e._v(" "),a("p",[a("em",[e._v("Defined in "),a("a",{attrs:{href:"https://github.com/handsontable/hyperformula/blob/aa6e13c/src/Config.ts#L303",target:"_blank",rel:"noopener noreferrer"}},[e._v("src/Config.ts:303"),a("OutboundLink")],1)])]),e._v(" "),a("p",[e._v("Switches column search strategy from binary search to column index.\nUsed by VLOOKUP and MATCH functions.\nUsing column index may improve time efficiency but it will increase memory usage.\nIn some scenarios column index may fall back to binary search despite this flag.")]),e._v(" "),a("p",[a("strong",[a("code",[e._v("default")])]),e._v(" false")]),e._v(" "),a("hr"),e._v(" "),a("h3",{attrs:{id:"usestats"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#usestats"}},[e._v("#")]),e._v(" useStats")]),e._v(" "),a("p",[e._v("• "),a("strong",[e._v("useStats")]),e._v(": "),a("em",[e._v("boolean")])]),e._v(" "),a("p",[a("em",[e._v("Defined in "),a("a",{attrs:{href:"https://github.com/handsontable/hyperformula/blob/aa6e13c/src/Config.ts#L311",target:"_blank",rel:"noopener noreferrer"}},[e._v("src/Config.ts:311"),a("OutboundLink")],1)])]),e._v(" "),a("p",[e._v("Enables gathering engine statistics and timings. Useful for testing and benchmarking.")]),e._v(" "),a("p",[a("strong",[a("code",[e._v("default")])]),e._v(" false")]),e._v(" "),a("hr"),e._v(" "),a("h2",{attrs:{id:"formula-syntax"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#formula-syntax"}},[e._v("#")]),e._v(" Formula Syntax")]),e._v(" "),a("h3",{attrs:{id:"functionargseparator"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#functionargseparator"}},[e._v("#")]),e._v(" functionArgSeparator")]),e._v(" "),a("p",[e._v("• "),a("strong",[e._v("functionArgSeparator")]),e._v(": "),a("em",[e._v("string")])]),e._v(" "),a("p",[a("em",[e._v("Defined in "),a("a",{attrs:{href:"https://github.com/handsontable/hyperformula/blob/aa6e13c/src/Config.ts#L108",target:"_blank",rel:"noopener noreferrer"}},[e._v("src/Config.ts:108"),a("OutboundLink")],1)])]),e._v(" "),a("p",[e._v("A separator character used to separate arguments of procedures in formulas. Must be different from "),a("RouterLink",{attrs:{to:"/api/interfaces/configparams.html#decimalseparator"}},[e._v("decimalSeparator")]),e._v(" and "),a("RouterLink",{attrs:{to:"/api/interfaces/configparams.html#thousandseparator"}},[e._v("thousandSeparator")]),e._v(".")],1),e._v(" "),a("p",[a("strong",[a("code",[e._v("default")])]),e._v(" ','")]),e._v(" "),a("hr"),e._v(" "),a("h3",{attrs:{id:"functionplugins"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#functionplugins"}},[e._v("#")]),e._v(" functionPlugins")]),e._v(" "),a("p",[e._v("• "),a("strong",[e._v("functionPlugins")]),e._v(": "),a("em",[e._v("any[]")])]),e._v(" "),a("p",[a("em",[e._v("Defined in "),a("a",{attrs:{href:"https://github.com/handsontable/hyperformula/blob/aa6e13c/src/Config.ts#L156",target:"_blank",rel:"noopener noreferrer"}},[e._v("src/Config.ts:156"),a("OutboundLink")],1)])]),e._v(" "),a("p",[e._v("A list of additional function plugins to use by formula interpreter.")]),e._v(" "),a("p",[a("strong",[a("code",[e._v("default")])]),e._v(" []")]),e._v(" "),a("hr"),e._v(" "),a("h3",{attrs:{id:"language"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#language"}},[e._v("#")]),e._v(" language")]),e._v(" "),a("p",[e._v("• "),a("strong",[e._v("language")]),e._v(": "),a("em",[e._v("string")])]),e._v(" "),a("p",[a("em",[e._v("Defined in "),a("a",{attrs:{href:"https://github.com/handsontable/hyperformula/blob/aa6e13c/src/Config.ts#L125",target:"_blank",rel:"noopener noreferrer"}},[e._v("src/Config.ts:125"),a("OutboundLink")],1)])]),e._v(" "),a("p",[e._v("Code for translation package with translations of function and error names.")]),e._v(" "),a("p",[a("strong",[a("code",[e._v("default")])]),e._v(" 'enGB'")]),e._v(" "),a("hr"),e._v(" "),a("h2",{attrs:{id:"undo-and-redo"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#undo-and-redo"}},[e._v("#")]),e._v(" Undo and Redo")]),e._v(" "),a("h3",{attrs:{id:"undolimit"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#undolimit"}},[e._v("#")]),e._v(" undoLimit")]),e._v(" "),a("p",[e._v("• "),a("strong",[e._v("undoLimit")]),e._v(": "),a("em",[e._v("number")])]),e._v(" "),a("p",[a("em",[e._v("Defined in "),a("a",{attrs:{href:"https://github.com/handsontable/hyperformula/blob/aa6e13c/src/Config.ts#L338",target:"_blank",rel:"noopener noreferrer"}},[e._v("src/Config.ts:338"),a("OutboundLink")],1)])]),e._v(" "),a("p",[e._v("A number of kept elements in undo history.")]),e._v(" "),a("p",[a("strong",[a("code",[e._v("default")])]),e._v(" 20")]),e._v(" "),a("hr"),e._v(" "),a("h2",{attrs:{id:"date-and-time"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#date-and-time"}},[e._v("#")]),e._v(" Date and Time")]),e._v(" "),a("h3",{attrs:{id:"dateformats"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#dateformats"}},[e._v("#")]),e._v(" dateFormats")]),e._v(" "),a("p",[e._v("• "),a("strong",[e._v("dateFormats")]),e._v(": "),a("em",[e._v("string[]")])]),e._v(" "),a("p",[a("em",[e._v("Defined in "),a("a",{attrs:{href:"https://github.com/handsontable/hyperformula/blob/aa6e13c/src/Config.ts#L88",target:"_blank",rel:"noopener noreferrer"}},[e._v("src/Config.ts:88"),a("OutboundLink")],1)])]),e._v(" "),a("p",[e._v("A list of date formats that are supported by date parsing functions.")]),e._v(" "),a("p",[e._v("The separator is ignored and it can be any of '-' (dash), ' ' (empty space), '/' (slash).")]),e._v(" "),a("p",[e._v("Any order of YY, MM, DD is accepted as a date, and YY can be replaced with YYYY.")]),e._v(" "),a("p",[a("strong",[a("code",[e._v("default")])]),e._v(" ['MM/DD/YYYY', 'MM/DD/YY']")]),e._v(" "),a("hr"),e._v(" "),a("h3",{attrs:{id:"leapyear1900"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#leapyear1900"}},[e._v("#")]),e._v(" leapYear1900")]),e._v(" "),a("p",[e._v("• "),a("strong",[e._v("leapYear1900")]),e._v(": "),a("em",[e._v("boolean")])]),e._v(" "),a("p",[a("em",[e._v("Defined in "),a("a",{attrs:{href:"https://github.com/handsontable/hyperformula/blob/aa6e13c/src/Config.ts#L192",target:"_blank",rel:"noopener noreferrer"}},[e._v("src/Config.ts:192"),a("OutboundLink")],1)])]),e._v(" "),a("p",[e._v("Preserves an option for setting 1900 as a leap year.\n1900 was not a leap year, but in Lotus 1-2-3 it was faulty interpreted as a leap year.\nSet to "),a("code",[e._v("true")]),e._v(" for compatibility with Lotus 1-2-3 and Excel. See "),a("RouterLink",{attrs:{to:"/api/interfaces/configparams.html#nulldate"}},[e._v("nullDate")]),e._v(" for complete solution.")],1),e._v(" "),a("p",[a("strong",[a("code",[e._v("default")])]),e._v(" false")]),e._v(" "),a("hr"),e._v(" "),a("h3",{attrs:{id:"nulldate"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#nulldate"}},[e._v("#")]),e._v(" nullDate")]),e._v(" "),a("p",[e._v("• "),a("strong",[e._v("nullDate")]),e._v(": "),a("em",[a("RouterLink",{attrs:{to:"/api/interfaces/simpledate.html"}},[e._v("SimpleDate")])],1)]),e._v(" "),a("p",[a("em",[e._v("Defined in "),a("a",{attrs:{href:"https://github.com/handsontable/hyperformula/blob/aa6e13c/src/Config.ts#L330",target:"_blank",rel:"noopener noreferrer"}},[e._v("src/Config.ts:330"),a("OutboundLink")],1)])]),e._v(" "),a("p",[e._v("Allows to set a specific date from which the number of days will be counted.\nDates are represented internally as a number of days that passed since this "),a("code",[e._v("nullDate")]),e._v(".")]),e._v(" "),a("p",[a("strong",[a("code",[e._v("default")])]),e._v(" {year: 1899, month: 12, day: 30}")]),e._v(" "),a("hr"),e._v(" "),a("h3",{attrs:{id:"nullyear"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#nullyear"}},[e._v("#")]),e._v(" nullYear")]),e._v(" "),a("p",[e._v("• "),a("strong",[e._v("nullYear")]),e._v(": "),a("em",[e._v("number")])]),e._v(" "),a("p",[a("em",[e._v("Defined in "),a("a",{attrs:{href:"https://github.com/handsontable/hyperformula/blob/aa6e13c/src/Config.ts#L236",target:"_blank",rel:"noopener noreferrer"}},[e._v("src/Config.ts:236"),a("OutboundLink")],1)])]),e._v(" "),a("p",[e._v("Two-digit values when interpreted as a year can be either 19xx or 20xx.\nIf "),a("code",[e._v("xx <= nullYear")]),e._v(" its latter, otherwise its former.")]),e._v(" "),a("p",[a("strong",[a("code",[e._v("default")])]),e._v(" 30")]),e._v(" "),a("hr"),e._v(" "),a("h3",{attrs:{id:"parsedatetime"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#parsedatetime"}},[e._v("#")]),e._v(" parseDateTime")]),e._v(" "),a("p",[e._v("• "),a("strong",[e._v("parseDateTime")]),e._v(": "),a("em",[e._v("function")])]),e._v(" "),a("p",[a("em",[e._v("Defined in "),a("a",{attrs:{href:"https://github.com/handsontable/hyperformula/blob/aa6e13c/src/Config.ts#L244",target:"_blank",rel:"noopener noreferrer"}},[e._v("src/Config.ts:244"),a("OutboundLink")],1)])]),e._v(" "),a("p",[e._v("Allows to provide a function that takes a string representing date-time and parses it into an actual date-time.")]),e._v(" "),a("p",[a("strong",[a("code",[e._v("default")])]),e._v(" defaultParseToDateTime")]),e._v(" "),a("h4",{attrs:{id:"type-declaration"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#type-declaration"}},[e._v("#")]),e._v(" Type declaration:")]),e._v(" "),a("p",[e._v("▸ ("),a("code",[e._v("dateTimeString")]),e._v(": string, "),a("code",[e._v("dateFormat")]),e._v(": "),a("RouterLink",{attrs:{to:"/api/globals.html#maybe"}},[e._v("Maybe")]),e._v("‹string›, "),a("code",[e._v("timeFormat")]),e._v(": "),a("RouterLink",{attrs:{to:"/api/globals.html#maybe"}},[e._v("Maybe")]),e._v("‹string›): "),a("em",[a("RouterLink",{attrs:{to:"/api/globals.html#maybe"}},[e._v("Maybe")]),e._v("‹"),a("RouterLink",{attrs:{to:"/api/globals.html#datetime"}},[e._v("DateTime")]),e._v("›")],1)],1),e._v(" "),a("p",[a("strong",[e._v("Parameters:")])]),e._v(" "),a("table",[a("thead",[a("tr",[a("th",[e._v("Name")]),e._v(" "),a("th",[e._v("Type")])])]),e._v(" "),a("tbody",[a("tr",[a("td",[a("code",[e._v("dateTimeString")])]),e._v(" "),a("td",[e._v("string")])]),e._v(" "),a("tr",[a("td",[a("code",[e._v("dateFormat")])]),e._v(" "),a("td",[a("RouterLink",{attrs:{to:"/api/globals.html#maybe"}},[e._v("Maybe")]),e._v("‹string›")],1)]),e._v(" "),a("tr",[a("td",[a("code",[e._v("timeFormat")])]),e._v(" "),a("td",[a("RouterLink",{attrs:{to:"/api/globals.html#maybe"}},[e._v("Maybe")]),e._v("‹string›")],1)])])]),e._v(" "),a("hr"),e._v(" "),a("h3",{attrs:{id:"stringifydatetime"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#stringifydatetime"}},[e._v("#")]),e._v(" stringifyDateTime")]),e._v(" "),a("p",[e._v("• "),a("strong",[e._v("stringifyDateTime")]),e._v(": "),a("em",[e._v("function")])]),e._v(" "),a("p",[a("em",[e._v("Defined in "),a("a",{attrs:{href:"https://github.com/handsontable/hyperformula/blob/aa6e13c/src/Config.ts#L275",target:"_blank",rel:"noopener noreferrer"}},[e._v("src/Config.ts:275"),a("OutboundLink")],1)])]),e._v(" "),a("p",[e._v("Allows to provide a function that takes date and prints it into string.")]),e._v(" "),a("p",[a("strong",[a("code",[e._v("default")])]),e._v(" defaultStringifyDateTime")]),e._v(" "),a("h4",{attrs:{id:"type-declaration-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#type-declaration-2"}},[e._v("#")]),e._v(" Type declaration:")]),e._v(" "),a("p",[e._v("▸ ("),a("code",[e._v("dateTime")]),e._v(": "),a("RouterLink",{attrs:{to:"/api/globals.html#simpledatetime"}},[e._v("SimpleDateTime")]),e._v(", "),a("code",[e._v("dateTimeFormat")]),e._v(": string): "),a("em",[a("RouterLink",{attrs:{to:"/api/globals.html#maybe"}},[e._v("Maybe")]),e._v("‹string›")],1)],1),e._v(" "),a("p",[a("strong",[e._v("Parameters:")])]),e._v(" "),a("table",[a("thead",[a("tr",[a("th",[e._v("Name")]),e._v(" "),a("th",[e._v("Type")])])]),e._v(" "),a("tbody",[a("tr",[a("td",[a("code",[e._v("dateTime")])]),e._v(" "),a("td",[a("RouterLink",{attrs:{to:"/api/globals.html#simpledatetime"}},[e._v("SimpleDateTime")])],1)]),e._v(" "),a("tr",[a("td",[a("code",[e._v("dateTimeFormat")])]),e._v(" "),a("td",[e._v("string")])])])]),e._v(" "),a("hr"),e._v(" "),a("h3",{attrs:{id:"stringifyduration"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#stringifyduration"}},[e._v("#")]),e._v(" stringifyDuration")]),e._v(" "),a("p",[e._v("• "),a("strong",[e._v("stringifyDuration")]),e._v(": "),a("em",[e._v("function")])]),e._v(" "),a("p",[a("em",[e._v("Defined in "),a("a",{attrs:{href:"https://github.com/handsontable/hyperformula/blob/aa6e13c/src/Config.ts#L283",target:"_blank",rel:"noopener noreferrer"}},[e._v("src/Config.ts:283"),a("OutboundLink")],1)])]),e._v(" "),a("p",[e._v("Allows to provide a function that takes time duration prints it into string.")]),e._v(" "),a("p",[a("strong",[a("code",[e._v("default")])]),e._v(" defaultStringifyDuration")]),e._v(" "),a("h4",{attrs:{id:"type-declaration-3"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#type-declaration-3"}},[e._v("#")]),e._v(" Type declaration:")]),e._v(" "),a("p",[e._v("▸ ("),a("code",[e._v("time")]),e._v(": "),a("RouterLink",{attrs:{to:"/api/interfaces/simpletime.html"}},[e._v("SimpleTime")]),e._v(", "),a("code",[e._v("timeFormat")]),e._v(": string): "),a("em",[a("RouterLink",{attrs:{to:"/api/globals.html#maybe"}},[e._v("Maybe")]),e._v("‹string›")],1)],1),e._v(" "),a("p",[a("strong",[e._v("Parameters:")])]),e._v(" "),a("table",[a("thead",[a("tr",[a("th",[e._v("Name")]),e._v(" "),a("th",[e._v("Type")])])]),e._v(" "),a("tbody",[a("tr",[a("td",[a("code",[e._v("time")])]),e._v(" "),a("td",[a("RouterLink",{attrs:{to:"/api/interfaces/simpletime.html"}},[e._v("SimpleTime")])],1)]),e._v(" "),a("tr",[a("td",[a("code",[e._v("timeFormat")])]),e._v(" "),a("td",[e._v("string")])])])]),e._v(" "),a("hr"),e._v(" "),a("h3",{attrs:{id:"timeformats"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#timeformats"}},[e._v("#")]),e._v(" timeFormats")]),e._v(" "),a("p",[e._v("• "),a("strong",[e._v("timeFormats")]),e._v(": "),a("em",[e._v("string[]")])]),e._v(" "),a("p",[a("em",[e._v("Defined in "),a("a",{attrs:{href:"https://github.com/handsontable/hyperformula/blob/aa6e13c/src/Config.ts#L100",target:"_blank",rel:"noopener noreferrer"}},[e._v("src/Config.ts:100"),a("OutboundLink")],1)])]),e._v(" "),a("p",[e._v("A list of time formats that are supported by time parsing functions.")]),e._v(" "),a("p",[e._v("The separator is ':' (colon).")]),e._v(" "),a("p",[e._v("Any configuration of at least two of hh, mm, ss is accepted as a time, and they can be put in any order.")]),e._v(" "),a("p",[a("strong",[a("code",[e._v("default")])]),e._v(" ['hh:mm', 'hh:mm:ss.sss']")]),e._v(" "),a("hr"),e._v(" "),a("h2",{attrs:{id:"number"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#number"}},[e._v("#")]),e._v(" Number")]),e._v(" "),a("h3",{attrs:{id:"currencysymbol"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#currencysymbol"}},[e._v("#")]),e._v(" currencySymbol")]),e._v(" "),a("p",[e._v("• "),a("strong",[e._v("currencySymbol")]),e._v(": "),a("em",[e._v("string[]")])]),e._v(" "),a("p",[a("em",[e._v("Defined in "),a("a",{attrs:{href:"https://github.com/handsontable/hyperformula/blob/aa6e13c/src/Config.ts#L76",target:"_blank",rel:"noopener noreferrer"}},[e._v("src/Config.ts:76"),a("OutboundLink")],1)])]),e._v(" "),a("p",[e._v("Symbols used to denote currency numbers.")]),e._v(" "),a("p",[a("strong",[a("code",[e._v("default")])]),e._v(" ['$']")]),e._v(" "),a("hr"),e._v(" "),a("h3",{attrs:{id:"decimalseparator"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#decimalseparator"}},[e._v("#")]),e._v(" decimalSeparator")]),e._v(" "),a("p",[e._v("• "),a("strong",[e._v("decimalSeparator")]),e._v(": "),a("em",[e._v('"." | ","')])]),e._v(" "),a("p",[a("em",[e._v("Defined in "),a("a",{attrs:{href:"https://github.com/handsontable/hyperformula/blob/aa6e13c/src/Config.ts#L117",target:"_blank",rel:"noopener noreferrer"}},[e._v("src/Config.ts:117"),a("OutboundLink")],1)])]),e._v(" "),a("p",[e._v("A decimal separator used for parsing numeric literals.\nCan be either '.' (period) or ',' (comma) and must be different from "),a("RouterLink",{attrs:{to:"/api/interfaces/configparams.html#thousandseparator"}},[e._v("thousandSeparator")]),e._v(" and "),a("RouterLink",{attrs:{to:"/api/interfaces/configparams.html#functionargseparator"}},[e._v("functionArgSeparator")]),e._v(".")],1),e._v(" "),a("p",[a("strong",[a("code",[e._v("default")])]),e._v(" '.'")]),e._v(" "),a("hr"),e._v(" "),a("h3",{attrs:{id:"precisionepsilon"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#precisionepsilon"}},[e._v("#")]),e._v(" precisionEpsilon")]),e._v(" "),a("p",[e._v("• "),a("strong",[e._v("precisionEpsilon")]),e._v(": "),a("em",[e._v("number")])]),e._v(" "),a("p",[a("em",[e._v("Defined in "),a("a",{attrs:{href:"https://github.com/handsontable/hyperformula/blob/aa6e13c/src/Config.ts#L258",target:"_blank",rel:"noopener noreferrer"}},[e._v("src/Config.ts:258"),a("OutboundLink")],1)])]),e._v(" "),a("p",[e._v("Controls how far two numerical values need to be from each other to be treated as non-equal.\n"),a("code",[e._v("a")]),e._v(" and "),a("code",[e._v("b")]),e._v(" are equal if they are of the same sign and:\n"),a("code",[e._v("abs(a) <= (1+precisionEpsilon) * abs(b)")]),e._v("\nand\n"),a("code",[e._v("abs(b) <= (1+precisionEpsilon) * abs(a)")]),e._v(".\nIt also controls snap-to-zero behavior for additions/subtractions:\nfor "),a("code",[e._v("c=a+b")]),e._v(" or "),a("code",[e._v("c=a-b")]),e._v(", if "),a("code",[e._v("abs(c) <= precisionEpsilon * abs(a)")]),e._v(", then "),a("code",[e._v("c")]),e._v(" is set to "),a("code",[e._v("0")])]),e._v(" "),a("p",[a("strong",[a("code",[e._v("default")])]),e._v(" 1e-13")]),e._v(" "),a("hr"),e._v(" "),a("h3",{attrs:{id:"precisionrounding"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#precisionrounding"}},[e._v("#")]),e._v(" precisionRounding")]),e._v(" "),a("p",[e._v("• "),a("strong",[e._v("precisionRounding")]),e._v(": "),a("em",[e._v("number")])]),e._v(" "),a("p",[a("em",[e._v("Defined in "),a("a",{attrs:{href:"https://github.com/handsontable/hyperformula/blob/aa6e13c/src/Config.ts#L267",target:"_blank",rel:"noopener noreferrer"}},[e._v("src/Config.ts:267"),a("OutboundLink")],1)])]),e._v(" "),a("p",[e._v("Sets how precise the calculation should be.\nNumerical outputs are rounded to "),a("code",[e._v("precisionRounding")]),e._v(" many digits after the decimal.")]),e._v(" "),a("p",[a("strong",[a("code",[e._v("default")])]),e._v(" 14")]),e._v(" "),a("hr"),e._v(" "),a("h3",{attrs:{id:"smartrounding"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#smartrounding"}},[e._v("#")]),e._v(" smartRounding")]),e._v(" "),a("p",[e._v("• "),a("strong",[e._v("smartRounding")]),e._v(": "),a("em",[e._v("boolean")])]),e._v(" "),a("p",[a("em",[e._v("Defined in "),a("a",{attrs:{href:"https://github.com/handsontable/hyperformula/blob/aa6e13c/src/Config.ts#L292",target:"_blank",rel:"noopener noreferrer"}},[e._v("src/Config.ts:292"),a("OutboundLink")],1)])]),e._v(" "),a("p",[e._v("Sets the rounding.\nIf "),a("code",[e._v("false")]),e._v(", no rounding happens, and numbers are equal if and only if they are truly identical value (see: "),a("RouterLink",{attrs:{to:"/api/interfaces/configparams.html#precisionepsilon"}},[e._v("precisionEpsilon")]),e._v(").")],1),e._v(" "),a("p",[a("strong",[a("code",[e._v("default")])]),e._v(" true")]),e._v(" "),a("hr"),e._v(" "),a("h3",{attrs:{id:"thousandseparator"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#thousandseparator"}},[e._v("#")]),e._v(" thousandSeparator")]),e._v(" "),a("p",[e._v("• "),a("strong",[e._v("thousandSeparator")]),e._v(": "),a("em",[e._v('"" | "," | " " | "."')])]),e._v(" "),a("p",[a("em",[e._v("Defined in "),a("a",{attrs:{href:"https://github.com/handsontable/hyperformula/blob/aa6e13c/src/Config.ts#L147",target:"_blank",rel:"noopener noreferrer"}},[e._v("src/Config.ts:147"),a("OutboundLink")],1)])]),e._v(" "),a("p",[e._v("A thousand separator used for parsing numeric literals.\nCan be either empty, ',' (comma) or ' ' (empty space) and must be different from "),a("RouterLink",{attrs:{to:"/api/interfaces/configparams.html#decimalseparator"}},[e._v("decimalSeparator")]),e._v(" and "),a("RouterLink",{attrs:{to:"/api/interfaces/configparams.html#functionargseparator"}},[e._v("functionArgSeparator")]),e._v(".")],1),e._v(" "),a("p",[a("strong",[a("code",[e._v("default")])]),e._v(" ''")]),e._v(" "),a("hr"),e._v(" "),a("h2",{attrs:{id:"string"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#string"}},[e._v("#")]),e._v(" String")]),e._v(" "),a("h3",{attrs:{id:"accentsensitive"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#accentsensitive"}},[e._v("#")]),e._v(" accentSensitive")]),e._v(" "),a("p",[e._v("• "),a("strong",[e._v("accentSensitive")]),e._v(": "),a("em",[e._v("boolean")])]),e._v(" "),a("p",[a("em",[e._v("Defined in "),a("a",{attrs:{href:"https://github.com/handsontable/hyperformula/blob/aa6e13c/src/Config.ts#L39",target:"_blank",rel:"noopener noreferrer"}},[e._v("src/Config.ts:39"),a("OutboundLink")],1)])]),e._v(" "),a("p",[e._v("Specifies if the string comparison is accent sensitive or not.\nApplies to comparison operators only.")]),e._v(" "),a("p",[a("strong",[a("code",[e._v("default")])]),e._v(" false")]),e._v(" "),a("hr"),e._v(" "),a("h3",{attrs:{id:"casefirst"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#casefirst"}},[e._v("#")]),e._v(" caseFirst")]),e._v(" "),a("p",[e._v("• "),a("strong",[e._v("caseFirst")]),e._v(": "),a("em",[e._v('"upper" | "lower" | "false"')])]),e._v(" "),a("p",[a("em",[e._v("Defined in "),a("a",{attrs:{href:"https://github.com/handsontable/hyperformula/blob/aa6e13c/src/Config.ts#L57",target:"_blank",rel:"noopener noreferrer"}},[e._v("src/Config.ts:57"),a("OutboundLink")],1)])]),e._v(" "),a("p",[e._v("Allows to define if upper case or lower case should sort first.\nWhen set to "),a("code",[e._v("false")]),e._v(" uses the locale's default.")]),e._v(" "),a("p",[a("strong",[a("code",[e._v("default")])]),e._v(" 'lower'")]),e._v(" "),a("hr"),e._v(" "),a("h3",{attrs:{id:"casesensitive"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#casesensitive"}},[e._v("#")]),e._v(" caseSensitive")]),e._v(" "),a("p",[e._v("• "),a("strong",[e._v("caseSensitive")]),e._v(": "),a("em",[e._v("boolean")])]),e._v(" "),a("p",[a("em",[e._v("Defined in "),a("a",{attrs:{href:"https://github.com/handsontable/hyperformula/blob/aa6e13c/src/Config.ts#L48",target:"_blank",rel:"noopener noreferrer"}},[e._v("src/Config.ts:48"),a("OutboundLink")],1)])]),e._v(" "),a("p",[e._v("Specifies if the string comparison is case-sensitive or not.\nApplies to comparison operators only.")]),e._v(" "),a("p",[a("strong",[a("code",[e._v("default")])]),e._v(" false")]),e._v(" "),a("hr"),e._v(" "),a("h3",{attrs:{id:"ignorepunctuation"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ignorepunctuation"}},[e._v("#")]),e._v(" ignorePunctuation")]),e._v(" "),a("p",[e._v("• "),a("strong",[e._v("ignorePunctuation")]),e._v(": "),a("em",[e._v("boolean")])]),e._v(" "),a("p",[a("em",[e._v("Defined in "),a("a",{attrs:{href:"https://github.com/handsontable/hyperformula/blob/aa6e13c/src/Config.ts#L182",target:"_blank",rel:"noopener noreferrer"}},[e._v("src/Config.ts:182"),a("OutboundLink")],1)])]),e._v(" "),a("p",[e._v("Specifies whether punctuation should be ignored in string comparison.")]),e._v(" "),a("p",[a("strong",[a("code",[e._v("default")])]),e._v(" false")]),e._v(" "),a("hr"),e._v(" "),a("h3",{attrs:{id:"localelang"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#localelang"}},[e._v("#")]),e._v(" localeLang")]),e._v(" "),a("p",[e._v("• "),a("strong",[e._v("localeLang")]),e._v(": "),a("em",[e._v("string")])]),e._v(" "),a("p",[a("em",[e._v("Defined in "),a("a",{attrs:{href:"https://github.com/handsontable/hyperformula/blob/aa6e13c/src/Config.ts#L200",target:"_blank",rel:"noopener noreferrer"}},[e._v("src/Config.ts:200"),a("OutboundLink")],1)])]),e._v(" "),a("p",[e._v("Sets the locale using a BCP 47 code language tag for language sensitive string comparison.")]),e._v(" "),a("p",[a("strong",[a("code",[e._v("default")])]),e._v(" 'en'")]),e._v(" "),a("hr"),e._v(" "),a("h3",{attrs:{id:"matchwholecell"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#matchwholecell"}},[e._v("#")]),e._v(" matchWholeCell")]),e._v(" "),a("p",[e._v("• "),a("strong",[e._v("matchWholeCell")]),e._v(": "),a("em",[e._v("boolean")])]),e._v(" "),a("p",[a("em",[e._v("Defined in "),a("a",{attrs:{href:"https://github.com/handsontable/hyperformula/blob/aa6e13c/src/Config.ts#L359",target:"_blank",rel:"noopener noreferrer"}},[e._v("src/Config.ts:359"),a("OutboundLink")],1)])]),e._v(" "),a("p",[e._v("Whether criterions in functions require whole cell to match the pattern, or just a subword.")]),e._v(" "),a("p",[a("strong",[a("code",[e._v("default")])]),e._v(" true")]),e._v(" "),a("hr"),e._v(" "),a("h3",{attrs:{id:"useregularexpressions"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#useregularexpressions"}},[e._v("#")]),e._v(" useRegularExpressions")]),e._v(" "),a("p",[e._v("• "),a("strong",[e._v("useRegularExpressions")]),e._v(": "),a("em",[e._v("boolean")])]),e._v(" "),a("p",[a("em",[e._v("Defined in "),a("a",{attrs:{href:"https://github.com/handsontable/hyperformula/blob/aa6e13c/src/Config.ts#L345",target:"_blank",rel:"noopener noreferrer"}},[e._v("src/Config.ts:345"),a("OutboundLink")],1)])]),e._v(" "),a("p",[e._v("If set true, then criterions in functions (SUMIF, COUNTIF, ...) can use regular expressions.")]),e._v(" "),a("p",[a("strong",[a("code",[e._v("default")])]),e._v(" false")]),e._v(" "),a("hr"),e._v(" "),a("h3",{attrs:{id:"usewildcards"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#usewildcards"}},[e._v("#")]),e._v(" useWildcards")]),e._v(" "),a("p",[e._v("• "),a("strong",[e._v("useWildcards")]),e._v(": "),a("em",[e._v("boolean")])]),e._v(" "),a("p",[a("em",[e._v("Defined in "),a("a",{attrs:{href:"https://github.com/handsontable/hyperformula/blob/aa6e13c/src/Config.ts#L352",target:"_blank",rel:"noopener noreferrer"}},[e._v("src/Config.ts:352"),a("OutboundLink")],1)])]),e._v(" "),a("p",[e._v("If set true, then criterions in functions (SUMIF, COUNTIF, ...) can use wildcards '*' and '?'.")]),e._v(" "),a("p",[a("strong",[a("code",[e._v("default")])]),e._v(" true")])])}),[],!1,null,null,null);t.default=n.exports}}]);