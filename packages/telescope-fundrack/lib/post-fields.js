var companyNameProperty = {
    propertyName: 'name',
    propertySchema: {
        label: "Company Name",
        type: String,
        optional: false,
        editable: true,
        autoform: {
            editable: true
        }
    }
};
addToPostSchema.push(companyNameProperty);

var companyUrlProperty = {
    propertyName: 'url',
    propertySchema: {
        label: "Company Url",
        type: String,
        optional: false,
        editable: true,
        autoform: {
            editable: true,
            type: "bootstrap-url"
        }
    }
};
addToPostSchema.push(companyUrlProperty);

var descriptionProperty = {
    propertyName: 'body',
    propertySchema: {
        label: "Description",
        type: String,
        optional: true,
        editable: true,
        autoform:{
            editable: true,
            rows: 3
        }
    }
};
addToPostSchema.push(descriptionProperty);

var fundingDateProperty = {
    propertyName: 'funded_date',
    propertySchema: {
        label: "Funded Date",
        type: Date,
        optional: false,
        editable: true,
        autoform: {
            editable: true,
            type: "bootstrap-datetimepicker"
        }
    }
};
addToPostSchema.push(fundingDateProperty);

var fundingRoundProperty = {
    propertyName: 'funding_round',
    propertySchema: {
        label:'Round of funding',
        type: String,
        optional: false,
        editable: true,
        autoform: {
            editable: true,
            options: function () {
                return [{
                    label:"Seed Round",
                    value: "Seed"
                },{
                    label:"Angel Round",
                    value: "Angel"
                },{
                    label:"Pre Series A",
                    value: "Pre-Series-A"
                },{
                    label:"Series A",
                    value: "Series-A"
                },{
                    label:"Series B",
                    value: "Series-B"
                },{
                    label:"Series C",
                    value: "Series-C"
                },{
                    label:"Series D",
                    value: "Series-D"
                },{
                    label:"Series E",
                    value: "Series-E"
                },{
                    label:"Private Equity",
                    value: "Private-Equity"
                },{
                    label:"None",
                    value: "none"
                }];
            }
        }
    }
};
addToPostSchema.push(fundingRoundProperty);


var countryProperty = {
    propertyName: 'country',
    propertySchema: {
        label: "Country",
        type: String,
        optional: false,
        editable: true,
        autoform: {
            editable: true
        }
    }
};

addToPostSchema.push(countryProperty);


var investingFirmProperty = {
    propertyName: 'investor',
    propertySchema: {
        type: String,
        label: 'Investing Firm',
        optional: false,
        editable: true,
        autoform: {
            editable: true
        }
    }
};

addToPostSchema.push(investingFirmProperty);

var sourceProperty = {
    propertyName: 'source_url',
    propertySchema: {
        type: String,
        label: 'Source Url',
        optional: false,
        editable: true,
        autoform: {
            editable: true,
            type: "bootstrap-url"
        }
    }
};
addToPostSchema.push(sourceProperty);

var amountProperty = {
    propertyName: 'amount',
    propertySchema: {
        label:"Amount Raised",
        type: String,
        optional: false,
        editable: true,
        autoform: {
            editable: true
        }
    }
};
addToPostSchema.push(amountProperty);
