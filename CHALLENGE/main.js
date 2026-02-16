async function getNewest () {
  try {
  const response = await fetch("https://hacker-news.firebaseio.com/v0/newstories.json")
  const data = await response.json()
  return data
} 
catch (error) {
  console.error("Error fetching newest stories:", error)
  throw error
}
}

async function getStorybyId (id) {
  try {
    const response = await fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json`)
    const data = await response.json()
    return data
  } 
  catch (error) {
    console.error(`Error fetching story with ID ${id}:`, error)
    throw error
  }
}