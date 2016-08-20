chrome.extension.sendMessage({}, function(response) {
    var readyStateCheckInterval = setInterval(function() {
        if (document.readyState === "complete") {
            clearInterval(readyStateCheckInterval);

            main();
        }
    }, 10);

    function main() {
        // Replace page title
        document.title = generateReplacment(document.title);

        // Create a tree walker to traverse all text nodes
        var walker = document.createTreeWalker(
            document.body,
            NodeFilter.SHOW_TEXT,
            null,
            false
        );

        // Replace all text nodes
        var textNode;
        while(textNode = walker.nextNode()) {
            textNode.nodeValue = generateReplacment(textNode.nodeValue);
        }
    }

    function generateReplacment(text) {
        var regex = /Donald( (John|J|J.))? Trump/gi;

        var adjectives1 = [
            "Large",
            "Tiny",
            "Wilting",
            "Bulbous"
        ];

        var adjectives2 = [
            "Orange",
            "Greasy",
            "Decayed"
        ];

        var nouns = [
            "Corn Cob",
            "Hand Gnome",
            "Butternet Squash"
        ];

        return text.replace(regex, getName()).replace("Trump", "Drumpf");

        function getName() {
            var name = getRandomElement(adjectives1)
            if(Math.random() > 0.5) name  += " " + getRandomElement(adjectives2)
            return name + " " + getRandomElement(nouns);
        }

        function getRandomElement(array) {
            return array[Math.floor(Math.random()*array.length)];
        }
    }

});

