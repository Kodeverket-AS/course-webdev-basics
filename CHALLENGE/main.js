async function getNewest () {
  try {
  const response = await fetch("https://hacker-news.firebaseio.com/v0/newstories.json")
  const newestStories = await response.json()
  return newestStories
} 
catch (error) {
  console.error("Error fetching newest stories:", error)
  throw error
}
}

async function getStorybyId (id) {
  try {
    const response = await fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json`)
    const story = await response.json()
    return story
  } 
  catch (error) {
    console.error(`Error fetching story with ID ${id}:`, error)
    throw error
  }
}

function createArticleElement(getStorybyId) {
  const article = document.createElement("article")
  const title = document.createElement("h3")
  const text = document.createElement("p")
  const span = document.createElement("span")
  const postedAt=document.createElement("p")
  const link = document.createElement("a")

  title.textContent = getStorybyId.title + " (" + getStorybyId.score + ")"
  text.textContent = "text"
  postedAt.textContent ="posted by " + getStorybyId.by + " at " + getStorybyId.time
  link.textContent = "Read more"
  link.href = getStorybyId.url
  link.target = "_blank"

  article.appendChild(title)
  article.appendChild(text)
  article.appendChild(span)
  span.appendChild(postedAt)
  span.appendChild(link)
  
  return article
}