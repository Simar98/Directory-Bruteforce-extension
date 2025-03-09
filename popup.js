document.addEventListener("DOMContentLoaded", async () => {
  const wordlistDropdown = document.getElementById("wordlistFile");

  // Fetch wordlist files and populate dropdown
  const wordlists = await fetchWordlists();
  wordlists.forEach(file => {
    const option = document.createElement("option");
    option.value = file;
    option.textContent = file;
    wordlistDropdown.appendChild(option);
  });

  // Load selected wordlist into textarea
  wordlistDropdown.addEventListener("change", async () => {
    const selectedFile = wordlistDropdown.value;
    if (selectedFile) {
      const wordlist = await loadWordlist(selectedFile);
      document.getElementById("wordlist").value = wordlist.join("\n");
    }
  });

  // Start brute-forcing
  document.getElementById("start").addEventListener("click", async () => {
    const baseUrl = document.getElementById("url").value;
    const wordlist = document.getElementById("wordlist").value.split("\n");
    const resultsList = document.getElementById("results");

    resultsList.innerHTML = ""; // Clear previous results

    for (const word of wordlist) {
      if (!word.trim()) continue; // Skip empty lines
      const url = `${baseUrl}/${word.trim()}`;

      try {
        const response = await fetch(url, {
          method: "GET",
          redirect: "follow",
        });

        let status = response.status;
        let resultItem = document.createElement("li");

        // Check if the response was redirected
        if (response.redirected) {
          resultItem.textContent = `${url} - ${status} (Redirected to: ${response.url})`;
        } else {
          resultItem.textContent = `${url} - ${status}`;
        }

        // Color coding based on status codes
        if (status >= 200 && status < 300) {
          resultItem.style.color = "green"; // Success (200-299)
        } else if (status >= 300 && status < 400) {
          resultItem.style.color = "blue"; // Redirection (300-399)
        } else if (status >= 400 && status < 500) {
          if (status === 403) {
            resultItem.style.color = "orange"; // Forbidden (403)
          } else {
            resultItem.style.color = "red"; // Other Client Errors (400-499)
          }
        } else if (status >= 500 && status < 600) {
          resultItem.style.color = "black"; // Server Errors (500-599)
        }

        resultsList.appendChild(resultItem);
      } catch (error) {
        const resultItem = document.createElement("li");
        resultItem.textContent = `${url} - Error: ${error.message}`;
        resultItem.style.color = "gray"; // Error (e.g., network issues)
        resultsList.appendChild(resultItem);
      }
    }
  });
});

// Fetch wordlist files from the wordlists folder
async function fetchWordlists() {
  // Hardcoded list of wordlist files in the "wordlists" folder
  return ["common.txt", "directories.txt", "custom.txt"];
}

// Load selected wordlist file
async function loadWordlist(filename) {
  const response = await fetch(`/wordlists/${filename}`);
  const text = await response.text();
  return text.split("\n").filter(line => line.trim() !== "");
}