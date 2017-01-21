// Wait for document ready before executing main function
var readyStateCheckInterval = setInterval(function() {
    if (document.readyState === "complete") {
        clearInterval(readyStateCheckInterval);
        main();
    }
}, 10);

function main() {
    // Replace page title
    document.title = generateReplacment(document.title);

    // Replace all initial text on page
    replaceNodeText(document.body);

    // Create a mutation observer to monitor the DOM for changes
    var observer = new MutationObserver(function(mutations) {
        mutations.forEach(function(mutation) {
            Array.prototype.slice.call(mutation.addedNodes).forEach(replaceNodeText);
        });
    });

    // Configure and start the observer
    observer.observe(document.body, {
        childList: true,
        subtree: true,
        attributes: false,
        characterData: false
    });
}

function replaceNodeText(node) {
    // Create a tree walker to traverse all text nodes
    var walker = document.createTreeWalker(
        node,
        NodeFilter.SHOW_TEXT,
        {
            acceptNode: function(node) {
                // Reject contentEditable nodes
                return (node.parentElement && node.parentElement.isContentEditable) ?
                    NodeFilter.FILTER_SKIP :
                    NodeFilter.FILTER_ACCEPT;
            }
        },
        false
    );

    // Replace all text nodes
    var textNode;
    while(textNode = walker.nextNode()) {
        textNode.nodeValue = generateReplacment(textNode.nodeValue);
    }
}

function generateReplacment(text) {
    const regex = /Donald( (John|J|J.))? Trump/gi;

    const adjectives = [
        "Orange",
        "Bulbous",
        "Narcissistic",
        "Obnoxious",
        "Delusional",
        "Fetal",
        "Putrid",
        "Greasy",
        "Decaying",
        "Wilting",
        "Balding",
        "Droopy",
        "Petulent",
        "Toupeed",
        "Bleached",
        "Pumpkin-Spiced",
        "Mouth-Eyed",
        "Dangerously Cheesy",
        "Shrivelled",
        "Melting",
        "Parasitic",
        "Sexually Frustrated",
        "Racist",
        "Sniffling",
        "Gaseous",
        "Flabby",
        "Gelatenous",
        "Machiavellian"
    ];

    const prefixAdjectives = [
        "Large",
        "Tiny"
    ].concat(adjectives);

    const suffixAdjectives = [
    ].concat(adjectives);

    const nouns = [
        "Corn Cob",
        "Hand Gnome",
        "Butternet Squash",
        "Oompa Loompa",
        "Man-Baby",
        "Canadian Goose",
        "Clown",
        "Sweet Potato",
        "Orangutan",
        "Dried Apricot",
        "Mustard Tiger",
        "Fish Frog",
        "Corn Dog",
        "Marshmallow",
        "Traffic Cone",
        "Cheese Puff",
        "Jack-O-Lantern",
        "Scarecrow",
        "Neanderthal",
        "Haystack",
        "Taco Bowl",
        "Plantar Wart",
        "Mr. Potato Head"
    ];

    // TODO: perform with a single replace command
    return text.replace(regex, getName()).replace("Trump", "Drumpf");

    function getName() {
        var prefix = getRandomElement(prefixAdjectives);
        var suffix;
        do suffix = getRandomElement(adjectives); while(suffix === prefix);
        return prefix + " " + suffix + " " + getRandomElement(nouns);
    }

    function getRandomElement(array) {
        return array[Math.floor(Math.random()*array.length)];
    }
}

