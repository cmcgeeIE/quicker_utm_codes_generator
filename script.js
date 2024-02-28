const sources = {
    "kpperformance": "kp",
    "pasternack": "pasternack",
    "fairviewmicrowave": "fairview",
    "l-com": "lcom",
    "navepoint": "navepoint",
    "transtector": "transtector",
    "polyphaser": "polyphaser",
    "radiowaves": "radiowaves",
    "showmecables": "smc",
    "integraoptics": "integra",
    "inc-installs": "inc",
    "aiconics": "aiconics",
    "milestek": "milestek"
};

const rulesets = {
    "pasternack": ["Category"],
    "fairviewmicrowave": ["Category"],
    "l-com": ["Level0", "Category"],
    "navepoint": ["filter:key"],
    "transtector": ["Category"],
    "polyphaser": ["Category"],
    "kpperformance": ["Category", "keywords"],
    "radiowaves": ["type"]
};

document.querySelector('#urlForm').addEventListener('submit', function(e) {
    e.preventDefault();

    let originalURL = new URL(document.querySelector('#givenUrl').value);
    const date = document.querySelector('#givenDate').value;
    const formattedDate = date.slice(5) + date.slice(0, 4);

    let domain = originalURL.hostname.split('.').reverse().find(part => sources.hasOwnProperty(part));
    let source = sources[domain];

    let campaign = '';
    if (originalURL.search) {
        let ruleset = rulesets[domain];
        let params = new URLSearchParams(originalURL.search);
        let paramValues = ruleset.map(key => params.get(key)).filter(Boolean);
        campaign = paramValues.length > 0 ? paramValues.join('_') : originalURL.pathname.slice(1).replace(/[-/+?=&#.]/g, '_');
    } else {
        campaign = originalURL.pathname.slice(1).replace(/[-/+?=&#.]/g, '_').replace(/__/g, '_').replace(/_$/g, '');
    }

    campaign = campaign.toLowerCase() + '_' + formattedDate;

    let medium = 'socialpost';
    let newURL = `${originalURL.origin}${originalURL.pathname}?utm_source=${source}&utm_medium=${medium}&utm_campaign=${campaign}`;

    document.querySelector('#generatedUrl').value = newURL;
});

document.querySelector('#copyButton').addEventListener('click', function() {
    document.querySelector('#generatedUrl').select();
    document.execCommand('copy');
});


