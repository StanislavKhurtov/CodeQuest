function disemvowel(str) {
    const vowels = "aeiouAEIOU";
    return Array.from(str).filter(char => !vowels.includes(char)).join("");
}