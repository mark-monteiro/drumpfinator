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
        const regex = /Donald( (John|J|J.))? Trump/gi;

        const adjectives1 = [
            "Large",
            "Tiny",
            "Wilting",
            "Bulbous"
        ];

        const adjectives2 = [
            "Orange",
            "Greasy",
            "Decayed"
        ];

        const nouns = [
            "Corn Cob",
            "Hand Gnome",
            "Butternet Squash"
        ];

        // TODO: perform with a single replace command
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

