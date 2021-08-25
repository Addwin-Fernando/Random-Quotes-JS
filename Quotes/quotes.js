var arrayofquotes =[
    {
        "Quote":"Start writing, no matter what. The water does not flow until the faucet is turned on",
        "author":"- Louis L’Amour"
    },
    {
        "Quote":"Get it down. Take chances. It may be bad, but it's the only way you can do anything really good",
        "author":"- William Faulkner"
    },
    {
        "Quote":"The first draft is just you telling yourself the story",
        "author":"- Terry Pratchett"
    },
    {
        "Quote":"You don’t start out writing good stuff. You start out writing crap and thinking it’s good stuff, and then gradually you get better at it",
        "author":"- Octavia E. Butler"
    },
    {
        "Quote":"Start before you’re ready",
        "author":"- Steven Pressfield"
    },
    {
        "Quote":"You can always edit a bad page. You can’t edit a blank page",
        "author":"- Jodi Picoult"
    },
    {
        "Quote":"You can’t wait for inspiration. You have to go after it with a club",
        "author":"- Jack London"
    },
    {
        "Quote":"I have never started a poem yet whose end I knew. Writing a poem is discovering.",
        "author":"- Robert Frost"
    },
    {
        "Quote":"If there's a book that you want to read, but it hasn't been written yet, then you must write it.",
        "author":"- Toni Morrison"
    },
    {
        "Quote":"I'm writing a first draft and reminding myself that I'm simply shoveling sand into a box so that later I can build castles",
        "author":"- Shannon Hale"
    }
]
function randomSelector(arrayLength){
    return Math.floor(Math.random()* arrayLength);
}
function generateQuote(){
    var randomNumber = randomSelector(arrayofquotes.length);
    document.getElementById("quote").innerHTML = ""+arrayofquotes[randomNumber].Quote;
    document.getElementById("author").innerHTML = ""+arrayofquotes[randomNumber].author;
}