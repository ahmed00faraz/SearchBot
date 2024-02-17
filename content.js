// content.js
function sleep(seconds) {
    setTimeout(() => {
        // No code here; just the delay
    }, seconds*1000);
}

function get_search_terms(){
    function getAllTextFromSpecificClassesWithLimit(classNames, limit = 100) {
        const filteredTextSet = new Set();
        let wordCount = 0;
      
        // Convert classNames to an array for easier iteration
        const classArray = classNames.split(/\s+/);
      
        // Loop through elements with any matching class
        const matchingElements = document.querySelectorAll('*');
        for (const element of matchingElements) {
          // Check if element has any of the desired classes
          if (classArray.some(className => element.classList.contains(className))) {
            const trimmedText = element.textContent.trim();
      
            // Split text into words and filter based on length (4-15 characters)
            const filteredWords = trimmedText.split(/\s+/).filter(word => word.length >= 4 && word.length <= 15);
      
            // Add filtered words to the set but limit to 100
            for (const word of filteredWords) {
              if (wordCount >= limit) {
                break; // Early termination if word count reaches limit
              }
              filteredTextSet.add(word);
              wordCount++;
            }
          }
        }
      
        // Convert filteredTextSet to array at the end efficiently
        const filteredTextList = Array.from(filteredTextSet);
      
        return filteredTextList;
      }
      
      
      sleep(2);
      // Example usage:
      const classNames = "b_viewport  scrollbar b_algo tob_rail_container"; // Replace with your actual class names
      const filteredTextList = getAllTextFromSpecificClassesWithLimit(classNames, 100); // Adjust limit if needed
      
      return filteredTextList; // Output: Array containing up to 50 unique words within length range      
}


function shuffleArray(array) {
    const shuffledArray = [...array]; // Create a copy of the original array

    // Fisher-Yates (Knuth) Shuffle
    for (let i = shuffledArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]]; // Swap elements
    }

    return shuffledArray;
}

function type_term(term) {
    document.getElementById('sb_form_q').value = term; // Change the text content
}

function click_search() {
    // Select the button element with ID 'sb_form_go'
    document.getElementById('sb_form_go').click();
}

function main() {
    window.location.href = 'https://www.bing.com/search?q=news';
    let words = get_search_terms();
    words = shuffleArray(words);
    const first30Words = words.slice(0, 30+Math.floor(Math.random() * 10)); // Extract the first 30 words
    for (const word of first30Words) {
        console.log(word);
        sleep(1);
        type_term(word); // Call your function type_term
        sleep(Math.floor(Math.random() * 10));
        click_search(); // Call your function click_search
        sleep(Math.floor(Math.random() * 10)+5);
    }        
}

main(); // Start bot


// const filePath = "C:\\Users\\ahmed\\Desktop\\Desktop files\\search.txt";

    // fetch(filePath)
    //     .then((response) => response.text())
    //     .then((text) => {
    //         let words = text.split(/\s+/); // Split by whitespace
    //         words = shuffleArray(words);
    //         const first30Words = words.slice(0, 30+Math.floor(Math.random() * 10)); // Extract the first 30 words
    //         for (const word of first30Words) {
    //             console.log(word);
    //             sleep(1);
    //             type_term(word); // Call your function type_term
    //             sleep(Math.floor(Math.random() * 10));
    //             click_search(); // Call your function click_search
    //             sleep(Math.floor(Math.random() * 10));
    //         }
    //     })
    //     .catch((error) => {
    //         console.error("Error reading local file:", error);
    //     });