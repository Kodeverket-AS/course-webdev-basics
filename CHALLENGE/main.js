let news=[]

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
  text.textContent = ""
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

async function getNews() {
    const newestStories = await getNewest();
    const latest10 = newestStories.slice(0, 10);

    for (let i = 0; i < latest10.length; i++) {
      newNews = await getStorybyId(latest10[i]);
      news.push(newNews);
    }
    
    return news;
  }
                                        


async function updateNews() {
    const newsContainer = document.getElementById("news");
    newsContainer.innerHTML = "";
    const newsItems = await getNews();
    for (let i = 0; i < newsItems.length; i++) {
        const item = newsItems[i];
        const articleElement = createArticleElement(item);
        newsContainer.appendChild(articleElement);
    }
}
function displayNews(articlesArray) {
    const newsContainer = document.getElementById("news");
    newsContainer.innerHTML = "";
    for (let i = 0; i < articlesArray.length; i++) {
        const articleElement = createArticleElement(articlesArray[i]);
        newsContainer.appendChild(articleElement);
    }
}

async function initializeNews() {
    await getNews();
    displayNews(news);
}

function handleSearch(e) {
    const query = e.target.value.toLowerCase();
    const filtered = [];
    for (let i = 0; i < news.length; i++) {
      if (news[i].title.toLowerCase().includes(query)) {
        filtered.push(news[i]);
      }
    }
    displayNews(filtered);
}

initializeNews();

document.getElementById("search-form").addEventListener("submit", function(e)  {
    e.preventDefault();
});

document.getElementById("search-input").addEventListener("input", handleSearch);

const topButton = document.getElementById("top-button");
topButton.style.display = "none";

window.addEventListener("scroll", function() {
    if (window.scrollY > 100) {
        topButton.style.display = "block";
    } else {
        topButton.style.display = "none";
    }
});

topButton.addEventListener("click", function() {
    window.scrollTo({ top: 0, behavior: "smooth" });
});